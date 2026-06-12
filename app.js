const BANK = window.QUESTION_BANK || [];
const META = window.QUIZ_META || {};
const WRONG_KEY = 'review_quiz_wrong_ids_v2';
const MASTER_KEY = 'review_quiz_mastery_v2';
const SESSION_KEY = 'review_quiz_session_v3';
const VIEW_KEY = 'review_quiz_last_view_v3';

const state = {
  courseKey: null,
  sourceGroup: null,
  mode: 'normal',
  allCourses: false,
  pool: [],
  index: 0,
  current: null,
  answered: false,
  selectedAnswer: null
};

const $ = (id) => document.getElementById(id);
const views = ['homeView','sourceView','quizView'];
const courseNames = { mybatis: 'MyBatis', springmvc: 'Spring MVC / Spring', nosql: 'NoSQL / MongoDB / Redis', os: '操作系统 / OS' };
const courseIcons = { mybatis: '🧩', springmvc: '🌱', nosql: '🍃', os: '💻' };

function showView(id, persist=true){
  views.forEach(v => $(v).classList.toggle('active', v === id));
  if(persist) localStorage.setItem(VIEW_KEY, id);
  window.scrollTo({top:0, behavior:'smooth'});
}
function getWrongIds(){
  try { return new Set(JSON.parse(localStorage.getItem(WRONG_KEY) || '[]')); } catch { return new Set(); }
}
function setWrongIds(set){ localStorage.setItem(WRONG_KEY, JSON.stringify([...set])); renderMastery(); }
function getMastery(){
  try { return JSON.parse(localStorage.getItem(MASTER_KEY) || '{}'); } catch { return {}; }
}
function setMastery(obj){ localStorage.setItem(MASTER_KEY, JSON.stringify(obj)); renderMastery(); }
function markAnswer(qid, ok){
  const m = getMastery();
  m[qid] = m[qid] || {right:0, wrong:0};
  ok ? m[qid].right++ : m[qid].wrong++;
  setMastery(m);
}
function courseCount(courseKey, group){
  return BANK.filter(q => q.courseKey === courseKey && (!group || q.sourceGroup === group)).length;
}
function final_course_count(courseKey, group){
  return courseCount(courseKey, group === 'mixed' ? null : group);
}
function wrongCount(courseKey){
  const wrong = getWrongIds();
  return BANK.filter(q => wrong.has(q.id) && (!courseKey || q.courseKey === courseKey)).length;
}
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
function renderMastery(){
  const m = getMastery();
  const answered = Object.values(m);
  const right = answered.reduce((s,x)=>s+(x.right||0),0);
  const wrong = answered.reduce((s,x)=>s+(x.wrong||0),0);
  const total = right + wrong;
  const pct = total ? Math.round(right / total * 100) : 0;
  $('masterRing')?.style.setProperty('--p', pct);
  if($('masterPercent')) $('masterPercent').textContent = pct + '%';
}
function renderHome(){
  const total = BANK.length;
  const mcpt = BANK.filter(q=>q.sourceGroup==='mcpt').length;
  const pred = BANK.filter(q=>q.sourceGroup==='prediction').length;
  $('bankSummary').textContent = `共 ${total} 题｜MCPT/月考/考研 ${mcpt}｜预测题 ${pred}｜当前错题 ${wrongCount()} 题`;
  const grid = $('courseGrid');
  grid.innerHTML = '';
  ['mybatis','springmvc','nosql','os'].forEach(key => {
    const tpl = $('courseCardTpl').content.cloneNode(true);
    const btn = tpl.querySelector('button');
    tpl.querySelector('.course-icon').textContent = courseIcons[key];
    tpl.querySelector('strong').textContent = courseNames[key];
    tpl.querySelector('small').textContent = key === 'mybatis' ? '配置、Mapper、动态 SQL、MBG、分页、事务与缓存' : key === 'springmvc' ? 'IoC/DI、AOP、MVC、JSON/AJAX、异常、REST' : key === 'nosql' ? 'MongoDB、索引、聚合、副本集、Java CRUD、Redis' : '汤小丹前九章、进程/内存/文件/I-O/磁盘考研题';
    tpl.querySelector('.mini-stats').innerHTML = `<span>${key === 'os' ? '考研' : 'MCPT'} ${final_course_count(key,'mcpt')}</span><span>预测 ${final_course_count(key,'prediction')}</span><span>错题 ${wrongCount(key)}</span>`;
    btn.addEventListener('click', () => chooseCourse(key));
    grid.appendChild(tpl);
  });
}
function chooseCourse(key){
  state.courseKey = key;
  state.allCourses = false;
  $('selectedCourseTag').textContent = courseNames[key];
  renderSources();
  saveSession();
  showView('sourceView');
}
function renderSources(){
  const key = state.courseKey;
  const isOS = key === 'os';
  const sources = [
    {group:'mcpt', title:isOS ? '考研真题改编' : 'MCPT / 月考题', kicker:isOS ? '408/名校方向' : '原题优先', desc:isOS ? `按汤小丹前九章筛选的考研真题考点改编，共 ${final_course_count(key,'mcpt')} 题。` : `来自你发的月考/考试题库，共 ${final_course_count(key,'mcpt')} 题。`},
    {group:'prediction', title:isOS ? '强化预测题' : '预测题', kicker:isOS ? '教材覆盖' : '复习资料覆盖', desc:isOS ? `根据前九章知识点生成，共 ${final_course_count(key,'prediction')} 题。` : `根据复习资料和出题风格生成，共 ${final_course_count(key,'prediction')} 题。`},
    {group:'mixed', title:'混合刷题', kicker:'考前乱序', desc:isOS ? `真题改编 + 强化预测混合，共 ${final_course_count(key)} 题。` : `MCPT + 预测题混合，共 ${final_course_count(key)} 题。`},
    {group:'wrong', title:'只刷错题', kicker:'精准回炉', desc:`当前科目错题 ${wrongCount(key)} 题，会从本地错题本读取。`}
  ];
  const grid = $('sourceGrid'); grid.innerHTML='';
  sources.forEach(s => {
    const tpl = $('sourceCardTpl').content.cloneNode(true);
    const btn = tpl.querySelector('button');
    tpl.querySelector('.source-kicker').textContent = s.kicker;
    tpl.querySelector('strong').textContent = s.title;
    tpl.querySelector('small').textContent = s.desc;
    btn.addEventListener('click',()=>startQuiz(s.group));
    grid.appendChild(tpl);
  });
}
function makePool(group, allCourses=false){
  const wrong = getWrongIds();
  let pool = BANK.filter(q => allCourses || q.courseKey === state.courseKey);
  if(group === 'mcpt') pool = pool.filter(q=>q.sourceGroup==='mcpt');
  if(group === 'prediction') pool = pool.filter(q=>q.sourceGroup==='prediction');
  if(group === 'wrong') pool = pool.filter(q=>wrong.has(q.id));
  return shuffle(pool);
}
function saveSession(){
  try {
    if($('quizView') && $('quizView').classList.contains('active')) localStorage.setItem(VIEW_KEY, 'quizView');
    const payload = {
      courseKey: state.courseKey,
      sourceGroup: state.sourceGroup,
      mode: state.mode,
      allCourses: !!state.allCourses,
      poolIds: state.pool.map(q => q.id),
      index: state.index,
      currentId: state.current?.id || null,
      answered: !!state.answered,
      selectedAnswer: state.selectedAnswer || null,
      updatedAt: Date.now()
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn('Failed to save quiz session', e);
  }
}
function restoreSession(){
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if(!raw) return false;
    const saved = JSON.parse(raw);
    const idMap = new Map(BANK.map(q => [q.id, q]));
    const restoredPool = (saved.poolIds || []).map(id => idMap.get(id)).filter(Boolean);
    if(!restoredPool.length) return false;
    state.courseKey = saved.courseKey || null;
    state.sourceGroup = saved.sourceGroup || 'mixed';
    state.mode = saved.mode || (state.sourceGroup === 'wrong' ? 'wrong' : 'normal');
    state.allCourses = !!saved.allCourses;
    state.pool = restoredPool;
    state.index = Math.min(Math.max(Number(saved.index) || 0, 0), restoredPool.length - 1);
    state.current = restoredPool[state.index];
    state.answered = !!saved.answered;
    state.selectedAnswer = saved.selectedAnswer || null;
    return true;
  } catch (e) {
    console.warn('Failed to restore quiz session', e);
    return false;
  }
}
function startQuiz(group, allCourses=false){
  state.sourceGroup = group;
  state.mode = group === 'wrong' ? 'wrong' : 'normal';
  state.allCourses = !!allCourses;
  state.pool = makePool(group, allCourses);
  state.index = 0;
  state.answered = false;
  state.selectedAnswer = null;
  if(!state.pool.length){
    alert(group === 'wrong' ? '目前还没有错题，先去刷几道题吧。' : '这个分类暂时没有题。');
    return;
  }
  showView('quizView');
  renderQuestion();
  saveSession();
}
function renderQuestion(){
  state.current = state.pool[state.index % state.pool.length];
  const q = state.current;
  const selectedForThisQuestion = state.answered && state.selectedAnswer ? state.selectedAnswer : null;

  $('quizCourseBadge').textContent = q.course;
  $('quizSourceBadge').textContent = state.sourceGroup === 'wrong' ? '错题本' : state.sourceGroup === 'mixed' ? '混合刷题' : q.sourceLabel;
  $('quizCountBadge').textContent = `${state.index + 1} / ${state.pool.length}`;
  $('topicBadge').textContent = q.topic || 'General';
  $('progressText').textContent = q.id;
  $('questionText').textContent = q.question;
  $('resultBox').classList.add('hidden');
  $('resultBox').innerHTML = '';
  $('removeWrongBtn').style.display = getWrongIds().has(q.id) ? 'inline-flex' : 'none';
  const box = $('optionsBox'); box.innerHTML='';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-key">${opt.key}</span><span>${escapeHtml(opt.text)}</span>`;
    btn.addEventListener('click', (e)=>answer(opt.key, e));
    box.appendChild(btn);
  });

  if(selectedForThisQuestion){
    applyAnswerUI(selectedForThisQuestion, selectedForThisQuestion === q.answer, null);
  } else {
    state.answered = false;
    state.selectedAnswer = null;
  }
}
function applyAnswerUI(key, ok, event){
  const q = state.current;
  document.querySelectorAll('.option-btn').forEach(btn => {
    const k = btn.querySelector('.option-key').textContent;
    btn.classList.add('locked');
    if(k === q.answer) btn.classList.add('correct');
    if(k === key && !ok) btn.classList.add('wrong');
  });
  const result = $('resultBox');
  result.classList.remove('hidden');
  const answerText = (q.options.find(o=>o.key===q.answer)||{}).text || '';
  result.innerHTML = `
    <div class="result-title ${ok?'good':'bad'}">${ok?'✅ 正确，稳了':'❌ 错了，回炉一下'}</div>
    <div><strong>正确答案：</strong>${q.answer}. ${escapeHtml(answerText)}</div>
    <div><strong>解析：</strong>${escapeHtml(q.explanation || '暂无解析。')}</div>
    ${q.noteQuote ? `<div class="quote"><strong>复习资料原句：</strong>${escapeHtml(q.noteQuote)}</div>` : ''}
  `;
  $('removeWrongBtn').style.display = getWrongIds().has(q.id) ? 'inline-flex' : 'none';
  if(ok && event) sparkle(event?.clientX || innerWidth/2, event?.clientY || innerHeight/2);
}
function answer(key, event){
  if(state.answered) return;
  state.answered = true;
  state.selectedAnswer = key;
  const q = state.current;
  const ok = key === q.answer;
  markAnswer(q.id, ok);
  const wrong = getWrongIds();
  if(!ok){ wrong.add(q.id); setWrongIds(wrong); }
  applyAnswerUI(key, ok, event);
  saveSession();
}
function sparkle(x,y){
  ['✨','🌟','💫','✅'].forEach((s,i)=>{
    const el=document.createElement('span'); el.className='spark'; el.textContent=s;
    el.style.left=(x+(i-1.5)*22)+'px'; el.style.top=(y+Math.random()*20)+'px';
    document.body.appendChild(el); setTimeout(()=>el.remove(),760);
  });
}
function escapeHtml(s){
  return String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

$('backHomeBtn').addEventListener('click',()=>{renderHome(); saveSession(); showView('homeView');});
$('backSourceBtn').addEventListener('click',()=>{renderSources(); saveSession(); showView('sourceView');});
$('nextBtn').addEventListener('click',()=>{state.index = (state.index + 1) % state.pool.length; state.answered = false; state.selectedAnswer = null; renderQuestion(); saveSession();});
$('randomBtn').addEventListener('click',()=>{state.index = Math.floor(Math.random()*state.pool.length); state.answered = false; state.selectedAnswer = null; renderQuestion(); saveSession();});
$('removeWrongBtn').addEventListener('click',()=>{ const w=getWrongIds(); w.delete(state.current.id); setWrongIds(w); $('removeWrongBtn').style.display='none'; if(state.mode==='wrong'){ state.pool = state.pool.filter(q=>q.id!==state.current.id); if(!state.pool.length){ alert('这个错题分类已经清空了。'); renderHome(); showView('homeView'); saveSession(); return; } state.index = state.index % state.pool.length; state.answered = false; state.selectedAnswer = null; renderQuestion(); } saveSession(); });
$('clearWrongBtn').addEventListener('click',()=>{ if(confirm('确定清空本地错题本吗？')){ setWrongIds(new Set()); renderHome(); if(state.mode==='wrong'){showView('homeView');} saveSession(); } });
$('allWrongBtn').addEventListener('click',()=>{ state.courseKey = null; startQuiz('wrong', true); });

window.addEventListener('beforeunload', saveSession);
document.addEventListener('visibilitychange', () => { if(document.hidden) saveSession(); });

renderMastery();
renderHome();

const restored = restoreSession();
const lastView = localStorage.getItem(VIEW_KEY);
if(restored && (lastView === 'quizView' || !lastView)){
  showView('quizView', false);
  renderQuestion();
  saveSession();
} else if(restored && lastView === 'sourceView' && state.courseKey){
  $('selectedCourseTag').textContent = courseNames[state.courseKey];
  renderSources();
  showView('sourceView', false);
} else {
  showView('homeView', false);
}
