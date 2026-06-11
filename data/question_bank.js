window.QUESTION_BANK = [
  {
    "id": "MB-O-001",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the correct execution order for a MyBatis operation?",
    "options": [
      {
        "key": "A",
        "text": "SQL parsing -> SQL execution -> Result mapping -> Load configuration"
      },
      {
        "key": "B",
        "text": "Load configuration -> SQL parsing -> SQL execution -> Result mapping"
      },
      {
        "key": "C",
        "text": "SQL execution -> Result mapping -> Load configuration -> SQL parsing"
      },
      {
        "key": "D",
        "text": "Result mapping -> SQL execution -> SQL parsing -> Load configuration"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 操作的标准执行流程为： 加载配置（Load configuration）：读取核心配置文件与 Mapper 映射文件，构建配置环境 SQL 解析（SQL parsing）：解析 SQL 语句，封装为MappedStatement对象 SQL 执行（SQL execution）：通过 JDBC 执行预处理后的 SQL 语句 结果映射（Result mapping）：将查询结果集映射为 Java 对象返回给调用方",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-002",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which file is used to resolve various JAR dependencies for a MyBatis application in the provided project setup?",
    "options": [
      {
        "key": "A",
        "text": "mybatis-config.xml"
      },
      {
        "key": "B",
        "text": "CityMapper.xml"
      },
      {
        "key": "C",
        "text": "build.gradle"
      },
      {
        "key": "D",
        "text": "MyBatisUtil.java"
      }
    ],
    "answer": "C",
    "explanation": "build.gradle 是 Gradle 项目的构建文件，用于声明项目依赖（包括 MyBatis、数据库驱动等 JAR 包）并自动下载管理。其他选项中，mybatis-config.xml 是 MyBatis 核心配置文件，CityMapper.xml 是 SQL 映射文件，MyBatisUtil.java 是工具类，均不负责依赖管理。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-003",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the root element for the MyBatis configuration file?",
    "options": [
      {
        "key": "A",
        "text": "<configuration>"
      },
      {
        "key": "B",
        "text": "<sqlSessionFactory>"
      },
      {
        "key": "C",
        "text": "<mappers>"
      },
      {
        "key": "D",
        "text": "<environments>"
      }
    ],
    "answer": "A",
    "explanation": "MyBatis 核心配置文件（如mybatis-config.xml）的根元素是 <configuration>，所有配置（如环境、数据源、Mapper 映射）都嵌套在该标签内。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-O-004",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In a MyBatis Mapper XML file, which element is used to map database table columns to POJO properties?",
    "options": [
      {
        "key": "A",
        "text": "<resultMap>"
      },
      {
        "key": "B",
        "text": "<select>"
      },
      {
        "key": "C",
        "text": "<insert>"
      },
      {
        "key": "D",
        "text": "<parameterMap>"
      }
    ],
    "answer": "A",
    "explanation": "<resultMap> 元素是 MyBatis 中专门用于定义数据库表列与 Java POJO 属性映射关系的标签，可解决列名与属性名不一致、复杂关联查询的映射问题。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-005",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which utility class provides helper methods to simplify loading resources from the classpath?",
    "options": [
      {
        "key": "A",
        "text": "Configuration"
      },
      {
        "key": "B",
        "text": "InputStream"
      },
      {
        "key": "C",
        "text": "Resources"
      },
      {
        "key": "D",
        "text": "PooledDataSource"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 提供的 Resources 工具类封装了从 classpath 加载配置文件的便捷方法（如getResourceAsStream()），简化了配置文件的读取流程，无需手动处理文件路径与流操作。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-006",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which class is used to build the SqlSessionFactory from an XML configuration file?",
    "options": [
      {
        "key": "A",
        "text": "SqlSession"
      },
      {
        "key": "B",
        "text": "SqlSessionFactoryBuilder"
      },
      {
        "key": "C",
        "text": "Resources"
      },
      {
        "key": "D",
        "text": "CityDAO"
      }
    ],
    "answer": "B",
    "explanation": "SqlSessionFactoryBuilder 是构建 SqlSessionFactory 的核心类，它通过读取 XML 配置文件，解析配置信息并创建 SqlSessionFactory 实例，工厂实例是线程安全的，全局只需创建一次。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-007",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "During SQL parsing, what does MyBatis use to find the corresponding MappedStatement in memory?",
    "options": [
      {
        "key": "A",
        "text": "Database URL"
      },
      {
        "key": "B",
        "text": "Statement ID"
      },
      {
        "key": "C",
        "text": "POJO class name"
      },
      {
        "key": "D",
        "text": "JDBC driver name"
      }
    ],
    "answer": "B",
    "explanation": "Statement ID 是 MyBatis 中 SQL 语句的唯一标识（格式为namespace + statementId，如com.example.mapper.UserMapper.selectUser），MyBatis 通过该 ID 在内存中定位对应的MappedStatement对象，执行对应的 SQL 语句。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-008",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In the MyBatis framework architecture, what component loads SQL configuration into MappedStatement objects in memory?",
    "options": [
      {
        "key": "A",
        "text": "Load configuration"
      },
      {
        "key": "B",
        "text": "SQL parsing"
      },
      {
        "key": "C",
        "text": "Result mapping"
      },
      {
        "key": "D",
        "text": "SQL execution"
      }
    ],
    "answer": "A",
    "explanation": "在 MyBatis 的架构中，____ 加载配置（Load configuration）____ 阶段会解析所有 Mapper XML 文件，将 SQL 语句、映射关系等配置信息封装为MappedStatement对象，并存储在内存中，供后续执行阶段调用。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-009",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Connection management and transaction management are handled by which MyBatis layer?",
    "options": [
      {
        "key": "A",
        "text": "API interface layer"
      },
      {
        "key": "B",
        "text": "Data processing layer"
      },
      {
        "key": "C",
        "text": "Basic support layer"
      },
      {
        "key": "D",
        "text": "Presentation layer"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 的 ____ 基础支持层（Basic support layer）____ 负责处理底层通用功能，包括数据源连接管理、事务控制、日志、缓存等，为上层数据处理提供基础支撑。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-O-010",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which layer of the MyBatis architecture is responsible for SQL analysis and execution result mapping?",
    "options": [
      {
        "key": "A",
        "text": "API interface layer"
      },
      {
        "key": "B",
        "text": "Data processing layer"
      },
      {
        "key": "C",
        "text": "Basic support layer"
      },
      {
        "key": "D",
        "text": "Configuration layer"
      }
    ],
    "answer": "B",
    "explanation": "____ 数据处理层（Data processing layer）____ 是 MyBatis 的核心业务层，负责 SQL 解析、参数映射、SQL 执行、结果集映射为 Java 对象等核心流程，是实现 ORM 映射的关键部分。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-011",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Core Objects",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "The MyBatis design philosophy that provides database-independent interfaces to keep the application independent of resources is called:",
    "options": [
      {
        "key": "A",
        "text": "Simplicity"
      },
      {
        "key": "B",
        "text": "Portability"
      },
      {
        "key": "C",
        "text": "Independent Interface"
      },
      {
        "key": "D",
        "text": "Fast Development"
      }
    ],
    "answer": "B",
    "explanation": "____ 可移植性（Portability）____ 是 MyBatis 的核心设计理念之一，它通过抽象数据库操作接口，屏蔽不同数据库的差异，使业务代码不依赖具体数据库资源，切换数据库时仅需修改 SQL 语句与配置，无需修改业务代码。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Core Objects"
    ]
  },
  {
    "id": "MB-O-012",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "TopLink Essentials is the reference implementation for which API?",
    "options": [
      {
        "key": "A",
        "text": "JDBC 4.0"
      },
      {
        "key": "B",
        "text": "EJB 3.0 Java Persistence API (JPA)"
      },
      {
        "key": "C",
        "text": "Java Message Service (JMS)"
      },
      {
        "key": "D",
        "text": "Java Transaction API (JTA)"
      }
    ],
    "answer": "B",
    "explanation": "TopLink Essentials 是 Oracle 提供的 ____JPA（Java Persistence API，EJB 3.0 规范）____ 的官方参考实现，是 Java EE 中标准 ORM 规范的实现之一，与 MyBatis 的半 ORM 定位不同。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-O-013",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which feature is specifically associated with Hibernate but not listed as a primary MyBatis feature?",
    "options": [
      {
        "key": "A",
        "text": "Support for stored procedures"
      },
      {
        "key": "B",
        "text": "Mapping Java classes to database tables automatically"
      },
      {
        "key": "C",
        "text": "Using XML for configuration"
      },
      {
        "key": "D",
        "text": "Integration with Spring"
      }
    ],
    "answer": "B",
    "explanation": "Hibernate 作为全 ORM 框架，支持自动将 Java 类映射到数据库表，可根据实体类定义自动生成 DDL 语句创建表结构；而 MyBatis 作为半 ORM 框架，需要开发者手动编写 SQL 并定义映射关系，不支持自动表结构生成。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-014",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the main advantage of \"Semi-ORM Mapping\" in MyBatis compared to full ORMs?",
    "options": [
      {
        "key": "A",
        "text": "It requires less code to be written."
      },
      {
        "key": "B",
        "text": "It provides greater control over SQL and improves performance by fetching only needed fields."
      },
      {
        "key": "C",
        "text": "It eliminates the need for POJOs."
      },
      {
        "key": "D",
        "text": "It automatically manages database connections without configuration."
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 的半 ORM 映射允许开发者完全控制 SQL 语句的编写与优化，可根据业务需求定制查询字段、关联关系，避免全 ORM 框架中生成冗余 SQL、查询不必要字段的问题，提升数据库操作性能。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-015",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ORM/JDBC Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which framework is described as a \"Pure ORM\" where developers only define mapping relationships and do not write SQL?",
    "options": [
      {
        "key": "A",
        "text": "MyBatis"
      },
      {
        "key": "B",
        "text": "Hibernate"
      },
      {
        "key": "C",
        "text": "iBatis"
      },
      {
        "key": "D",
        "text": "JDBC"
      }
    ],
    "answer": "B",
    "explanation": "Hibernate 是典型的纯 ORM（对象关系映射）框架，开发者仅需定义实体类与数据库表的映射关系，无需编写原生 SQL，框架会自动生成 SQL 语句完成数据库操作；而 MyBatis/iBatis 需要开发者手动编写 SQL，属于半 ORM 框架。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "ORM/JDBC Basics"
    ]
  },
  {
    "id": "MB-O-016",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MyBatis provides out-of-the-box integration with which popular dependency injection frameworks?",
    "options": [
      {
        "key": "A",
        "text": "Hibernate and TopLink"
      },
      {
        "key": "B",
        "text": "Spring and Guice"
      },
      {
        "key": "C",
        "text": "Maven and Gradle"
      },
      {
        "key": "D",
        "text": "Eclipse and IntelliJ"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 提供了开箱即用的集成支持，可与主流依赖注入框架 Spring（最常用，如 MyBatis-Spring 整合包）和 Guice 无缝集成，实现 SqlSessionFactory、Mapper 接口的自动管理与注入。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-017",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is meant by the design philosophy that MyBatis \"embraces SQL\"?",
    "options": [
      {
        "key": "A",
        "text": "It hides SQL from developers to simplify coding."
      },
      {
        "key": "B",
        "text": "It generates SQL automatically for every operation."
      },
      {
        "key": "C",
        "text": "It gives developers full control over query creation and optimization."
      },
      {
        "key": "D",
        "text": "It prohibits the use of annotations."
      }
    ],
    "answer": "C",
    "explanation": "MyBatis \"拥抱 SQL\" 的设计理念，核心是让开发者完全掌控 SQL 语句的编写、优化与执行，不强制使用框架生成的 SQL，支持原生 SQL、动态 SQL、存储过程等多种场景，兼顾灵活性与性能优化空间。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-018",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "How does MyBatis achieve compatibility with legacy databases?",
    "options": [
      {
        "key": "A",
        "text": "By requiring a modification of the existing database structure"
      },
      {
        "key": "B",
        "text": "By mapping query results to Java domain objects without changing the database"
      },
      {
        "key": "C",
        "text": "By converting the legacy database into a NoSQL format"
      },
      {
        "key": "D",
        "text": "By only supporting stored procedures"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 对遗留数据库的兼容性体现在：无需修改现有数据库结构，即可通过<resultMap>等映射配置，将遗留数据库的查询结果直接映射为 Java 领域对象，适配复杂的旧表结构与字段命名。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-019",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Why is MyBatis considered to have a \"low learning curve\"?",
    "options": [
      {
        "key": "A",
        "text": "It does not require knowledge of Java."
      },
      {
        "key": "B",
        "text": "It relies on a developer's existing knowledge of Java and SQL."
      },
      {
        "key": "C",
        "text": "It generates all business logic automatically."
      },
      {
        "key": "D",
        "text": "It uses a proprietary query language instead of SQL."
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 的学习曲线低，核心原因是它不引入新的查询语言，完全基于开发者已掌握的 Java 与 SQL 知识，仅需学习少量 MyBatis 配置与映射规则，即可快速上手开发。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-020",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ORM/JDBC Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which of the following is a key benefit of using MyBatis over raw JDBC?",
    "options": [
      {
        "key": "A",
        "text": "It eliminates the need for a database driver."
      },
      {
        "key": "B",
        "text": "It automatically designs the database schema."
      },
      {
        "key": "C",
        "text": "It reduces boilerplate code by abstracting repetitive JDBC tasks."
      },
      {
        "key": "D",
        "text": "It prevents the use of SQL."
      }
    ],
    "answer": "C",
    "explanation": "与原生 JDBC 相比，MyBatis 最大的优势是减少了大量样板代码，它封装了 JDBC 中重复的连接管理、参数设置、结果集处理、资源关闭等操作，开发者只需关注 SQL 与业务逻辑。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "ORM/JDBC Basics"
    ]
  },
  {
    "id": "MB-O-021",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MyBatis is commonly used for which of the following scenarios?",
    "options": [
      {
        "key": "A",
        "text": "Automatic primary key generation only"
      },
      {
        "key": "B",
        "text": "Analyze fetch queries and complicated search queries with dynamic criteria"
      },
      {
        "key": "C",
        "text": "Transparent persistence without SQL knowledge"
      },
      {
        "key": "D",
        "text": "Replacing all Java code with XML"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 最适合处理复杂查询与动态条件查询场景，如多表关联查询、分页查询、带动态筛选条件的搜索查询，通过动态 SQL 标签可灵活拼接查询条件，同时保留 SQL 的可读性与可优化性。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-022",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Unlike traditional ORM frameworks, what does MyBatis map Java methods to?",
    "options": [
      {
        "key": "A",
        "text": "Database tables"
      },
      {
        "key": "B",
        "text": "Stored procedures only"
      },
      {
        "key": "C",
        "text": "SQL statements"
      },
      {
        "key": "D",
        "text": "Bytecode instructions"
      }
    ],
    "answer": "C",
    "explanation": "与传统 ORM 框架将 Java 类映射到数据库表不同，MyBatis 的核心映射关系是Java 方法与 SQL 语句：开发者定义 Mapper 接口方法，在 XML 文件中编写对应的 SQL 语句，MyBatis 会将接口方法调用映射为对应的 SQL 执行。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-023",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In which year was the project renamed from iBatis to MyBatis and migrated to Google Code?",
    "options": [
      {
        "key": "A",
        "text": "2013"
      },
      {
        "key": "B",
        "text": "2005"
      },
      {
        "key": "C",
        "text": "2010"
      },
      {
        "key": "D",
        "text": "2015"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 的前身是 iBatis，该项目于 2010 年 从 Apache 基金会迁出，正式更名为 MyBatis，并迁移至 Google Code 平台维护，后续又迁移至 GitHub。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-024",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ORM/JDBC Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is MyBatis primarily categorized as in the context of persistence frameworks?",
    "options": [
      {
        "key": "A",
        "text": "A full Object-Relational Mapping (ORM) framework"
      },
      {
        "key": "B",
        "text": "A semi-ORM mapping framework"
      },
      {
        "key": "C",
        "text": "A non-relational database management system"
      },
      {
        "key": "D",
        "text": "A JDBC driver implementation"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 被归类为半 ORM（半对象关系映射）框架，它既具备 ORM 的结果集映射能力，又保留了开发者对 SQL 的控制权，与 Hibernate 这类全 ORM 框架有明显区别。 需要我把这些题目按知识点（如执行流程、配置文件、架构分层）重新分类整理成一份复习清单吗？ |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 单元测试题(1).docx"
    ],
    "tags": [
      "mybatis",
      "ORM/JDBC Basics"
    ]
  },
  {
    "id": "MB-O-025",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the central configuration file for the MyBatis framework?",
    "options": [
      {
        "key": "A",
        "text": "hibernate.cfg.xml"
      },
      {
        "key": "B",
        "text": "mybatis-config.xml"
      },
      {
        "key": "C",
        "text": "applicationContext.xml"
      },
      {
        "key": "D",
        "text": "struts.xml"
      }
    ],
    "answer": "B",
    "explanation": "mybatis-config.xml 是 MyBatis 框架的核心主配置文件。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-026",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which root element wraps all content in mybatis-config.xml?",
    "options": [
      {
        "key": "A",
        "text": "beans"
      },
      {
        "key": "B",
        "text": "mapper"
      },
      {
        "key": "C",
        "text": "configuration"
      },
      {
        "key": "D",
        "text": "sqlMap"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 主配置文件的根标签为 <configuration>，所有配置都写在该标签内部。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-027",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which element in mybatis-config.xml externalizes database credentials?",
    "options": [
      {
        "key": "A",
        "text": "environments"
      },
      {
        "key": "B",
        "text": "settings"
      },
      {
        "key": "C",
        "text": "mappers"
      },
      {
        "key": "D",
        "text": "properties"
      }
    ],
    "answer": "D",
    "explanation": "<properties> 标签用于引入外部配置文件，将数据库账号、密码等信息外置，避免硬编码。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-028",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which element in mybatis-config.xml points to SQL mapping files?",
    "options": [
      {
        "key": "A",
        "text": "properties"
      },
      {
        "key": "B",
        "text": "mappers"
      },
      {
        "key": "C",
        "text": "typeAliases"
      },
      {
        "key": "D",
        "text": "plugins"
      }
    ],
    "answer": "B",
    "explanation": "<mappers> 标签用来注册 Mapper 映射文件或 Mapper 接口，告知框架 SQL 语句位置。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-029",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which element controls MyBatis runtime behavior such as caching and lazy loading?",
    "options": [
      {
        "key": "A",
        "text": "environments"
      },
      {
        "key": "B",
        "text": "typeHandlers"
      },
      {
        "key": "C",
        "text": "settings"
      },
      {
        "key": "D",
        "text": "objectFactory"
      }
    ],
    "answer": "C",
    "explanation": "<settings> 用于配置 MyBatis 全局运行参数，包含缓存、延迟加载、日志等功能开关。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-030",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the correct JDBC driver class name for MySQL in a MyBatis configuration?",
    "options": [
      {
        "key": "A",
        "text": "com.mysql.jdbc.Driver"
      },
      {
        "key": "B",
        "text": "org.mysql.Driver"
      },
      {
        "key": "C",
        "text": "com.mysql.cj.jdbc.Driver"
      },
      {
        "key": "D",
        "text": "mysql.jdbc.Driver"
      }
    ],
    "answer": "C",
    "explanation": "MySQL 8.x 及以上版本使用驱动类 com.mysql.cj.jdbc.Driver，旧驱动已废弃。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-031",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which class is used to build a SqlSessionFactory programmatically in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "SqlSession"
      },
      {
        "key": "B",
        "text": "SqlSessionFactoryBuilder"
      },
      {
        "key": "C",
        "text": "Configuration"
      },
      {
        "key": "D",
        "text": "Environment"
      }
    ],
    "answer": "B",
    "explanation": "SqlSessionFactoryBuilder 是构建 SqlSessionFactory 的工具类。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-032",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the correct order of steps to create SqlSessionFactory programmatically?",
    "options": [
      {
        "key": "A",
        "text": "Create Environment → Obtain DataSource → Build SqlSessionFactory"
      },
      {
        "key": "B",
        "text": "Obtain DataSource → Create TransactionFactory → Create Environment → Create Configuration → Build SqlSessionFactory"
      },
      {
        "key": "C",
        "text": "Create Configuration → Obtain DataSource → Build SqlSessionFactory"
      },
      {
        "key": "D",
        "text": "Create TransactionFactory → Build SqlSessionFactory → Obtain DataSource"
      }
    ],
    "answer": "B",
    "explanation": "代码方式创建工厂顺序：获取数据源 → 创建事务工厂 → 构建运行环境 → 初始化配置 → 生成 SqlSessionFactory。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-O-033",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which class is used to create a transaction factory for programmatic configuration in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "ManagedTransactionFactory"
      },
      {
        "key": "B",
        "text": "JdbcTransactionFactory"
      },
      {
        "key": "C",
        "text": "DataSourceTransactionFactory"
      },
      {
        "key": "D",
        "text": "SpringTransactionFactory"
      }
    ],
    "answer": "B",
    "explanation": "独立使用 MyBatis 时，默认使用 JdbcTransactionFactory 实现 JDBC 事务管理。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-O-034",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In programmatic MyBatis configuration, which method on Configuration registers a mapper interface?",
    "options": [
      {
        "key": "A",
        "text": "addResource()"
      },
      {
        "key": "B",
        "text": "addMapper()"
      },
      {
        "key": "C",
        "text": "setMapper()"
      },
      {
        "key": "D",
        "text": "registerMapper()"
      }
    ],
    "answer": "B",
    "explanation": "Configuration 对象的 addMapper() 方法用于手动注册 Mapper 接口。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-035",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which syntax is used to reference external property values in mybatis-config.xml?",
    "options": [
      {
        "key": "A",
        "text": "#{propertyName}"
      },
      {
        "key": "B",
        "text": "@{propertyName}"
      },
      {
        "key": "C",
        "text": "${propertyName}"
      },
      {
        "key": "D",
        "text": "%{propertyName}"
      }
    ],
    "answer": "C",
    "explanation": "主配置文件中使用 ${} 引用属性值；#{} 用于 Mapper 文件参数占位。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-036",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which property source has the highest priority in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "Internal properties inside tag"
      },
      {
        "key": "B",
        "text": "External .properties file"
      },
      {
        "key": "C",
        "text": "Programmatically passed properties"
      },
      {
        "key": "D",
        "text": "System environment variables"
      }
    ],
    "answer": "C",
    "explanation": "属性优先级：代码传入 > 外部配置文件 > 标签内定义 > 系统环境变量。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-037",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute loads a properties file from classpath in tag?",
    "options": [
      {
        "key": "A",
        "text": "url"
      },
      {
        "key": "B",
        "text": "path"
      },
      {
        "key": "C",
        "text": "resource"
      },
      {
        "key": "D",
        "text": "file"
      }
    ],
    "answer": "C",
    "explanation": "resource 从类路径加载配置文件，url 用于加载本地绝对路径或网络文件。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-038",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "If a property is defined both inside tag and external file, which one takes effect?",
    "options": [
      {
        "key": "A",
        "text": "Internal tag value"
      },
      {
        "key": "B",
        "text": "External file value"
      },
      {
        "key": "C",
        "text": "Both merge"
      },
      {
        "key": "D",
        "text": "Neither works"
      }
    ],
    "answer": "B",
    "explanation": "外部 .properties 文件属性优先级高于配置文件内直接定义的属性。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-O-039",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which setting enables retrieving auto-generated primary keys in MySQL?",
    "options": [
      {
        "key": "A",
        "text": "keyColumn"
      },
      {
        "key": "B",
        "text": "keyProperty"
      },
      {
        "key": "C",
        "text": "useGeneratedKeys"
      },
      {
        "key": "D",
        "text": "autoKey"
      }
    ],
    "answer": "C",
    "explanation": "useGeneratedKeys=\"true\" 开启自增主键回填，配合 keyProperty 将主键存入实体类。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-040",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the default value of lazyLoadingEnabled in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "on"
      },
      {
        "key": "D",
        "text": "off"
      }
    ],
    "answer": "B",
    "explanation": "全局延迟加载开关 lazyLoadingEnabled 默认关闭（false）。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-041",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which setting globally enables or disables MyBatis second-level cache?",
    "options": [
      {
        "key": "A",
        "text": "lazyLoadingEnabled"
      },
      {
        "key": "B",
        "text": "cacheEnabled"
      },
      {
        "key": "C",
        "text": "useCache"
      },
      {
        "key": "D",
        "text": "localCacheScope"
      }
    ],
    "answer": "B",
    "explanation": "cacheEnabled 是二级缓存全局总开关，控制所有 Mapper 缓存功能。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-042",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ORM/JDBC Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which setting defines default JDBC type for null parameters?",
    "options": [
      {
        "key": "A",
        "text": "defaultType"
      },
      {
        "key": "B",
        "text": "nullType"
      },
      {
        "key": "C",
        "text": "jdbcTypeForNull"
      },
      {
        "key": "D",
        "text": "paramType"
      }
    ],
    "answer": "C",
    "explanation": "jdbcTypeForNull 用于指定参数为 null 时默认的 JDBC 类型，适配 Oracle 等数据库。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "ORM/JDBC Basics"
    ]
  },
  {
    "id": "MB-O-043",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "cacheEnabled is set to ____ by default in MyBatis.",
    "options": [
      {
        "key": "A",
        "text": "false"
      },
      {
        "key": "B",
        "text": "true"
      },
      {
        "key": "C",
        "text": "null"
      },
      {
        "key": "D",
        "text": "undefined"
      }
    ],
    "answer": "B",
    "explanation": "二级缓存全局开关 cacheEnabled 默认值为 true，仍需在 Mapper 文件手动开启缓存标签。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-044",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which setting controls the number of rows fetched at one time from database?",
    "options": [
      {
        "key": "A",
        "text": "timeout"
      },
      {
        "key": "B",
        "text": "defaultFetchSize"
      },
      {
        "key": "C",
        "text": "fetchTimeout"
      },
      {
        "key": "D",
        "text": "pageSize"
      }
    ],
    "answer": "B",
    "explanation": "defaultFetchSize 设置 JDBC 每次从数据库读取的数据行数，优化大数据查询性能。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-045",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the function of typeAliases element?",
    "options": [
      {
        "key": "A",
        "text": "Configure database connection pool"
      },
      {
        "key": "B",
        "text": "Assigns short names to Java classes for use in mapper XML files"
      },
      {
        "key": "C",
        "text": "Register mapper interfaces"
      },
      {
        "key": "D",
        "text": "Configure transaction manager"
      }
    ],
    "answer": "B",
    "explanation": "<typeAliases> 用于给 Java 实体类设置别名，简化 Mapper 文件中类名书写。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-O-046",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MyBatis built-in alias for Java primitive type int is ____.",
    "options": [
      {
        "key": "A",
        "text": "integer"
      },
      {
        "key": "B",
        "text": "_int"
      },
      {
        "key": "C",
        "text": "int"
      },
      {
        "key": "D",
        "text": "Int"
      }
    ],
    "answer": "B",
    "explanation": "基本类型 int 别名 _int；包装类型 Integer 别名 int。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-047",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "When using package scanning for type aliases, what is the alias of com.sam.entity.Student?",
    "options": [
      {
        "key": "A",
        "text": "Student"
      },
      {
        "key": "B",
        "text": "STUDENT"
      },
      {
        "key": "C",
        "text": "student"
      },
      {
        "key": "D",
        "text": "stu"
      }
    ],
    "answer": "C",
    "explanation": "包扫描自动取类名首字母小写作为默认别名。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-048",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In tag, which attribute specifies the full qualified Java class name?",
    "options": [
      {
        "key": "A",
        "text": "alias"
      },
      {
        "key": "B",
        "text": "class"
      },
      {
        "key": "C",
        "text": "type"
      },
      {
        "key": "D",
        "text": "name"
      }
    ],
    "answer": "C",
    "explanation": "type 指定类全限定名，alias 自定义别名。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-049",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which element is most commonly used in MyBatis mapper XML?",
    "options": [
      {
        "key": "A",
        "text": "insert"
      },
      {
        "key": "B",
        "text": "select"
      },
      {
        "key": "C",
        "text": "update"
      },
      {
        "key": "D",
        "text": "delete"
      }
    ],
    "answer": "B",
    "explanation": "查询操作是业务中使用频率最高的操作，<select> 标签最常用。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-050",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which parameter syntax prevents SQL injection?",
    "options": [
      {
        "key": "A",
        "text": "${id}"
      },
      {
        "key": "B",
        "text": "@{id}"
      },
      {
        "key": "C",
        "text": "#{id}"
      },
      {
        "key": "D",
        "text": "%{id}"
      }
    ],
    "answer": "C",
    "explanation": "#{} 采用预编译占位符，有效防止 SQL 注入；${} 直接字符串拼接，存在安全风险。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-051",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute defines the return type of a select statement for simple mapping?",
    "options": [
      {
        "key": "A",
        "text": "parameterType"
      },
      {
        "key": "B",
        "text": "mapType"
      },
      {
        "key": "C",
        "text": "resultType"
      },
      {
        "key": "D",
        "text": "resultClass"
      }
    ],
    "answer": "C",
    "explanation": "resultType 用于简单结果映射；复杂映射使用 resultMap。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-052",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "The default value of flushCache for select statement is ____.",
    "options": [
      {
        "key": "A",
        "text": "true"
      },
      {
        "key": "B",
        "text": "false"
      },
      {
        "key": "C",
        "text": "yes"
      },
      {
        "key": "D",
        "text": "no"
      }
    ],
    "answer": "B",
    "explanation": "查询语句默认不清空缓存（false）；增删改语句默认清空缓存。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-053",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "The default value of statementType is ____.",
    "options": [
      {
        "key": "A",
        "text": "STATEMENT"
      },
      {
        "key": "B",
        "text": "CALLABLE"
      },
      {
        "key": "C",
        "text": "PREPARED"
      },
      {
        "key": "D",
        "text": "NONE"
      }
    ],
    "answer": "C",
    "explanation": "statementType 默认使用 PREPARED，即预编译语句对象。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-054",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used for complex object and nested result mapping?",
    "options": [
      {
        "key": "A",
        "text": "resultType"
      },
      {
        "key": "B",
        "text": "paramMap"
      },
      {
        "key": "C",
        "text": "resultMap"
      },
      {
        "key": "D",
        "text": "typeMap"
      }
    ],
    "answer": "C",
    "explanation": "resultMap 专门处理字段与属性不匹配、嵌套对象、多表关联等复杂映射场景。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-055",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which attribute controls how many records are fetched each time from database?",
    "options": [
      {
        "key": "A",
        "text": "timeout"
      },
      {
        "key": "B",
        "text": "fetchSize"
      },
      {
        "key": "C",
        "text": "pageNum"
      },
      {
        "key": "D",
        "text": "pageSize"
      }
    ],
    "answer": "B",
    "explanation": "fetchSize 控制单次从数据库读取的数据条数。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-056",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "flushCache for insert/update/delete defaults to ____.",
    "options": [
      {
        "key": "A",
        "text": "false"
      },
      {
        "key": "B",
        "text": "null"
      },
      {
        "key": "C",
        "text": "true"
      },
      {
        "key": "D",
        "text": "undefined"
      }
    ],
    "answer": "C",
    "explanation": "增删改操作默认清空缓存，保证数据一致性。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-057",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which attribute enables auto-increment primary key return in insert tag?",
    "options": [
      {
        "key": "A",
        "text": "keyColumn"
      },
      {
        "key": "B",
        "text": "keyProperty"
      },
      {
        "key": "C",
        "text": "useGeneratedKeys"
      },
      {
        "key": "D",
        "text": "autoIncrement"
      }
    ],
    "answer": "C",
    "explanation": "useGeneratedKeys=\"true\" 开启自增主键获取功能。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-058",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute specifies entity class property to receive auto-generated primary key?",
    "options": [
      {
        "key": "A",
        "text": "keyName"
      },
      {
        "key": "B",
        "text": "keyProperty"
      },
      {
        "key": "C",
        "text": "keyField"
      },
      {
        "key": "D",
        "text": "keyAttr"
      }
    ],
    "answer": "B",
    "explanation": "keyProperty 指定实体类中接收主键的属性名。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-059",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the purpose of element?",
    "options": [
      {
        "key": "A",
        "text": "Query common data"
      },
      {
        "key": "B",
        "text": "Sort query result"
      },
      {
        "key": "C",
        "text": "To manually generate a key before or after an INSERT"
      },
      {
        "key": "D",
        "text": "Filter query condition"
      }
    ],
    "answer": "C",
    "explanation": "<selectKey> 用于在插入前后手动查询 / 生成主键。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-060",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "When order is set to ____, selectKey runs before insert statement.",
    "options": [
      {
        "key": "A",
        "text": "AFTER"
      },
      {
        "key": "B",
        "text": "LATER"
      },
      {
        "key": "C",
        "text": "BEFORE"
      },
      {
        "key": "D",
        "text": "FIRST"
      }
    ],
    "answer": "C",
    "explanation": "order=\"BEFORE\"：先执行主键查询，再执行插入；AFTER 反之。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-061",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In , which attribute receives the generated primary key into entity?",
    "options": [
      {
        "key": "A",
        "text": "keyColumn"
      },
      {
        "key": "B",
        "text": "keyProperty"
      },
      {
        "key": "C",
        "text": "resultType"
      },
      {
        "key": "D",
        "text": "property"
      }
    ],
    "answer": "B",
    "explanation": "keyProperty 将查询到的主键值回填至实体类对应属性。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-062",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute sets maximum waiting time for SQL execution?",
    "options": [
      {
        "key": "A",
        "text": "fetchSize"
      },
      {
        "key": "B",
        "text": "maxWait"
      },
      {
        "key": "C",
        "text": "timeout"
      },
      {
        "key": "D",
        "text": "idleTimeout"
      }
    ],
    "answer": "C",
    "explanation": "timeout 设置 SQL 执行超时时间，超时则抛出异常。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-063",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the usage of element?",
    "options": [
      {
        "key": "A",
        "text": "Define query conditions"
      },
      {
        "key": "B",
        "text": "To define reusable SQL code fragments"
      },
      {
        "key": "C",
        "text": "Define result mapping"
      },
      {
        "key": "D",
        "text": "Define parameter types"
      }
    ],
    "answer": "B",
    "explanation": "<sql> 定义可复用 SQL 片段，减少代码冗余。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-O-064",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which tag is used to reference fragment?",
    "options": [
      {
        "key": "A",
        "text": "ref"
      },
      {
        "key": "B",
        "text": "reference"
      },
      {
        "key": "C",
        "text": "include"
      },
      {
        "key": "D",
        "text": "import"
      }
    ],
    "answer": "C",
    "explanation": "通过 <include refid=\"片段ID\"> 引用预定义的 SQL 片段。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-O-065",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which syntax is used to pass dynamic parameters inside fragment?",
    "options": [
      {
        "key": "A",
        "text": "#{alias}"
      },
      {
        "key": "B",
        "text": "${alias}"
      },
      {
        "key": "C",
        "text": "@{alias}"
      },
      {
        "key": "D",
        "text": "&{alias}"
      }
    ],
    "answer": "B",
    "explanation": "SQL 片段内部传参使用 ${} 语法。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-066",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which statementType is used to call stored procedures?",
    "options": [
      {
        "key": "A",
        "text": "PREPARED"
      },
      {
        "key": "B",
        "text": "STATEMENT"
      },
      {
        "key": "C",
        "text": "CALLABLE"
      },
      {
        "key": "D",
        "text": "PROCEDURE"
      }
    ],
    "answer": "C",
    "explanation": "调用存储过程必须设置 statementType=\"CALLABLE\"。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-067",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which mode stands for input parameter of stored procedure?",
    "options": [
      {
        "key": "A",
        "text": "OUT"
      },
      {
        "key": "B",
        "text": "IN"
      },
      {
        "key": "C",
        "text": "INOUT"
      },
      {
        "key": "D",
        "text": "INPUT"
      }
    ],
    "answer": "B",
    "explanation": "IN 输入参数，OUT 输出参数，INOUT 输入输出参数。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-068",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "For Oracle REFCURSOR result set, mode should be set to ____.",
    "options": [
      {
        "key": "A",
        "text": "OUT"
      },
      {
        "key": "B",
        "text": "INOUT"
      },
      {
        "key": "C",
        "text": "CURSOR"
      },
      {
        "key": "D",
        "text": "RESULT"
      }
    ],
    "answer": "C",
    "explanation": "Oracle 游标类型参数，mode 设置为 CURSOR。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-069",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute handles multiple result sets returned by stored procedure?",
    "options": [
      {
        "key": "A",
        "text": "resultType"
      },
      {
        "key": "B",
        "text": "resultSets"
      },
      {
        "key": "C",
        "text": "resultMap"
      },
      {
        "key": "D",
        "text": "multiResult"
      }
    ],
    "answer": "B",
    "explanation": "resultSets 用于接收存储过程返回的多个结果集。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-070",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which syntax directly splices parameter into SQL string?",
    "options": [
      {
        "key": "A",
        "text": "#{value}"
      },
      {
        "key": "B",
        "text": "@{value}"
      },
      {
        "key": "C",
        "text": "${value}"
      },
      {
        "key": "D",
        "text": "%{value}"
      }
    ],
    "answer": "C",
    "explanation": "${} 直接字符串拼接，存在 SQL 注入风险。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-071",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "For user input parameters, which syntax should be used for security?",
    "options": [
      {
        "key": "A",
        "text": "${value}"
      },
      {
        "key": "B",
        "text": "#{value}"
      },
      {
        "key": "C",
        "text": "@{value}"
      },
      {
        "key": "D",
        "text": "&{value}"
      }
    ],
    "answer": "B",
    "explanation": "接收用户输入优先使用 #{}，预编译防注入。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-072",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute sets decimal places for numeric parameters?",
    "options": [
      {
        "key": "A",
        "text": "scale"
      },
      {
        "key": "B",
        "text": "decimalPoint"
      },
      {
        "key": "C",
        "text": "numericScale"
      },
      {
        "key": "D",
        "text": "numScale"
      }
    ],
    "answer": "C",
    "explanation": "numericScale 用于指定数值参数保留的小数位数。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-073",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What happens when passing a Java object as parameterType?",
    "options": [
      {
        "key": "A",
        "text": "Must write full getter name"
      },
      {
        "key": "B",
        "text": "Need extra conversion configuration"
      },
      {
        "key": "C",
        "text": "Automatically resolves property values from the Java object"
      },
      {
        "key": "D",
        "text": "Only support basic types"
      }
    ],
    "answer": "C",
    "explanation": "传入实体对象时，MyBatis 可直接通过 #{属性名} 自动读取对象属性。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考试二 全题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-074",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In a unit test using PageHelper with 5 total student records and pageSize = 2, what values should students.getTotal() and students.getPages() return?",
    "options": [
      {
        "key": "A",
        "text": "getTotal() = 2, getPages() = 5"
      },
      {
        "key": "B",
        "text": "getTotal() = 5, getPages() = 2"
      },
      {
        "key": "C",
        "text": "getTotal() = 5, getPages() = 3"
      },
      {
        "key": "D",
        "text": "getTotal() = 10, getPages() = 3"
      }
    ],
    "answer": "C",
    "explanation": "getTotal() 代表总记录数，本题为5条；pageSize=2，总页数通过向上取整计算：，最终总页数为3。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-075",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What return type does the StudentMapper interface method use to carry both the page's records and pagination metadata?",
    "options": [
      {
        "key": "A",
        "text": "List"
      },
      {
        "key": "B",
        "text": "PageResult"
      },
      {
        "key": "C",
        "text": "Page"
      },
      {
        "key": "D",
        "text": "PaginatedList"
      }
    ],
    "answer": "C",
    "explanation": "PageHelper 分页查询返回 Page 对象，该对象既封装当前页数据，也包含总记录数、总页数、当前页码等分页元数据。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-076",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which of the following statements about PageHelper's working principle is INCORRECT?",
    "options": [
      {
        "key": "A",
        "text": "PageHelper intercepts the query method of org.apache.ibatis.executor.Executor"
      },
      {
        "key": "B",
        "text": "PageHelper uses ThreadLocal to store paging parameters between startPage() and the mapper call"
      },
      {
        "key": "C",
        "text": "After processing, paging information in ThreadLocal is RETAINED for the next query"
      },
      {
        "key": "D",
        "text": "For every new paginated query, startPage() must be called again"
      }
    ],
    "answer": "C",
    "explanation": "PageHelper 基于 MyBatis 拦截器实现，依靠 ThreadLocal 传递分页参数；查询执行完毕后会自动清空 ThreadLocal 中的分页信息，不会保留到下一次查询，因此每次分页都需要重新调用 startPage()。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-077",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Comparing all three pagination methods, which correctly describes where data slicing happens for each?",
    "options": [
      {
        "key": "A",
        "text": "Array: database; SQL LIMIT: Java service; PageHelper: database"
      },
      {
        "key": "B",
        "text": "Array: Java service (subList); SQL LIMIT: database; PageHelper: database (auto)"
      },
      {
        "key": "C",
        "text": "Array: Java service; SQL LIMIT: Java service; PageHelper: database"
      },
      {
        "key": "D",
        "text": "Array: database; SQL LIMIT: database; PageHelper: Java service"
      }
    ],
    "answer": "B",
    "explanation": "数组分页在Java层通过 subList 完成数据切片；原生SQL LIMIT 以及 PageHelper 分页，都是在数据库层完成数据截取。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-078",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which pagination method automatically runs a COUNT query and returns total records and total pages without any extra developer code?",
    "options": [
      {
        "key": "A",
        "text": "Array-based pagination using subList()"
      },
      {
        "key": "B",
        "text": "SQL LIMIT/OFFSET with manual mapper XML"
      },
      {
        "key": "C",
        "text": "PageHelper plugin — total and pages are returned in the Page object automatically"
      },
      {
        "key": "D",
        "text": "SQL Server ROW_NUMBER() with CTE"
      }
    ],
    "answer": "C",
    "explanation": "PageHelper 会自动执行 count 查询统计总记录数，并将总记录、总页数等信息封装到 Page 对象中，无需开发者手动编写统计代码。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-079",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In StudentService.java using PageHelper, why must PageHelper.startPage() be called IMMEDIATELY before the mapper method?",
    "options": [
      {
        "key": "A",
        "text": "Because PageHelper.startPage() initializes the database connection"
      },
      {
        "key": "B",
        "text": "Because any intervening query method could consume the ThreadLocal paging context, causing pagination to be applied to the wrong query"
      },
      {
        "key": "C",
        "text": "Because Spring's @Transactional annotation resets ThreadLocal between method calls"
      },
      {
        "key": "D",
        "text": "Because the mapper interface only accepts paginated calls when startPage() is the previous stack frame"
      }
    ],
    "answer": "B",
    "explanation": "分页参数存放在 ThreadLocal 中，若 startPage() 和 Mapper 查询之间存在其他数据库操作，会错误消耗分页上下文，导致分页作用在错误的SQL上。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-080",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In the PageHelper implementation, the StudentMapper XML contains a simple SELECT with NO LIMIT clause. How does pagination actually get applied?",
    "options": [
      {
        "key": "A",
        "text": "The controller manually appends LIMIT to the SQL string before calling the mapper"
      },
      {
        "key": "B",
        "text": "PageHelper intercepts the MyBatis Executor and automatically appends LIMIT/OFFSET to the SQL at runtime"
      },
      {
        "key": "C",
        "text": "Spring Boot auto-configuration rewrites the XML Mapper file at startup"
      },
      {
        "key": "D",
        "text": "The MySQL driver adds LIMIT based on connection pool settings"
      }
    ],
    "answer": "B",
    "explanation": "PageHelper 是 MyBatis 插件，通过拦截器在运行时动态给原生SQL拼接 LIMIT/OFFSET 分页语句，无需手动修改Mapper XML。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-081",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does the pagehelper.helperDialect = mysql setting configure?",
    "options": [
      {
        "key": "A",
        "text": "The character encoding of the MySQL database connection"
      },
      {
        "key": "B",
        "text": "The version of MySQL Server to connect to"
      },
      {
        "key": "C",
        "text": "The SQL dialect PageHelper uses to generate the appropriate LIMIT/OFFSET syntax for MySQL"
      },
      {
        "key": "D",
        "text": "The JDBC driver class name for MySQL"
      }
    ],
    "answer": "C",
    "explanation": "helperDialect 用于指定数据库方言，让 PageHelper 根据对应数据库生成适配的分页语法。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-082",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does the application.properties setting pageHelper.reasonable = true do?",
    "options": [
      {
        "key": "A",
        "text": "Enables PageHelper to log all paginated queries at DEBUG level"
      },
      {
        "key": "B",
        "text": "Allows pageNo and pageSize to be passed as mapper method arguments"
      },
      {
        "key": "C",
        "text": "Automatically corrects out-of-range page requests to the first or last valid page"
      },
      {
        "key": "D",
        "text": "Forces PageHelper to use ROW_NUMBER() instead of LIMIT/OFFSET"
      }
    ],
    "answer": "C",
    "explanation": "开启合理分页模式后，当传入的页码小于1时自动跳转到第一页，页码超过最大页数时自动跳转到最后一页。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-083",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which Maven dependency is THE KEY dependency required to enable PageHelper in a Spring Boot project?",
    "options": [
      {
        "key": "A",
        "text": "mybatis-spring-boot-starter"
      },
      {
        "key": "B",
        "text": "pagehelper-spring-boot-starter"
      },
      {
        "key": "C",
        "text": "mybatis-pagehelper"
      },
      {
        "key": "D",
        "text": "spring-boot-starter-pagination"
      }
    ],
    "answer": "B",
    "explanation": "Spring Boot 项目集成 PageHelper，必须引入专属启动依赖 pagehelper-spring-boot-starter。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-084",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What happens to PageHelper's paging information in ThreadLocal AFTER a paginated query is executed?",
    "options": [
      {
        "key": "A",
        "text": "It is retained and automatically applied to the next query"
      },
      {
        "key": "B",
        "text": "It is saved to the database for audit purposes"
      },
      {
        "key": "C",
        "text": "It is cleared — startPage() must be called again before the next paginated query"
      },
      {
        "key": "D",
        "text": "It is transferred to Spring's request scope for use in the controller"
      }
    ],
    "answer": "C",
    "explanation": "分页查询执行完成后，ThreadLocal 内的分页参数会被清空，下一次分页查询需要重新调用 startPage()。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-085",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which internal Java mechanism does PageHelper use to store paging information between the startPage() call and the actual query execution?",
    "options": [
      {
        "key": "A",
        "text": "A static HashMap shared across all threads"
      },
      {
        "key": "B",
        "text": "Spring's ApplicationContext bean registry"
      },
      {
        "key": "C",
        "text": "Java ThreadLocal"
      },
      {
        "key": "D",
        "text": "MyBatis SqlSession cache"
      }
    ],
    "answer": "C",
    "explanation": "PageHelper 使用 ThreadLocal 在线程内传递分页参数，保证线程间数据隔离。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-086",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is PageHelper and what is its key feature for MyBatis queries?",
    "options": [
      {
        "key": "A",
        "text": "A Spring Security plugin that paginates access control lists"
      },
      {
        "key": "B",
        "text": "An open-source MyBatis plugin that automatically appends the correct LIMIT clause to queries without modifying the SQL itself"
      },
      {
        "key": "C",
        "text": "A Maven plugin that generates paginated Mapper XML files at build time"
      },
      {
        "key": "D",
        "text": "A database driver extension that intercepts JDBC calls"
      }
    ],
    "answer": "B",
    "explanation": "PageHelper 是开源的 MyBatis 分页插件，运行时自动拼接分页语句，业务代码和原生SQL无需改动。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-087",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is one key disadvantage of SQL LIMIT/OFFSET pagination compared to using PageHelper?",
    "options": [
      {
        "key": "A",
        "text": "SQL pagination cannot work with MySQL databases"
      },
      {
        "key": "B",
        "text": "LIMIT/OFFSET must be written manually in every mapper XML query, reducing maintainability"
      },
      {
        "key": "C",
        "text": "SQL pagination always returns all records and cannot filter by page"
      },
      {
        "key": "D",
        "text": "It requires Spring Boot version 3.0 or higher"
      }
    ],
    "answer": "B",
    "explanation": "原生 LIMIT/OFFSET 需要在每一条查询SQL中手动编写，重复代码多，后期维护成本高。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-088",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the main advantage of SQL-based pagination (LIMIT/OFFSET) over array-based pagination?",
    "options": [
      {
        "key": "A",
        "text": "It requires no changes to the SQL query in mapper XML"
      },
      {
        "key": "B",
        "text": "It automatically calculates total pages and includes them in the result"
      },
      {
        "key": "C",
        "text": "The database returns only the requested rows, greatly reducing data transfer and improving performance"
      },
      {
        "key": "D",
        "text": "It does not require an ORDER BY clause"
      }
    ],
    "answer": "C",
    "explanation": "SQL 分页仅查询并返回当前页数据，减少网络传输与内存占用；数组分页会一次性查询全表数据，性能较差。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-089",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which critical rule applies when using OFFSET ... FETCH NEXT in SQL Server pagination?",
    "options": [
      {
        "key": "A",
        "text": "FETCH NEXT can be used without OFFSET when the table has a primary key"
      },
      {
        "key": "B",
        "text": "ORDER BY is optional — results are deterministic by default"
      },
      {
        "key": "C",
        "text": "ORDER BY is mandatory, OFFSET is required before FETCH, and TOP cannot be combined with OFFSET/FETCH"
      },
      {
        "key": "D",
        "text": "TOP must always be added to limit the result set before applying OFFSET"
      }
    ],
    "answer": "C",
    "explanation": "SQL Server 的 OFFSET...FETCH 分页语法必须搭配 ORDER BY，OFFSET 位于 FETCH 之前，且不能和 TOP 关键字混用。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-090",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In SQL Server 2012+, which SQL construct is the modern recommended approach for pagination?",
    "options": [
      {
        "key": "A",
        "text": "SELECT TOP N with a nested subquery"
      },
      {
        "key": "B",
        "text": "ROW_NUMBER() with a CTE and BETWEEN filter"
      },
      {
        "key": "C",
        "text": "LIMIT / OFFSET clause"
      },
      {
        "key": "D",
        "text": "ORDER BY with OFFSET ... ROWS FETCH NEXT ... ROWS ONLY"
      }
    ],
    "answer": "D",
    "explanation": "SQL Server 2012 及以上版本，官方推荐使用 OFFSET ... FETCH NEXT 语法实现分页。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-091",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the correct MySQL LIMIT/OFFSET syntax to fetch Page 3 with 5 records per page?",
    "options": [
      {
        "key": "A",
        "text": "SELECT * FROM student LIMIT 5 OFFSET 5"
      },
      {
        "key": "B",
        "text": "SELECT * FROM student LIMIT 5 OFFSET 15"
      },
      {
        "key": "C",
        "text": "SELECT * FROM student LIMIT 5 OFFSET 10"
      },
      {
        "key": "D",
        "text": "SELECT * FROM student LIMIT 15 OFFSET 5"
      }
    ],
    "answer": "C",
    "explanation": "偏移量公式：(当前页码-1) * 每页条数。(3-1)*5=10，对应语法 LIMIT 5 OFFSET 10。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-092",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Why is array-based pagination NOT suitable for large datasets in production systems?",
    "options": [
      {
        "key": "A",
        "text": "Because subList() is not a thread-safe operation"
      },
      {
        "key": "B",
        "text": "Because fetching ALL rows every request causes severe performance problems for both the database and the application"
      },
      {
        "key": "C",
        "text": "Because it does not support Spring Boot auto-configuration"
      },
      {
        "key": "D",
        "text": "Because MyBatis cannot map large result sets to Java objects"
      }
    ],
    "answer": "B",
    "explanation": "数组分页会每次查询全表数据，数据量大时会严重消耗数据库、网络与应用内存，不适合生产环境大数据场景。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-093",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which of the following is a correct statement about array-based pagination?",
    "options": [
      {
        "key": "A",
        "text": "It fetches only the requested page of records from the database"
      },
      {
        "key": "B",
        "text": "It is the recommended approach for production systems with millions of records"
      },
      {
        "key": "C",
        "text": "It fetches ALL records from the database every time and slices in the service layer"
      },
      {
        "key": "D",
        "text": "It requires PageHelper to be configured in pom.xml"
      }
    ],
    "answer": "C",
    "explanation": "数组分页逻辑：数据库查询全部数据，在Java服务层使用 subList 方法完成分页截取。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-094",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What SQL clause does the DAO layer mapper XML use in array-based pagination?",
    "options": [
      {
        "key": "A",
        "text": "SELECT * FROM student LIMIT #{pageSize} OFFSET #{firstIndex}"
      },
      {
        "key": "B",
        "text": "SELECT * FROM student — a plain SELECT with NO LIMIT clause"
      },
      {
        "key": "C",
        "text": "SELECT TOP #{pageSize} * FROM student"
      },
      {
        "key": "D",
        "text": "SELECT * FROM student WHERE ROWNUM <= #{lastIndex}"
      }
    ],
    "answer": "B",
    "explanation": "数组分页的Mapper XML中是普通查询语句，不添加任何分页相关子句。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-095",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In array-based pagination, where does the actual slicing of records into pages take place?",
    "options": [
      {
        "key": "A",
        "text": "Inside the MyBatis XML Mapper using a LIMIT clause"
      },
      {
        "key": "B",
        "text": "Inside the MySQL database engine"
      },
      {
        "key": "C",
        "text": "In the Java service layer using the subList() method"
      },
      {
        "key": "D",
        "text": "In the Spring DispatcherServlet before the controller receives the request"
      }
    ],
    "answer": "C",
    "explanation": "数组分页的数据截取操作，在Java服务层通过集合的 subList() 方法实现。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-096",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Using the core pagination formula, what is the firstIndex (starting position) when currPage = 3 and pageSize = 10?",
    "options": [
      {
        "key": "A",
        "text": "10"
      },
      {
        "key": "B",
        "text": "20"
      },
      {
        "key": "C",
        "text": "30"
      },
      {
        "key": "D",
        "text": "25"
      }
    ],
    "answer": "B",
    "explanation": "起始下标公式：(当前页码-1) * 每页条数，(3-1)*10=20。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-097",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In pagination vocabulary, what does the term 'pageSize' refer to?",
    "options": [
      {
        "key": "A",
        "text": "The total number of records in the database"
      },
      {
        "key": "B",
        "text": "The total number of pages available"
      },
      {
        "key": "C",
        "text": "The number of records to display per page"
      },
      {
        "key": "D",
        "text": "The byte size of a single page of HTML"
      }
    ],
    "answer": "C",
    "explanation": "pageSize 含义为每页展示的记录条数。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-098",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the primary purpose of pagination in web applications?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt large datasets before sending them to the browser"
      },
      {
        "key": "B",
        "text": "To divide a large set of data into separate, smaller pages so only a manageable subset is loaded at a time"
      },
      {
        "key": "C",
        "text": "To cache all records in memory for faster future access"
      },
      {
        "key": "D",
        "text": "To compress database query results before transferring them over the network"
      }
    ],
    "answer": "B",
    "explanation": "分页的核心作用是拆分大数据集，每次只加载少量数据，提升查询与页面加载效率。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-099",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In MyBatis Dynamic SQL with Kotlin, how many files does MBG generate per introspected table?",
    "options": [
      {
        "key": "A",
        "text": "2 (data class and mapper interface)"
      },
      {
        "key": "B",
        "text": "3 (data class, XML mapper, and interface)"
      },
      {
        "key": "C",
        "text": "4 (data class, support class, mapper interface, mapper extensions)"
      },
      {
        "key": "D",
        "text": "5 (data class, support class, XML, interface, and test class)"
      }
    ],
    "answer": "A",
    "explanation": "Kotlin 动态SQL模式下，MyBatis Generator（MBG）为每张表仅生成两个文件：数据类、Mapper接口。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-100",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which \"table\" tag sub-element completely excludes a specific column from the generated entity class, resultMap, and all SQL statements?",
    "options": [
      {
        "key": "A",
        "text": "columnOverride"
      },
      {
        "key": "B",
        "text": "columnRenamingRule"
      },
      {
        "key": "C",
        "text": "ignoreColumn"
      },
      {
        "key": "D",
        "text": "skipColumn"
      }
    ],
    "answer": "C",
    "explanation": "MBG 中 ignoreColumn 标签用于忽略指定字段，该字段不会出现在实体类、映射关系和生成的SQL中。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-101",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does the sub-element with searchString='^CUST_' and replaceString='' do to a column named CUST_BUSINESS_NAME?",
    "options": [
      {
        "key": "A",
        "text": "Renames the database column to BUSINESS_NAME permanently"
      },
      {
        "key": "B",
        "text": "Generates a Java property named custBusinessName"
      },
      {
        "key": "C",
        "text": "Generates a Java property named businessName by removing the CUST_ prefix"
      },
      {
        "key": "D",
        "text": "Excludes the column from the generated entity class"
      }
    ],
    "answer": "C",
    "explanation": "该配置用于正则替换字段名，移除 CUST_ 前缀，数据库列 CUST_BUSINESS_NAME 对应Java属性为 businessName。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "General"
    ]
  },
  {
    "id": "MB-O-102",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In the Kotlin DSL, which method should be passed to a general-purpose mapper method when no WHERE clause is required?",
    "options": [
      {
        "key": "A",
        "text": "selectAll()"
      },
      {
        "key": "B",
        "text": "noFilter()"
      },
      {
        "key": "C",
        "text": "allRows()"
      },
      {
        "key": "D",
        "text": "withoutWhere()"
      }
    ],
    "answer": "B",
    "explanation": "Kotlin MyBatis 动态SQL中，无条件全表查询时，传入 noFilter() 表示不拼接WHERE条件。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-O-103",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the key difference between updateAllColumns and updateSelectiveColumns in the Kotlin MyBatis Dynamic SQL DSL?",
    "options": [
      {
        "key": "A",
        "text": "updateAllColumns uses XML; updateSelectiveColumns uses annotations"
      },
      {
        "key": "B",
        "text": "updateAllColumns updates every column including nulls; updateSelectiveColumns skips properties that are null"
      },
      {
        "key": "C",
        "text": "updateSelectiveColumns updates all columns; updateAllColumns updates only the primary key"
      },
      {
        "key": "D",
        "text": "updateAllColumns works only with MyBatis3; updateSelectiveColumns works with MyBatis3Simple"
      }
    ],
    "answer": "B",
    "explanation": "updateAllColumns 更新表中所有字段（包含值为null的字段）；updateSelectiveColumns 为选择性更新，仅更新非null字段。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-O-104",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does setting immutable to true in \"javaModelGenerator\" tag do to the generated entity class?",
    "options": [
      {
        "key": "A",
        "text": "Makes the entity class final so it cannot be subclassed"
      },
      {
        "key": "B",
        "text": "Removes all setter methods so entity objects cannot be modified after creation"
      },
      {
        "key": "C",
        "text": "Makes all fields static and shared across instances"
      },
      {
        "key": "D",
        "text": "Generates a deep-copy constructor instead of a no-arg constructor"
      }
    ],
    "answer": "B",
    "explanation": "immutable=true 表示生成不可变实体类，会移除所有setter方法，对象创建后属性无法修改。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-105",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Why should the sqlMapGenerator targetProject be set to src/main/resources rather than src/main/java?",
    "options": [
      {
        "key": "A",
        "text": "XML files are automatically compiled by the Java compiler when placed in src/main/java"
      },
      {
        "key": "B",
        "text": "Maven includes only .java files from src/main/java in the build output"
      },
      {
        "key": "C",
        "text": "Placing XML files in src/main/resources ensures they are included in build output without extra Maven resource filtering"
      },
      {
        "key": "D",
        "text": "MyBatis can only read XML Mapper files from the resources directory"
      }
    ],
    "answer": "C",
    "explanation": "Maven 约定 src/main/resources 下的资源文件会自动打包到项目输出目录，Mapper XML 放在此目录无需额外配置资源过滤。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-106",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which javaClientGenerator type places ALL SQL inside XML Mapper files and generates an interface with only method signatures?",
    "options": [
      {
        "key": "A",
        "text": "ANNOTATEDMAPPER"
      },
      {
        "key": "B",
        "text": "MIXEDMAPPER"
      },
      {
        "key": "C",
        "text": "XMLMAPPER"
      },
      {
        "key": "D",
        "text": "INTERFACEMAPPER"
      }
    ],
    "answer": "C",
    "explanation": "XMLMAPPER 模式下，所有SQL语句统一写在Mapper XML文件中，Mapper接口仅保留方法声明。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-107",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does using a wildcard tableName='%' in the \"table\" tag element instruct MBG to do?",
    "options": [
      {
        "key": "A",
        "text": "Generate code only for tables whose names start with a percent sign"
      },
      {
        "key": "B",
        "text": "Exclude all tables from the generation run"
      },
      {
        "key": "C",
        "text": "Generate code for ALL tables in the target database schema"
      },
      {
        "key": "D",
        "text": "Generate only entity classes without Mapper interfaces for all tables"
      }
    ],
    "answer": "C",
    "explanation": "MBG 配置中 tableName=\"%\" 是通配符，表示为当前数据库内所有数据表自动生成代码。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-108",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the purpose of the \"generatedKey\" tag sub-element inside a \"table\" tag?",
    "options": [
      {
        "key": "A",
        "text": "To define the foreign key relationships between generated entity classes"
      },
      {
        "key": "B",
        "text": "To instruct MBG to insert a \"selectKey\" tag in the generated INSERT so the auto-incremented primary key value is retrieved after insertion"
      },
      {
        "key": "C",
        "text": "To generate a UUID for the primary key column at runtime"
      },
      {
        "key": "D",
        "text": "To configure the cache key strategy for SELECT queries on that table"
      }
    ],
    "answer": "B",
    "explanation": "generatedKey 用于配置自增主键回填，MBG 会在插入SQL中生成 selectKey 标签，插入数据后自动获取数据库自增主键值。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-109",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which javaModelGenerator property, when set to true, makes generated setter methods call .trim() on String parameters before assignment?",
    "options": [
      {
        "key": "A",
        "text": "immutable"
      },
      {
        "key": "B",
        "text": "constructorBased"
      },
      {
        "key": "C",
        "text": "enableSubPackages"
      },
      {
        "key": "D",
        "text": "trimStrings"
      }
    ],
    "answer": "D",
    "explanation": "trimStrings=true 时，MBG 生成的setter方法会自动对字符串参数执行 trim() 去除首尾空格。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-110",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does the forceBigDecimals property in \"javaTypeResolver\" tag do when set to true?",
    "options": [
      {
        "key": "A",
        "text": "Maps all integer columns to java.math.BigInteger"
      },
      {
        "key": "B",
        "text": "Forces MBG to use double for all numeric columns"
      },
      {
        "key": "C",
        "text": "Maps ALL DECIMAL and NUMERIC columns to java.math.BigDecimal regardless of precision or length"
      },
      {
        "key": "D",
        "text": "Rounds decimal values to two decimal places in generated setters"
      }
    ],
    "answer": "C",
    "explanation": "forceBigDecimals=true 后，数据库中所有 DECIMAL、NUMERIC 数值字段，都会统一映射为Java的 BigDecimal 类型。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-111",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which two attributes are REQUIRED in the \"jdbcConnection\" tag?",
    "options": [
      {
        "key": "A",
        "text": "userId and password"
      },
      {
        "key": "B",
        "text": "driverClass and connectionURL"
      },
      {
        "key": "C",
        "text": "schema and catalog"
      },
      {
        "key": "D",
        "text": "connectionURL and userId"
      }
    ],
    "answer": "B",
    "explanation": "MBG 的 jdbcConnection 标签必填两个属性：数据库驱动类 driverClass、数据库连接地址 connectionURL。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-112",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which commentGenerator property, when set to true, includes the database column COMMENT text inside the generated Javadoc?",
    "options": [
      {
        "key": "A",
        "text": "suppressAllComments"
      },
      {
        "key": "B",
        "text": "suppressDate"
      },
      {
        "key": "C",
        "text": "addRemarkComments"
      },
      {
        "key": "D",
        "text": "includeColumnRemarks"
      }
    ],
    "answer": "C",
    "explanation": "addRemarkComments=true 时，MBG 会将数据库表、字段的注释，自动添加到实体类的JavaDoc注释中。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-113",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the effect of setting suppressDate to true in the \"commentGenerator\" tag element?",
    "options": [
      {
        "key": "A",
        "text": "All Javadoc comments are removed from generated files entirely"
      },
      {
        "key": "B",
        "text": "Column REMARK values from the database are excluded from comments"
      },
      {
        "key": "C",
        "text": "Timestamps are excluded from generated comments, preventing unnecessary version control diffs"
      },
      {
        "key": "D",
        "text": "MBG skips generating comments only for entity classes"
      }
    ],
    "answer": "C",
    "explanation": "suppressDate=true 会取消注释中的生成时间戳，避免每次重新生成代码因时间变化产生版本控制差异。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-114",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which CachePlugin property value sets the eviction policy to remove the least recently accessed object when the cache is full?",
    "options": [
      {
        "key": "A",
        "text": "FIFO"
      },
      {
        "key": "B",
        "text": "SOFT"
      },
      {
        "key": "C",
        "text": "LRU"
      },
      {
        "key": "D",
        "text": "WEAK"
      }
    ],
    "answer": "C",
    "explanation": "LRU 是最近最少使用淘汰策略，缓存满时会移除长时间未被访问的数据。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-O-115",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which built-in MBG plugin, when added to generatorConfig.xml, inserts a \"cache\" tag element into every generated Mapper XML file?",
    "options": [
      {
        "key": "A",
        "text": "org.mybatis.generator.plugins.SerializablePlugin"
      },
      {
        "key": "B",
        "text": "org.mybatis.generator.plugins.ToStringPlugin"
      },
      {
        "key": "C",
        "text": "org.mybatis.generator.plugins.RowBoundsPlugin"
      },
      {
        "key": "D",
        "text": "org.mybatis.generator.plugins.CachePlugin"
      }
    ],
    "answer": "D",
    "explanation": "CachePlugin 是 MBG 内置插件，启用后会自动在所有生成的 Mapper XML 中添加 <cache> 缓存标签。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-116",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does the autoDelimitKeywords property do when set to true inside a element?",
    "options": [
      {
        "key": "A",
        "text": "Automatically generates camelCase Java property names from column names"
      },
      {
        "key": "B",
        "text": "Checks each table and column name against a reserved-word list and automatically wraps matches with delimiters"
      },
      {
        "key": "C",
        "text": "Forces all column names to uppercase in generated SQL"
      },
      {
        "key": "D",
        "text": "Adds backticks around every identifier regardless of whether it is a reserved word"
      }
    ],
    "answer": "B",
    "explanation": "autoDelimitKeywords=true 会自动检查表名、字段名是否为数据库关键字，若是则自动使用分隔符包裹。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-117",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which delimiter characters should be set for beginningDelimiter and endingDelimiter when using MBG with a MySQL database?",
    "options": [
      {
        "key": "A",
        "text": "Square brackets [ and ]"
      },
      {
        "key": "B",
        "text": "Double quotes \" and \""
      },
      {
        "key": "C",
        "text": "Backticks and"
      },
      {
        "key": "D",
        "text": "Single quotes ' and '"
      }
    ],
    "answer": "C",
    "explanation": "MySQL 使用反引号 ` 作为标识符分隔符，用于包裹关键字、特殊表名字段名。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-O-118",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which defaultModelType generates exactly one entity class per table with no inheritance hierarchy?",
    "options": [
      {
        "key": "A",
        "text": "conditional"
      },
      {
        "key": "B",
        "text": "hierarchical"
      },
      {
        "key": "C",
        "text": "simple"
      },
      {
        "key": "D",
        "text": "flat"
      }
    ],
    "answer": "D",
    "explanation": "flat 模型模式下，MBG 为每张表只生成一个独立实体类，不存在类继承结构。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-119",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the strict rule regarding the order of child elements inside the tag in generatorConfig.xml?",
    "options": [
      {
        "key": "A",
        "text": "Elements can be placed in any order as MBG reorders them automatically"
      },
      {
        "key": "B",
        "text": "The order is: property → plugin → commentGenerator → jdbcConnection → javaTypeResolver → javaModelGenerator → sqlMapGenerator → javaClientGenerator → table"
      },
      {
        "key": "C",
        "text": "jdbcConnection must always be the first child element"
      },
      {
        "key": "D",
        "text": "table must appear before javaModelGenerator"
      }
    ],
    "answer": "B",
    "explanation": "MBG 的 generatorConfig.xml 配置文件有严格的子标签顺序要求，顺序错误会导致解析失败，标准答案为选项中的固定顺序。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-120",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "By convention, where should the generatorConfig.xml file be placed in a Maven project?",
    "options": [
      {
        "key": "A",
        "text": "src/main/java/generator/"
      },
      {
        "key": "B",
        "text": "src/main/webapp/WEB-INF/"
      },
      {
        "key": "C",
        "text": "src/main/resources/generator/"
      },
      {
        "key": "D",
        "text": "src/test/resources/"
      }
    ],
    "answer": "C",
    "explanation": "Maven 项目中，按照开发规范，MBG 配置文件 generatorConfig.xml 通常放置在 src/main/resources/generator/ 目录下。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-121",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which of the following does MyBatis Generator NOT handle automatically?",
    "options": [
      {
        "key": "A",
        "text": "Basic INSERT and SELECT CRUD operations"
      },
      {
        "key": "B",
        "text": "Entity class generation from database tables"
      },
      {
        "key": "C",
        "text": "JOIN queries across multiple tables"
      },
      {
        "key": "D",
        "text": "Mapper interface generation"
      }
    ],
    "answer": "C",
    "explanation": "MBG 仅能自动生成单表基础CRUD代码，多表联查（JOIN） 需要开发者手动编写。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-122",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the primary purpose of MyBatis Generator (MBG)?",
    "options": [
      {
        "key": "A",
        "text": "To execute stored procedures and JOIN queries automatically"
      },
      {
        "key": "B",
        "text": "To introspect the database schema and generate entity classes, XML Mapper files, and Mapper interfaces automatically"
      },
      {
        "key": "C",
        "text": "To replace the Spring IoC container with annotation-based configuration"
      },
      {
        "key": "D",
        "text": "To generate database tables from Java entity classes"
      }
    ],
    "answer": "B",
    "explanation": "MBG 核心功能：读取数据库表结构，自动生成实体类、Mapper接口、Mapper XML文件，简化MyBatis基础代码编写。",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-O-123",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which targetRuntime value generates only basic CRUD methods without 'findByExample' or 'deleteByExample' methods?",
    "options": [
      {
        "key": "A",
        "text": "MyBatis3"
      },
      {
        "key": "B",
        "text": "MyBatis3Kotlin"
      },
      {
        "key": "C",
        "text": "MyBatis3Simple"
      },
      {
        "key": "D",
        "text": "MyBatis3Flat"
      }
    ],
    "answer": "C",
    "explanation": "targetRuntime 设置为 MyBatis3Simple 时，仅生成基础增删改查方法，不会生成 Example 条件查询相关方法。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "MyBatis 考题(1).docx"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-001",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which element defines different database environments in mybatis-config.xml?",
    "options": [
      {
        "key": "A",
        "text": "<settings>"
      },
      {
        "key": "B",
        "text": "<environments>"
      },
      {
        "key": "C",
        "text": "<typeAliases>"
      },
      {
        "key": "D",
        "text": "<plugins>"
      }
    ],
    "answer": "B",
    "explanation": "<environments> 用于配置不同运行环境，如开发、测试、生产环境，并指定事务管理器和数据源。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-002",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which element is used to configure JDBC driver, URL, username, and password in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "<dataSource>"
      },
      {
        "key": "B",
        "text": "<mappers>"
      },
      {
        "key": "C",
        "text": "<settings>"
      },
      {
        "key": "D",
        "text": "<resultMap>"
      }
    ],
    "answer": "A",
    "explanation": "数据库连接参数一般写在 <dataSource> 标签中，也可以通过 ${} 引用外部 properties 文件。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-003",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute should be used when loading db.properties from the classpath?",
    "options": [
      {
        "key": "A",
        "text": "url"
      },
      {
        "key": "B",
        "text": "resource"
      },
      {
        "key": "C",
        "text": "path"
      },
      {
        "key": "D",
        "text": "location"
      }
    ],
    "answer": "B",
    "explanation": "resource 从 classpath 加载属性文件；url 一般用于本地绝对路径或网络路径。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-004",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "If the same property exists in internal properties, external file, and programmatically passed properties, which has the highest priority?",
    "options": [
      {
        "key": "A",
        "text": "Internal properties"
      },
      {
        "key": "B",
        "text": "External file"
      },
      {
        "key": "C",
        "text": "Programmatically passed properties"
      },
      {
        "key": "D",
        "text": "Mapper XML value"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 属性优先级通常为：程序传入属性 > 外部配置文件 > 内部 properties 标签。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-005",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which setting controls whether lazy loading is enabled globally?",
    "options": [
      {
        "key": "A",
        "text": "cacheEnabled"
      },
      {
        "key": "B",
        "text": "lazyLoadingEnabled"
      },
      {
        "key": "C",
        "text": "mapUnderscoreToCamelCase"
      },
      {
        "key": "D",
        "text": "jdbcTypeForNull"
      }
    ],
    "answer": "B",
    "explanation": "lazyLoadingEnabled 是延迟加载的全局开关，开启后关联对象可以在真正访问时再加载。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-006",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which setting can map column name user_name to property userName automatically?",
    "options": [
      {
        "key": "A",
        "text": "autoMappingBehavior"
      },
      {
        "key": "B",
        "text": "mapUnderscoreToCamelCase"
      },
      {
        "key": "C",
        "text": "callSettersOnNulls"
      },
      {
        "key": "D",
        "text": "useColumnLabel"
      }
    ],
    "answer": "B",
    "explanation": "mapUnderscoreToCamelCase=true 可以开启下划线转驼峰映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Configuration"
    ]
  },
  {
    "id": "MB-G-007",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Type Aliases",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What is the purpose of typeAliases in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "Encrypt SQL statements"
      },
      {
        "key": "B",
        "text": "Give short names to Java classes"
      },
      {
        "key": "C",
        "text": "Create database tables"
      },
      {
        "key": "D",
        "text": "Enable transactions"
      }
    ],
    "answer": "B",
    "explanation": "typeAliases 用于给 Java 类型设置短别名，减少 Mapper XML 中全限定类名的书写。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Type Aliases"
    ]
  },
  {
    "id": "MB-G-008",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Type Aliases",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "When scanning a package for type aliases, the default alias of UserAccount is usually ____.",
    "options": [
      {
        "key": "A",
        "text": "UserAccount"
      },
      {
        "key": "B",
        "text": "userAccount"
      },
      {
        "key": "C",
        "text": "user_account"
      },
      {
        "key": "D",
        "text": "USERACCOUNT"
      }
    ],
    "answer": "B",
    "explanation": "包扫描时默认使用类名首字母小写作为别名。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Type Aliases"
    ]
  },
  {
    "id": "MB-G-009",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Core Objects",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which object is thread-safe and should generally be created once in a MyBatis application?",
    "options": [
      {
        "key": "A",
        "text": "SqlSession"
      },
      {
        "key": "B",
        "text": "SqlSessionFactory"
      },
      {
        "key": "C",
        "text": "ResultSet"
      },
      {
        "key": "D",
        "text": "Mapper proxy"
      }
    ],
    "answer": "B",
    "explanation": "SqlSessionFactory 是线程安全的，通常一个数据库环境创建一个即可。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Core Objects"
    ]
  },
  {
    "id": "MB-G-010",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Core Objects",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which object is NOT thread-safe and should not be shared across requests?",
    "options": [
      {
        "key": "A",
        "text": "SqlSession"
      },
      {
        "key": "B",
        "text": "SqlSessionFactory"
      },
      {
        "key": "C",
        "text": "Configuration"
      },
      {
        "key": "D",
        "text": "MappedStatement"
      }
    ],
    "answer": "A",
    "explanation": "SqlSession 不是线程安全的，一般一次请求或一次操作使用一个，用完关闭。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Core Objects"
    ]
  },
  {
    "id": "MB-G-011",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Core Objects",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method is usually called to obtain a SqlSession from SqlSessionFactory?",
    "options": [
      {
        "key": "A",
        "text": "getSession()"
      },
      {
        "key": "B",
        "text": "openSession()"
      },
      {
        "key": "C",
        "text": "createSession()"
      },
      {
        "key": "D",
        "text": "newSession()"
      }
    ],
    "answer": "B",
    "explanation": "SqlSessionFactory.openSession() 用于打开 SqlSession。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Core Objects"
    ]
  },
  {
    "id": "MB-G-012",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "In Mapper XML, the namespace usually corresponds to ____.",
    "options": [
      {
        "key": "A",
        "text": "Database name"
      },
      {
        "key": "B",
        "text": "Mapper interface full qualified name"
      },
      {
        "key": "C",
        "text": "POJO property name"
      },
      {
        "key": "D",
        "text": "JDBC URL"
      }
    ],
    "answer": "B",
    "explanation": "namespace 通常写 Mapper 接口的全限定名，从而让接口方法和 XML SQL 绑定。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-013",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In Mapper XML, the id of a statement should usually match ____.",
    "options": [
      {
        "key": "A",
        "text": "Table name"
      },
      {
        "key": "B",
        "text": "Method name in Mapper interface"
      },
      {
        "key": "C",
        "text": "Database username"
      },
      {
        "key": "D",
        "text": "Package name"
      }
    ],
    "answer": "B",
    "explanation": "Mapper XML 中 select/insert/update/delete 的 id 一般对应 Mapper 接口方法名。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-014",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which placeholder is safer for user input because it uses prepared statement parameters?",
    "options": [
      {
        "key": "A",
        "text": "${name}"
      },
      {
        "key": "B",
        "text": "#{name}"
      },
      {
        "key": "C",
        "text": "@{name}"
      },
      {
        "key": "D",
        "text": "%{name}"
      }
    ],
    "answer": "B",
    "explanation": "#{ } 会被处理为预编译参数，可以防止大多数 SQL 注入；${ } 是字符串拼接。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-015",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which placeholder is often used when dynamically substituting table names or order by columns?",
    "options": [
      {
        "key": "A",
        "text": "#{ }"
      },
      {
        "key": "B",
        "text": "${ }"
      },
      {
        "key": "C",
        "text": "<if>"
      },
      {
        "key": "D",
        "text": "<where>"
      }
    ],
    "answer": "B",
    "explanation": "表名、列名等不能作为预编译参数时可使用 ${ }，但必须保证输入可信。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-016",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute specifies the Java type of input parameter in a select statement?",
    "options": [
      {
        "key": "A",
        "text": "resultType"
      },
      {
        "key": "B",
        "text": "parameterType"
      },
      {
        "key": "C",
        "text": "javaType"
      },
      {
        "key": "D",
        "text": "jdbcType"
      }
    ],
    "answer": "B",
    "explanation": "parameterType 用于指定输入参数类型；resultType/resultMap 用于指定结果映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-017",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute is used when the result can be directly mapped to a simple POJO type?",
    "options": [
      {
        "key": "A",
        "text": "resultType"
      },
      {
        "key": "B",
        "text": "parameterType"
      },
      {
        "key": "C",
        "text": "keyProperty"
      },
      {
        "key": "D",
        "text": "flushCache"
      }
    ],
    "answer": "A",
    "explanation": "resultType 适合简单映射；复杂字段映射、关联映射通常使用 resultMap。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-018",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which element is best for solving column-property mismatch and complex nested mapping?",
    "options": [
      {
        "key": "A",
        "text": "<resultMap>"
      },
      {
        "key": "B",
        "text": "<sql>"
      },
      {
        "key": "C",
        "text": "<include>"
      },
      {
        "key": "D",
        "text": "<foreach>"
      }
    ],
    "answer": "A",
    "explanation": "resultMap 可精确描述列和属性的映射，也支持 association、collection 等复杂关系。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-019",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which child element of resultMap is normally used for primary key mapping?",
    "options": [
      {
        "key": "A",
        "text": "<id>"
      },
      {
        "key": "B",
        "text": "<result>"
      },
      {
        "key": "C",
        "text": "<selectKey>"
      },
      {
        "key": "D",
        "text": "<property>"
      }
    ],
    "answer": "A",
    "explanation": "<id> 用于标识主键字段映射，<result> 用于普通字段映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-020",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which resultMap element is used for one-to-one association mapping?",
    "options": [
      {
        "key": "A",
        "text": "<collection>"
      },
      {
        "key": "B",
        "text": "<association>"
      },
      {
        "key": "C",
        "text": "<foreach>"
      },
      {
        "key": "D",
        "text": "<where>"
      }
    ],
    "answer": "B",
    "explanation": "association 用于一对一关系映射，collection 通常用于一对多集合映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-021",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML/SQL Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which resultMap element is used for one-to-many collection mapping?",
    "options": [
      {
        "key": "A",
        "text": "<collection>"
      },
      {
        "key": "B",
        "text": "<association>"
      },
      {
        "key": "C",
        "text": "<selectKey>"
      },
      {
        "key": "D",
        "text": "<trim>"
      }
    ],
    "answer": "A",
    "explanation": "collection 用于映射 List、Set 等集合属性，适合一对多关系。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Mapper XML/SQL Mapping"
    ]
  },
  {
    "id": "MB-G-022",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which dynamic SQL tag is used for conditional judgment?",
    "options": [
      {
        "key": "A",
        "text": "<if>"
      },
      {
        "key": "B",
        "text": "<sql>"
      },
      {
        "key": "C",
        "text": "<mapper>"
      },
      {
        "key": "D",
        "text": "<cache>"
      }
    ],
    "answer": "A",
    "explanation": "<if test='...'> 根据条件决定是否拼接某段 SQL。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-023",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which tag can automatically add WHERE and remove leading AND/OR?",
    "options": [
      {
        "key": "A",
        "text": "<set>"
      },
      {
        "key": "B",
        "text": "<where>"
      },
      {
        "key": "C",
        "text": "<foreach>"
      },
      {
        "key": "D",
        "text": "<resultMap>"
      }
    ],
    "answer": "B",
    "explanation": "<where> 会在有条件时自动添加 WHERE，并处理开头多余的 AND/OR。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-024",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which tag is most suitable for building an IN (...) clause from a list?",
    "options": [
      {
        "key": "A",
        "text": "<foreach>"
      },
      {
        "key": "B",
        "text": "<choose>"
      },
      {
        "key": "C",
        "text": "<trim>"
      },
      {
        "key": "D",
        "text": "<include>"
      }
    ],
    "answer": "A",
    "explanation": "<foreach> 可以遍历集合，常用于批量插入或 IN 条件拼接。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-025",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which dynamic SQL tag is similar to switch-case logic?",
    "options": [
      {
        "key": "A",
        "text": "<if>"
      },
      {
        "key": "B",
        "text": "<choose>"
      },
      {
        "key": "C",
        "text": "<where>"
      },
      {
        "key": "D",
        "text": "<bind>"
      }
    ],
    "answer": "B",
    "explanation": "<choose> 搭配 <when> 和 <otherwise>，实现类似 switch-case 的多分支逻辑。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-026",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which tag is commonly used in UPDATE statements to remove trailing commas?",
    "options": [
      {
        "key": "A",
        "text": "<set>"
      },
      {
        "key": "B",
        "text": "<where>"
      },
      {
        "key": "C",
        "text": "<foreach>"
      },
      {
        "key": "D",
        "text": "<cache>"
      }
    ],
    "answer": "A",
    "explanation": "<set> 会自动添加 SET 并去掉最后多余的逗号，适合动态更新字段。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-027",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which pair is used to define and reuse common SQL fragments?",
    "options": [
      {
        "key": "A",
        "text": "<sql> and <include>"
      },
      {
        "key": "B",
        "text": "<if> and <where>"
      },
      {
        "key": "C",
        "text": "<id> and <result>"
      },
      {
        "key": "D",
        "text": "<cache> and <flushCache>"
      }
    ],
    "answer": "A",
    "explanation": "<sql> 定义 SQL 片段，<include> 引用片段，减少重复代码。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL"
    ]
  },
  {
    "id": "MB-G-028",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Keys",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute enables JDBC generated keys in an insert statement?",
    "options": [
      {
        "key": "A",
        "text": "useGeneratedKeys"
      },
      {
        "key": "B",
        "text": "keyColumn"
      },
      {
        "key": "C",
        "text": "resultMap"
      },
      {
        "key": "D",
        "text": "parameterType"
      }
    ],
    "answer": "A",
    "explanation": "useGeneratedKeys='true' 可以启用自增主键回填。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Keys"
    ]
  },
  {
    "id": "MB-G-029",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Keys",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute receives the generated primary key value into the POJO property?",
    "options": [
      {
        "key": "A",
        "text": "keyProperty"
      },
      {
        "key": "B",
        "text": "resultType"
      },
      {
        "key": "C",
        "text": "namespace"
      },
      {
        "key": "D",
        "text": "fetchSize"
      }
    ],
    "answer": "A",
    "explanation": "keyProperty 指定主键回填到实体类的哪个属性。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Keys"
    ]
  },
  {
    "id": "MB-G-030",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Keys",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which tag can be used when a database does not support standard generated keys?",
    "options": [
      {
        "key": "A",
        "text": "<selectKey>"
      },
      {
        "key": "B",
        "text": "<where>"
      },
      {
        "key": "C",
        "text": "<include>"
      },
      {
        "key": "D",
        "text": "<typeAlias>"
      }
    ],
    "answer": "A",
    "explanation": "selectKey 可在 insert 前或后执行额外查询来获取主键。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Keys"
    ]
  },
  {
    "id": "MB-G-031",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "By default, when using openSession() without auto-commit, insert/update/delete usually require ____.",
    "options": [
      {
        "key": "A",
        "text": "rollback()"
      },
      {
        "key": "B",
        "text": "commit()"
      },
      {
        "key": "C",
        "text": "closeFactory()"
      },
      {
        "key": "D",
        "text": "flushCache()"
      }
    ],
    "answer": "B",
    "explanation": "非自动提交模式下，增删改操作后需要 commit() 才能真正提交事务。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-G-032",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What does rollback() do in MyBatis transaction control?",
    "options": [
      {
        "key": "A",
        "text": "Submit all changes"
      },
      {
        "key": "B",
        "text": "Cancel uncommitted changes"
      },
      {
        "key": "C",
        "text": "Create a new SqlSession"
      },
      {
        "key": "D",
        "text": "Enable second-level cache"
      }
    ],
    "answer": "B",
    "explanation": "rollback() 用于撤销当前事务中尚未提交的修改。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Transactions"
    ]
  },
  {
    "id": "MB-G-033",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "The first-level cache in MyBatis is associated with ____.",
    "options": [
      {
        "key": "A",
        "text": "SqlSession"
      },
      {
        "key": "B",
        "text": "Mapper namespace"
      },
      {
        "key": "C",
        "text": "Database server"
      },
      {
        "key": "D",
        "text": "Spring MVC request"
      }
    ],
    "answer": "A",
    "explanation": "一级缓存默认属于同一个 SqlSession 范围。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-G-034",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "The second-level cache in MyBatis is associated with ____.",
    "options": [
      {
        "key": "A",
        "text": "SqlSession only"
      },
      {
        "key": "B",
        "text": "Mapper namespace"
      },
      {
        "key": "C",
        "text": "JDBC driver"
      },
      {
        "key": "D",
        "text": "Controller method"
      }
    ],
    "answer": "B",
    "explanation": "二级缓存以 Mapper namespace 为单位，需要在 Mapper 中配置 <cache> 等开启。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-G-035",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which tag enables second-level cache for a Mapper XML file?",
    "options": [
      {
        "key": "A",
        "text": "<cache>"
      },
      {
        "key": "B",
        "text": "<settings>"
      },
      {
        "key": "C",
        "text": "<plugins>"
      },
      {
        "key": "D",
        "text": "<environment>"
      }
    ],
    "answer": "A",
    "explanation": "在 Mapper XML 中配置 <cache> 可启用该 namespace 的二级缓存。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-G-036",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache/Lazy Loading",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which statement attribute controls whether a select uses second-level cache?",
    "options": [
      {
        "key": "A",
        "text": "useCache"
      },
      {
        "key": "B",
        "text": "flushCache"
      },
      {
        "key": "C",
        "text": "lazyLoad"
      },
      {
        "key": "D",
        "text": "fetchType"
      }
    ],
    "answer": "A",
    "explanation": "useCache 控制查询是否使用二级缓存；flushCache 控制执行后是否清空缓存。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Cache/Lazy Loading"
    ]
  },
  {
    "id": "MB-G-037",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Logging",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which setting can explicitly choose a logging implementation in MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "logImpl"
      },
      {
        "key": "B",
        "text": "logType"
      },
      {
        "key": "C",
        "text": "loggerFactory"
      },
      {
        "key": "D",
        "text": "logLevel"
      }
    ],
    "answer": "A",
    "explanation": "logImpl 用于指定 MyBatis 日志实现，如 STDOUT_LOGGING、LOG4J2 等。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Logging"
    ]
  },
  {
    "id": "MB-G-038",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Spring Integration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation scans Mapper interfaces in a Spring Boot project?",
    "options": [
      {
        "key": "A",
        "text": "@ComponentScan"
      },
      {
        "key": "B",
        "text": "@MapperScan"
      },
      {
        "key": "C",
        "text": "@EnableWebMvc"
      },
      {
        "key": "D",
        "text": "@RequestMapping"
      }
    ],
    "answer": "B",
    "explanation": "@MapperScan 用于扫描 MyBatis Mapper 接口并注册为 Spring Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Spring Integration"
    ]
  },
  {
    "id": "MB-G-039",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Spring Integration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring-managed class is commonly used to provide thread-safe SqlSession operations?",
    "options": [
      {
        "key": "A",
        "text": "SqlSessionTemplate"
      },
      {
        "key": "B",
        "text": "SqlSessionFactoryBuilder"
      },
      {
        "key": "C",
        "text": "MapperRegistry"
      },
      {
        "key": "D",
        "text": "JdbcDriver"
      }
    ],
    "answer": "A",
    "explanation": "SqlSessionTemplate 由 MyBatis-Spring 提供，是线程安全的 SqlSession 操作模板。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Spring Integration"
    ]
  },
  {
    "id": "MB-G-040",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Spring Integration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "When Spring manages transactions, which annotation is commonly used on service methods?",
    "options": [
      {
        "key": "A",
        "text": "@Transactional"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "A",
    "explanation": "@Transactional 用于声明式事务管理，常放在 service 层方法或类上。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Spring Integration"
    ]
  },
  {
    "id": "MB-G-041",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "What is the correct position of PageHelper.startPage(pageNum, pageSize)?",
    "options": [
      {
        "key": "A",
        "text": "After the mapper query"
      },
      {
        "key": "B",
        "text": "Immediately before the mapper query"
      },
      {
        "key": "C",
        "text": "Inside mapper XML"
      },
      {
        "key": "D",
        "text": "After commit()"
      }
    ],
    "answer": "B",
    "explanation": "startPage 必须紧挨着要分页的 Mapper 查询，否则分页上下文可能被其他查询消耗。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-G-042",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What does PageInfo usually wrap?",
    "options": [
      {
        "key": "A",
        "text": "Only database connection"
      },
      {
        "key": "B",
        "text": "List data and pagination metadata"
      },
      {
        "key": "C",
        "text": "Only SQL text"
      },
      {
        "key": "D",
        "text": "Only Mapper XML"
      }
    ],
    "answer": "B",
    "explanation": "PageInfo 封装分页数据列表以及页码、总数、总页数等分页信息。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-G-043",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which PageHelper property specifies the database dialect?",
    "options": [
      {
        "key": "A",
        "text": "helperDialect"
      },
      {
        "key": "B",
        "text": "reasonable"
      },
      {
        "key": "C",
        "text": "supportMethodsArguments"
      },
      {
        "key": "D",
        "text": "pageSizeZero"
      }
    ],
    "answer": "A",
    "explanation": "helperDialect 指定数据库方言，如 mysql、oracle、sqlserver。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-G-044",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination/PageHelper",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "If reasonable=true and pageNum is greater than total pages, PageHelper will usually return ____.",
    "options": [
      {
        "key": "A",
        "text": "An empty exception"
      },
      {
        "key": "B",
        "text": "The last valid page"
      },
      {
        "key": "C",
        "text": "The first valid page"
      },
      {
        "key": "D",
        "text": "All records"
      }
    ],
    "answer": "B",
    "explanation": "合理化分页开启后，超出范围的页码会被修正到最后一页。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "Pagination/PageHelper"
    ]
  },
  {
    "id": "MB-G-045",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What is the main purpose of MyBatis Generator (MBG)?",
    "options": [
      {
        "key": "A",
        "text": "Generate HTML pages"
      },
      {
        "key": "B",
        "text": "Generate Java model, Mapper interfaces, and XML based on database tables"
      },
      {
        "key": "C",
        "text": "Generate Redis keys"
      },
      {
        "key": "D",
        "text": "Generate Spring MVC views"
      }
    ],
    "answer": "B",
    "explanation": "MBG 可以根据数据库表自动生成实体类、Mapper 接口和映射 XML。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-046",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which MBG file usually contains generator configuration such as jdbcConnection and javaModelGenerator?",
    "options": [
      {
        "key": "A",
        "text": "generatorConfig.xml"
      },
      {
        "key": "B",
        "text": "mybatis-config.xml"
      },
      {
        "key": "C",
        "text": "application.yml"
      },
      {
        "key": "D",
        "text": "pom.xml"
      }
    ],
    "answer": "A",
    "explanation": "generatorConfig.xml 是 MBG 的核心配置文件。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-047",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which MBG element configures database connection information?",
    "options": [
      {
        "key": "A",
        "text": "<jdbcConnection>"
      },
      {
        "key": "B",
        "text": "<javaClientGenerator>"
      },
      {
        "key": "C",
        "text": "<sqlMapGenerator>"
      },
      {
        "key": "D",
        "text": "<table>"
      }
    ],
    "answer": "A",
    "explanation": "<jdbcConnection> 用于配置数据库驱动、连接地址、用户名、密码。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-048",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which MBG element specifies the tables to generate code for?",
    "options": [
      {
        "key": "A",
        "text": "<table>"
      },
      {
        "key": "B",
        "text": "<mapper>"
      },
      {
        "key": "C",
        "text": "<property>"
      },
      {
        "key": "D",
        "text": "<plugin>"
      }
    ],
    "answer": "A",
    "explanation": "<table> 用于指定需要逆向生成的数据库表。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-049",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MBG generated object is commonly used for dynamic conditional queries?",
    "options": [
      {
        "key": "A",
        "text": "Example class"
      },
      {
        "key": "B",
        "text": "Controller class"
      },
      {
        "key": "C",
        "text": "ViewResolver"
      },
      {
        "key": "D",
        "text": "DispatcherServlet"
      }
    ],
    "answer": "A",
    "explanation": "Example 类用于构造动态查询条件，如 andNameEqualTo、andAgeGreaterThan 等。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "MBG"
    ]
  },
  {
    "id": "MB-G-050",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ORM/JDBC Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Compared with full ORM frameworks, MyBatis gives developers more control over ____.",
    "options": [
      {
        "key": "A",
        "text": "HTML templates"
      },
      {
        "key": "B",
        "text": "SQL statements"
      },
      {
        "key": "C",
        "text": "Servlet lifecycle"
      },
      {
        "key": "D",
        "text": "Browser cache"
      }
    ],
    "answer": "B",
    "explanation": "MyBatis 的半 ORM 特点是开发者自己编写 SQL，因此更容易优化复杂查询。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "mybatis",
      "ORM/JDBC Basics"
    ]
  },
  {
    "id": "MB-PN-001",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Introduction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: A programming technique that bridges Java objects and relational database tables?",
    "options": [
      {
        "key": "A",
        "text": "Servlet container"
      },
      {
        "key": "B",
        "text": "JDBC driver"
      },
      {
        "key": "C",
        "text": "View resolver"
      },
      {
        "key": "D",
        "text": "ORM"
      }
    ],
    "answer": "D",
    "explanation": "ORM 用来解决 Java 对象模型和关系型数据库表之间的转换问题。 资料原句：ORM bridges object-oriented Java code and relational database tables.",
    "noteQuote": "ORM bridges object-oriented Java code and relational database tables.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Introduction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-002",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Introduction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: SQL is automatically generated from Java class-to-table mapping definitions?",
    "options": [
      {
        "key": "A",
        "text": "Mapper XML"
      },
      {
        "key": "B",
        "text": "Dynamic SQL"
      },
      {
        "key": "C",
        "text": "Pure ORM"
      },
      {
        "key": "D",
        "text": "Semi-ORM"
      }
    ],
    "answer": "C",
    "explanation": "Hibernate 属于 Pure ORM，开发者通常不直接写 SQL。 资料原句：Pure ORM: SQL auto-generated from Java class-to-table mapping definitions.",
    "noteQuote": "Pure ORM: SQL auto-generated from Java class-to-table mapping definitions.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Introduction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-003",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Introduction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Developer writes SQL manually while the framework maps ResultSet to Java objects?",
    "options": [
      {
        "key": "A",
        "text": "Pure ORM"
      },
      {
        "key": "B",
        "text": "Full-text search"
      },
      {
        "key": "C",
        "text": "JPA reference implementation"
      },
      {
        "key": "D",
        "text": "Semi-ORM"
      }
    ],
    "answer": "D",
    "explanation": "MyBatis 是半 ORM，核心优势是保留 SQL 控制权。 资料原句：Semi-ORM: Developer writes SQL manually. Framework handles ResultSet to Java object mapping.",
    "noteQuote": "Semi-ORM: Developer writes SQL manually. Framework handles ResultSet to Java object mapping.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Introduction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-004",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Introduction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The ability of a Java object to be saved to and reloaded from a database?",
    "options": [
      {
        "key": "A",
        "text": "Serialization only"
      },
      {
        "key": "B",
        "text": "Request mapping"
      },
      {
        "key": "C",
        "text": "Persistence"
      },
      {
        "key": "D",
        "text": "Lazy loading"
      }
    ],
    "answer": "C",
    "explanation": "能保存到数据库并重新加载的对象称为持久化对象。 资料原句：The core concept is persistence: when a Java object can be saved to and reloaded from a database.",
    "noteQuote": "The core concept is persistence: when a Java object can be saved to and reloaded from a database.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Introduction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-005",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The layer that exposes external database operation interfaces such as SqlSession and Mapper interfaces?",
    "options": [
      {
        "key": "A",
        "text": "Data Processing Layer"
      },
      {
        "key": "B",
        "text": "Basic Support Layer"
      },
      {
        "key": "C",
        "text": "Presentation Layer"
      },
      {
        "key": "D",
        "text": "API Interface Layer"
      }
    ],
    "answer": "D",
    "explanation": "API 接口层负责接收外部数据库操作请求并向下转发。 资料原句：API Interface Layer: External interface for DB operations.",
    "noteQuote": "API Interface Layer: External interface for DB operations.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-006",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The layer responsible for SQL search, analysis, execution, and result-set mapping?",
    "options": [
      {
        "key": "A",
        "text": "Basic Support Layer"
      },
      {
        "key": "B",
        "text": "DataSource Layer"
      },
      {
        "key": "C",
        "text": "MVC View Layer"
      },
      {
        "key": "D",
        "text": "Data Processing Layer"
      }
    ],
    "answer": "D",
    "explanation": "数据处理层负责 SQL 解析、执行和结果映射。 资料原句：Data Processing Layer: SQL search, analysis, execution, and result-set mapping.",
    "noteQuote": "Data Processing Layer: SQL search, analysis, execution, and result-set mapping.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-007",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The layer responsible for connection management, transaction, config loading, and caching?",
    "options": [
      {
        "key": "A",
        "text": "Model Layer"
      },
      {
        "key": "B",
        "text": "Controller Layer"
      },
      {
        "key": "C",
        "text": "Basic Support Layer"
      },
      {
        "key": "D",
        "text": "DAO Interface Layer"
      }
    ],
    "answer": "C",
    "explanation": "基础支持层提供连接、事务、缓存等底层支撑。 资料原句：Basic Support Layer: Connection management, transaction, config loading, caching.",
    "noteQuote": "Basic Support Layer: Connection management, transaction, config loading, caching.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-008",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The first execution step that loads XML or annotations into MappedStatement objects?",
    "options": [
      {
        "key": "A",
        "text": "SQL Execution"
      },
      {
        "key": "B",
        "text": "SQL Parsing"
      },
      {
        "key": "C",
        "text": "Load Configuration"
      },
      {
        "key": "D",
        "text": "Result Mapping"
      }
    ],
    "answer": "C",
    "explanation": "MyBatis 四步执行流程第一步是加载配置。 资料原句：Step 1: Load Configuration — XML file and/or Java annotations load SQL into MappedStatement objects.",
    "noteQuote": "Step 1: Load Configuration — XML file and/or Java annotations load SQL into MappedStatement objects.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-009",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The step where MyBatis finds the MappedStatement and resolves the final SQL string?",
    "options": [
      {
        "key": "A",
        "text": "SQL Parsing"
      },
      {
        "key": "B",
        "text": "Result Mapping"
      },
      {
        "key": "C",
        "text": "Load Configuration"
      },
      {
        "key": "D",
        "text": "Mapper Scanning"
      }
    ],
    "answer": "A",
    "explanation": "SQL 解析阶段根据 Statement ID 和参数对象得到最终 SQL。 资料原句：Step 2: SQL Parsing — MyBatis finds the MappedStatement and resolves the final SQL string.",
    "noteQuote": "Step 2: SQL Parsing — MyBatis finds the MappedStatement and resolves the final SQL string.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-010",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The step where raw DB results are converted to HashMap, JavaBean, or primitive types?",
    "options": [
      {
        "key": "A",
        "text": "Connection Pooling"
      },
      {
        "key": "B",
        "text": "Mapper Registration"
      },
      {
        "key": "C",
        "text": "Result Mapping"
      },
      {
        "key": "D",
        "text": "SQL Parsing"
      }
    ],
    "answer": "C",
    "explanation": "查询结果会根据 resultMap/resultType 映射成 Java 对象或基本类型。 资料原句：Step 4: Result Mapping — Raw DB results are converted to HashMap, JavaBean, or primitive types.",
    "noteQuote": "Step 4: Result Mapping — Raw DB results are converted to HashMap, JavaBean, or primitive types.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-011",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SqlSession",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Single-use component that builds SqlSessionFactory from XML config or Java Configuration object?",
    "options": [
      {
        "key": "A",
        "text": "Mapper Proxy"
      },
      {
        "key": "B",
        "text": "SqlSession"
      },
      {
        "key": "C",
        "text": "ResultHandler"
      },
      {
        "key": "D",
        "text": "SqlSessionFactoryBuilder"
      }
    ],
    "answer": "D",
    "explanation": "SqlSessionFactoryBuilder 创建完工厂后即可丢弃。 资料原句：SqlSessionFactoryBuilder: Builds SqlSessionFactory... Single-use.",
    "noteQuote": "SqlSessionFactoryBuilder: Builds SqlSessionFactory... Single-use.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SqlSession",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-012",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SqlSession",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Singleton component that creates SqlSession instances on demand?",
    "options": [
      {
        "key": "A",
        "text": "MappedStatement"
      },
      {
        "key": "B",
        "text": "Executor"
      },
      {
        "key": "C",
        "text": "SqlSession"
      },
      {
        "key": "D",
        "text": "SqlSessionFactory"
      }
    ],
    "answer": "D",
    "explanation": "SqlSessionFactory 应用生命周期内通常只创建一次。 资料原句：SqlSessionFactory: Singleton — one instance for the entire application lifetime.",
    "noteQuote": "SqlSessionFactory: Singleton — one instance for the entire application lifetime.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SqlSession",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-013",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SqlSession",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: One per unit of work and not thread-safe?",
    "options": [
      {
        "key": "A",
        "text": "TypeHandler"
      },
      {
        "key": "B",
        "text": "SqlSessionFactory"
      },
      {
        "key": "C",
        "text": "SqlSession"
      },
      {
        "key": "D",
        "text": "Configuration"
      }
    ],
    "answer": "C",
    "explanation": "SqlSession 不是线程安全的，必须用完关闭。 资料原句：SqlSession: One per unit of work... NOT thread-safe. Must be opened, used, and closed.",
    "noteQuote": "SqlSession: One per unit of work... NOT thread-safe. Must be opened, used, and closed.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SqlSession",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-014",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SqlSession",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Type-safe proxy returned by session.getMapper(MyMapper.class)?",
    "options": [
      {
        "key": "A",
        "text": "TypeAlias"
      },
      {
        "key": "B",
        "text": "Plugin"
      },
      {
        "key": "C",
        "text": "ResultMap"
      },
      {
        "key": "D",
        "text": "Mapper Interface"
      }
    ],
    "answer": "D",
    "explanation": "Mapper 接口代理比字符串式调用更类型安全。 资料原句：Mapper Interface: Type-safe proxy returned by session.getMapper(MyMapper.class).",
    "noteQuote": "Mapper Interface: Type-safe proxy returned by session.getMapper(MyMapper.class).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SqlSession",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-015",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mapper XML element used to query data?",
    "options": [
      {
        "key": "A",
        "text": "<select>"
      },
      {
        "key": "B",
        "text": "<insert>"
      },
      {
        "key": "C",
        "text": "<delete>"
      },
      {
        "key": "D",
        "text": "<update>"
      }
    ],
    "answer": "A",
    "explanation": "<select> 用于查询数据。 资料原句：<select>: Query data.",
    "noteQuote": "<select>: Query data.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-016",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mapper XML element used to insert records?",
    "options": [
      {
        "key": "A",
        "text": "<sql>"
      },
      {
        "key": "B",
        "text": "<insert>"
      },
      {
        "key": "C",
        "text": "<resultMap>"
      },
      {
        "key": "D",
        "text": "<select>"
      }
    ],
    "answer": "B",
    "explanation": "<insert> 用于插入记录，可配合 useGeneratedKeys。 资料原句：<insert>: Insert records.",
    "noteQuote": "<insert>: Insert records.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-017",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Reusable SQL fragment referenced using <include refid=\"id\"/>?",
    "options": [
      {
        "key": "A",
        "text": "<trim>"
      },
      {
        "key": "B",
        "text": "<constructor>"
      },
      {
        "key": "C",
        "text": "<cache>"
      },
      {
        "key": "D",
        "text": "<sql>"
      }
    ],
    "answer": "D",
    "explanation": "<sql> 用来抽取可复用 SQL 片段。 资料原句：<sql>: Reusable fragment — referenced via <include refid=\"id\"/>.",
    "noteQuote": "<sql>: Reusable fragment — referenced via <include refid=\"id\"/>.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-018",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Element used for column-to-property mapping and complex nested mapping?",
    "options": [
      {
        "key": "A",
        "text": "<settings>"
      },
      {
        "key": "B",
        "text": "<mappers>"
      },
      {
        "key": "C",
        "text": "<resultMap>"
      },
      {
        "key": "D",
        "text": "<properties>"
      }
    ],
    "answer": "C",
    "explanation": "resultMap 是 MyBatis 中最强的结果映射元素。 资料原句：<resultMap>: Column-to-property mapping.",
    "noteQuote": "<resultMap>: Column-to-property mapping.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-019",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Security",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: PreparedStatement binding that is safe from SQL injection?",
    "options": [
      {
        "key": "A",
        "text": "%{}"
      },
      {
        "key": "B",
        "text": "@{}"
      },
      {
        "key": "C",
        "text": "${}"
      },
      {
        "key": "D",
        "text": "#{}"
      }
    ],
    "answer": "D",
    "explanation": "#{} 会变成 ? 占位符，适合用户输入的数据值。 资料原句：#{} → PreparedStatement binding (?). SAFE from SQL injection.",
    "noteQuote": "#{} → PreparedStatement binding (?). SAFE from SQL injection.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Security",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-020",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Security",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Raw string substitution that is unsafe for user input?",
    "options": [
      {
        "key": "A",
        "text": "${}"
      },
      {
        "key": "B",
        "text": "#{}"
      },
      {
        "key": "C",
        "text": "@Param"
      },
      {
        "key": "D",
        "text": "resultMap"
      }
    ],
    "answer": "A",
    "explanation": "${} 直接拼接 SQL，必须只用于白名单表名或列名。 资料原句：${identifier} → Raw string substitution into SQL. UNSAFE for user input.",
    "noteQuote": "${identifier} → Raw string substitution into SQL. UNSAFE for user input.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Security",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-021",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The central configuration file of MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "mybatis-config.xml"
      },
      {
        "key": "B",
        "text": "web.xml"
      },
      {
        "key": "C",
        "text": "dispatcher-servlet.xml"
      },
      {
        "key": "D",
        "text": "pom.xml"
      }
    ],
    "answer": "A",
    "explanation": "MyBatis 的核心主配置文件是 mybatis-config.xml。 资料原句：mybatis-config.xml is the central configuration file.",
    "noteQuote": "mybatis-config.xml is the central configuration file.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-022",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The root element of mybatis-config.xml?",
    "options": [
      {
        "key": "A",
        "text": "<configuration>"
      },
      {
        "key": "B",
        "text": "<sqlMap>"
      },
      {
        "key": "C",
        "text": "<mapper>"
      },
      {
        "key": "D",
        "text": "<beans>"
      }
    ],
    "answer": "A",
    "explanation": "MyBatis 主配置根标签是 <configuration>。 资料原句：Root element: <configuration>.",
    "noteQuote": "Root element: <configuration>.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-023",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Element used to externalise database credentials?",
    "options": [
      {
        "key": "A",
        "text": "<settings>"
      },
      {
        "key": "B",
        "text": "<plugins>"
      },
      {
        "key": "C",
        "text": "<mappers>"
      },
      {
        "key": "D",
        "text": "<properties>"
      }
    ],
    "answer": "D",
    "explanation": "<properties> 可引入外部配置文件，避免硬编码数据库账号密码。 资料原句：<properties>: Externalise DB credentials.",
    "noteQuote": "<properties>: Externalise DB credentials.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-024",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: The property source with the highest priority?",
    "options": [
      {
        "key": "A",
        "text": "external file"
      },
      {
        "key": "B",
        "text": "system environment variables"
      },
      {
        "key": "C",
        "text": "programmatic properties"
      },
      {
        "key": "D",
        "text": "inline properties"
      }
    ],
    "answer": "C",
    "explanation": "属性优先级：内联 < 外部文件 < 程序传入。 资料原句：Priority: inline < external file < programmatic (highest).",
    "noteQuote": "Priority: inline < external file < programmatic (highest).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-025",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Element that controls MyBatis runtime behaviour such as cache and lazy loading?",
    "options": [
      {
        "key": "A",
        "text": "<typeHandlers>"
      },
      {
        "key": "B",
        "text": "<settings>"
      },
      {
        "key": "C",
        "text": "<typeAliases>"
      },
      {
        "key": "D",
        "text": "<objectFactory>"
      }
    ],
    "answer": "B",
    "explanation": "<settings> 控制运行行为，如缓存、延迟加载、日志等。 资料原句：<settings>: Control MyBatis runtime behaviour — caching, lazy loading, key generation, logging, etc.",
    "noteQuote": "<settings>: Control MyBatis runtime behaviour — caching, lazy loading, key generation, logging, etc.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-026",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Global setting that enables L2 cache infrastructure by default?",
    "options": [
      {
        "key": "A",
        "text": "lazyLoadingEnabled"
      },
      {
        "key": "B",
        "text": "jdbcTypeForNull"
      },
      {
        "key": "C",
        "text": "cacheEnabled"
      },
      {
        "key": "D",
        "text": "logImpl"
      }
    ],
    "answer": "C",
    "explanation": "cacheEnabled 是二级缓存基础设施的全局开关，默认 true。 资料原句：cacheEnabled: true — enables L2 cache infrastructure globally.",
    "noteQuote": "cacheEnabled: true — enables L2 cache infrastructure globally.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-027",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Setting used to retrieve AUTO_INCREMENT keys after INSERT?",
    "options": [
      {
        "key": "A",
        "text": "defaultStatementTimeout"
      },
      {
        "key": "B",
        "text": "autoMappingBehavior"
      },
      {
        "key": "C",
        "text": "mapUnderscoreToCamelCase"
      },
      {
        "key": "D",
        "text": "useGeneratedKeys"
      }
    ],
    "answer": "D",
    "explanation": "useGeneratedKeys=true 可取回自增主键。 资料原句：useGeneratedKeys: set true to retrieve AUTO_INCREMENT keys after INSERT.",
    "noteQuote": "useGeneratedKeys: set true to retrieve AUTO_INCREMENT keys after INSERT.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-028",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Setting that defers sub-select queries until the associated property is accessed?",
    "options": [
      {
        "key": "A",
        "text": "cacheEnabled"
      },
      {
        "key": "B",
        "text": "logImpl"
      },
      {
        "key": "C",
        "text": "lazyLoadingEnabled"
      },
      {
        "key": "D",
        "text": "jdbcTypeForNull"
      }
    ],
    "answer": "C",
    "explanation": "lazyLoadingEnabled 默认 false，开启后可延迟加载关联查询。 资料原句：lazyLoadingEnabled: false — set true to defer sub-select queries.",
    "noteQuote": "lazyLoadingEnabled: false — set true to defer sub-select queries.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-029",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Setting that maps student_name to studentName automatically?",
    "options": [
      {
        "key": "A",
        "text": "multipleResultSetsEnabled"
      },
      {
        "key": "B",
        "text": "defaultFetchSize"
      },
      {
        "key": "C",
        "text": "mapUnderscoreToCamelCase"
      },
      {
        "key": "D",
        "text": "autoMappingBehavior"
      }
    ],
    "answer": "C",
    "explanation": "该设置自动把下划线列名映射到驼峰属性。 资料原句：mapUnderscoreToCamelCase: auto-map student_name → studentName.",
    "noteQuote": "mapUnderscoreToCamelCase: auto-map student_name → studentName.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-030",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Setting used to specify JDBC type for null parameters?",
    "options": [
      {
        "key": "A",
        "text": "jdbcTypeForNull"
      },
      {
        "key": "B",
        "text": "defaultStatementTimeout"
      },
      {
        "key": "C",
        "text": "useCache"
      },
      {
        "key": "D",
        "text": "flushCache"
      }
    ],
    "answer": "A",
    "explanation": "对 Oracle 等数据库，null 参数常需要指定 jdbcTypeForNull。 资料原句：jdbcTypeForNull: set to NULL for Oracle.",
    "noteQuote": "jdbcTypeForNull: set to NULL for Oracle.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-031",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "TypeHandlers",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Component that converts between Java types and JDBC database types?",
    "options": [
      {
        "key": "A",
        "text": "ViewResolver"
      },
      {
        "key": "B",
        "text": "TypeHandler"
      },
      {
        "key": "C",
        "text": "HandlerMapping"
      },
      {
        "key": "D",
        "text": "ObjectFactory"
      }
    ],
    "answer": "B",
    "explanation": "TypeHandler 负责 Java 类型与 JDBC 类型之间转换。 资料原句：A TypeHandler converts between Java types and JDBC database types.",
    "noteQuote": "A TypeHandler converts between Java types and JDBC database types.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "TypeHandlers",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-032",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "TypeHandlers",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Default enum handler that stores enum constant NAME as VARCHAR?",
    "options": [
      {
        "key": "A",
        "text": "EnumTypeHandler"
      },
      {
        "key": "B",
        "text": "ObjectTypeHandler"
      },
      {
        "key": "C",
        "text": "StringTypeHandler"
      },
      {
        "key": "D",
        "text": "EnumOrdinalTypeHandler"
      }
    ],
    "answer": "A",
    "explanation": "默认枚举处理器存名称，如 MALE。 资料原句：EnumTypeHandler (default): Stores enum constant NAME as VARCHAR.",
    "noteQuote": "EnumTypeHandler (default): Stores enum constant NAME as VARCHAR.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "TypeHandlers",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-033",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "TypeHandlers",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Enum handler that stores enum ordinal as integer and is fragile if enum order changes?",
    "options": [
      {
        "key": "A",
        "text": "EnumOrdinalTypeHandler"
      },
      {
        "key": "B",
        "text": "EnumTypeHandler"
      },
      {
        "key": "C",
        "text": "DateTypeHandler"
      },
      {
        "key": "D",
        "text": "MapTypeHandler"
      }
    ],
    "answer": "A",
    "explanation": "ordinal 存序号，枚举顺序变化会破坏数据含义。 资料原句：EnumOrdinalTypeHandler: Stores enum ORDINAL as integer. Fragile.",
    "noteQuote": "EnumOrdinalTypeHandler: Stores enum ORDINAL as integer. Fragile.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "TypeHandlers",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-034",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "DataSource",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: DataSource strategy that creates a new JDBC connection per operation?",
    "options": [
      {
        "key": "A",
        "text": "POOLED"
      },
      {
        "key": "B",
        "text": "C3P0"
      },
      {
        "key": "C",
        "text": "UNPOOLED"
      },
      {
        "key": "D",
        "text": "JNDI"
      }
    ],
    "answer": "C",
    "explanation": "UNPOOLED 每次操作新建连接，适合演示或小脚本。 资料原句：UNPOOLED: New JDBC connection per operation. Slow.",
    "noteQuote": "UNPOOLED: New JDBC connection per operation. Slow.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "DataSource",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-035",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "DataSource",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Reusable connection pool recommended for production systems?",
    "options": [
      {
        "key": "A",
        "text": "UNPOOLED"
      },
      {
        "key": "B",
        "text": "JNDI only"
      },
      {
        "key": "C",
        "text": "POOLED"
      },
      {
        "key": "D",
        "text": "MANAGED"
      }
    ],
    "answer": "C",
    "explanation": "POOLED 复用连接，适合生产。 资料原句：POOLED: Reusable connection pool. All production systems recommended.",
    "noteQuote": "POOLED: Reusable connection pool. All production systems recommended.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "DataSource",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-036",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transaction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Transaction manager where the application calls commit() or rollback() explicitly?",
    "options": [
      {
        "key": "A",
        "text": "MANAGED"
      },
      {
        "key": "B",
        "text": "JTA only"
      },
      {
        "key": "C",
        "text": "Servlet transaction manager"
      },
      {
        "key": "D",
        "text": "JDBC transaction manager"
      }
    ],
    "answer": "D",
    "explanation": "独立 MyBatis 通常使用 JDBC 事务管理。 资料原句：JDBC: Application manages explicit commit()/rollback() calls.",
    "noteQuote": "JDBC: Application manages explicit commit()/rollback() calls.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Transaction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-037",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transaction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Transaction manager where the container manages the full lifecycle and MyBatis does nothing?",
    "options": [
      {
        "key": "A",
        "text": "JDBC"
      },
      {
        "key": "B",
        "text": "MANAGED transaction manager"
      },
      {
        "key": "C",
        "text": "POOLED"
      },
      {
        "key": "D",
        "text": "UNPOOLED"
      }
    ],
    "answer": "B",
    "explanation": "MANAGED 适合容器管理事务环境。 资料原句：MANAGED: Container manages full transaction lifecycle. MyBatis does nothing.",
    "noteQuote": "MANAGED: Container manages full transaction lifecycle. MyBatis does nothing.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Transaction",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-038",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper Registration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Most common way to register an XML mapper file on the classpath?",
    "options": [
      {
        "key": "A",
        "text": "<mapper resource>"
      },
      {
        "key": "B",
        "text": "<mapper class>"
      },
      {
        "key": "C",
        "text": "<mapper url>"
      },
      {
        "key": "D",
        "text": "<package>"
      }
    ],
    "answer": "A",
    "explanation": "resource 从 classpath 注册 Mapper XML，最常见。 资料原句：<mapper resource=.../>: Most common — XML mapper file on classpath.",
    "noteQuote": "<mapper resource=.../>: Most common — XML mapper file on classpath.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper Registration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-039",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper Registration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mapper registration method that auto-scans all interfaces in a package?",
    "options": [
      {
        "key": "A",
        "text": "<mapper url>"
      },
      {
        "key": "B",
        "text": "<package>"
      },
      {
        "key": "C",
        "text": "<property>"
      },
      {
        "key": "D",
        "text": "<typeAlias>"
      }
    ],
    "answer": "B",
    "explanation": "大型项目常用 package 自动扫描 Mapper 接口。 资料原句：<package name=.../>: Auto-scan package — registers all interfaces.",
    "noteQuote": "<package name=.../>: Auto-scan package — registers all interfaces.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper Registration",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-040",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Attribute specifying the input parameter type, optional because MyBatis can infer it?",
    "options": [
      {
        "key": "A",
        "text": "flushCache"
      },
      {
        "key": "B",
        "text": "resultType"
      },
      {
        "key": "C",
        "text": "resultMap"
      },
      {
        "key": "D",
        "text": "parameterType"
      }
    ],
    "answer": "D",
    "explanation": "parameterType 指定输入类型，但很多情况下可推断。 资料原句：parameterType: Input type (optional — MyBatis can infer).",
    "noteQuote": "parameterType: Input type (optional — MyBatis can infer).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-041",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Return type for simple mapping; cannot be used with resultMap simultaneously?",
    "options": [
      {
        "key": "A",
        "text": "statementType"
      },
      {
        "key": "B",
        "text": "parameterType"
      },
      {
        "key": "C",
        "text": "resultType"
      },
      {
        "key": "D",
        "text": "namespace"
      }
    ],
    "answer": "C",
    "explanation": "resultType 与 resultMap 不能同时使用。 资料原句：resultType: Return type... Cannot use with resultMap simultaneously.",
    "noteQuote": "resultType: Return type... Cannot use with resultMap simultaneously.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-042",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Mapper XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Attribute whose default is PREPARED?",
    "options": [
      {
        "key": "A",
        "text": "keyProperty"
      },
      {
        "key": "B",
        "text": "flushCache"
      },
      {
        "key": "C",
        "text": "statementType"
      },
      {
        "key": "D",
        "text": "useCache"
      }
    ],
    "answer": "C",
    "explanation": "statementType 默认 PREPARED，也可为 STATEMENT/CALLABLE。 资料原句：statementType: PREPARED (default), STATEMENT, or CALLABLE.",
    "noteQuote": "statementType: PREPARED (default), STATEMENT, or CALLABLE.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Mapper XML",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-043",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ResultMap",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Child element that maps primary key and is critical for object identity in nested results?",
    "options": [
      {
        "key": "A",
        "text": "<collection>"
      },
      {
        "key": "B",
        "text": "<result>"
      },
      {
        "key": "C",
        "text": "<association>"
      },
      {
        "key": "D",
        "text": "<id>"
      }
    ],
    "answer": "D",
    "explanation": "嵌套映射中必须重视 <id>，否则可能重复创建对象。 资料原句：<id>: Maps primary key. Critical for object identity in nested results.",
    "noteQuote": "<id>: Maps primary key. Critical for object identity in nested results.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "ResultMap",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-044",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ResultMap",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Child element for one-to-one relationship mapping?",
    "options": [
      {
        "key": "A",
        "text": "<discriminator>"
      },
      {
        "key": "B",
        "text": "<association>"
      },
      {
        "key": "C",
        "text": "<constructor>"
      },
      {
        "key": "D",
        "text": "<collection>"
      }
    ],
    "answer": "B",
    "explanation": "association 用于 has-one/一对一关系。 资料原句：<association>: One-to-one (has-one) relationship.",
    "noteQuote": "<association>: One-to-one (has-one) relationship.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "ResultMap",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-045",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ResultMap",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Child element for one-to-many relationship mapping?",
    "options": [
      {
        "key": "A",
        "text": "<association>"
      },
      {
        "key": "B",
        "text": "<collection>"
      },
      {
        "key": "C",
        "text": "<case>"
      },
      {
        "key": "D",
        "text": "<idArg>"
      }
    ],
    "answer": "B",
    "explanation": "collection 用于 has-many/一对多关系，ofType 指列表元素类型。 资料原句：<collection>: One-to-many (has-many) relationship. ofType specifies element type.",
    "noteQuote": "<collection>: One-to-many (has-many) relationship. ofType specifies element type.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "ResultMap",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-046",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ResultMap",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Association/collection loading style that can cause 1 + N queries?",
    "options": [
      {
        "key": "A",
        "text": "Auto Mapping"
      },
      {
        "key": "B",
        "text": "Nested Select"
      },
      {
        "key": "C",
        "text": "Lazy Mapping"
      },
      {
        "key": "D",
        "text": "Nested Results"
      }
    ],
    "answer": "B",
    "explanation": "Nested Select 有 N+1 查询风险。 资料原句：Nested Select: for 100 parent rows, MyBatis runs 1 + 100 = 101 queries.",
    "noteQuote": "Nested Select: for 100 parent rows, MyBatis runs 1 + 100 = 101 queries.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "ResultMap",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-047",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "ResultMap",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: JOIN-based mapping that fetches all data in a single SQL query?",
    "options": [
      {
        "key": "A",
        "text": "TypeHandler"
      },
      {
        "key": "B",
        "text": "Nested Select"
      },
      {
        "key": "C",
        "text": "Discriminator"
      },
      {
        "key": "D",
        "text": "Nested Results"
      }
    ],
    "answer": "D",
    "explanation": "生产环境复杂关联更推荐 JOIN + Nested Results。 资料原句：Nested Results (JOIN): fetches all data in a SINGLE SQL query.",
    "noteQuote": "Nested Results (JOIN): fetches all data in a SINGLE SQL query.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "ResultMap",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-048",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Auto Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Default auto-mapping level that skips nested association/collection columns?",
    "options": [
      {
        "key": "A",
        "text": "FULL"
      },
      {
        "key": "B",
        "text": "NONE"
      },
      {
        "key": "C",
        "text": "PARTIAL"
      },
      {
        "key": "D",
        "text": "STRICT"
      }
    ],
    "answer": "C",
    "explanation": "PARTIAL 是默认自动映射级别，最安全。 资料原句：PARTIAL (default): Auto-maps columns for top-level properties.",
    "noteQuote": "PARTIAL (default): Auto-maps columns for top-level properties.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Auto Mapping",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-049",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Auto Mapping",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Auto-mapping level that includes joined columns and is risky with overlapping column names?",
    "options": [
      {
        "key": "A",
        "text": "SAFE"
      },
      {
        "key": "B",
        "text": "FULL"
      },
      {
        "key": "C",
        "text": "PARTIAL"
      },
      {
        "key": "D",
        "text": "NONE"
      }
    ],
    "answer": "B",
    "explanation": "FULL 可能因多表都有 id 等列导致错误映射。 资料原句：FULL includes joined columns (risky).",
    "noteQuote": "FULL includes joined columns (risky).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Auto Mapping",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-050",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Dynamic SQL tag that conditionally includes a fragment when OGNL evaluates to true?",
    "options": [
      {
        "key": "A",
        "text": "<where>"
      },
      {
        "key": "B",
        "text": "<set>"
      },
      {
        "key": "C",
        "text": "<foreach>"
      },
      {
        "key": "D",
        "text": "<if>"
      }
    ],
    "answer": "D",
    "explanation": "<if> 是最常用的条件拼接标签。 资料原句：<if>: Conditionally include SQL fragment when OGNL condition evaluates to true.",
    "noteQuote": "<if>: Conditionally include SQL fragment when OGNL condition evaluates to true.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-051",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Dynamic SQL tag family that works like switch-case and executes only the first matching when?",
    "options": [
      {
        "key": "A",
        "text": "<foreach>"
      },
      {
        "key": "B",
        "text": "<where>"
      },
      {
        "key": "C",
        "text": "<trim>"
      },
      {
        "key": "D",
        "text": "<choose>"
      }
    ],
    "answer": "D",
    "explanation": "<choose><when><otherwise> 类似 switch-case。 资料原句：<choose><when><otherwise>: evaluates <when> blocks in order, executes ONLY the first match.",
    "noteQuote": "<choose><when><otherwise>: evaluates <when> blocks in order, executes ONLY the first match.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-052",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Tag that inserts WHERE only when inner content exists and strips leading AND/OR?",
    "options": [
      {
        "key": "A",
        "text": "<set>"
      },
      {
        "key": "B",
        "text": "<include>"
      },
      {
        "key": "C",
        "text": "<trim>"
      },
      {
        "key": "D",
        "text": "<where>"
      }
    ],
    "answer": "D",
    "explanation": "<where> 防止 WHERE AND 这种错误 SQL。 资料原句：<where>: Inserts WHERE keyword if inner content is non-empty. Automatically strips leading AND or OR.",
    "noteQuote": "<where>: Inserts WHERE keyword if inner content is non-empty. Automatically strips leading AND or OR.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-053",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Tag that inserts SET and strips trailing comma for UPDATE statements?",
    "options": [
      {
        "key": "A",
        "text": "<set>"
      },
      {
        "key": "B",
        "text": "<sql>"
      },
      {
        "key": "C",
        "text": "<foreach>"
      },
      {
        "key": "D",
        "text": "<where>"
      }
    ],
    "answer": "A",
    "explanation": "<set> 防止 UPDATE 中 SET 后尾逗号错误。 资料原句：<set>: Inserts SET keyword for UPDATE statements. Automatically strips trailing comma.",
    "noteQuote": "<set>: Inserts SET keyword for UPDATE statements. Automatically strips trailing comma.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-054",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Tag used to iterate List, array, or Map for IN clauses and batch INSERT?",
    "options": [
      {
        "key": "A",
        "text": "<foreach>"
      },
      {
        "key": "B",
        "text": "<bind>"
      },
      {
        "key": "C",
        "text": "<resultMap>"
      },
      {
        "key": "D",
        "text": "<trim>"
      }
    ],
    "answer": "A",
    "explanation": "<foreach> 常用于 IN 条件和批量插入。 资料原句：<foreach>: Iterate over List, array, or Map for IN clauses and batch INSERT operations.",
    "noteQuote": "<foreach>: Iterate over List, array, or Map for IN clauses and batch INSERT operations.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-055",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Dynamic SQL",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Supported boolean operators in MyBatis OGNL expressions?",
    "options": [
      {
        "key": "A",
        "text": "plus minus multiply"
      },
      {
        "key": "B",
        "text": "OGNL and/or/not"
      },
      {
        "key": "C",
        "text": "AND OR NOT only in SQL"
      },
      {
        "key": "D",
        "text": "&& || !"
      }
    ],
    "answer": "B",
    "explanation": "OGNL 中推荐使用 and / or / not，而不是 Java 的 && / || / !。 资料原句：OGNL operators: Use and / or / not — NOT && / || / !.",
    "noteQuote": "OGNL operators: Use and / or / not — NOT && / || / !.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Dynamic SQL",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-056",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SSM",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Combination of Spring, Spring MVC, and MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "SSM"
      },
      {
        "key": "B",
        "text": "Struts Spring MVC"
      },
      {
        "key": "C",
        "text": "Servlet-JSP-JDBC"
      },
      {
        "key": "D",
        "text": "Spring Security Maven"
      }
    ],
    "answer": "A",
    "explanation": "SSM = Spring + Spring MVC + MyBatis。 资料原句：SSM = Spring + Spring MVC + MyBatis.",
    "noteQuote": "SSM = Spring + Spring MVC + MyBatis.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SSM",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-057",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SSM",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Spring MVC front controller that intercepts HTTP requests?",
    "options": [
      {
        "key": "A",
        "text": "DispatcherServlet"
      },
      {
        "key": "B",
        "text": "SqlSessionFactory"
      },
      {
        "key": "C",
        "text": "Mapper XML"
      },
      {
        "key": "D",
        "text": "MySQL driver"
      }
    ],
    "answer": "A",
    "explanation": "在 SSM 流程中 DispatcherServlet 先拦截请求并寻找处理器。 资料原句：DispatcherServlet intercepts the request.",
    "noteQuote": "DispatcherServlet intercepts the request.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SSM",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-058",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "SSM",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Component that maps logical view name to physical JSP path?",
    "options": [
      {
        "key": "A",
        "text": "HandlerMapping"
      },
      {
        "key": "B",
        "text": "MapperScannerConfigurer"
      },
      {
        "key": "C",
        "text": "DataSource"
      },
      {
        "key": "D",
        "text": "InternalResourceViewResolver"
      }
    ],
    "answer": "D",
    "explanation": "ViewResolver 将 student_list 映射到 /WEB-INF/views/student_list.jsp。 资料原句：InternalResourceViewResolver maps logical view name to physical JSP path.",
    "noteQuote": "InternalResourceViewResolver maps logical view name to physical JSP path.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "SSM",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-059",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Maven",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Project file that stores all JAR dependencies?",
    "options": [
      {
        "key": "A",
        "text": "mybatis-config.xml"
      },
      {
        "key": "B",
        "text": "generatorConfig.xml"
      },
      {
        "key": "C",
        "text": "web.xml"
      },
      {
        "key": "D",
        "text": "pom.xml"
      }
    ],
    "answer": "D",
    "explanation": "Maven 项目的依赖统一写在 pom.xml。 资料原句：pom.xml: All JAR dependencies.",
    "noteQuote": "pom.xml: All JAR dependencies.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Maven",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-060",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Tool that introspects a schema and generates entity classes, XML Mapper files, and Mapper interfaces?",
    "options": [
      {
        "key": "A",
        "text": "DispatcherServlet"
      },
      {
        "key": "B",
        "text": "MyBatis Generator"
      },
      {
        "key": "C",
        "text": "Druid"
      },
      {
        "key": "D",
        "text": "PageHelper"
      }
    ],
    "answer": "B",
    "explanation": "MBG 用于生成标准单表 CRUD 代码。 资料原句：MBG introspects a database schema and automatically generates entity classes, XML Mapper files...",
    "noteQuote": "MBG introspects a database schema and automatically generates entity classes, XML Mapper files...",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-061",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mandatory MBG context element for database connection details?",
    "options": [
      {
        "key": "A",
        "text": "commentGenerator"
      },
      {
        "key": "B",
        "text": "plugin"
      },
      {
        "key": "C",
        "text": "table"
      },
      {
        "key": "D",
        "text": "jdbcConnection"
      }
    ],
    "answer": "D",
    "explanation": "MBG 的 jdbcConnection 是必须配置的数据库连接。 资料原句：jdbcConnection: 1 required — database connection.",
    "noteQuote": "jdbcConnection: 1 required — database connection.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-062",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mandatory MBG element for entity class output?",
    "options": [
      {
        "key": "A",
        "text": "property"
      },
      {
        "key": "B",
        "text": "javaClientGenerator"
      },
      {
        "key": "C",
        "text": "javaModelGenerator"
      },
      {
        "key": "D",
        "text": "sqlMapGenerator"
      }
    ],
    "answer": "C",
    "explanation": "javaModelGenerator 负责实体类输出。 资料原句：javaModelGenerator: 1 required — Entity class output.",
    "noteQuote": "javaModelGenerator: 1 required — Entity class output.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-063",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Should be src/main/resources, never src/main/java?",
    "options": [
      {
        "key": "A",
        "text": "src/test/java"
      },
      {
        "key": "B",
        "text": "target/classes only"
      },
      {
        "key": "C",
        "text": "sqlMapGenerator targetProject"
      },
      {
        "key": "D",
        "text": "WEB-INF/lib"
      }
    ],
    "answer": "C",
    "explanation": "Mapper XML 应放在 resources，而不是 java 源码目录。 资料原句：sqlMapGenerator targetProject: MUST be src/main/resources — never src/main/java.",
    "noteQuote": "sqlMapGenerator targetProject: MUST be src/main/resources — never src/main/java.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-064",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Recommended option to prevent timestamp noise in version-control diffs?",
    "options": [
      {
        "key": "A",
        "text": "suppressDate=true"
      },
      {
        "key": "B",
        "text": "trimStrings=false"
      },
      {
        "key": "C",
        "text": "defaultModelType=hierarchical"
      },
      {
        "key": "D",
        "text": "forceBigDecimals=true"
      }
    ],
    "answer": "A",
    "explanation": "suppressDate=true 可以减少生成文件版本差异噪声。 资料原句：suppressDate=true: prevents timestamp noise in version control diffs.",
    "noteQuote": "suppressDate=true: prevents timestamp noise in version control diffs.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-065",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "MBG",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Plugin that makes entity classes implement java.io.Serializable?",
    "options": [
      {
        "key": "A",
        "text": "ToStringPlugin"
      },
      {
        "key": "B",
        "text": "SerializablePlugin"
      },
      {
        "key": "C",
        "text": "RowBoundsPlugin"
      },
      {
        "key": "D",
        "text": "CachePlugin"
      }
    ],
    "answer": "B",
    "explanation": "SerializablePlugin 对二级缓存和序列化复制有帮助。 资料原句：SerializablePlugin: Makes entity classes implement java.io.Serializable.",
    "noteQuote": "SerializablePlugin: Makes entity classes implement java.io.Serializable.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "MBG",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-066",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Pagination start position calculated as (currPage - 1) × pageSize?",
    "options": [
      {
        "key": "A",
        "text": "total"
      },
      {
        "key": "B",
        "text": "lastIndex"
      },
      {
        "key": "C",
        "text": "firstIndex"
      },
      {
        "key": "D",
        "text": "pages"
      }
    ],
    "answer": "C",
    "explanation": "firstIndex = (当前页 - 1) × 每页条数。 资料原句：firstIndex: Start position: (currPage - 1) × pageSize.",
    "noteQuote": "firstIndex: Start position: (currPage - 1) × pageSize.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-067",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Method that fetches all records and slices using subList() in Java service layer?",
    "options": [
      {
        "key": "A",
        "text": "SQL LIMIT"
      },
      {
        "key": "B",
        "text": "PageHelper"
      },
      {
        "key": "C",
        "text": "Array Pagination"
      },
      {
        "key": "D",
        "text": "ROW_NUMBER"
      }
    ],
    "answer": "C",
    "explanation": "数组分页适合演示，不适合生产大数据。 资料原句：Fetches ALL records from the database, then slices in Java service layer using subList().",
    "noteQuote": "Fetches ALL records from the database, then slices in Java service layer using subList().",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-068",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Method that delegates slicing to the database engine?",
    "options": [
      {
        "key": "A",
        "text": "Mapper Scanning"
      },
      {
        "key": "B",
        "text": "Array Pagination"
      },
      {
        "key": "C",
        "text": "L2 Cache"
      },
      {
        "key": "D",
        "text": "SQL LIMIT/OFFSET"
      }
    ],
    "answer": "D",
    "explanation": "SQL 分页只返回当前页数据，性能优于数组分页。 资料原句：Delegates slicing to the database engine. Only the required rows cross the network.",
    "noteQuote": "Delegates slicing to the database engine. Only the required rows cross the network.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-069",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: MyBatis plugin that intercepts Executor.query() and appends LIMIT/OFFSET automatically?",
    "options": [
      {
        "key": "A",
        "text": "PageHelper"
      },
      {
        "key": "B",
        "text": "EhCache"
      },
      {
        "key": "C",
        "text": "MBG"
      },
      {
        "key": "D",
        "text": "Log4J"
      }
    ],
    "answer": "A",
    "explanation": "PageHelper 无需改 Mapper SQL 即可分页。 资料原句：PageHelper intercepts the MyBatis Executor and automatically appends LIMIT/OFFSET.",
    "noteQuote": "PageHelper intercepts the MyBatis Executor and automatically appends LIMIT/OFFSET.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-070",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mechanism PageHelper uses to store paging parameters between startPage() and the mapper query?",
    "options": [
      {
        "key": "A",
        "text": "HttpSession"
      },
      {
        "key": "B",
        "text": "ThreadLocal"
      },
      {
        "key": "C",
        "text": "SqlSession cache"
      },
      {
        "key": "D",
        "text": "static XML"
      }
    ],
    "answer": "B",
    "explanation": "startPage 后必须紧跟 Mapper 查询，避免 ThreadLocal 被其他查询消费。 资料原句：PageHelper.startPage(...) stores parameters in a static Java ThreadLocal variable.",
    "noteQuote": "PageHelper.startPage(...) stores parameters in a static Java ThreadLocal variable.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-071",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Pagination",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Setting that corrects out-of-range page requests to first or last valid page?",
    "options": [
      {
        "key": "A",
        "text": "defaultFetchSize"
      },
      {
        "key": "B",
        "text": "helperDialect"
      },
      {
        "key": "C",
        "text": "useCache"
      },
      {
        "key": "D",
        "text": "pagehelper.reasonable=true"
      }
    ],
    "answer": "D",
    "explanation": "reasonable=true 可对越界页码做合理化处理。 资料原句：reasonable=true: automatically corrects out-of-range page requests.",
    "noteQuote": "reasonable=true: automatically corrects out-of-range page requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Pagination",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-072",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Transactions",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Spring declarative transaction annotation commonly used in service layer?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@Cacheable only"
      },
      {
        "key": "C",
        "text": "@Transactional"
      },
      {
        "key": "D",
        "text": "@Mapper"
      }
    ],
    "answer": "C",
    "explanation": "事务通常加在 Service 方法上，而不是 Controller。 资料原句：Spring declarative transaction management.",
    "noteQuote": "Spring declarative transaction management.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Transactions",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-073",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Logging",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Facade commonly used as the standard for modern Java logging?",
    "options": [
      {
        "key": "A",
        "text": "JNDI"
      },
      {
        "key": "B",
        "text": "OGNL"
      },
      {
        "key": "C",
        "text": "SLF4J"
      },
      {
        "key": "D",
        "text": "JDBC"
      }
    ],
    "answer": "C",
    "explanation": "SLF4J 是日志门面，可切换具体实现。 资料原句：SLF4J — The Standard for Modern Java Logging.",
    "noteQuote": "SLF4J — The Standard for Modern Java Logging.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Logging",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-074",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: SqlSession-scoped cache enabled by default?",
    "options": [
      {
        "key": "A",
        "text": "Redis cache"
      },
      {
        "key": "B",
        "text": "First-Level Cache"
      },
      {
        "key": "C",
        "text": "Browser cache"
      },
      {
        "key": "D",
        "text": "Mapper namespace cache"
      }
    ],
    "answer": "B",
    "explanation": "一级缓存作用域是 SqlSession。 资料原句：First-Level Cache (L1).",
    "noteQuote": "First-Level Cache (L1).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Cache",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-075",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Mapper namespace-scoped cache that requires mapper <cache/> opt-in?",
    "options": [
      {
        "key": "A",
        "text": "ThreadLocal cache"
      },
      {
        "key": "B",
        "text": "Second-Level Cache"
      },
      {
        "key": "C",
        "text": "SqlSession local cache"
      },
      {
        "key": "D",
        "text": "HTTP cache"
      }
    ],
    "answer": "B",
    "explanation": "二级缓存需要在 Mapper 中启用 <cache/>。 资料原句：Each mapper still needs <cache/> to opt in.",
    "noteQuote": "Each mapper still needs <cache/> to opt in.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Cache",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-076",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Default cache eviction policy that removes least recently used entries?",
    "options": [
      {
        "key": "A",
        "text": "SOFT"
      },
      {
        "key": "B",
        "text": "WEAK"
      },
      {
        "key": "C",
        "text": "FIFO"
      },
      {
        "key": "D",
        "text": "LRU"
      }
    ],
    "answer": "D",
    "explanation": "L2 cache 默认 eviction 是 LRU。 资料原句：eviction: LRU — least recently used.",
    "noteQuote": "eviction: LRU — least recently used.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Cache",
      "review-generated"
    ]
  },
  {
    "id": "MB-PN-077",
    "courseKey": "mybatis",
    "course": "MyBatis",
    "topic": "Cache",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which MyBatis concept is described as: Cache setting that returns serialized copies and requires Serializable?",
    "options": [
      {
        "key": "A",
        "text": "readOnly=true"
      },
      {
        "key": "B",
        "text": "size"
      },
      {
        "key": "C",
        "text": "flushInterval"
      },
      {
        "key": "D",
        "text": "readOnly=false"
      }
    ],
    "answer": "D",
    "explanation": "readOnly=false 更安全，但对象需可序列化。 资料原句：readOnly=false returns serialized copy (safe, needs Serializable).",
    "noteQuote": "readOnly=false returns serialized copy (safe, needs Serializable).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "mybatis",
      "Cache",
      "review-generated"
    ]
  },
  {
    "id": "SP-O-001",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which configuration reduces XML usage?",
    "options": [
      {
        "key": "A",
        "text": "XML configuration"
      },
      {
        "key": "B",
        "text": "Annotation configuration"
      },
      {
        "key": "C",
        "text": "Both"
      },
      {
        "key": "D",
        "text": "None of the above"
      }
    ],
    "answer": "B",
    "explanation": "注解配置可以替代大量 XML 配置，有效减少 XML 文件的使用。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-002",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In ApplicationContext, beans are created ____.",
    "options": [
      {
        "key": "A",
        "text": "lazily"
      },
      {
        "key": "B",
        "text": "when requested"
      },
      {
        "key": "C",
        "text": "at container startup"
      },
      {
        "key": "D",
        "text": "none"
      }
    ],
    "answer": "C",
    "explanation": "ApplicationContext 默认在容器启动时就实例化所有单例 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-003",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In BeanFactory, beans are created ____.",
    "options": [
      {
        "key": "A",
        "text": "at container startup"
      },
      {
        "key": "B",
        "text": "when requested"
      },
      {
        "key": "C",
        "text": "automatically"
      },
      {
        "key": "D",
        "text": "none"
      }
    ],
    "answer": "B",
    "explanation": "BeanFactory 采用延迟加载，只有被调用时才会创建 Bean 实例。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-004",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "IoC stands for ____.",
    "options": [
      {
        "key": "A",
        "text": "Input Output Controller"
      },
      {
        "key": "B",
        "text": "Inversion of Control"
      },
      {
        "key": "C",
        "text": "Interface of Component"
      },
      {
        "key": "D",
        "text": "Internal Object Container"
      }
    ],
    "answer": "B",
    "explanation": "IoC 是 控制反转（Inversion of Control），是 Spring 核心思想。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-005",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Child bean can ____ parent bean values.",
    "options": [
      {
        "key": "A",
        "text": "only override"
      },
      {
        "key": "B",
        "text": "override or add"
      },
      {
        "key": "C",
        "text": "only add"
      },
      {
        "key": "D",
        "text": "cannot change"
      }
    ],
    "answer": "B",
    "explanation": "子 Bean 可继承父 Bean 配置，也能覆盖原有属性或新增属性。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-006",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Bean inheritance is defined using ____.",
    "options": [
      {
        "key": "A",
        "text": "id"
      },
      {
        "key": "B",
        "text": "parent"
      },
      {
        "key": "C",
        "text": "class"
      },
      {
        "key": "D",
        "text": "ref"
      }
    ],
    "answer": "B",
    "explanation": "Spring XML 中通过<bean>标签的 parent 属性定义 Bean 继承关系。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-007",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used for non-static factory method?",
    "options": [
      {
        "key": "A",
        "text": "factory-bean"
      },
      {
        "key": "B",
        "text": "factory-method"
      },
      {
        "key": "C",
        "text": "class"
      },
      {
        "key": "D",
        "text": "ref"
      }
    ],
    "answer": "A",
    "explanation": "非静态工厂方法必须先指定factory-bean（工厂 Bean 实例）。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-008",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used for static factory method in Spring?",
    "options": [
      {
        "key": "A",
        "text": "factory-bean"
      },
      {
        "key": "B",
        "text": "factory-method"
      },
      {
        "key": "C",
        "text": "parent"
      },
      {
        "key": "D",
        "text": "id"
      }
    ],
    "answer": "B",
    "explanation": "静态工厂方法直接使用 factory-method 属性，无需工厂 Bean 实例。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-009",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Non-static factory method requires ____.",
    "options": [
      {
        "key": "A",
        "text": "static class"
      },
      {
        "key": "B",
        "text": "object instance"
      },
      {
        "key": "C",
        "text": "abstract class"
      },
      {
        "key": "D",
        "text": "interface"
      }
    ],
    "answer": "B",
    "explanation": "非静态方法属于实例方法，调用前必须先创建对象实例。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-010",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Static factory method is called using ____.",
    "options": [
      {
        "key": "A",
        "text": "object instance"
      },
      {
        "key": "B",
        "text": "class name"
      },
      {
        "key": "C",
        "text": "interface"
      },
      {
        "key": "D",
        "text": "parent bean"
      }
    ],
    "answer": "B",
    "explanation": "静态方法归属类，可直接通过类名调用。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-011",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Factory method is defined as ____.",
    "options": [
      {
        "key": "A",
        "text": "method that takes input"
      },
      {
        "key": "B",
        "text": "method that returns object"
      },
      {
        "key": "C",
        "text": "static method only"
      },
      {
        "key": "D",
        "text": "setter method"
      }
    ],
    "answer": "B",
    "explanation": "工厂方法的核心作用是返回对象实例，封装对象创建逻辑。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-012",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "@Required is used to ____.",
    "options": [
      {
        "key": "A",
        "text": "inject value"
      },
      {
        "key": "B",
        "text": "mark property as mandatory"
      },
      {
        "key": "C",
        "text": "autowire bean"
      },
      {
        "key": "D",
        "text": "create bean"
      }
    ],
    "answer": "B",
    "explanation": "@Required 用于将属性标记为必填项，未注入则容器报错。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-013",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "@Qualifier is used to ____.",
    "options": [
      {
        "key": "A",
        "text": "create bean"
      },
      {
        "key": "B",
        "text": "autowire by type"
      },
      {
        "key": "C",
        "text": "specify exact bean"
      },
      {
        "key": "D",
        "text": "set scope"
      }
    ],
    "answer": "C",
    "explanation": "存在多个同类型 Bean 时，@Qualifier 用来指定唯一要注入的 Bean，解决注入歧义。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-014",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which annotation is used for automatic dependency injection?",
    "options": [
      {
        "key": "A",
        "text": "@Required"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Qualifier"
      },
      {
        "key": "D",
        "text": "@Component"
      }
    ],
    "answer": "B",
    "explanation": "@Autowired 是 Spring 实现自动依赖注入的核心注解。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-015",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which autowiring mode is deprecated?",
    "options": [
      {
        "key": "A",
        "text": "byName"
      },
      {
        "key": "B",
        "text": "byType"
      },
      {
        "key": "C",
        "text": "constructor"
      },
      {
        "key": "D",
        "text": "auto-detect"
      }
    ],
    "answer": "D",
    "explanation": "auto-detect（自动检测）自动装配模式在高版本 Spring 中已废弃。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-016",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which autowiring mode uses constructor?",
    "options": [
      {
        "key": "A",
        "text": "byName"
      },
      {
        "key": "B",
        "text": "byType"
      },
      {
        "key": "C",
        "text": "constructor"
      },
      {
        "key": "D",
        "text": "no"
      }
    ],
    "answer": "C",
    "explanation": "constructor 装配模式通过构造方法完成依赖注入。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-017",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In byType autowiring, matching is done using ____.",
    "options": [
      {
        "key": "A",
        "text": "bean id"
      },
      {
        "key": "B",
        "text": "variable name"
      },
      {
        "key": "C",
        "text": "object type"
      },
      {
        "key": "D",
        "text": "class name"
      }
    ],
    "answer": "C",
    "explanation": "byType 自动装配根据对象类型匹配容器中的 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-018",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In byName autowiring, matching is done using ____.",
    "options": [
      {
        "key": "A",
        "text": "object type"
      },
      {
        "key": "B",
        "text": "variable name"
      },
      {
        "key": "C",
        "text": "class name"
      },
      {
        "key": "D",
        "text": "package name"
      }
    ],
    "answer": "B",
    "explanation": "byName 自动装配根据成员变量名匹配同名 id 的 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-019",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Autowiring works with ____.",
    "options": [
      {
        "key": "A",
        "text": "primitive values"
      },
      {
        "key": "B",
        "text": "string values"
      },
      {
        "key": "C",
        "text": "reference objects"
      },
      {
        "key": "D",
        "text": "all of above"
      }
    ],
    "answer": "C",
    "explanation": "自动装配仅支持引用类型对象（Bean），不支持基本类型、字符串。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-020",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Autowiring means ____.",
    "options": [
      {
        "key": "A",
        "text": "manual injection"
      },
      {
        "key": "B",
        "text": "Automatic connection of beans"
      },
      {
        "key": "C",
        "text": "static injection"
      },
      {
        "key": "D",
        "text": "bean creation"
      }
    ],
    "answer": "B",
    "explanation": "自动装配指 Spring 容器自动关联 Bean 之间的依赖关系。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-021",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to retrieve a bean from container?",
    "options": [
      {
        "key": "A",
        "text": "setBean()"
      },
      {
        "key": "B",
        "text": "getBean()"
      },
      {
        "key": "C",
        "text": "initBean()"
      },
      {
        "key": "D",
        "text": "destroyBean()"
      }
    ],
    "answer": "B",
    "explanation": "getBean() 是 Spring 容器获取 Bean 实例的核心方法。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-022",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is a bean in Spring?",
    "options": [
      {
        "key": "A",
        "text": "Servlet object"
      },
      {
        "key": "B",
        "text": "A Java object managed by Spring"
      },
      {
        "key": "C",
        "text": "HTML object"
      },
      {
        "key": "D",
        "text": "Database object"
      }
    ],
    "answer": "B",
    "explanation": "Spring Bean 指由 Spring IoC 容器创建、管理的 Java 对象。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-023",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In constructor injection, dependencies are injected ____.",
    "options": [
      {
        "key": "A",
        "text": "after object creation"
      },
      {
        "key": "B",
        "text": "before object creation"
      },
      {
        "key": "C",
        "text": "during object creation"
      },
      {
        "key": "D",
        "text": "none"
      }
    ],
    "answer": "C",
    "explanation": "构造器注入在对象实例化过程中完成依赖注入。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-024",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which tag is used in XML for constructor injection?",
    "options": [
      {
        "key": "A",
        "text": "<property>"
      },
      {
        "key": "B",
        "text": "<constructor-arg>"
      },
      {
        "key": "C",
        "text": "<bean>"
      },
      {
        "key": "D",
        "text": "<ref>"
      }
    ],
    "answer": "B",
    "explanation": "Spring XML 中，<constructor-arg> 标签用于实现构造函数注入。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-025",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Constructor injection uses ____.",
    "options": [
      {
        "key": "A",
        "text": "setter methods"
      },
      {
        "key": "B",
        "text": "constructor arguments"
      },
      {
        "key": "C",
        "text": "static methods"
      },
      {
        "key": "D",
        "text": "interface"
      }
    ],
    "answer": "B",
    "explanation": "构造函数注入依靠构造方法参数传递依赖。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-026",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In setter injection, Spring internally calls ____.",
    "options": [
      {
        "key": "A",
        "text": "constructor"
      },
      {
        "key": "B",
        "text": "static method"
      },
      {
        "key": "C",
        "text": "setter method"
      },
      {
        "key": "D",
        "text": "getter method"
      }
    ],
    "answer": "C",
    "explanation": "Setter 注入本质是容器自动调用类中的 setter 方法 完成赋值。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-027",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used to connect beans in setter injection?",
    "options": [
      {
        "key": "A",
        "text": "class"
      },
      {
        "key": "B",
        "text": "ref"
      },
      {
        "key": "C",
        "text": "id"
      },
      {
        "key": "D",
        "text": "parent"
      }
    ],
    "answer": "B",
    "explanation": "<property> 标签中的 ref 属性用于引用其他 Bean，实现依赖关联。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-028",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Explicit wiring means ____.",
    "options": [
      {
        "key": "A",
        "text": "Automatic connection"
      },
      {
        "key": "B",
        "text": "Manual connection of beans"
      },
      {
        "key": "C",
        "text": "static connection"
      },
      {
        "key": "D",
        "text": "dynamic connection"
      }
    ],
    "answer": "B",
    "explanation": "显式装配指开发者手动配置Bean 依赖，而非自动装配。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-029",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which component creates and manages beans in Spring?",
    "options": [
      {
        "key": "A",
        "text": "AOP"
      },
      {
        "key": "B",
        "text": "MVC"
      },
      {
        "key": "C",
        "text": "IoC Container"
      },
      {
        "key": "D",
        "text": "JDBC"
      }
    ],
    "answer": "C",
    "explanation": "IoC 容器负责 Bean 的创建、依赖管理与生命周期管控。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-030",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Dependency Injection means ____.",
    "options": [
      {
        "key": "A",
        "text": "Creating objects manually"
      },
      {
        "key": "B",
        "text": "Injecting required objects into a class"
      },
      {
        "key": "C",
        "text": "Using static objects"
      },
      {
        "key": "D",
        "text": "Using singleton objects"
      }
    ],
    "answer": "B",
    "explanation": "依赖注入指容器将类所需的依赖对象主动注入到类中。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-031",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which server is commonly used as a servlet container in Spring applications?",
    "options": [
      {
        "key": "A",
        "text": "Apache"
      },
      {
        "key": "B",
        "text": "Nginx"
      },
      {
        "key": "C",
        "text": "Tomcat"
      },
      {
        "key": "D",
        "text": "IIS"
      }
    ],
    "answer": "C",
    "explanation": "Tomcat 是 Spring Web 项目最常用的 Servlet 容器。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-032",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which tool is used for testing Spring applications?",
    "options": [
      {
        "key": "A",
        "text": "Eclipse"
      },
      {
        "key": "B",
        "text": "JUnit"
      },
      {
        "key": "C",
        "text": "Maven"
      },
      {
        "key": "D",
        "text": "Tomcat"
      }
    ],
    "answer": "B",
    "explanation": "JUnit 是 Java 生态主流单元测试框架，Spring 全面集成该框架。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-033",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the purpose of multiple beans in Spring?",
    "options": [
      {
        "key": "A",
        "text": "Single function"
      },
      {
        "key": "B",
        "text": "Represent multiple services"
      },
      {
        "key": "C",
        "text": "Only for testing"
      },
      {
        "key": "D",
        "text": "None"
      }
    ],
    "answer": "B",
    "explanation": "定义多个 Bean 用于拆分不同功能，对应系统中多个服务组件。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-034",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which of the following is NOT a feature of Spring?",
    "options": [
      {
        "key": "A",
        "text": "Loose coupling"
      },
      {
        "key": "B",
        "text": "POJO support"
      },
      {
        "key": "C",
        "text": "Tight coupling"
      },
      {
        "key": "D",
        "text": "DI"
      }
    ],
    "answer": "C",
    "explanation": "Spring 核心目标是解耦，紧耦合不属于 Spring 特性。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-035",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the role of a Controller in Spring MVC?",
    "options": [
      {
        "key": "A",
        "text": "Database handling"
      },
      {
        "key": "B",
        "text": "Business logic"
      },
      {
        "key": "C",
        "text": "Handle user input"
      },
      {
        "key": "D",
        "text": "View rendering"
      }
    ],
    "answer": "C",
    "explanation": "Spring MVC 中控制器（Controller）负责接收、处理用户请求。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-036",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which class is used to load Spring configuration file?",
    "options": [
      {
        "key": "A",
        "text": "BeanFactory"
      },
      {
        "key": "B",
        "text": "ClassPathXmlApplicationContext"
      },
      {
        "key": "C",
        "text": "FileReader"
      },
      {
        "key": "D",
        "text": "ServletContext"
      }
    ],
    "answer": "B",
    "explanation": "ClassPathXmlApplicationContext 用于从类路径加载 XML 配置并启动 Spring 容器。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-037",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "When does Spring actually create the bean object?",
    "options": [
      {
        "key": "A",
        "text": "On request"
      },
      {
        "key": "B",
        "text": "Lazy loading"
      },
      {
        "key": "C",
        "text": "When container is initialized"
      },
      {
        "key": "D",
        "text": "After request"
      }
    ],
    "answer": "C",
    "explanation": "默认单例 Bean 在容器初始化阶段就完成创建。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-038",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does the <bean> tag in applicationContext.xml do?",
    "options": [
      {
        "key": "A",
        "text": "Defines package"
      },
      {
        "key": "B",
        "text": "Declares object creation"
      },
      {
        "key": "C",
        "text": "Defines project"
      },
      {
        "key": "D",
        "text": "Imports file"
      }
    ],
    "answer": "B",
    "explanation": "XML 中的<bean>标签用于声明 Bean，告知容器如何创建对象。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-039",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which dependency is required to use Spring Container?",
    "options": [
      {
        "key": "A",
        "text": "spring-web"
      },
      {
        "key": "B",
        "text": "spring-context"
      },
      {
        "key": "C",
        "text": "spring-aop"
      },
      {
        "key": "D",
        "text": "spring-jdbc"
      }
    ],
    "answer": "B",
    "explanation": "spring-context 是 Spring 容器核心依赖，必须引入。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-040",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the purpose of the pom.xml file?",
    "options": [
      {
        "key": "A",
        "text": "Write code"
      },
      {
        "key": "B",
        "text": "Design UI"
      },
      {
        "key": "C",
        "text": "To manage dependencies"
      },
      {
        "key": "D",
        "text": "Run server"
      }
    ],
    "answer": "C",
    "explanation": "pom.xml 是 Maven 配置文件，主要作用是管理项目依赖。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-041",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which module helps in separating cross-cutting concerns like logging?",
    "options": [
      {
        "key": "A",
        "text": "MVC"
      },
      {
        "key": "B",
        "text": "AOP"
      },
      {
        "key": "C",
        "text": "Core"
      },
      {
        "key": "D",
        "text": "JDBC"
      }
    ],
    "answer": "B",
    "explanation": "AOP（面向切面编程）专门剥离日志、事务等横切逻辑，解耦业务代码。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-042",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which module is the foundation of Spring architecture?",
    "options": [
      {
        "key": "A",
        "text": "AOP"
      },
      {
        "key": "B",
        "text": "MVC"
      },
      {
        "key": "C",
        "text": "Core Container"
      },
      {
        "key": "D",
        "text": "ORM"
      }
    ],
    "answer": "C",
    "explanation": "核心容器（Core Container） 是整个 Spring 框架的架构基础。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-043",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the role of the Spring Container?",
    "options": [
      {
        "key": "A",
        "text": "Only create beans"
      },
      {
        "key": "B",
        "text": "Manage object lifecycle"
      },
      {
        "key": "C",
        "text": "Only database operations"
      },
      {
        "key": "D",
        "text": "Only web requests"
      }
    ],
    "answer": "B",
    "explanation": "Spring 容器全面管理 Bean 的整个生命周期与依赖关系。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-044",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which layer is considered the heart of the application?",
    "options": [
      {
        "key": "A",
        "text": "Presentation Layer"
      },
      {
        "key": "B",
        "text": "Business Layer"
      },
      {
        "key": "C",
        "text": "DAO Layer"
      },
      {
        "key": "D",
        "text": "Utility Layer"
      }
    ],
    "answer": "B",
    "explanation": "业务层封装核心业务逻辑，是应用程序的核心（心脏）。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-045",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which layer is responsible for interacting with users in a Spring application?",
    "options": [
      {
        "key": "A",
        "text": "Business Layer"
      },
      {
        "key": "B",
        "text": "DAO Layer"
      },
      {
        "key": "C",
        "text": "Presentation Layer"
      },
      {
        "key": "D",
        "text": "Service Layer"
      }
    ],
    "answer": "C",
    "explanation": "表现层（前端 / 控制器层）负责和用户直接交互。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-046",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which of the following correctly represents Spring MVC components?",
    "options": [
      {
        "key": "A",
        "text": "Model, Service, Controller"
      },
      {
        "key": "B",
        "text": "Model, View, Controller"
      },
      {
        "key": "C",
        "text": "View, DAO, Controller"
      },
      {
        "key": "D",
        "text": "Model, View, Service"
      }
    ],
    "answer": "B",
    "explanation": "Spring MVC 三大核心组件：Model（模型）、View（视图）、Controller（控制器）。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-047",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does IoC (Inversion of Control) mean in Spring?",
    "options": [
      {
        "key": "A",
        "text": "Developer creates all objects"
      },
      {
        "key": "B",
        "text": "Database control"
      },
      {
        "key": "C",
        "text": "Spring container creates and manages objects"
      },
      {
        "key": "D",
        "text": "Web control"
      }
    ],
    "answer": "C",
    "explanation": "控制反转即把对象创建、管理的权限交给Spring 容器，而非开发者手动创建。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-O-048",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which feature of Spring reduces tight coupling between classes?",
    "options": [
      {
        "key": "A",
        "text": "AOP"
      },
      {
        "key": "B",
        "text": "Dependency Injection"
      },
      {
        "key": "C",
        "text": "MVC"
      },
      {
        "key": "D",
        "text": "JDBC"
      }
    ],
    "answer": "B",
    "explanation": "依赖注入大幅降低类与类之间的紧耦合，提升代码灵活性。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-049",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the primary benefit of using POJOs in Spring?",
    "options": [
      {
        "key": "A",
        "text": "Faster execution"
      },
      {
        "key": "B",
        "text": "More memory"
      },
      {
        "key": "C",
        "text": "Simplifies business logic"
      },
      {
        "key": "D",
        "text": "Complex coding"
      }
    ],
    "answer": "C",
    "explanation": "POJO（普通 Java 对象）无需继承框架类 / 接口，简化业务代码开发。",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-050",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which of the following is a major drawback of traditional EJB-based applications?",
    "options": [
      {
        "key": "A",
        "text": "Light weight"
      },
      {
        "key": "B",
        "text": "Tight coupling with container"
      },
      {
        "key": "C",
        "text": "Easy testing"
      },
      {
        "key": "D",
        "text": "Simple code"
      }
    ],
    "answer": "B",
    "explanation": "传统 EJB 应用和容器高度紧耦合，移植性差、开发和测试难度大。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "Spring & MVC 题库1(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-051",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which statement is TRUE?",
    "options": [
      {
        "key": "A",
        "text": "Spring uses proxy to apply AOP"
      },
      {
        "key": "B",
        "text": "AOP only works at compile time"
      },
      {
        "key": "C",
        "text": "Spring calls target method directly"
      },
      {
        "key": "D",
        "text": "AOP does not need proxy object"
      }
    ],
    "answer": "A",
    "explanation": "Spring AOP 依靠动态代理实现功能增强；Spring AOP 是运行时织入，并非编译时；框架会通过代理对象间接调用目标方法，AOP 运行离不开代理对象。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-052",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In API style, execution order depends on:",
    "options": [
      {
        "key": "A",
        "text": "List order in interceptorNames"
      },
      {
        "key": "B",
        "text": "Class name order"
      },
      {
        "key": "C",
        "text": "Method name order"
      },
      {
        "key": "D",
        "text": "Random order"
      }
    ],
    "answer": "A",
    "explanation": "传统 API 方式配置 AOP 时，增强执行顺序由 interceptorNames 集合内元素的先后顺序决定。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-053",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which class is used to create proxy manually in API style?",
    "options": [
      {
        "key": "A",
        "text": "ProxyFactoryBean"
      },
      {
        "key": "B",
        "text": "BeanFactory"
      },
      {
        "key": "C",
        "text": "ProxyManager"
      },
      {
        "key": "D",
        "text": "DispatcherServlet"
      }
    ],
    "answer": "A",
    "explanation": "ProxyFactoryBean 是 Spring 传统 API 方式中，手动创建 AOP 代理对象的核心类；BeanFactory 是 Spring 容器顶层接口，DispatcherServlet 是 SpringMVC 前端控制器。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-054",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In API (old style), which interface is used for BEFORE advice?",
    "options": [
      {
        "key": "A",
        "text": "AroundAdvice"
      },
      {
        "key": "B",
        "text": "AfterReturningAdvice"
      },
      {
        "key": "C",
        "text": "ThrowsAdvice"
      },
      {
        "key": "D",
        "text": "MethodBeforeAdvice"
      }
    ],
    "answer": "D",
    "explanation": "旧版 AOP API 中，MethodBeforeAdvice 对应前置通知；其余分别为环绕通知、返回后通知、异常通知。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-055",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In Annotation AOP, execution order is:",
    "options": [
      {
        "key": "A",
        "text": "Fixed"
      },
      {
        "key": "B",
        "text": "Not guaranteed"
      },
      {
        "key": "C",
        "text": "From top to bottom"
      },
      {
        "key": "D",
        "text": "By class name"
      }
    ],
    "answer": "B",
    "explanation": "纯注解形式配置 AOP，若未使用 @Order 指定优先级，切面与通知的执行顺序无法保证。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-056",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In XML AOP, execution order is:",
    "options": [
      {
        "key": "A",
        "text": "Random"
      },
      {
        "key": "B",
        "text": "By method name"
      },
      {
        "key": "C",
        "text": "By class name"
      },
      {
        "key": "D",
        "text": "Top to bottom"
      }
    ],
    "answer": "D",
    "explanation": "XML 配置 AOP 时，<aop:aspect>、<aop:advisor> 等标签从上到下的书写顺序，就是通知的执行顺序。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-057",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which defines where advice should be applied?",
    "options": [
      {
        "key": "A",
        "text": "Aspect"
      },
      {
        "key": "B",
        "text": "Pointcut"
      },
      {
        "key": "C",
        "text": "Advice"
      },
      {
        "key": "D",
        "text": "Proxy"
      }
    ],
    "answer": "B",
    "explanation": "切点（Pointcut）用来定义通知需要拦截、作用的目标位置；切面（Aspect）是切点 + 通知的整体。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-058",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In Spring AOP, method calls go through:",
    "options": [
      {
        "key": "A",
        "text": "Target object"
      },
      {
        "key": "B",
        "text": "BeanFactory"
      },
      {
        "key": "C",
        "text": "Proxy object"
      },
      {
        "key": "D",
        "text": "View"
      }
    ],
    "answer": "C",
    "explanation": "Spring AOP 执行流程中，所有目标方法调用都会先经过代理对象，由代理执行增强逻辑后再调用目标对象。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-059",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which advice gives full control over execution?",
    "options": [
      {
        "key": "A",
        "text": "@Before"
      },
      {
        "key": "B",
        "text": "@After"
      },
      {
        "key": "C",
        "text": "@AfterReturning"
      },
      {
        "key": "D",
        "text": "@Around"
      }
    ],
    "answer": "D",
    "explanation": "环绕通知 @Around 功能最强，可以完全控制目标方法是否执行、执行时机、修改返回值。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-060",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which advice runs always (like finally)?",
    "options": [
      {
        "key": "A",
        "text": "@After"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@AfterReturning"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "A",
    "explanation": "@After 通知无论目标方法正常执行还是抛出异常，都会执行，效果等同于 Java 中的 finally 代码块。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-061",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which advice runs when exception occurs?",
    "options": [
      {
        "key": "A",
        "text": "@Before"
      },
      {
        "key": "B",
        "text": "@After"
      },
      {
        "key": "C",
        "text": "@AfterReturning"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "D",
    "explanation": "@AfterThrowing 是异常通知，仅在目标方法抛出异常时触发执行。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-062",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which advice runs only when method succeeds?",
    "options": [
      {
        "key": "A",
        "text": "@After"
      },
      {
        "key": "B",
        "text": "@AfterReturning"
      },
      {
        "key": "C",
        "text": "@AfterThrowing"
      },
      {
        "key": "D",
        "text": "@Around"
      }
    ],
    "answer": "B",
    "explanation": "@AfterReturning 为返回后通知，只在目标方法正常执行、无异常并成功返回时执行。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-063",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which advice runs before method execution?",
    "options": [
      {
        "key": "A",
        "text": "@After"
      },
      {
        "key": "B",
        "text": "@AfterReturning"
      },
      {
        "key": "C",
        "text": "@AfterThrowing"
      },
      {
        "key": "D",
        "text": "@Before"
      }
    ],
    "answer": "D",
    "explanation": "@Before 前置通知，在目标方法执行之前触发。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-064",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "JoinPoint represents:",
    "options": [
      {
        "key": "A",
        "text": "A bean"
      },
      {
        "key": "B",
        "text": "A controller"
      },
      {
        "key": "C",
        "text": "A method execution point"
      },
      {
        "key": "D",
        "text": "A view"
      }
    ],
    "answer": "C",
    "explanation": "连接点（JoinPoint）指程序中可被 AOP 拦截的执行点，Spring AOP 里主要指代方法执行。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-065",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which of the following is a collection of advices?",
    "options": [
      {
        "key": "A",
        "text": "Pointcut"
      },
      {
        "key": "B",
        "text": "Aspect"
      },
      {
        "key": "C",
        "text": "Proxy"
      },
      {
        "key": "D",
        "text": "DispatcherServlet"
      }
    ],
    "answer": "B",
    "explanation": "切面（Aspect）是切点 + 多个通知的组合，整合增强逻辑与拦截规则。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-066",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the main purpose of AOP?",
    "options": [
      {
        "key": "A",
        "text": "Database operation"
      },
      {
        "key": "B",
        "text": "Page rendering"
      },
      {
        "key": "C",
        "text": "Separate cross-cutting concerns"
      },
      {
        "key": "D",
        "text": "URL mapping"
      }
    ],
    "answer": "C",
    "explanation": "AOP 面向切面编程的核心作用：分离日志、事务、权限等横切逻辑，解耦业务代码。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-067",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "JdbcTemplate is used for:",
    "options": [
      {
        "key": "A",
        "text": "AOP"
      },
      {
        "key": "B",
        "text": "MVC mapping"
      },
      {
        "key": "C",
        "text": "Page template"
      },
      {
        "key": "D",
        "text": "Database operations"
      }
    ],
    "answer": "D",
    "explanation": "JdbcTemplate 是 Spring 封装的工具类，用于简化传统 JDBC，完成数据库增删改查操作。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-068",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "JSON is mainly used for:",
    "options": [
      {
        "key": "A",
        "text": "Page design"
      },
      {
        "key": "B",
        "text": "Data exchange"
      },
      {
        "key": "C",
        "text": "Exception handling"
      },
      {
        "key": "D",
        "text": "AOP configuration"
      }
    ],
    "answer": "B",
    "explanation": "JSON 是轻量级数据格式，主要用于前后端、服务之间的数据交换。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-069",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "AJAX is used to:",
    "options": [
      {
        "key": "A",
        "text": "Reload whole page"
      },
      {
        "key": "B",
        "text": "Handle exception"
      },
      {
        "key": "C",
        "text": "Update part of page without reload"
      },
      {
        "key": "D",
        "text": "Map URL"
      }
    ],
    "answer": "C",
    "explanation": "AJAX 实现异步请求，可在不刷新整个页面的前提下，完成页面局部数据更新。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX"
    ]
  },
  {
    "id": "SP-O-070",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which annotation returns data directly (JSON)?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@RequestParam"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "D",
    "explanation": "@ResponseBody 会将方法返回值直接转为 JSON 等数据写入响应体，不进行视图跳转。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-071",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which annotation is used to get query parameter?",
    "options": [
      {
        "key": "A",
        "text": "@RequestParam"
      },
      {
        "key": "B",
        "text": "@PathVariable"
      },
      {
        "key": "C",
        "text": "@RequestBody"
      },
      {
        "key": "D",
        "text": "@CookieValue"
      }
    ],
    "answer": "A",
    "explanation": "@RequestParam 用于获取 URL 地址栏中的请求参数（如？name=test）。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-072",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which annotation maps URL to method?",
    "options": [
      {
        "key": "A",
        "text": "@Controller"
      },
      {
        "key": "B",
        "text": "@Service"
      },
      {
        "key": "C",
        "text": "@Component"
      },
      {
        "key": "D",
        "text": "@RequestMapping"
      }
    ],
    "answer": "D",
    "explanation": "@RequestMapping 及其衍生注解（@GetMapping、@PostMapping）负责将请求 URL 映射到控制器方法。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-073",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which component maps URL to controller?",
    "options": [
      {
        "key": "A",
        "text": "Handler Mapping"
      },
      {
        "key": "B",
        "text": "View Resolver"
      },
      {
        "key": "C",
        "text": "Controller"
      },
      {
        "key": "D",
        "text": "Model"
      }
    ],
    "answer": "A",
    "explanation": "处理器映射器（HandlerMapping）是 SpringMVC 核心组件，根据请求 URL 匹配找到对应控制器及方法。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-074",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "DispatcherServlet is:",
    "options": [
      {
        "key": "A",
        "text": "View resolver"
      },
      {
        "key": "B",
        "text": "Front controller"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "Interceptor"
      }
    ],
    "answer": "B",
    "explanation": "DispatcherServlet 是 SpringMVC 的前端控制器，所有请求统一由它接收、分发。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-075",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which component handles user requests?",
    "options": [
      {
        "key": "A",
        "text": "View"
      },
      {
        "key": "B",
        "text": "Model"
      },
      {
        "key": "C",
        "text": "Controller"
      },
      {
        "key": "D",
        "text": "HandlerMapping"
      }
    ],
    "answer": "C",
    "explanation": "控制器（Controller）接收前端请求，调用业务逻辑，处理请求并返回结果。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-076",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "MVC stands for:",
    "options": [
      {
        "key": "A",
        "text": "Model View Controller"
      },
      {
        "key": "B",
        "text": "Main View Control"
      },
      {
        "key": "C",
        "text": "Module View Controller"
      },
      {
        "key": "D",
        "text": "Model Visual Control"
      }
    ],
    "answer": "A",
    "explanation": "MVC 全称 Model（模型）、View（视图）、Controller（控制器），是经典分层架构模式。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-077",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Spring MVC is used to build:",
    "options": [
      {
        "key": "A",
        "text": "Desktop apps"
      },
      {
        "key": "B",
        "text": "Web applications"
      },
      {
        "key": "C",
        "text": "Mobile apps"
      },
      {
        "key": "D",
        "text": "System drivers"
      }
    ],
    "answer": "B",
    "explanation": "SpringMVC 是 Java 主流 Web 框架，专门用于开发Web 应用程序。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-078",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used for looping?",
    "options": [
      {
        "key": "A",
        "text": "th:text"
      },
      {
        "key": "B",
        "text": "th:each"
      },
      {
        "key": "C",
        "text": "th:if"
      },
      {
        "key": "D",
        "text": "th:href"
      }
    ],
    "answer": "B",
    "explanation": "Thymeleaf 模板中，th:each 标签用于循环遍历集合、数组数据。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-O-079",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used for condition checking?",
    "options": [
      {
        "key": "A",
        "text": "th:text"
      },
      {
        "key": "B",
        "text": "th:each"
      },
      {
        "key": "C",
        "text": "th:href"
      },
      {
        "key": "D",
        "text": "th:if"
      }
    ],
    "answer": "D",
    "explanation": "Thymeleaf 中 th:if 用于条件判断，条件成立才渲染当前 HTML 元素。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-O-080",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which attribute is used to display text in Thymeleaf?",
    "options": [
      {
        "key": "A",
        "text": "th:text"
      },
      {
        "key": "B",
        "text": "th:each"
      },
      {
        "key": "C",
        "text": "th:if"
      },
      {
        "key": "D",
        "text": "th:src"
      }
    ],
    "answer": "A",
    "explanation": "th:text 是 Thymeleaf 常用标签，用于将后台数据展示到页面文本位置。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-O-081",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Interceptor/Exception",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is a custom exception?",
    "options": [
      {
        "key": "A",
        "text": "System exception"
      },
      {
        "key": "B",
        "text": "User-defined exception"
      },
      {
        "key": "C",
        "text": "Runtime exception"
      },
      {
        "key": "D",
        "text": "Checked exception"
      }
    ],
    "answer": "B",
    "explanation": "自定义异常（Custom Exception）即开发者手动定义的业务异常，用于描述项目特有错误场景。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "Interceptor/Exception"
    ]
  },
  {
    "id": "SP-O-082",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which method catches exception in @ControllerAdvice class?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@ExceptionHandler"
      },
      {
        "key": "C",
        "text": "@ResponseBody"
      },
      {
        "key": "D",
        "text": "@RequestParam"
      }
    ],
    "answer": "B",
    "explanation": "在全局异常处理类中，使用 @ExceptionHandler 注解的方法来捕获并处理指定类型异常。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-083",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which annotation is used for global exception handling?",
    "options": [
      {
        "key": "A",
        "text": "@Controller"
      },
      {
        "key": "B",
        "text": "@RequestMapping"
      },
      {
        "key": "C",
        "text": "@ResponseBody"
      },
      {
        "key": "D",
        "text": "@ControllerAdvice"
      }
    ],
    "answer": "D",
    "explanation": "@ControllerAdvice 用于定义全局异常处理类，统一拦截所有控制器抛出的异常。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-084",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is an exception?",
    "options": [
      {
        "key": "A",
        "text": "Normal program flow"
      },
      {
        "key": "B",
        "text": "A method"
      },
      {
        "key": "C",
        "text": "A view page"
      },
      {
        "key": "D",
        "text": "An event that interrupts program execution"
      }
    ],
    "answer": "D",
    "explanation": "异常是程序运行时出现的意外事件，会打断程序正常执行流程。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-O-085",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "@ExceptionHandler works within:",
    "options": [
      {
        "key": "A",
        "text": "All controllers"
      },
      {
        "key": "B",
        "text": "Whole project"
      },
      {
        "key": "C",
        "text": "All views"
      },
      {
        "key": "D",
        "text": "Same controller class"
      }
    ],
    "answer": "D",
    "explanation": "单独写在某个 Controller 内的 @ExceptionHandler 属于局部异常处理，仅对当前控制器生效。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-086",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which annotation is used for local exception handling?",
    "options": [
      {
        "key": "A",
        "text": "@ControllerAdvice"
      },
      {
        "key": "B",
        "text": "@ExceptionHandler"
      },
      {
        "key": "C",
        "text": "@RequestMapping"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "B",
    "explanation": "局部异常处理依靠 @ExceptionHandler 实现，作用范围仅限当前控制器。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-O-087",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "XML exception handling applies to:",
    "options": [
      {
        "key": "A",
        "text": "Single controller"
      },
      {
        "key": "B",
        "text": "Single method"
      },
      {
        "key": "C",
        "text": "All controllers"
      },
      {
        "key": "D",
        "text": "Single view"
      }
    ],
    "answer": "C",
    "explanation": "基于 XML 配置的异常解析器属于全局配置，作用于项目所有控制器。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-088",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which class is used in XML-based exception handling?",
    "options": [
      {
        "key": "A",
        "text": "SimpleMappingExceptionResolver"
      },
      {
        "key": "B",
        "text": "DispatcherServlet"
      },
      {
        "key": "C",
        "text": "HandlerMapping"
      },
      {
        "key": "D",
        "text": "ViewResolver"
      }
    ],
    "answer": "A",
    "explanation": "SimpleMappingExceptionResolver 是 SpringMVC 提供的、用于 XML 方式配置异常映射的解析器。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-089",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In Spring MVC, exceptions are usually thrown by:",
    "options": [
      {
        "key": "A",
        "text": "Controller methods"
      },
      {
        "key": "B",
        "text": "View pages"
      },
      {
        "key": "C",
        "text": "Static files"
      },
      {
        "key": "D",
        "text": "Configuration files"
      }
    ],
    "answer": "A",
    "explanation": "请求处理链路中，参数校验、业务逻辑调用等异常，大多由控制器方法抛出。",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-O-090",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Exception handling helps to:",
    "options": [
      {
        "key": "A",
        "text": "Speed up program"
      },
      {
        "key": "B",
        "text": "Change URL"
      },
      {
        "key": "C",
        "text": "Maintain normal application flow"
      },
      {
        "key": "D",
        "text": "Render page faster"
      }
    ],
    "answer": "C",
    "explanation": "异常处理可以优雅捕获错误、给出友好提示，保证应用不会直接崩溃，维持正常运行流程。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "SpringMVC 题库2(1).docx"
    ],
    "tags": [
      "springmvc",
      "General"
    ]
  },
  {
    "id": "SP-G-001",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What is the core idea of IoC in Spring?",
    "options": [
      {
        "key": "A",
        "text": "Objects control the container"
      },
      {
        "key": "B",
        "text": "The container controls object creation and dependency management"
      },
      {
        "key": "C",
        "text": "SQL controls Java objects"
      },
      {
        "key": "D",
        "text": "HTML controls beans"
      }
    ],
    "answer": "B",
    "explanation": "IoC 控制反转指对象创建和依赖关系交给 Spring 容器管理。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-003",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which Spring container usually creates singleton beans eagerly by default?",
    "options": [
      {
        "key": "A",
        "text": "ApplicationContext"
      },
      {
        "key": "B",
        "text": "BeanFactory"
      },
      {
        "key": "C",
        "text": "DispatcherServlet"
      },
      {
        "key": "D",
        "text": "JdbcTemplate"
      }
    ],
    "answer": "A",
    "explanation": "ApplicationContext 默认在容器启动时创建单例 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-004",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which container creates beans lazily when they are requested?",
    "options": [
      {
        "key": "A",
        "text": "BeanFactory"
      },
      {
        "key": "B",
        "text": "ApplicationContext"
      },
      {
        "key": "C",
        "text": "ViewResolver"
      },
      {
        "key": "D",
        "text": "HandlerMapping"
      }
    ],
    "answer": "A",
    "explanation": "BeanFactory 默认延迟创建 Bean，只有使用时才实例化。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-005",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In Spring, a bean is ____.",
    "options": [
      {
        "key": "A",
        "text": "A database row"
      },
      {
        "key": "B",
        "text": "A Java object managed by Spring container"
      },
      {
        "key": "C",
        "text": "An HTML tag"
      },
      {
        "key": "D",
        "text": "A SQL statement"
      }
    ],
    "answer": "B",
    "explanation": "Spring Bean 是由 Spring IoC 容器创建和管理的 Java 对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-006",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which bean scope creates only one shared instance per Spring container?",
    "options": [
      {
        "key": "A",
        "text": "prototype"
      },
      {
        "key": "B",
        "text": "request"
      },
      {
        "key": "C",
        "text": "session"
      },
      {
        "key": "D",
        "text": "singleton"
      }
    ],
    "answer": "D",
    "explanation": "singleton 是默认作用域，在容器中只有一个共享实例。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-007",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which bean scope creates a new instance each time getBean() is called?",
    "options": [
      {
        "key": "A",
        "text": "singleton"
      },
      {
        "key": "B",
        "text": "prototype"
      },
      {
        "key": "C",
        "text": "global"
      },
      {
        "key": "D",
        "text": "static"
      }
    ],
    "answer": "B",
    "explanation": "prototype 每次获取都会创建新的 Bean 实例。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-008",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which XML tag is used for setter injection?",
    "options": [
      {
        "key": "A",
        "text": "<property>"
      },
      {
        "key": "B",
        "text": "<constructor-arg>"
      },
      {
        "key": "C",
        "text": "<component-scan>"
      },
      {
        "key": "D",
        "text": "<aop:aspect>"
      }
    ],
    "answer": "A",
    "explanation": "Setter 注入通过 <property> 配置属性值或引用对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-009",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which XML tag is used for constructor injection?",
    "options": [
      {
        "key": "A",
        "text": "<constructor-arg>"
      },
      {
        "key": "B",
        "text": "<property>"
      },
      {
        "key": "C",
        "text": "<bean-scan>"
      },
      {
        "key": "D",
        "text": "<mvc:view>"
      }
    ],
    "answer": "A",
    "explanation": "构造器注入使用 <constructor-arg> 传递构造方法参数。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-010",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute references another bean in XML configuration?",
    "options": [
      {
        "key": "A",
        "text": "ref"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "class"
      },
      {
        "key": "D",
        "text": "scope"
      }
    ],
    "answer": "A",
    "explanation": "ref 用于引用另一个 Bean；value 用于普通字面量。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-011",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which attribute is used to inject simple literal values in XML?",
    "options": [
      {
        "key": "A",
        "text": "ref"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "parent"
      },
      {
        "key": "D",
        "text": "factory-bean"
      }
    ],
    "answer": "B",
    "explanation": "value 用于注入字符串、数字等简单值。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-012",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation marks a class as a general Spring component?",
    "options": [
      {
        "key": "A",
        "text": "@Component"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Qualifier"
      },
      {
        "key": "D",
        "text": "@BeanFactory"
      }
    ],
    "answer": "A",
    "explanation": "@Component 是通用组件注解，可被组件扫描发现并注册。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-013",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation is typically used for service layer classes?",
    "options": [
      {
        "key": "A",
        "text": "@Service"
      },
      {
        "key": "B",
        "text": "@Controller"
      },
      {
        "key": "C",
        "text": "@Repository"
      },
      {
        "key": "D",
        "text": "@RequestMapping"
      }
    ],
    "answer": "A",
    "explanation": "@Service 通常用于业务逻辑层 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-014",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation is typically used for DAO/repository layer classes?",
    "options": [
      {
        "key": "A",
        "text": "@Repository"
      },
      {
        "key": "B",
        "text": "@Service"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "A",
    "explanation": "@Repository 通常用于数据访问层，也有异常转换语义。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-015",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation is used to define a Spring MVC controller class?",
    "options": [
      {
        "key": "A",
        "text": "@Controller"
      },
      {
        "key": "B",
        "text": "@Service"
      },
      {
        "key": "C",
        "text": "@Repository"
      },
      {
        "key": "D",
        "text": "@Autowired"
      }
    ],
    "answer": "A",
    "explanation": "@Controller 标识控制器组件，配合请求映射处理 Web 请求。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-017",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "When multiple beans of the same type exist, which annotation specifies the exact bean?",
    "options": [
      {
        "key": "A",
        "text": "@Qualifier"
      },
      {
        "key": "B",
        "text": "@Component"
      },
      {
        "key": "C",
        "text": "@Scope"
      },
      {
        "key": "D",
        "text": "@Bean"
      }
    ],
    "answer": "A",
    "explanation": "@Qualifier 可指定具体 Bean 名称，解决同类型注入歧义。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-018",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation can declare a bean from a method in Java configuration?",
    "options": [
      {
        "key": "A",
        "text": "@Bean"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Pointcut"
      },
      {
        "key": "D",
        "text": "@RequestParam"
      }
    ],
    "answer": "A",
    "explanation": "@Bean 修饰方法，方法返回值会被注册为 Spring Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-019",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation enables component scanning in Java configuration?",
    "options": [
      {
        "key": "A",
        "text": "@ComponentScan"
      },
      {
        "key": "B",
        "text": "@Bean"
      },
      {
        "key": "C",
        "text": "@After"
      },
      {
        "key": "D",
        "text": "@PathVariable"
      }
    ],
    "answer": "A",
    "explanation": "@ComponentScan 用于扫描指定包下的组件注解。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-020",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In byName autowiring, Spring matches dependencies by ____.",
    "options": [
      {
        "key": "A",
        "text": "Bean id/property name"
      },
      {
        "key": "B",
        "text": "Object type only"
      },
      {
        "key": "C",
        "text": "Constructor length"
      },
      {
        "key": "D",
        "text": "Package order"
      }
    ],
    "answer": "A",
    "explanation": "byName 根据属性名匹配同名 Bean id。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-021",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In byType autowiring, Spring matches dependencies by ____.",
    "options": [
      {
        "key": "A",
        "text": "Object type"
      },
      {
        "key": "B",
        "text": "Bean id only"
      },
      {
        "key": "C",
        "text": "Method name only"
      },
      {
        "key": "D",
        "text": "URL path"
      }
    ],
    "answer": "A",
    "explanation": "byType 根据类型匹配容器中的 Bean。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-022",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which injection style is generally better for mandatory dependencies?",
    "options": [
      {
        "key": "A",
        "text": "Constructor injection"
      },
      {
        "key": "B",
        "text": "Field ignored injection"
      },
      {
        "key": "C",
        "text": "Random injection"
      },
      {
        "key": "D",
        "text": "HTML injection"
      }
    ],
    "answer": "A",
    "explanation": "构造器注入适合必须依赖，能保证对象创建时依赖完整。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-023",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method is called when retrieving a bean from ApplicationContext?",
    "options": [
      {
        "key": "A",
        "text": "getBean()"
      },
      {
        "key": "B",
        "text": "findBean()"
      },
      {
        "key": "C",
        "text": "selectBean()"
      },
      {
        "key": "D",
        "text": "queryBean()"
      }
    ],
    "answer": "A",
    "explanation": "getBean() 是从 Spring 容器获取 Bean 的常用方法。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-024",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which attributes define custom initialization and destruction methods in XML?",
    "options": [
      {
        "key": "A",
        "text": "init-method and destroy-method"
      },
      {
        "key": "B",
        "text": "start-method and end-method"
      },
      {
        "key": "C",
        "text": "open and close"
      },
      {
        "key": "D",
        "text": "before and after"
      }
    ],
    "answer": "A",
    "explanation": "init-method 和 destroy-method 可指定 Bean 生命周期回调方法。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "IoC/DI"
    ]
  },
  {
    "id": "SP-G-025",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "AOP is mainly used to separate ____ concerns from business logic.",
    "options": [
      {
        "key": "A",
        "text": "Cross-cutting"
      },
      {
        "key": "B",
        "text": "Database table"
      },
      {
        "key": "C",
        "text": "View template"
      },
      {
        "key": "D",
        "text": "Primary key"
      }
    ],
    "answer": "A",
    "explanation": "AOP 用于分离日志、事务、权限等横切关注点。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-026",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which term represents a method execution point that can be intercepted?",
    "options": [
      {
        "key": "A",
        "text": "JoinPoint"
      },
      {
        "key": "B",
        "text": "ViewResolver"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "DataSource"
      }
    ],
    "answer": "A",
    "explanation": "JoinPoint 表示可被拦截的连接点，Spring AOP 中主要是方法执行。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-027",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which term defines where advice should be applied?",
    "options": [
      {
        "key": "A",
        "text": "Pointcut"
      },
      {
        "key": "B",
        "text": "Bean"
      },
      {
        "key": "C",
        "text": "Controller"
      },
      {
        "key": "D",
        "text": "JDBC URL"
      }
    ],
    "answer": "A",
    "explanation": "Pointcut 切点定义通知作用的位置。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-028",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which term combines pointcut and advice?",
    "options": [
      {
        "key": "A",
        "text": "Aspect"
      },
      {
        "key": "B",
        "text": "Model"
      },
      {
        "key": "C",
        "text": "Handler"
      },
      {
        "key": "D",
        "text": "Mapper"
      }
    ],
    "answer": "A",
    "explanation": "Aspect 切面通常由切点和通知组成。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-029",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which advice runs before target method execution?",
    "options": [
      {
        "key": "A",
        "text": "@Before"
      },
      {
        "key": "B",
        "text": "@After"
      },
      {
        "key": "C",
        "text": "@AfterReturning"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "A",
    "explanation": "@Before 是前置通知，在目标方法执行前运行。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-030",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which advice runs after a method returns successfully?",
    "options": [
      {
        "key": "A",
        "text": "@AfterReturning"
      },
      {
        "key": "B",
        "text": "@AfterThrowing"
      },
      {
        "key": "C",
        "text": "@Before"
      },
      {
        "key": "D",
        "text": "@Pointcut"
      }
    ],
    "answer": "A",
    "explanation": "@AfterReturning 只在方法正常返回后执行。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-031",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which advice runs when the method throws an exception?",
    "options": [
      {
        "key": "A",
        "text": "@AfterThrowing"
      },
      {
        "key": "B",
        "text": "@AfterReturning"
      },
      {
        "key": "C",
        "text": "@Before"
      },
      {
        "key": "D",
        "text": "@Bean"
      }
    ],
    "answer": "A",
    "explanation": "@AfterThrowing 是异常通知。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-032",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which advice is similar to finally?",
    "options": [
      {
        "key": "A",
        "text": "@After"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@Around"
      },
      {
        "key": "D",
        "text": "@Pointcut"
      }
    ],
    "answer": "A",
    "explanation": "@After 无论目标方法正常或异常都会执行，类似 finally。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-033",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which advice can decide whether the target method should proceed?",
    "options": [
      {
        "key": "A",
        "text": "@Around"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@After"
      },
      {
        "key": "D",
        "text": "@AfterReturning"
      }
    ],
    "answer": "A",
    "explanation": "@Around 环绕通知可调用或不调用 proceed()，控制目标方法执行。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-034",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "What object do Spring AOP method calls usually go through?",
    "options": [
      {
        "key": "A",
        "text": "Proxy object"
      },
      {
        "key": "B",
        "text": "JSP page"
      },
      {
        "key": "C",
        "text": "SQL table"
      },
      {
        "key": "D",
        "text": "Browser cache"
      }
    ],
    "answer": "A",
    "explanation": "Spring AOP 通过代理对象执行增强逻辑，再调用目标对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-035",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation can control aspect execution priority?",
    "options": [
      {
        "key": "A",
        "text": "@Order"
      },
      {
        "key": "B",
        "text": "@PriorityBean"
      },
      {
        "key": "C",
        "text": "@SortAdvice"
      },
      {
        "key": "D",
        "text": "@FirstAspect"
      }
    ],
    "answer": "A",
    "explanation": "@Order 可指定切面执行优先级。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "AOP"
    ]
  },
  {
    "id": "SP-G-036",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "DispatcherServlet is the ____ of Spring MVC.",
    "options": [
      {
        "key": "A",
        "text": "Front controller"
      },
      {
        "key": "B",
        "text": "DAO object"
      },
      {
        "key": "C",
        "text": "View page"
      },
      {
        "key": "D",
        "text": "Database driver"
      }
    ],
    "answer": "A",
    "explanation": "DispatcherServlet 是前端控制器，统一接收并分发请求。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-037",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which component finds the controller method according to request URL?",
    "options": [
      {
        "key": "A",
        "text": "HandlerMapping"
      },
      {
        "key": "B",
        "text": "ViewResolver"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "DataSource"
      }
    ],
    "answer": "A",
    "explanation": "HandlerMapping 根据 URL 查找对应处理器。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-038",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which component adapts and invokes the handler method?",
    "options": [
      {
        "key": "A",
        "text": "HandlerAdapter"
      },
      {
        "key": "B",
        "text": "ViewResolver"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "JSP"
      }
    ],
    "answer": "A",
    "explanation": "HandlerAdapter 负责适配并调用具体 Controller 方法。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-039",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which component resolves logical view names into real view resources?",
    "options": [
      {
        "key": "A",
        "text": "ViewResolver"
      },
      {
        "key": "B",
        "text": "HandlerMapping"
      },
      {
        "key": "C",
        "text": "Controller"
      },
      {
        "key": "D",
        "text": "Interceptor"
      }
    ],
    "answer": "A",
    "explanation": "ViewResolver 将逻辑视图名解析为 JSP/Thymeleaf 等实际视图。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-040",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation maps a URL to a controller method?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Service"
      },
      {
        "key": "D",
        "text": "@Repository"
      }
    ],
    "answer": "A",
    "explanation": "@RequestMapping 及其派生注解负责 URL 到方法的映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-041",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation is a shortcut for GET requests?",
    "options": [
      {
        "key": "A",
        "text": "@GetMapping"
      },
      {
        "key": "B",
        "text": "@PostMapping"
      },
      {
        "key": "C",
        "text": "@PutMapping"
      },
      {
        "key": "D",
        "text": "@DeleteMapping"
      }
    ],
    "answer": "A",
    "explanation": "@GetMapping 等价于指定 GET 方法的请求映射。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-042",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation binds a query parameter such as ?id=1?",
    "options": [
      {
        "key": "A",
        "text": "@RequestParam"
      },
      {
        "key": "B",
        "text": "@PathVariable"
      },
      {
        "key": "C",
        "text": "@RequestBody"
      },
      {
        "key": "D",
        "text": "@ModelAttribute"
      }
    ],
    "answer": "A",
    "explanation": "@RequestParam 获取 URL 查询参数。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-043",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SpringMVC Core",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which annotation binds a URI template variable such as /user/{id}?",
    "options": [
      {
        "key": "A",
        "text": "@PathVariable"
      },
      {
        "key": "B",
        "text": "@RequestParam"
      },
      {
        "key": "C",
        "text": "@CookieValue"
      },
      {
        "key": "D",
        "text": "@Qualifier"
      }
    ],
    "answer": "A",
    "explanation": "@PathVariable 获取路径变量。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "SpringMVC Core"
    ]
  },
  {
    "id": "SP-G-044",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation reads JSON request body into a Java object?",
    "options": [
      {
        "key": "A",
        "text": "@RequestBody"
      },
      {
        "key": "B",
        "text": "@ResponseBody"
      },
      {
        "key": "C",
        "text": "@RequestParam"
      },
      {
        "key": "D",
        "text": "@PathVariable"
      }
    ],
    "answer": "A",
    "explanation": "@RequestBody 将请求体中的 JSON 反序列化为 Java 对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX"
    ]
  },
  {
    "id": "SP-G-045",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation writes method return value directly to HTTP response body?",
    "options": [
      {
        "key": "A",
        "text": "@ResponseBody"
      },
      {
        "key": "B",
        "text": "@RequestBody"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@ModelAttribute"
      }
    ],
    "answer": "A",
    "explanation": "@ResponseBody 不走视图解析，直接返回 JSON/文本等响应体数据。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX"
    ]
  },
  {
    "id": "SP-G-046",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "@RestController is equivalent to @Controller plus ____.",
    "options": [
      {
        "key": "A",
        "text": "@ResponseBody"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@RequestMapping"
      },
      {
        "key": "D",
        "text": "@Service"
      }
    ],
    "answer": "A",
    "explanation": "@RestController = @Controller + @ResponseBody，常用于 REST 接口。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX"
    ]
  },
  {
    "id": "SP-G-047",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "AJAX mainly allows a web page to ____.",
    "options": [
      {
        "key": "A",
        "text": "Update part of page without full reload"
      },
      {
        "key": "B",
        "text": "Compile Java code"
      },
      {
        "key": "C",
        "text": "Start Tomcat"
      },
      {
        "key": "D",
        "text": "Create database indexes"
      }
    ],
    "answer": "A",
    "explanation": "AJAX 支持异步请求，实现页面局部刷新。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX"
    ]
  },
  {
    "id": "SP-G-048",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which Thymeleaf attribute displays text?",
    "options": [
      {
        "key": "A",
        "text": "th:text"
      },
      {
        "key": "B",
        "text": "th:each"
      },
      {
        "key": "C",
        "text": "th:if"
      },
      {
        "key": "D",
        "text": "th:href"
      }
    ],
    "answer": "A",
    "explanation": "th:text 用于渲染文本内容。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-G-049",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which Thymeleaf attribute loops over a collection?",
    "options": [
      {
        "key": "A",
        "text": "th:each"
      },
      {
        "key": "B",
        "text": "th:text"
      },
      {
        "key": "C",
        "text": "th:if"
      },
      {
        "key": "D",
        "text": "th:src"
      }
    ],
    "answer": "A",
    "explanation": "th:each 用于遍历集合或数组。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-G-050",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "View/Thymeleaf",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which Thymeleaf attribute performs conditional rendering?",
    "options": [
      {
        "key": "A",
        "text": "th:if"
      },
      {
        "key": "B",
        "text": "th:each"
      },
      {
        "key": "C",
        "text": "th:text"
      },
      {
        "key": "D",
        "text": "th:action"
      }
    ],
    "answer": "A",
    "explanation": "th:if 条件为真时才渲染当前元素。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "View/Thymeleaf"
    ]
  },
  {
    "id": "SP-G-051",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Interceptor/Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which interceptor method runs before the controller method?",
    "options": [
      {
        "key": "A",
        "text": "preHandle()"
      },
      {
        "key": "B",
        "text": "postHandle()"
      },
      {
        "key": "C",
        "text": "afterCompletion()"
      },
      {
        "key": "D",
        "text": "doFilter()"
      }
    ],
    "answer": "A",
    "explanation": "preHandle() 在 Controller 方法执行前调用，可决定是否放行。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "Interceptor/Exception"
    ]
  },
  {
    "id": "SP-G-052",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Interceptor/Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which interceptor method runs after controller execution but before view rendering?",
    "options": [
      {
        "key": "A",
        "text": "postHandle()"
      },
      {
        "key": "B",
        "text": "preHandle()"
      },
      {
        "key": "C",
        "text": "afterCompletion()"
      },
      {
        "key": "D",
        "text": "init()"
      }
    ],
    "answer": "A",
    "explanation": "postHandle() 在处理器执行后、视图渲染前调用。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "Interceptor/Exception"
    ]
  },
  {
    "id": "SP-G-053",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Interceptor/Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which interceptor method runs after the whole request is completed?",
    "options": [
      {
        "key": "A",
        "text": "afterCompletion()"
      },
      {
        "key": "B",
        "text": "preHandle()"
      },
      {
        "key": "C",
        "text": "postHandle()"
      },
      {
        "key": "D",
        "text": "destroy()"
      }
    ],
    "answer": "A",
    "explanation": "afterCompletion() 在请求完成后执行，常用于资源清理。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "Interceptor/Exception"
    ]
  },
  {
    "id": "SP-G-054",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Interceptor/Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which annotation handles exceptions in a controller?",
    "options": [
      {
        "key": "A",
        "text": "@ExceptionHandler"
      },
      {
        "key": "B",
        "text": "@AfterThrowing"
      },
      {
        "key": "C",
        "text": "@ErrorMapping"
      },
      {
        "key": "D",
        "text": "@Catch"
      }
    ],
    "answer": "A",
    "explanation": "@ExceptionHandler 可在控制器中定义异常处理方法。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "springmvc",
      "Interceptor/Exception"
    ]
  },
  {
    "id": "SP-PN-001",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Main drawback of traditional J2EE/EJB applications described in the notes?",
    "options": [
      {
        "key": "A",
        "text": "EJB tight coupling"
      },
      {
        "key": "B",
        "text": "Fast testing"
      },
      {
        "key": "C",
        "text": "POJO simplicity"
      },
      {
        "key": "D",
        "text": "Loose coupling"
      }
    ],
    "answer": "A",
    "explanation": "传统 EJB 的主要问题是与容器强耦合、代码重、测试困难。 资料原句：Main drawback: Tight coupling with the container.",
    "noteQuote": "Main drawback: Tight coupling with the container.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Basics",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-002",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Java-based framework used for building enterprise applications?",
    "options": [
      {
        "key": "A",
        "text": "Tomcat server"
      },
      {
        "key": "B",
        "text": "MongoDB"
      },
      {
        "key": "C",
        "text": "MyBatis only"
      },
      {
        "key": "D",
        "text": "Spring Framework"
      }
    ],
    "answer": "D",
    "explanation": "Spring 是用于企业级 Java 应用的框架。 资料原句：Spring is a Java-based framework used for building enterprise applications.",
    "noteQuote": "Spring is a Java-based framework used for building enterprise applications.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Basics",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-003",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Plain Old Java Object with no container dependency?",
    "options": [
      {
        "key": "A",
        "text": "POJO"
      },
      {
        "key": "B",
        "text": "Servlet only"
      },
      {
        "key": "C",
        "text": "JPA query"
      },
      {
        "key": "D",
        "text": "EJB only"
      }
    ],
    "answer": "A",
    "explanation": "Spring 使用 POJO 简化业务逻辑，降低容器依赖。 资料原句：Spring uses POJO — simple Java classes with no container dependency.",
    "noteQuote": "Spring uses POJO — simple Java classes with no container dependency.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Basics",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-004",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Feature meaning Spring does not require heavyweight container inheritance?",
    "options": [
      {
        "key": "A",
        "text": "Tightly coupled"
      },
      {
        "key": "B",
        "text": "Lightweight"
      },
      {
        "key": "C",
        "text": "Compile-time only"
      },
      {
        "key": "D",
        "text": "Database only"
      }
    ],
    "answer": "B",
    "explanation": "Spring 轻量级，普通 Java 类即可使用。 资料原句：Important features: Lightweight.",
    "noteQuote": "Important features: Lightweight.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Basics",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-005",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Name given because Spring integrates with Hibernate, Struts, JSF, JDBC and others?",
    "options": [
      {
        "key": "A",
        "text": "Controller of views"
      },
      {
        "key": "B",
        "text": "Server of servers"
      },
      {
        "key": "C",
        "text": "Framework of Frameworks"
      },
      {
        "key": "D",
        "text": "Database of databases"
      }
    ],
    "answer": "C",
    "explanation": "Spring 能整合多种框架，因此叫框架的框架。 资料原句：Spring integrates with many other frameworks... called the Framework of Frameworks.",
    "noteQuote": "Spring integrates with many other frameworks... called the Framework of Frameworks.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Basics",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-006",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Modules",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Foundation module of Spring?",
    "options": [
      {
        "key": "A",
        "text": "Spring Security"
      },
      {
        "key": "B",
        "text": "Core Container"
      },
      {
        "key": "C",
        "text": "Spring MVC"
      },
      {
        "key": "D",
        "text": "Spring Boot"
      }
    ],
    "answer": "B",
    "explanation": "Core Container 是 Spring 基础模块。 资料原句：The Core Container is the foundation module.",
    "noteQuote": "The Core Container is the foundation module.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Modules",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-007",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring Modules",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Spring module specifically for web applications using MVC pattern?",
    "options": [
      {
        "key": "A",
        "text": "Spring JDBC"
      },
      {
        "key": "B",
        "text": "Spring Security"
      },
      {
        "key": "C",
        "text": "Spring MVC"
      },
      {
        "key": "D",
        "text": "Spring AOP"
      }
    ],
    "answer": "C",
    "explanation": "Spring MVC 用于构建 Web 应用。 资料原句：Spring MVC is a module... used to build web applications following the MVC design pattern.",
    "noteQuote": "Spring MVC is a module... used to build web applications following the MVC design pattern.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring Modules",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-008",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: MVC part that handles data and business logic?",
    "options": [
      {
        "key": "A",
        "text": "Model"
      },
      {
        "key": "B",
        "text": "Controller"
      },
      {
        "key": "C",
        "text": "View"
      },
      {
        "key": "D",
        "text": "DispatcherServlet"
      }
    ],
    "answer": "A",
    "explanation": "Model 负责数据和业务逻辑。 资料原句：Model – Handles data and business logic.",
    "noteQuote": "Model – Handles data and business logic.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-009",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: MVC part that displays the user interface?",
    "options": [
      {
        "key": "A",
        "text": "Model"
      },
      {
        "key": "B",
        "text": "Controller"
      },
      {
        "key": "C",
        "text": "View"
      },
      {
        "key": "D",
        "text": "HandlerMapping"
      }
    ],
    "answer": "C",
    "explanation": "View 负责展示页面。 资料原句：View – Displays the user interface.",
    "noteQuote": "View – Displays the user interface.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-010",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: MVC part that connects Model and View and handles incoming requests?",
    "options": [
      {
        "key": "A",
        "text": "View"
      },
      {
        "key": "B",
        "text": "Controller"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "DataSource"
      }
    ],
    "answer": "B",
    "explanation": "Controller 负责处理请求并连接模型与视图。 资料原句：Controller – Connects Model and View, handles incoming requests.",
    "noteQuote": "Controller – Connects Model and View, handles incoming requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-011",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Layer that handles the user interface and interacts directly with the user?",
    "options": [
      {
        "key": "A",
        "text": "Database Layer"
      },
      {
        "key": "B",
        "text": "Presentation Layer"
      },
      {
        "key": "C",
        "text": "Business Layer"
      },
      {
        "key": "D",
        "text": "DAO Layer"
      }
    ],
    "answer": "B",
    "explanation": "表现层直接与用户交互。 资料原句：Presentation Layer: Handles the user interface.",
    "noteQuote": "Presentation Layer: Handles the user interface.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-012",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Layer called the heart of the application because it processes data and applies business rules?",
    "options": [
      {
        "key": "A",
        "text": "Business Layer"
      },
      {
        "key": "B",
        "text": "View Layer"
      },
      {
        "key": "C",
        "text": "Presentation Layer"
      },
      {
        "key": "D",
        "text": "Database Layer"
      }
    ],
    "answer": "A",
    "explanation": "业务层处理业务规则，是应用核心。 资料原句：Business Layer: Called the heart of the application.",
    "noteQuote": "Business Layer: Called the heart of the application.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-013",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Architecture",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Layer that stores data permanently?",
    "options": [
      {
        "key": "A",
        "text": "Business Layer"
      },
      {
        "key": "B",
        "text": "Database Layer"
      },
      {
        "key": "C",
        "text": "Presentation Layer"
      },
      {
        "key": "D",
        "text": "Controller Layer"
      }
    ],
    "answer": "B",
    "explanation": "数据库层负责持久保存数据。 资料原句：Database Layer: Stores data permanently.",
    "noteQuote": "Database Layer: Stores data permanently.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Architecture",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-014",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Component that creates objects, manages lifecycle, and injects dependencies?",
    "options": [
      {
        "key": "A",
        "text": "View Resolver only"
      },
      {
        "key": "B",
        "text": "JDBC Driver"
      },
      {
        "key": "C",
        "text": "Spring Container"
      },
      {
        "key": "D",
        "text": "MongoCollection"
      }
    ],
    "answer": "C",
    "explanation": "Spring 容器负责创建对象、管理生命周期和依赖注入。 资料原句：Spring Container: Creates objects, manages lifecycle, injects dependencies.",
    "noteQuote": "Spring Container: Creates objects, manages lifecycle, injects dependencies.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC/DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-015",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Concept where control of object creation is given to Spring?",
    "options": [
      {
        "key": "A",
        "text": "AOP advice"
      },
      {
        "key": "B",
        "text": "IoC"
      },
      {
        "key": "C",
        "text": "DI mechanism"
      },
      {
        "key": "D",
        "text": "MVC resolver"
      }
    ],
    "answer": "B",
    "explanation": "IoC 是控制反转，即对象创建控制权交给容器。 资料原句：IoC: Control of object creation is given to Spring.",
    "noteQuote": "IoC: Control of object creation is given to Spring.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC/DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-016",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Mechanism where Spring provides required objects to classes automatically?",
    "options": [
      {
        "key": "A",
        "text": "DI"
      },
      {
        "key": "B",
        "text": "AOP weaving"
      },
      {
        "key": "C",
        "text": "IoC concept only"
      },
      {
        "key": "D",
        "text": "URL mapping"
      }
    ],
    "answer": "A",
    "explanation": "DI 是实现 IoC 的技术，负责注入所需对象。 资料原句：DI: Spring provides required objects to classes automatically.",
    "noteQuote": "DI: Spring provides required objects to classes automatically.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC/DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-017",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC/DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Any Java object managed by Spring?",
    "options": [
      {
        "key": "A",
        "text": "Database row"
      },
      {
        "key": "B",
        "text": "Bean"
      },
      {
        "key": "C",
        "text": "JSP page"
      },
      {
        "key": "D",
        "text": "Servlet only"
      }
    ],
    "answer": "B",
    "explanation": "Spring 管理的对象称为 Bean。 资料原句：Objects created by Spring are called Beans.",
    "noteQuote": "Objects created by Spring are called Beans.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC/DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-018",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC Container",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Basic container where beans are created only when needed?",
    "options": [
      {
        "key": "A",
        "text": "DispatcherServlet"
      },
      {
        "key": "B",
        "text": "HandlerMapping"
      },
      {
        "key": "C",
        "text": "ApplicationContext"
      },
      {
        "key": "D",
        "text": "BeanFactory"
      }
    ],
    "answer": "D",
    "explanation": "BeanFactory 延迟加载。 资料原句：BeanFactory: Beans are created only when needed (lazy loading).",
    "noteQuote": "BeanFactory: Beans are created only when needed (lazy loading).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC Container",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-019",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "IoC Container",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advanced container where beans are created at startup and extra features are provided?",
    "options": [
      {
        "key": "A",
        "text": "MongoClient"
      },
      {
        "key": "B",
        "text": "BeanFactory"
      },
      {
        "key": "C",
        "text": "ServletRequest"
      },
      {
        "key": "D",
        "text": "ApplicationContext"
      }
    ],
    "answer": "D",
    "explanation": "ApplicationContext 默认启动时创建单例 Bean。 资料原句：ApplicationContext: Beans are created at startup (eager loading).",
    "noteQuote": "ApplicationContext: Beans are created at startup (eager loading).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "IoC Container",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-020",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Configuration style using <bean> tags in XML?",
    "options": [
      {
        "key": "A",
        "text": "Annotation only"
      },
      {
        "key": "B",
        "text": "XML Configuration"
      },
      {
        "key": "C",
        "text": "REST only"
      },
      {
        "key": "D",
        "text": "Java-based only"
      }
    ],
    "answer": "B",
    "explanation": "XML 配置通过 <bean> 声明对象。 资料原句：<bean> tag declares object creation.",
    "noteQuote": "<bean> tag declares object creation.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-021",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Configuration style that reduces XML usage with annotations?",
    "options": [
      {
        "key": "A",
        "text": "Tomcat only"
      },
      {
        "key": "B",
        "text": "JDBC only"
      },
      {
        "key": "C",
        "text": "XML only"
      },
      {
        "key": "D",
        "text": "Annotation-based Configuration"
      }
    ],
    "answer": "D",
    "explanation": "注解配置可以减少 XML。 资料原句：Annotations reduce the amount of XML configuration required.",
    "noteQuote": "Annotations reduce the amount of XML configuration required.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-022",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Configuration",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Configuration style using @Configuration and @Bean methods?",
    "options": [
      {
        "key": "A",
        "text": "web.xml only"
      },
      {
        "key": "B",
        "text": "XML only"
      },
      {
        "key": "C",
        "text": "Java-based Configuration"
      },
      {
        "key": "D",
        "text": "properties only"
      }
    ],
    "answer": "C",
    "explanation": "Java 配置类用 @Configuration，方法用 @Bean。 资料原句：@Configuration ... @Bean.",
    "noteQuote": "@Configuration ... @Bean.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Configuration",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-023",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Bean attribute that gives a unique name for the bean?",
    "options": [
      {
        "key": "A",
        "text": "id"
      },
      {
        "key": "B",
        "text": "ref"
      },
      {
        "key": "C",
        "text": "class"
      },
      {
        "key": "D",
        "text": "scope"
      }
    ],
    "answer": "A",
    "explanation": "id 是 Bean 的唯一标识。 资料原句：id – unique name for the bean.",
    "noteQuote": "id – unique name for the bean.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean XML",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-024",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Bean attribute that specifies the fully qualified class name?",
    "options": [
      {
        "key": "A",
        "text": "class"
      },
      {
        "key": "B",
        "text": "value"
      },
      {
        "key": "C",
        "text": "id"
      },
      {
        "key": "D",
        "text": "scope"
      }
    ],
    "answer": "A",
    "explanation": "class 指定 Bean 对应的类。 资料原句：class – fully qualified class name.",
    "noteQuote": "class – fully qualified class name.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean XML",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-025",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Bean attribute that defines singleton or prototype behavior?",
    "options": [
      {
        "key": "A",
        "text": "parent"
      },
      {
        "key": "B",
        "text": "factory-method"
      },
      {
        "key": "C",
        "text": "id"
      },
      {
        "key": "D",
        "text": "scope"
      }
    ],
    "answer": "D",
    "explanation": "scope 定义 Bean 作用域。 资料原句：scope – defines bean scope.",
    "noteQuote": "scope – defines bean scope.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean XML",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-026",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean Scope",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Default scope where only one object is created and reused?",
    "options": [
      {
        "key": "A",
        "text": "request only"
      },
      {
        "key": "B",
        "text": "session only"
      },
      {
        "key": "C",
        "text": "prototype"
      },
      {
        "key": "D",
        "text": "singleton"
      }
    ],
    "answer": "D",
    "explanation": "singleton 是默认作用域，只创建一个对象。 资料原句：Singleton (default): Only one object is created.",
    "noteQuote": "Singleton (default): Only one object is created.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean Scope",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-027",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean Scope",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Scope where a new object is created every time the bean is requested?",
    "options": [
      {
        "key": "A",
        "text": "singleton"
      },
      {
        "key": "B",
        "text": "global"
      },
      {
        "key": "C",
        "text": "application"
      },
      {
        "key": "D",
        "text": "prototype"
      }
    ],
    "answer": "D",
    "explanation": "prototype 每次获取都会创建新对象。 资料原句：Prototype: A new object is created every time the bean is requested.",
    "noteQuote": "Prototype: A new object is created every time the bean is requested.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean Scope",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-028",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean Lifecycle",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Method called after properties are set and before the bean is used?",
    "options": [
      {
        "key": "A",
        "text": "destroy-method"
      },
      {
        "key": "B",
        "text": "getBean"
      },
      {
        "key": "C",
        "text": "factory-bean"
      },
      {
        "key": "D",
        "text": "init-method"
      }
    ],
    "answer": "D",
    "explanation": "init 方法在属性注入后、使用前执行。 资料原句：Init method runs before the bean is used.",
    "noteQuote": "Init method runs before the bean is used.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean Lifecycle",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-029",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean Lifecycle",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Method called before the container closes?",
    "options": [
      {
        "key": "A",
        "text": "init-method"
      },
      {
        "key": "B",
        "text": "getBean"
      },
      {
        "key": "C",
        "text": "constructor-arg"
      },
      {
        "key": "D",
        "text": "destroy-method"
      }
    ],
    "answer": "D",
    "explanation": "destroy 方法在容器关闭前执行。 资料原句：Destroy method runs before the container closes.",
    "noteQuote": "Destroy method runs before the container closes.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean Lifecycle",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-030",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: DI type that uses setter methods and happens after object creation?",
    "options": [
      {
        "key": "A",
        "text": "Factory Method"
      },
      {
        "key": "B",
        "text": "Autowiring byType"
      },
      {
        "key": "C",
        "text": "Setter Injection"
      },
      {
        "key": "D",
        "text": "Constructor Injection"
      }
    ],
    "answer": "C",
    "explanation": "Setter 注入发生在对象创建之后。 资料原句：Setter Injection: Uses setter methods. Injection happens after object creation.",
    "noteQuote": "Setter Injection: Uses setter methods. Injection happens after object creation.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-031",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "DI",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: DI type that uses constructor arguments and happens during object creation?",
    "options": [
      {
        "key": "A",
        "text": "Setter Injection"
      },
      {
        "key": "B",
        "text": "@Qualifier"
      },
      {
        "key": "C",
        "text": "byName"
      },
      {
        "key": "D",
        "text": "Constructor Injection"
      }
    ],
    "answer": "D",
    "explanation": "构造器注入发生在对象创建过程中。 资料原句：Constructor Injection: Injection happens during object creation.",
    "noteQuote": "Constructor Injection: Injection happens during object creation.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "DI",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-032",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "DI XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: XML tag used for setter injection?",
    "options": [
      {
        "key": "A",
        "text": "<property>"
      },
      {
        "key": "B",
        "text": "<constructor-arg>"
      },
      {
        "key": "C",
        "text": "<bean> only"
      },
      {
        "key": "D",
        "text": "<ref> only"
      }
    ],
    "answer": "A",
    "explanation": "<property> 用于 setter 注入。 资料原句：Setter Injection uses the <property> tag.",
    "noteQuote": "Setter Injection uses the <property> tag.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "DI XML",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-033",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "DI XML",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: XML tag used for constructor injection?",
    "options": [
      {
        "key": "A",
        "text": "<property>"
      },
      {
        "key": "B",
        "text": "<beans>"
      },
      {
        "key": "C",
        "text": "<constructor-arg>"
      },
      {
        "key": "D",
        "text": "<ref>"
      }
    ],
    "answer": "C",
    "explanation": "<constructor-arg> 用于构造器注入。 资料原句：Constructor Injection uses the <constructor-arg> tag.",
    "noteQuote": "Constructor Injection uses the <constructor-arg> tag.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "DI XML",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-034",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Wiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Attribute used to connect beans in explicit wiring?",
    "options": [
      {
        "key": "A",
        "text": "class"
      },
      {
        "key": "B",
        "text": "ref"
      },
      {
        "key": "C",
        "text": "scope"
      },
      {
        "key": "D",
        "text": "value"
      }
    ],
    "answer": "B",
    "explanation": "ref 用于引用另一个 Bean。 资料原句：The ref attribute is used to connect beans.",
    "noteQuote": "The ref attribute is used to connect beans.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Wiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-035",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Wiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Manual connection of beans using XML configuration?",
    "options": [
      {
        "key": "A",
        "text": "REST mapping"
      },
      {
        "key": "B",
        "text": "AOP weaving"
      },
      {
        "key": "C",
        "text": "Autowiring"
      },
      {
        "key": "D",
        "text": "Explicit Wiring"
      }
    ],
    "answer": "D",
    "explanation": "显式装配就是手动装配。 资料原句：Explicit wiring = Manual wiring.",
    "noteQuote": "Explicit wiring = Manual wiring.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Wiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-036",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Autowiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Spring automatically connects beans without manual wiring?",
    "options": [
      {
        "key": "A",
        "text": "Manual XML only"
      },
      {
        "key": "B",
        "text": "Autowiring"
      },
      {
        "key": "C",
        "text": "Servlet mapping"
      },
      {
        "key": "D",
        "text": "SQL mapping"
      }
    ],
    "answer": "B",
    "explanation": "自动装配减少手动 ref 配置。 资料原句：Spring automatically connects beans without manual wiring.",
    "noteQuote": "Spring automatically connects beans without manual wiring.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Autowiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-037",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Autowiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Autowiring mode that matches by variable name?",
    "options": [
      {
        "key": "A",
        "text": "byType"
      },
      {
        "key": "B",
        "text": "auto-detect"
      },
      {
        "key": "C",
        "text": "constructor"
      },
      {
        "key": "D",
        "text": "byName"
      }
    ],
    "answer": "D",
    "explanation": "byName 按变量名匹配 Bean id。 资料原句：byName – Matches by variable name.",
    "noteQuote": "byName – Matches by variable name.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Autowiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-038",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Autowiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Autowiring mode that matches by class type?",
    "options": [
      {
        "key": "A",
        "text": "factory-method"
      },
      {
        "key": "B",
        "text": "byName"
      },
      {
        "key": "C",
        "text": "id"
      },
      {
        "key": "D",
        "text": "byType"
      }
    ],
    "answer": "D",
    "explanation": "byType 按对象类型匹配。 资料原句：byType – Matches by class type.",
    "noteQuote": "byType – Matches by class type.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Autowiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-039",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Autowiring",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Only type of values autowiring works with, not primitive values?",
    "options": [
      {
        "key": "A",
        "text": "primitive values"
      },
      {
        "key": "B",
        "text": "SQL values"
      },
      {
        "key": "C",
        "text": "string values"
      },
      {
        "key": "D",
        "text": "reference objects"
      }
    ],
    "answer": "D",
    "explanation": "自动装配只适用于引用对象。 资料原句：Autowiring works only for reference objects, not for primitive values.",
    "noteQuote": "Autowiring works only for reference objects, not for primitive values.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Autowiring",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-040",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Annotations",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that marks a class as a Spring-managed bean?",
    "options": [
      {
        "key": "A",
        "text": "@Component"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@RequestParam"
      },
      {
        "key": "D",
        "text": "@Qualifier"
      }
    ],
    "answer": "A",
    "explanation": "@Component 标记类交给 Spring 管理。 资料原句：@Component – Marks a class as a Spring-managed bean.",
    "noteQuote": "@Component – Marks a class as a Spring-managed bean.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Annotations",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-041",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Annotations",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation for automatic dependency injection?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@Component"
      },
      {
        "key": "C",
        "text": "@Autowired"
      },
      {
        "key": "D",
        "text": "@ControllerAdvice"
      }
    ],
    "answer": "C",
    "explanation": "@Autowired 自动注入依赖。 资料原句：@Autowired – Injects a dependency automatically.",
    "noteQuote": "@Autowired – Injects a dependency automatically.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Annotations",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-042",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Annotations",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation used to choose a specific bean when multiple candidates exist?",
    "options": [
      {
        "key": "A",
        "text": "@Bean"
      },
      {
        "key": "B",
        "text": "@Required"
      },
      {
        "key": "C",
        "text": "@Autowired"
      },
      {
        "key": "D",
        "text": "@Qualifier"
      }
    ],
    "answer": "D",
    "explanation": "@Qualifier 解决同类型 Bean 歧义。 资料原句：@Qualifier – Chooses a specific bean when multiple candidates exist.",
    "noteQuote": "@Qualifier – Chooses a specific bean when multiple candidates exist.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Annotations",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-043",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Annotations",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation indicating a mandatory property must be set?",
    "options": [
      {
        "key": "A",
        "text": "@Bean"
      },
      {
        "key": "B",
        "text": "@Component"
      },
      {
        "key": "C",
        "text": "@Autowired"
      },
      {
        "key": "D",
        "text": "@Required"
      }
    ],
    "answer": "D",
    "explanation": "@Required 表示属性必须注入。 资料原句：@Required – Indicates a mandatory property.",
    "noteQuote": "@Required – Indicates a mandatory property.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Annotations",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-044",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Factory Method",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: A method that returns an object and is used to create beans programmatically?",
    "options": [
      {
        "key": "A",
        "text": "Setter Method only"
      },
      {
        "key": "B",
        "text": "Factory Method"
      },
      {
        "key": "C",
        "text": "Getter only"
      },
      {
        "key": "D",
        "text": "Pointcut"
      }
    ],
    "answer": "B",
    "explanation": "工厂方法本质是返回对象的方法。 资料原句：A factory method is simply a method that returns an object.",
    "noteQuote": "A factory method is simply a method that returns an object.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Factory Method",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-045",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Bean Inheritance",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Feature where a child bean inherits from a parent bean and may override or add values?",
    "options": [
      {
        "key": "A",
        "text": "AOP proxy"
      },
      {
        "key": "B",
        "text": "Autowiring"
      },
      {
        "key": "C",
        "text": "Bean Inheritance"
      },
      {
        "key": "D",
        "text": "REST mapping"
      }
    ],
    "answer": "C",
    "explanation": "子 Bean 可继承父 Bean，并覆盖或新增属性。 资料原句：A child bean can inherit from a parent bean... Override parent properties; Add new values.",
    "noteQuote": "A child bean can inherit from a parent bean... Override parent properties; Add new values.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Bean Inheritance",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-046",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Programming approach that separates cross-cutting concerns from business logic?",
    "options": [
      {
        "key": "A",
        "text": "AOP"
      },
      {
        "key": "B",
        "text": "JDBC"
      },
      {
        "key": "C",
        "text": "MVC"
      },
      {
        "key": "D",
        "text": "ORM only"
      }
    ],
    "answer": "A",
    "explanation": "AOP 分离日志、安全、事务等横切关注点。 资料原句：AOP separates cross-cutting concerns from business logic.",
    "noteQuote": "AOP separates cross-cutting concerns from business logic.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-047",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: A collection of advices defining what to do?",
    "options": [
      {
        "key": "A",
        "text": "Proxy"
      },
      {
        "key": "B",
        "text": "Aspect"
      },
      {
        "key": "C",
        "text": "Pointcut"
      },
      {
        "key": "D",
        "text": "JoinPoint"
      }
    ],
    "answer": "B",
    "explanation": "Aspect 是通知集合/切点与通知组合。 资料原句：Aspect – A collection of advices.",
    "noteQuote": "Aspect – A collection of advices.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-048",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: The point where a method executes?",
    "options": [
      {
        "key": "A",
        "text": "Target"
      },
      {
        "key": "B",
        "text": "Pointcut"
      },
      {
        "key": "C",
        "text": "Advice"
      },
      {
        "key": "D",
        "text": "JoinPoint"
      }
    ],
    "answer": "D",
    "explanation": "Spring AOP 中连接点通常是方法执行点。 资料原句：JoinPoint – The point where a method executes.",
    "noteQuote": "JoinPoint – The point where a method executes.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-049",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: The action performed at a join point?",
    "options": [
      {
        "key": "A",
        "text": "Advice"
      },
      {
        "key": "B",
        "text": "Pointcut"
      },
      {
        "key": "C",
        "text": "Target"
      },
      {
        "key": "D",
        "text": "Aspect"
      }
    ],
    "answer": "A",
    "explanation": "Advice 是增强动作。 资料原句：Advice – The action performed at a join point.",
    "noteQuote": "Advice – The action performed at a join point.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-050",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Defines which methods to apply advice to?",
    "options": [
      {
        "key": "A",
        "text": "Weaving"
      },
      {
        "key": "B",
        "text": "Advice"
      },
      {
        "key": "C",
        "text": "Pointcut"
      },
      {
        "key": "D",
        "text": "Proxy"
      }
    ],
    "answer": "C",
    "explanation": "Pointcut 定义通知作用位置。 资料原句：Pointcut – Defines which methods to apply advice to.",
    "noteQuote": "Pointcut – Defines which methods to apply advice to.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-051",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Original class containing business logic?",
    "options": [
      {
        "key": "A",
        "text": "Advice"
      },
      {
        "key": "B",
        "text": "Proxy"
      },
      {
        "key": "C",
        "text": "Target"
      },
      {
        "key": "D",
        "text": "Aspect"
      }
    ],
    "answer": "C",
    "explanation": "Target 是原始业务对象。 资料原句：Target – The original class containing business logic.",
    "noteQuote": "Target – The original class containing business logic.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-052",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Middle object created by Spring to apply AOP?",
    "options": [
      {
        "key": "A",
        "text": "Proxy"
      },
      {
        "key": "B",
        "text": "View"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "Target"
      }
    ],
    "answer": "A",
    "explanation": "Spring AOP 通过代理对象调用目标方法。 资料原句：Proxy – A middle object created by Spring to apply AOP.",
    "noteQuote": "Proxy – A middle object created by Spring to apply AOP.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-053",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Process of linking an aspect with the target?",
    "options": [
      {
        "key": "A",
        "text": "Weaving"
      },
      {
        "key": "B",
        "text": "Bean scope"
      },
      {
        "key": "C",
        "text": "Pointcut"
      },
      {
        "key": "D",
        "text": "Autowiring"
      }
    ],
    "answer": "A",
    "explanation": "织入是将切面与目标对象关联的过程。 资料原句：Weaving – The process of linking an aspect with the target.",
    "noteQuote": "Weaving – The process of linking an aspect with the target.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-054",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Flow",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Object through which Spring AOP method calls go before reaching the target method?",
    "options": [
      {
        "key": "A",
        "text": "Target directly"
      },
      {
        "key": "B",
        "text": "BeanFactory only"
      },
      {
        "key": "C",
        "text": "ViewResolver"
      },
      {
        "key": "D",
        "text": "Proxy Object"
      }
    ],
    "answer": "D",
    "explanation": "Spring AOP 不直接调用目标方法，而是走代理。 资料原句：Spring never calls your target method directly. It always uses a Proxy Object.",
    "noteQuote": "Spring never calls your target method directly. It always uses a Proxy Object.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Flow",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-055",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Style",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: AOP style whose execution order is top to bottom and explicit?",
    "options": [
      {
        "key": "A",
        "text": "API Style"
      },
      {
        "key": "B",
        "text": "Annotation Style"
      },
      {
        "key": "C",
        "text": "REST Style"
      },
      {
        "key": "D",
        "text": "XML Style"
      }
    ],
    "answer": "D",
    "explanation": "XML AOP 的顺序由配置从上到下决定。 资料原句：XML Style: Execution order is top to bottom.",
    "noteQuote": "XML Style: Execution order is top to bottom.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Style",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-056",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Style",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: AOP style where order is discovered at runtime and not guaranteed without @Order?",
    "options": [
      {
        "key": "A",
        "text": "XML Style"
      },
      {
        "key": "B",
        "text": "Annotation Style"
      },
      {
        "key": "C",
        "text": "API Style"
      },
      {
        "key": "D",
        "text": "JDBC Style"
      }
    ],
    "answer": "B",
    "explanation": "注解 AOP 未加 @Order 时顺序不保证。 资料原句：Annotation Style: Order is discovered at runtime (not guaranteed).",
    "noteQuote": "Annotation Style: Order is discovered at runtime (not guaranteed).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Style",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-057",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Style",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Old obsolete style using Java interfaces and ProxyFactoryBean?",
    "options": [
      {
        "key": "A",
        "text": "API Style"
      },
      {
        "key": "B",
        "text": "XML Style"
      },
      {
        "key": "C",
        "text": "Annotation Style"
      },
      {
        "key": "D",
        "text": "REST Style"
      }
    ],
    "answer": "A",
    "explanation": "API Style 已过时，但可能考试涉及。 资料原句：API Style: Manual proxy creation with ProxyFactoryBean. Now obsolete.",
    "noteQuote": "API Style: Manual proxy creation with ProxyFactoryBean. Now obsolete.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Style",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-058",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Advice",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advice that runs before the target method?",
    "options": [
      {
        "key": "A",
        "text": "@After"
      },
      {
        "key": "B",
        "text": "@AfterReturning"
      },
      {
        "key": "C",
        "text": "@Before"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "C",
    "explanation": "@Before 在方法前执行。 资料原句：@Before – Runs before the target method.",
    "noteQuote": "@Before – Runs before the target method.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Advice",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-059",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Advice",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advice that runs always after method execution like finally?",
    "options": [
      {
        "key": "A",
        "text": "@Around only"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@After"
      },
      {
        "key": "D",
        "text": "@AfterReturning"
      }
    ],
    "answer": "C",
    "explanation": "@After 无论成功异常都会执行。 资料原句：@After – Runs after the method (always, like a finally block).",
    "noteQuote": "@After – Runs after the method (always, like a finally block).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Advice",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-060",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Advice",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advice that runs after successful execution?",
    "options": [
      {
        "key": "A",
        "text": "@AfterReturning"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@Pointcut"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "A",
    "explanation": "返回后通知只在成功返回时执行。 资料原句：@AfterReturning – Runs after successful execution.",
    "noteQuote": "@AfterReturning – Runs after successful execution.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Advice",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-061",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Advice",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advice that runs when an exception occurs?",
    "options": [
      {
        "key": "A",
        "text": "@AfterThrowing"
      },
      {
        "key": "B",
        "text": "@AfterReturning"
      },
      {
        "key": "C",
        "text": "@Before"
      },
      {
        "key": "D",
        "text": "@Component"
      }
    ],
    "answer": "A",
    "explanation": "异常通知在方法抛出异常时执行。 资料原句：@AfterThrowing – Runs when an exception occurs.",
    "noteQuote": "@AfterThrowing – Runs when an exception occurs.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Advice",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-062",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Advice",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Advice that runs before and after and gives full control using proceed()?",
    "options": [
      {
        "key": "A",
        "text": "@Around"
      },
      {
        "key": "B",
        "text": "@Before"
      },
      {
        "key": "C",
        "text": "@After"
      },
      {
        "key": "D",
        "text": "@AfterReturning"
      }
    ],
    "answer": "A",
    "explanation": "@Around 权限最大，可以决定是否调用目标方法。 资料原句：@Around – Runs before and after (full control).",
    "noteQuote": "@Around – Runs before and after (full control).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Advice",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-063",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP Config",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation used to enable annotation-based Spring AOP?",
    "options": [
      {
        "key": "A",
        "text": "@EnableAspectJAutoProxy"
      },
      {
        "key": "B",
        "text": "@ControllerAdvice"
      },
      {
        "key": "C",
        "text": "@RequestBody"
      },
      {
        "key": "D",
        "text": "@Bean"
      }
    ],
    "answer": "A",
    "explanation": "启用注解 AOP 需要 @EnableAspectJAutoProxy 或 XML 标签。 资料原句：Enable Annotation AOP: @EnableAspectJAutoProxy.",
    "noteQuote": "Enable Annotation AOP: @EnableAspectJAutoProxy.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP Config",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-064",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP API",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Old API interface used for before advice?",
    "options": [
      {
        "key": "A",
        "text": "MethodBeforeAdvice"
      },
      {
        "key": "B",
        "text": "ProxyFactoryBean"
      },
      {
        "key": "C",
        "text": "AfterReturningAdvice"
      },
      {
        "key": "D",
        "text": "ThrowsAdvice"
      }
    ],
    "answer": "A",
    "explanation": "MethodBeforeAdvice 对应前置通知。 资料原句：MethodBeforeAdvice – for before advice.",
    "noteQuote": "MethodBeforeAdvice – for before advice.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP API",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-065",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP API",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Old API interface used for success advice?",
    "options": [
      {
        "key": "A",
        "text": "JoinPoint"
      },
      {
        "key": "B",
        "text": "ThrowsAdvice"
      },
      {
        "key": "C",
        "text": "AfterReturningAdvice"
      },
      {
        "key": "D",
        "text": "MethodBeforeAdvice"
      }
    ],
    "answer": "C",
    "explanation": "AfterReturningAdvice 对应成功返回通知。 资料原句：AfterReturningAdvice – for success advice.",
    "noteQuote": "AfterReturningAdvice – for success advice.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP API",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-066",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP API",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Old API interface used for exception advice?",
    "options": [
      {
        "key": "A",
        "text": "MethodBeforeAdvice"
      },
      {
        "key": "B",
        "text": "Pointcut"
      },
      {
        "key": "C",
        "text": "ThrowsAdvice"
      },
      {
        "key": "D",
        "text": "AfterReturningAdvice"
      }
    ],
    "answer": "C",
    "explanation": "ThrowsAdvice 对应异常通知。 资料原句：ThrowsAdvice – for exception advice.",
    "noteQuote": "ThrowsAdvice – for exception advice.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP API",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-067",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "AOP API",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: API style configuration item whose order determines execution order?",
    "options": [
      {
        "key": "A",
        "text": "class name"
      },
      {
        "key": "B",
        "text": "method name"
      },
      {
        "key": "C",
        "text": "interceptorNames list"
      },
      {
        "key": "D",
        "text": "bean id"
      }
    ],
    "answer": "C",
    "explanation": "旧 API 风格顺序看 interceptorNames 列表顺序。 资料原句：Order in the interceptorNames list determines execution order.",
    "noteQuote": "Order in the interceptorNames list determines execution order.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "AOP API",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-068",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Front controller that receives all Spring MVC requests?",
    "options": [
      {
        "key": "A",
        "text": "DispatcherServlet"
      },
      {
        "key": "B",
        "text": "HandlerMapping"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "ViewResolver"
      }
    ],
    "answer": "A",
    "explanation": "DispatcherServlet 是前端控制器。 资料原句：DispatcherServlet – Front controller that receives all requests.",
    "noteQuote": "DispatcherServlet – Front controller that receives all requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-069",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Component that finds which controller handles the request?",
    "options": [
      {
        "key": "A",
        "text": "Model"
      },
      {
        "key": "B",
        "text": "View Resolver"
      },
      {
        "key": "C",
        "text": "JSP"
      },
      {
        "key": "D",
        "text": "Handler Mapping"
      }
    ],
    "answer": "D",
    "explanation": "HandlerMapping 根据 URL 找控制器方法。 资料原句：Handler Mapping – Finds which controller handles the request.",
    "noteQuote": "Handler Mapping – Finds which controller handles the request.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-070",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Component that converts logical view name to actual JSP/HTML file?",
    "options": [
      {
        "key": "A",
        "text": "Controller"
      },
      {
        "key": "B",
        "text": "View Resolver"
      },
      {
        "key": "C",
        "text": "Model"
      },
      {
        "key": "D",
        "text": "Handler Mapping"
      }
    ],
    "answer": "B",
    "explanation": "ViewResolver 把逻辑视图名解析为实际视图文件。 资料原句：View Resolver – Converts logical view name to actual file.",
    "noteQuote": "View Resolver – Converts logical view name to actual file.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-071",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Spring MVC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Correct Spring MVC request flow?",
    "options": [
      {
        "key": "A",
        "text": "Browser → Mapper → JSP → SQL"
      },
      {
        "key": "B",
        "text": "View → Model → Controller only"
      },
      {
        "key": "C",
        "text": "Browser → DispatcherServlet → Handler Mapping → Controller → Model → View Resolver → View → Browser"
      },
      {
        "key": "D",
        "text": "Client → Redis → Controller"
      }
    ],
    "answer": "C",
    "explanation": "这是 Spring MVC 标准请求响应流程。 资料原句：Browser → DispatcherServlet → Handler Mapping → Controller → Model → View Resolver → View → Browser.",
    "noteQuote": "Browser → DispatcherServlet → Handler Mapping → Controller → Model → View Resolver → View → Browser.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Spring MVC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-072",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that marks a class as a Spring MVC controller?",
    "options": [
      {
        "key": "A",
        "text": "@Service"
      },
      {
        "key": "B",
        "text": "@Autowired"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@Repository"
      }
    ],
    "answer": "C",
    "explanation": "@Controller 标记控制器类。 资料原句：@Controller – Marks a class as a Spring MVC controller.",
    "noteQuote": "@Controller – Marks a class as a Spring MVC controller.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-073",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that maps a URL to a controller or method?",
    "options": [
      {
        "key": "A",
        "text": "@RequestParam"
      },
      {
        "key": "B",
        "text": "@RequestMapping"
      },
      {
        "key": "C",
        "text": "@PathVariable"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "B",
    "explanation": "@RequestMapping 负责 URL 映射。 资料原句：@RequestMapping – Maps a URL to a controller or method.",
    "noteQuote": "@RequestMapping – Maps a URL to a controller or method.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-074",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that handles GET requests?",
    "options": [
      {
        "key": "A",
        "text": "@PostMapping"
      },
      {
        "key": "B",
        "text": "@PutMapping"
      },
      {
        "key": "C",
        "text": "@GetMapping"
      },
      {
        "key": "D",
        "text": "@DeleteMapping"
      }
    ],
    "answer": "C",
    "explanation": "@GetMapping 处理 GET 请求。 资料原句：@GetMapping – Handles GET requests.",
    "noteQuote": "@GetMapping – Handles GET requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-075",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that handles POST requests?",
    "options": [
      {
        "key": "A",
        "text": "@PostMapping"
      },
      {
        "key": "B",
        "text": "@DeleteMapping"
      },
      {
        "key": "C",
        "text": "@GetMapping"
      },
      {
        "key": "D",
        "text": "@PutMapping"
      }
    ],
    "answer": "A",
    "explanation": "@PostMapping 处理 POST 请求。 资料原句：@PostMapping – Handles POST requests.",
    "noteQuote": "@PostMapping – Handles POST requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-076",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that handles PUT update requests?",
    "options": [
      {
        "key": "A",
        "text": "@PostMapping"
      },
      {
        "key": "B",
        "text": "@PutMapping"
      },
      {
        "key": "C",
        "text": "@GetMapping"
      },
      {
        "key": "D",
        "text": "@DeleteMapping"
      }
    ],
    "answer": "B",
    "explanation": "@PutMapping 常用于更新。 资料原句：@PutMapping – Handles PUT requests (update).",
    "noteQuote": "@PutMapping – Handles PUT requests (update).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-077",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that handles DELETE requests?",
    "options": [
      {
        "key": "A",
        "text": "@PutMapping"
      },
      {
        "key": "B",
        "text": "@PostMapping"
      },
      {
        "key": "C",
        "text": "@GetMapping"
      },
      {
        "key": "D",
        "text": "@DeleteMapping"
      }
    ],
    "answer": "D",
    "explanation": "@DeleteMapping 处理删除请求。 资料原句：@DeleteMapping – Handles DELETE requests.",
    "noteQuote": "@DeleteMapping – Handles DELETE requests.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-078",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that extracts URL query parameters such as ?name=value?",
    "options": [
      {
        "key": "A",
        "text": "@RequestBody"
      },
      {
        "key": "B",
        "text": "@PathVariable"
      },
      {
        "key": "C",
        "text": "@CookieValue"
      },
      {
        "key": "D",
        "text": "@RequestParam"
      }
    ],
    "answer": "D",
    "explanation": "@RequestParam 获取查询参数。 资料原句：@RequestParam – Extracts data from URL query parameters.",
    "noteQuote": "@RequestParam – Extracts data from URL query parameters.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-079",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation commonly used to extract values from URL path segments?",
    "options": [
      {
        "key": "A",
        "text": "@RequestParam"
      },
      {
        "key": "B",
        "text": "@RequestBody"
      },
      {
        "key": "C",
        "text": "@PathVariable"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "C",
    "explanation": "@PathVariable 获取路径变量。 资料原句：@PathVariable.",
    "noteQuote": "@PathVariable.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-080",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that reads JSON/XML from the request body?",
    "options": [
      {
        "key": "A",
        "text": "@RequestParam"
      },
      {
        "key": "B",
        "text": "@Controller"
      },
      {
        "key": "C",
        "text": "@RequestBody"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "C",
    "explanation": "@RequestBody 把请求体 JSON/XML 转为对象。 资料原句：@RequestBody – Read JSON/XML from the request body.",
    "noteQuote": "@RequestBody – Read JSON/XML from the request body.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-081",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Annotation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that returns data directly as JSON/text instead of a view?",
    "options": [
      {
        "key": "A",
        "text": "@RequestMapping"
      },
      {
        "key": "B",
        "text": "@RequestParam"
      },
      {
        "key": "C",
        "text": "@Controller"
      },
      {
        "key": "D",
        "text": "@ResponseBody"
      }
    ],
    "answer": "D",
    "explanation": "@ResponseBody 不走视图解析，直接写响应体。 资料原句：@ResponseBody – Returns data directly (JSON/text), not a view.",
    "noteQuote": "@ResponseBody – Returns data directly (JSON/text), not a view.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Annotation",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-082",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "MVC Response",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Type used to return full response including headers and body?",
    "options": [
      {
        "key": "A",
        "text": "HttpSession"
      },
      {
        "key": "B",
        "text": "ResponseEntity"
      },
      {
        "key": "C",
        "text": "ModelMap only"
      },
      {
        "key": "D",
        "text": "BeanFactory"
      }
    ],
    "answer": "B",
    "explanation": "ResponseEntity 可控制状态码、响应头和响应体。 资料原句：HttpEntity / ResponseEntity – Return full response (headers + body).",
    "noteQuote": "HttpEntity / ResponseEntity – Return full response (headers + body).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "MVC Response",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-083",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "File Upload",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Spring MVC type used with @RequestParam(\"file\") for file upload?",
    "options": [
      {
        "key": "A",
        "text": "MultipartFile"
      },
      {
        "key": "B",
        "text": "Document"
      },
      {
        "key": "C",
        "text": "FileReader"
      },
      {
        "key": "D",
        "text": "InputStream only"
      }
    ],
    "answer": "A",
    "explanation": "上传文件常用 MultipartFile 接收。 资料原句：Upload Controller: Use @RequestParam(\"file\") MultipartFile file.",
    "noteQuote": "Upload Controller: Use @RequestParam(\"file\") MultipartFile file.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "File Upload",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-084",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Lightweight data format used for data exchange?",
    "options": [
      {
        "key": "A",
        "text": "JSON"
      },
      {
        "key": "B",
        "text": "Page design only"
      },
      {
        "key": "C",
        "text": "Bean scope"
      },
      {
        "key": "D",
        "text": "Exception class"
      }
    ],
    "answer": "A",
    "explanation": "JSON 常用于前后端数据交换。 资料原句：Server returns JSON/XML.",
    "noteQuote": "Server returns JSON/XML.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-085",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Default JSON processor in Spring MVC?",
    "options": [
      {
        "key": "A",
        "text": "Gson only"
      },
      {
        "key": "B",
        "text": "Jackson"
      },
      {
        "key": "C",
        "text": "JAXB only"
      },
      {
        "key": "D",
        "text": "Fastjson only"
      }
    ],
    "answer": "B",
    "explanation": "Spring MVC 默认常用 Jackson 做 JSON 转换。 资料原句：Jackson – Default in Spring MVC.",
    "noteQuote": "Jackson – Default in Spring MVC.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-086",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JSON/AJAX",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Technique that updates part of a page without reloading the whole page?",
    "options": [
      {
        "key": "A",
        "text": "Full page reload"
      },
      {
        "key": "B",
        "text": "Database backup"
      },
      {
        "key": "C",
        "text": "AOP weaving"
      },
      {
        "key": "D",
        "text": "AJAX"
      }
    ],
    "answer": "D",
    "explanation": "AJAX 异步请求可局部刷新页面。 资料原句：AJAX Concept: Server returns JSON/XML.",
    "noteQuote": "AJAX Concept: Server returns JSON/XML.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "JSON/AJAX",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-087",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: XML-based Spring MVC exception resolver mapping exception types to views?",
    "options": [
      {
        "key": "A",
        "text": "@ExceptionHandler"
      },
      {
        "key": "B",
        "text": "SimpleMappingExceptionResolver"
      },
      {
        "key": "C",
        "text": "ResponseEntity"
      },
      {
        "key": "D",
        "text": "@ControllerAdvice"
      }
    ],
    "answer": "B",
    "explanation": "XML 异常处理常用 SimpleMappingExceptionResolver。 资料原句：XML Configuration (SimpleMappingExceptionResolver).",
    "noteQuote": "XML Configuration (SimpleMappingExceptionResolver).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Exception",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-088",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation for local controller exception handling methods?",
    "options": [
      {
        "key": "A",
        "text": "@Autowired"
      },
      {
        "key": "B",
        "text": "@RequestMapping"
      },
      {
        "key": "C",
        "text": "@ExceptionHandler"
      },
      {
        "key": "D",
        "text": "@AfterThrowing"
      }
    ],
    "answer": "C",
    "explanation": "@ExceptionHandler 可在控制器中处理异常。 资料原句：Local Exception Handler (@ExceptionHandler inside controller).",
    "noteQuote": "Local Exception Handler (@ExceptionHandler inside controller).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Exception",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-089",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation used for global exception handling across controllers?",
    "options": [
      {
        "key": "A",
        "text": "@Controller"
      },
      {
        "key": "B",
        "text": "@Service"
      },
      {
        "key": "C",
        "text": "@Repository"
      },
      {
        "key": "D",
        "text": "@ControllerAdvice"
      }
    ],
    "answer": "D",
    "explanation": "@ControllerAdvice 可做全局异常处理。 资料原句：Global Exception Handler (@ControllerAdvice).",
    "noteQuote": "Global Exception Handler (@ControllerAdvice).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Exception",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-090",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Exception",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Annotation that maps a custom exception to HTTP status and reason?",
    "options": [
      {
        "key": "A",
        "text": "@ResponseStatus"
      },
      {
        "key": "B",
        "text": "@RequestParam"
      },
      {
        "key": "C",
        "text": "@ResponseBody"
      },
      {
        "key": "D",
        "text": "@Autowired"
      }
    ],
    "answer": "A",
    "explanation": "@ResponseStatus 可给自定义异常设置响应状态。 资料原句：Example with @ResponseStatus.",
    "noteQuote": "Example with @ResponseStatus.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Exception",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-091",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "JDBC",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Spring template class that simplifies JDBC operations?",
    "options": [
      {
        "key": "A",
        "text": "DispatcherServlet"
      },
      {
        "key": "B",
        "text": "ModelAndView"
      },
      {
        "key": "C",
        "text": "JdbcTemplate"
      },
      {
        "key": "D",
        "text": "HandlerMapping"
      }
    ],
    "answer": "C",
    "explanation": "JdbcTemplate 封装 JDBC 模板代码。 资料原句：Spring JDBC Template Classes.",
    "noteQuote": "Spring JDBC Template Classes.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "JDBC",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-092",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Transaction",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Transaction manager commonly used for Spring JDBC access?",
    "options": [
      {
        "key": "A",
        "text": "DataSourceTransactionManager"
      },
      {
        "key": "B",
        "text": "JpaTransactionManager only"
      },
      {
        "key": "C",
        "text": "ServletTransactionManager"
      },
      {
        "key": "D",
        "text": "RedisTransactionManager"
      }
    ],
    "answer": "A",
    "explanation": "Spring JDBC 常用 DataSourceTransactionManager。 资料原句：DataSourceTransactionManager – JDBC access (most common for Spring JDBC).",
    "noteQuote": "DataSourceTransactionManager – JDBC access (most common for Spring JDBC).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Transaction",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-093",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "SSM",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Integration of Spring + Spring MVC + MyBatis?",
    "options": [
      {
        "key": "A",
        "text": "Spring + Security + Maven"
      },
      {
        "key": "B",
        "text": "Servlet + JSP + Redis"
      },
      {
        "key": "C",
        "text": "SSM Integration"
      },
      {
        "key": "D",
        "text": "MongoDB + Redis + JDBC"
      }
    ],
    "answer": "C",
    "explanation": "SSM 即 Spring、Spring MVC、MyBatis 整合。 资料原句：SSM Integration (Spring + Spring MVC + MyBatis).",
    "noteQuote": "SSM Integration (Spring + Spring MVC + MyBatis).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "SSM",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-094",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "REST",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Web services style supporting formats such as JSON, XML, HTML, and text?",
    "options": [
      {
        "key": "A",
        "text": "Only JSP pages"
      },
      {
        "key": "B",
        "text": "REST Web Services"
      },
      {
        "key": "C",
        "text": "Only AOP"
      },
      {
        "key": "D",
        "text": "Only database views"
      }
    ],
    "answer": "B",
    "explanation": "REST 接口可返回多种格式，常见 JSON。 资料原句：Supports multiple formats: JSON, XML, HTML, Text.",
    "noteQuote": "Supports multiple formats: JSON, XML, HTML, Text.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "REST",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-095",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "REST",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: REST request type used to read resources?",
    "options": [
      {
        "key": "A",
        "text": "POST"
      },
      {
        "key": "B",
        "text": "PUT"
      },
      {
        "key": "C",
        "text": "GET"
      },
      {
        "key": "D",
        "text": "DELETE"
      }
    ],
    "answer": "C",
    "explanation": "GET 常用于查询/读取。 资料原句：GET Request (Read).",
    "noteQuote": "GET Request (Read).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "REST",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-096",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "REST",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: REST request type used to create resources?",
    "options": [
      {
        "key": "A",
        "text": "PUT"
      },
      {
        "key": "B",
        "text": "POST"
      },
      {
        "key": "C",
        "text": "DELETE"
      },
      {
        "key": "D",
        "text": "GET"
      }
    ],
    "answer": "B",
    "explanation": "POST 常用于新增。 资料原句：POST Request (Create).",
    "noteQuote": "POST Request (Create).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "REST",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-097",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "REST",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: REST request type used to update resources?",
    "options": [
      {
        "key": "A",
        "text": "GET"
      },
      {
        "key": "B",
        "text": "POST"
      },
      {
        "key": "C",
        "text": "DELETE"
      },
      {
        "key": "D",
        "text": "PUT"
      }
    ],
    "answer": "D",
    "explanation": "PUT 常用于更新。 资料原句：PUT Request (Update).",
    "noteQuote": "PUT Request (Update).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "REST",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-098",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "REST",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: REST request type used to delete resources?",
    "options": [
      {
        "key": "A",
        "text": "DELETE"
      },
      {
        "key": "B",
        "text": "GET"
      },
      {
        "key": "C",
        "text": "PUT"
      },
      {
        "key": "D",
        "text": "POST"
      }
    ],
    "answer": "A",
    "explanation": "DELETE 常用于删除。 资料原句：DELETE Request (Delete).",
    "noteQuote": "DELETE Request (Delete).",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "REST",
      "review-generated"
    ]
  },
  {
    "id": "SP-PN-099",
    "courseKey": "springmvc",
    "course": "Spring MVC / Spring",
    "topic": "Security",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which Spring/SpringMVC concept is described as: Spring module for authentication and authorization?",
    "options": [
      {
        "key": "A",
        "text": "Spring AOP only"
      },
      {
        "key": "B",
        "text": "Spring JDBC"
      },
      {
        "key": "C",
        "text": "Spring Security"
      },
      {
        "key": "D",
        "text": "Spring ORM"
      }
    ],
    "answer": "C",
    "explanation": "Spring Security 负责安全认证授权。 资料原句：Spring Security.",
    "noteQuote": "Spring Security.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "springmvc",
      "Security",
      "review-generated"
    ]
  },
  {
    "id": "NS-O-001",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "MongoDB supports full-text searching through:",
    "options": [
      {
        "key": "A",
        "text": "GridFS"
      },
      {
        "key": "B",
        "text": "Text search"
      },
      {
        "key": "C",
        "text": "Map-only queries"
      },
      {
        "key": "D",
        "text": "Column groups"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB 通过文本搜索（Text search）实现全文检索。GridFS 用于存储大文件，其余选项和全文检索无关。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-002",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the purpose of indexing in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "To remove duplicate data"
      },
      {
        "key": "B",
        "text": "To support queries on fields efficiently"
      },
      {
        "key": "C",
        "text": "To convert BSON to SQL"
      },
      {
        "key": "D",
        "text": "To reduce document size"
      }
    ],
    "answer": "B",
    "explanation": "索引的作用是提升字段查询效率，避免全文档扫描。去除重复、格式转换、缩小文档体积都不是索引的功能。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-003",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which MongoDB component allows complex data processing and analysis?",
    "options": [
      {
        "key": "A",
        "text": "Aggregation framework"
      },
      {
        "key": "B",
        "text": "Replica framework"
      },
      {
        "key": "C",
        "text": "Shell compiler"
      },
      {
        "key": "D",
        "text": "Backup engine"
      }
    ],
    "answer": "A",
    "explanation": "聚合框架（Aggregation framework）用于复杂数据处理、统计与分析；副本集负责高可用，后两者不做数据分析。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-004",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which MongoDB feature is used for high availability?",
    "options": [
      {
        "key": "A",
        "text": "Replica sets"
      },
      {
        "key": "B",
        "text": "Lua scripts"
      },
      {
        "key": "C",
        "text": "Sorted sets"
      },
      {
        "key": "D",
        "text": "Bitmaps"
      }
    ],
    "answer": "A",
    "explanation": "副本集（Replica sets）是 MongoDB 实现高可用、故障自动转移的核心功能。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-005",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "NoSQL databases focus more on which theorem?",
    "options": [
      {
        "key": "A",
        "text": "Pythagorean theorem"
      },
      {
        "key": "B",
        "text": "CAP theorem"
      },
      {
        "key": "C",
        "text": "Pythagoras theorem"
      },
      {
        "key": "D",
        "text": "Euler's theorem"
      }
    ],
    "answer": "B",
    "explanation": "NoSQL 数据库设计主要围绕 CAP 定理（一致性、可用性、分区容错性）展开。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-006",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In relational databases, data is usually stored in:",
    "options": [
      {
        "key": "A",
        "text": "Graph nodes"
      },
      {
        "key": "B",
        "text": "JSON trees"
      },
      {
        "key": "C",
        "text": "Tables with predefined schemas"
      },
      {
        "key": "D",
        "text": "Key-value pairs only"
      }
    ],
    "answer": "C",
    "explanation": "关系型数据库使用预定义结构的表存储数据；图节点、JSON、键值对是 NoSQL 不同类型的存储形式。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-007",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Why is Redis extremely fast?",
    "options": [
      {
        "key": "A",
        "text": "It uses complex SQL queries"
      },
      {
        "key": "B",
        "text": "It stores data in memory"
      },
      {
        "key": "C",
        "text": "It runs only on Linux"
      },
      {
        "key": "D",
        "text": "It uses relational tables"
      }
    ],
    "answer": "B",
    "explanation": "Redis 速度极快的核心原因是数据常驻内存，内存读写速度远高于磁盘。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-008",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is NoSQL primarily designed to handle?",
    "options": [
      {
        "key": "A",
        "text": "Only numerical structured data"
      },
      {
        "key": "B",
        "text": "Large volumes of unstructured and semi-structured data"
      },
      {
        "key": "C",
        "text": "Only image files"
      },
      {
        "key": "D",
        "text": "Only relational tables"
      }
    ],
    "answer": "B",
    "explanation": "NoSQL 主要用于处理海量非结构化、半结构化数据，适配大数据场景。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-009",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which feature helps NoSQL databases remain operational during failures?",
    "options": [
      {
        "key": "A",
        "text": "High availability and fault tolerance"
      },
      {
        "key": "B",
        "text": "Fixed rigid schema"
      },
      {
        "key": "C",
        "text": "Dependence on single server"
      },
      {
        "key": "D",
        "text": "Manual backup only"
      }
    ],
    "answer": "A",
    "explanation": "高可用与容错性，保证数据库在节点故障时仍可正常运行。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-010",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Redis is mainly known as:",
    "options": [
      {
        "key": "A",
        "text": "A disk-based document database"
      },
      {
        "key": "B",
        "text": "An in-memory data structure store"
      },
      {
        "key": "C",
        "text": "A graph database only"
      },
      {
        "key": "D",
        "text": "A spreadsheet engine"
      }
    ],
    "answer": "B",
    "explanation": "Redis 是内存型数据结构存储，并非文档库、图数据库或表格引擎。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-011",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Sharding",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which MongoDB feature allows data to be spread across multiple servers?",
    "options": [
      {
        "key": "A",
        "text": "Indexing"
      },
      {
        "key": "B",
        "text": "Sharding"
      },
      {
        "key": "C",
        "text": "Text search"
      },
      {
        "key": "D",
        "text": "BSON encoding"
      }
    ],
    "answer": "B",
    "explanation": "分片（Sharding）可将数据分散到多台服务器，实现水平扩容。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Sharding"
    ]
  },
  {
    "id": "NS-O-012",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which NoSQL database type is best suited for relationship-intensive data?",
    "options": [
      {
        "key": "A",
        "text": "Graph store"
      },
      {
        "key": "B",
        "text": "Document store"
      },
      {
        "key": "C",
        "text": "Key-value store"
      },
      {
        "key": "D",
        "text": "Column store"
      }
    ],
    "answer": "A",
    "explanation": "图数据库（Graph store）专门适配关联关系复杂的数据，如社交关系、知识图谱。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-013",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which type of query in MongoDB is used for location-based data?",
    "options": [
      {
        "key": "A",
        "text": "Text queries"
      },
      {
        "key": "B",
        "text": "ACID queries"
      },
      {
        "key": "C",
        "text": "Geospatial queries"
      },
      {
        "key": "D",
        "text": "Relational queries"
      }
    ],
    "answer": "C",
    "explanation": "地理空间查询（Geospatial queries）用于处理地理位置、距离范围等位置相关数据。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-014",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "According to the notes, MongoDB installation and deployment platforms include:",
    "options": [
      {
        "key": "A",
        "text": "Android and iOS"
      },
      {
        "key": "B",
        "text": "Window and Linux"
      },
      {
        "key": "C",
        "text": "Oracle and SAP"
      },
      {
        "key": "D",
        "text": "Python and Java"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB 主流部署平台为 Windows 和 Linux；其余选项为移动端、软件、编程语言。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-015",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Why are NoSQL databases often suitable for real-time applications?",
    "options": [
      {
        "key": "A",
        "text": "They use complex joins"
      },
      {
        "key": "B",
        "text": "They provide faster read/write operations"
      },
      {
        "key": "C",
        "text": "They work only offline"
      },
      {
        "key": "D",
        "text": "They cannot handle big data"
      }
    ],
    "answer": "B",
    "explanation": "NoSQL 读写延迟低、速度快，满足实时应用的低延迟要求。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-016",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which MongoDB datatype is commonly auto-generated for _id values?",
    "options": [
      {
        "key": "A",
        "text": "Regular Expression"
      },
      {
        "key": "B",
        "text": "Date"
      },
      {
        "key": "C",
        "text": "ObjectId"
      },
      {
        "key": "D",
        "text": "Double"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 会自动为文档 _id 字段生成 ObjectId 唯一标识。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-017",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is one advantage of BSON over plain JSON in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "BSON cannot hold arrays"
      },
      {
        "key": "B",
        "text": "It supports additional datatypes and faster processing"
      },
      {
        "key": "C",
        "text": "BSON removes collections"
      },
      {
        "key": "D",
        "text": "BSON only works in browsers"
      }
    ],
    "answer": "B",
    "explanation": "BSON 是 JSON 的二进制形式，支持更多数据类型，且编解码效率更高。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-018",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In the document { name:\"Aditya\", age:25 }, the value 25 is an example of:",
    "options": [
      {
        "key": "A",
        "text": "Boolean"
      },
      {
        "key": "B",
        "text": "Array"
      },
      {
        "key": "C",
        "text": "Integer"
      },
      {
        "key": "D",
        "text": "Regular expression"
      }
    ],
    "answer": "C",
    "explanation": "25 是整数（Integer）类型。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-019",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does a field value of null usually indicate?",
    "options": [
      {
        "key": "A",
        "text": "A missing, unknown, or empty value"
      },
      {
        "key": "B",
        "text": "An index field"
      },
      {
        "key": "C",
        "text": "A nested collection"
      },
      {
        "key": "D",
        "text": "Permanently deleted data"
      }
    ],
    "answer": "A",
    "explanation": "null 代表字段值缺失、未知或为空。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-020",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the effect of db.students.find({ age: { $gt: 20 } })?",
    "options": [
      {
        "key": "A",
        "text": "Returns students younger than 20"
      },
      {
        "key": "B",
        "text": "Deletes students older than 20"
      },
      {
        "key": "C",
        "text": "Returns students older than 20"
      },
      {
        "key": "D",
        "text": "Updates students aged 20"
      }
    ],
    "answer": "C",
    "explanation": "$gt 表示大于，该语句查询年龄大于 20 的学生文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-021",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In the document { isActive: true }, the value true is a:",
    "options": [
      {
        "key": "A",
        "text": "String"
      },
      {
        "key": "B",
        "text": "Boolean"
      },
      {
        "key": "C",
        "text": "Number"
      },
      {
        "key": "D",
        "text": "Array"
      }
    ],
    "answer": "B",
    "explanation": "true / false 属于布尔类型（Boolean），用于逻辑判断。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-022",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator means “less than” in MongoDB queries?",
    "options": [
      {
        "key": "A",
        "text": "$ne"
      },
      {
        "key": "B",
        "text": "$in"
      },
      {
        "key": "C",
        "text": "$lt"
      },
      {
        "key": "D",
        "text": "$set"
      }
    ],
    "answer": "C",
    "explanation": "$lt = 小于；$ne = 不等于；$in = 匹配列表内值；$set 是更新操作符。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-023",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator is used to match any value from a list?",
    "options": [
      {
        "key": "A",
        "text": "$in"
      },
      {
        "key": "B",
        "text": "$gt"
      },
      {
        "key": "C",
        "text": "$inc"
      },
      {
        "key": "D",
        "text": "$pop"
      }
    ],
    "answer": "A",
    "explanation": "$in 用于匹配字段值在指定列表中的文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-024",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does the command db.students.findOne({ name: \"Aditya\" }) do?",
    "options": [
      {
        "key": "A",
        "text": "Deletes one document"
      },
      {
        "key": "B",
        "text": "Returns one matching document"
      },
      {
        "key": "C",
        "text": "Replaces a document"
      },
      {
        "key": "D",
        "text": "Returns only the _id field"
      }
    ],
    "answer": "B",
    "explanation": "findOne() 只返回第一条匹配条件的文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-025",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which command switches to a database named schoolDB?",
    "options": [
      {
        "key": "A",
        "text": "open schoolDB"
      },
      {
        "key": "B",
        "text": "db.use(schoolDB)"
      },
      {
        "key": "C",
        "text": "use schoolDB"
      },
      {
        "key": "D",
        "text": "switch schoolDB"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 切换数据库命令固定为 use 数据库名。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-026",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the effect of db.students.updateOne({ name:\"Ravi\" }, { $pop:{ skills:-1 } })?",
    "options": [
      {
        "key": "A",
        "text": "Removes the first element of skills"
      },
      {
        "key": "B",
        "text": "Removes the last element of skills"
      },
      {
        "key": "C",
        "text": "Adds an element to skills"
      },
      {
        "key": "D",
        "text": "Updates the whole array"
      }
    ],
    "answer": "A",
    "explanation": "$pop 操作数组：-1 删除数组第一个元素。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-027",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which field below is an embedded document?",
    "options": [
      {
        "key": "A",
        "text": "name: \"Tom\""
      },
      {
        "key": "B",
        "text": "address: { city:\"Beijing\", country:\"China\" }"
      },
      {
        "key": "C",
        "text": "hobbies: [\"read\", \"run\"]"
      },
      {
        "key": "D",
        "text": "age: 22"
      }
    ],
    "answer": "B",
    "explanation": "嵌入式文档由 {} 包裹子键值对；数组使用 []，其余为普通字段。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-028",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which command inserts one new student document into a collection?",
    "options": [
      {
        "key": "A",
        "text": "db.students.addOne({...})"
      },
      {
        "key": "B",
        "text": "db.students.insertOne({...})"
      },
      {
        "key": "C",
        "text": "db.students.put({...})"
      },
      {
        "key": "D",
        "text": "db.students.findOne({...})"
      }
    ],
    "answer": "B",
    "explanation": "insertOne() 是插入单条文档的标准命令。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-029",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does the option { upsert: true } allow MongoDB to do?",
    "options": [
      {
        "key": "A",
        "text": "Update a matching document or insert a new one if no match exists"
      },
      {
        "key": "B",
        "text": "Delete all matched documents"
      },
      {
        "key": "C",
        "text": "Read documents without changes"
      },
      {
        "key": "D",
        "text": "Create a new collection"
      }
    ],
    "answer": "A",
    "explanation": "upsert: true 表示有匹配则更新，无匹配则插入新文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-030",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the effect of db.students.updateOne({ name:\"Ravi\" }, { $pop:{ skills:1 } })?",
    "options": [
      {
        "key": "A",
        "text": "Removes the first element of skills"
      },
      {
        "key": "B",
        "text": "Removes the last element of skills"
      },
      {
        "key": "C",
        "text": "Clears the entire array"
      },
      {
        "key": "D",
        "text": "Sorts the array"
      }
    ],
    "answer": "B",
    "explanation": "$pop: 1 删除数组最后一个元素。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-031",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which update operator is used to increase a numeric field by a given amount?",
    "options": [
      {
        "key": "A",
        "text": "$inc"
      },
      {
        "key": "B",
        "text": "$ne"
      },
      {
        "key": "C",
        "text": "$in"
      },
      {
        "key": "D",
        "text": "$addToSet"
      }
    ],
    "answer": "A",
    "explanation": "$inc 用于对数值字段做自增 / 自减更新。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-O-032",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the main danger of using field names like Age, age, and AGE in the same collection?",
    "options": [
      {
        "key": "A",
        "text": "MongoDB merges them automatically"
      },
      {
        "key": "B",
        "text": "Data gets encrypted"
      },
      {
        "key": "C",
        "text": "Data becomes inconsistent and harder to manage"
      },
      {
        "key": "D",
        "text": "Queries run faster"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 字段名区分大小写，大小写不同视为不同字段，会造成数据混乱、难以管理。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-033",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What does this command do? db.students.updateOne({ name:\"Rahul\" }, { $push:{ skills:\"MongoDB\" } })",
    "options": [
      {
        "key": "A",
        "text": "Replaces the entire skills array"
      },
      {
        "key": "B",
        "text": "Adds MongoDB to the skills array"
      },
      {
        "key": "C",
        "text": "Deletes an element from skills"
      },
      {
        "key": "D",
        "text": "Creates a new collection"
      }
    ],
    "answer": "B",
    "explanation": "$push 向数组尾部追加元素，允许重复值。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-034",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "If order data grows separately and changes frequently, which modeling choice is usually better?",
    "options": [
      {
        "key": "A",
        "text": "Embedded arrays"
      },
      {
        "key": "B",
        "text": "References across collections"
      },
      {
        "key": "C",
        "text": "Duplicate all data"
      },
      {
        "key": "D",
        "text": "Do not store order data"
      }
    ],
    "answer": "B",
    "explanation": "数据独立增长、频繁更新时，推荐使用跨集合引用，避免文档臃肿。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-035",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In the document { salary: 45000.50 }, the value 45000.50 is best stored as:",
    "options": [
      {
        "key": "A",
        "text": "Double"
      },
      {
        "key": "B",
        "text": "Boolean"
      },
      {
        "key": "C",
        "text": "ObjectId"
      },
      {
        "key": "D",
        "text": "Null"
      }
    ],
    "answer": "A",
    "explanation": "带小数的数值在 MongoDB 中存储为 Double（双精度浮点型）。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-036",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which command removes only one document matching a condition?",
    "options": [
      {
        "key": "A",
        "text": "db.students.deleteOne({ name:\"Pooja\" })"
      },
      {
        "key": "B",
        "text": "db.students.deleteMany({})"
      },
      {
        "key": "C",
        "text": "db.students.removeAll()"
      },
      {
        "key": "D",
        "text": "db.students.drop()"
      }
    ],
    "answer": "A",
    "explanation": "deleteOne() 删除单条匹配文档；deleteMany() 删除所有匹配文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-037",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "In a projection document, what is the purpose of name: 1?",
    "options": [
      {
        "key": "A",
        "text": "Rename the field"
      },
      {
        "key": "B",
        "text": "Include the name field in the result"
      },
      {
        "key": "C",
        "text": "Delete the name field"
      },
      {
        "key": "D",
        "text": "Sort by name"
      }
    ],
    "answer": "B",
    "explanation": "查询投影中，字段:1 代表返回该字段，字段:0 代表不返回该字段。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-038",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the meaning of the i flag in a regex such as /ravi/i?",
    "options": [
      {
        "key": "A",
        "text": "Insert mode"
      },
      {
        "key": "B",
        "text": "Integer conversion"
      },
      {
        "key": "C",
        "text": "Ignore case"
      },
      {
        "key": "D",
        "text": "Index mode"
      }
    ],
    "answer": "C",
    "explanation": "正则标识 i 表示忽略大小写匹配。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-039",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the effect of db.students.deleteMany({})?",
    "options": [
      {
        "key": "A",
        "text": "Deletes the whole database"
      },
      {
        "key": "B",
        "text": "It removes all documents from the collection"
      },
      {
        "key": "C",
        "text": "Deletes only duplicate documents"
      },
      {
        "key": "D",
        "text": "Deletes one random document"
      }
    ],
    "answer": "B",
    "explanation": "deleteMany({}) 空条件表示删除集合内所有文档，不会删除集合与数据库。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-040",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator should be used when you want to add a skill but avoid duplicates?",
    "options": [
      {
        "key": "A",
        "text": "$push"
      },
      {
        "key": "B",
        "text": "$addToSet"
      },
      {
        "key": "C",
        "text": "$set"
      },
      {
        "key": "D",
        "text": "$gt"
      }
    ],
    "answer": "B",
    "explanation": "$addToSet 向数组添加元素，自动去重；$push 允许重复。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-O-041",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which datatype is used in MongoDB queries for text pattern matching?",
    "options": [
      {
        "key": "A",
        "text": "Regex"
      },
      {
        "key": "B",
        "text": "Null"
      },
      {
        "key": "C",
        "text": "Double"
      },
      {
        "key": "D",
        "text": "Array"
      }
    ],
    "answer": "A",
    "explanation": "使用正则表达式（Regex）实现文本模糊、模式匹配。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-042",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which command is correct for inserting several documents at once?",
    "options": [
      {
        "key": "A",
        "text": "db.students.insertMany([...])"
      },
      {
        "key": "B",
        "text": "db.students.addMany([...])"
      },
      {
        "key": "C",
        "text": "db.students.findMany([...])"
      },
      {
        "key": "D",
        "text": "db.students.append([...])"
      }
    ],
    "answer": "A",
    "explanation": "insertMany() 用于批量插入多条文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-043",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MongoDB stores documents internally in which format?",
    "options": [
      {
        "key": "A",
        "text": "CSV"
      },
      {
        "key": "B",
        "text": "XML"
      },
      {
        "key": "C",
        "text": "BSON"
      },
      {
        "key": "D",
        "text": "Plain text"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 底层使用 BSON（二进制 JSON） 存储数据。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-044",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which field below is an array field?",
    "options": [
      {
        "key": "A",
        "text": "name: \"Alice\""
      },
      {
        "key": "B",
        "text": "age: 20"
      },
      {
        "key": "C",
        "text": "skills: [\"Java\", \"MongoDB\"]"
      },
      {
        "key": "D",
        "text": "isPass: true"
      }
    ],
    "answer": "C",
    "explanation": "数组使用 [] 包裹多个元素。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-045",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which database style usually requires predefined columns before storing records?",
    "options": [
      {
        "key": "A",
        "text": "Relational database"
      },
      {
        "key": "B",
        "text": "Graph cache"
      },
      {
        "key": "C",
        "text": "Key-value store"
      },
      {
        "key": "D",
        "text": "In-memory queue"
      }
    ],
    "answer": "A",
    "explanation": "关系型数据库必须提前定义表结构、字段与类型；NoSQL 多为动态结构。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-O-046",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which option correctly expands CRUD?",
    "options": [
      {
        "key": "A",
        "text": "Create, Read, Update, Delete"
      },
      {
        "key": "B",
        "text": "Create, Run, Update, Drop"
      },
      {
        "key": "C",
        "text": "Copy, Read, Update, Delete"
      },
      {
        "key": "D",
        "text": "Create, Read, Upload, Download"
      }
    ],
    "answer": "A",
    "explanation": "CRUD 是数据库四大基础操作：增、查、改、删。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-047",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In an orders collection, which field is typically used to link an order back to a customer document?",
    "options": [
      {
        "key": "A",
        "text": "price"
      },
      {
        "key": "B",
        "text": "productName"
      },
      {
        "key": "C",
        "text": "customerId or userId"
      },
      {
        "key": "D",
        "text": "createdAtText"
      }
    ],
    "answer": "C",
    "explanation": "通过 customerId / userId 引用用户文档的 _id，实现集合关联。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-048",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "If a user and the user’s addresses are usually fetched together, which modeling choice is better?",
    "options": [
      {
        "key": "A",
        "text": "Embedded documents"
      },
      {
        "key": "B",
        "text": "SQL joins"
      },
      {
        "key": "C",
        "text": "Plain text links"
      },
      {
        "key": "D",
        "text": "Manual comment links"
      }
    ],
    "answer": "A",
    "explanation": "数据总是一起查询时，使用嵌入式文档可减少查询次数，提升性能。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-049",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which query matches names beginning with the letter R?",
    "options": [
      {
        "key": "A",
        "text": "db.students.find({ name: /R$/ })"
      },
      {
        "key": "B",
        "text": "db.students.find({ name: /^R/ })"
      },
      {
        "key": "C",
        "text": "db.students.find({ name: /R/i$ })"
      },
      {
        "key": "D",
        "text": "db.students.find({ name: /R*/ })"
      }
    ],
    "answer": "B",
    "explanation": "正则 ^ 匹配字符串开头，/^R/ 匹配以字母 R 开头的内容；$ 代表结尾。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-050",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which update operator is used to assign a new value to a field?",
    "options": [
      {
        "key": "A",
        "text": "$gt"
      },
      {
        "key": "B",
        "text": "$set"
      },
      {
        "key": "C",
        "text": "$push"
      },
      {
        "key": "D",
        "text": "$pop"
      }
    ],
    "answer": "B",
    "explanation": "$set 是最常用的更新符，用于直接给字段设置新值。 使用说明 全内容已纯文本结构化排版，直接全选复制，粘贴到 Word / WPS / 记事本即可生成正式文档。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL & MongoDB (1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-051",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator is used to increase a numeric value in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "$set"
      },
      {
        "key": "B",
        "text": "$push"
      },
      {
        "key": "C",
        "text": "$rename"
      },
      {
        "key": "D",
        "text": "$inc"
      }
    ],
    "answer": "D",
    "explanation": "$inc 是 MongoDB 中专门用于对数值字段做增减运算的更新运算符；$set 用于设置字段值，$push 用于向数组添加元素，$rename 用于重命名字段。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-052",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to insert a single document into a collection?",
    "options": [
      {
        "key": "A",
        "text": "insert"
      },
      {
        "key": "B",
        "text": "insertOne()"
      },
      {
        "key": "C",
        "text": "addOne()"
      },
      {
        "key": "D",
        "text": "add()"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB Java 驱动中，insertOne() 用于插入单个文档，insertMany() 用于批量插入，其余并非标准方法。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-053",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to delete a single document?",
    "options": [
      {
        "key": "A",
        "text": "delete()"
      },
      {
        "key": "B",
        "text": "remove()"
      },
      {
        "key": "C",
        "text": "deleteOne()"
      },
      {
        "key": "D",
        "text": "drop()"
      }
    ],
    "answer": "C",
    "explanation": "deleteOne() 删除匹配条件的单个文档；deleteMany() 删除全部匹配文档，drop() 用于删除整个集合。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-054",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In the UpsertDemo program, what happens if the document with name \"John\" is not found?",
    "options": [
      {
        "key": "A",
        "text": "An error occurs"
      },
      {
        "key": "B",
        "text": "No operation is done"
      },
      {
        "key": "C",
        "text": "New document is inserted"
      },
      {
        "key": "D",
        "text": "The program terminates"
      }
    ],
    "answer": "C",
    "explanation": "upsert 是更新 + 插入组合操作，查询不到匹配文档时，会自动新建并插入一条文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-055",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which Java package is imported for MongoDB database operations?",
    "options": [
      {
        "key": "A",
        "text": "java.sql"
      },
      {
        "key": "B",
        "text": "org.mongodb"
      },
      {
        "key": "C",
        "text": "com.mongodb.client"
      },
      {
        "key": "D",
        "text": "com.mongodb.db"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB Java 驱动核心操作包为 com.mongodb.client，java.sql 是传统关系型数据库包。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-056",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which keyword is used to handle exceptions in Java?",
    "options": [
      {
        "key": "A",
        "text": "try"
      },
      {
        "key": "B",
        "text": "catch"
      },
      {
        "key": "C",
        "text": "throw"
      },
      {
        "key": "D",
        "text": "finally"
      }
    ],
    "answer": "B",
    "explanation": "catch 用于捕获并处理异常；try 包裹风险代码，throws 仅声明异常，不做处理。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-057",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator is used in MongoDB to check \"less than\" condition?",
    "options": [
      {
        "key": "A",
        "text": "$lt"
      },
      {
        "key": "B",
        "text": "$eq"
      },
      {
        "key": "C",
        "text": "$gt"
      },
      {
        "key": "D",
        "text": "$gte"
      }
    ],
    "answer": "A",
    "explanation": "$lt 代表小于；$eq 等于，$gt 大于，$gte 大于等于。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-058",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to retrieve a collection from a database?",
    "options": [
      {
        "key": "A",
        "text": "getCollection()"
      },
      {
        "key": "B",
        "text": "getDB()"
      },
      {
        "key": "C",
        "text": "getTable()"
      },
      {
        "key": "D",
        "text": "getSet()"
      }
    ],
    "answer": "A",
    "explanation": "通过 MongoDatabase.getCollection(集合名) 获取集合对象，其余不是 MongoDB 标准方法。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-059",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the default MongoDB server port used in the Java examples?",
    "options": [
      {
        "key": "A",
        "text": "3306"
      },
      {
        "key": "B",
        "text": "8080"
      },
      {
        "key": "C",
        "text": "27017"
      },
      {
        "key": "D",
        "text": "1521"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 默认服务端口为 27017；3306 是 MySQL 端口，8080 为常用 Web 端口，1521 是 Oracle 端口。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-060",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to insert multiple documents into a collection?",
    "options": [
      {
        "key": "A",
        "text": "insertOne()"
      },
      {
        "key": "B",
        "text": "addMany()"
      },
      {
        "key": "C",
        "text": "insertMany()"
      },
      {
        "key": "D",
        "text": "addAll()"
      }
    ],
    "answer": "C",
    "explanation": "insertMany() 实现批量插入多条文档，insertOne() 仅支持单条插入。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-061",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to count the total number of documents in a collection?",
    "options": [
      {
        "key": "A",
        "text": "size()"
      },
      {
        "key": "B",
        "text": "length()"
      },
      {
        "key": "C",
        "text": "countDocuments()"
      },
      {
        "key": "D",
        "text": "total()"
      }
    ],
    "answer": "C",
    "explanation": "countDocuments() 是统计文档数量的标准方法，旧版 count() 已废弃，不再推荐使用。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-062",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the purpose of an UPSERT operation?",
    "options": [
      {
        "key": "A",
        "text": "Delete document if found"
      },
      {
        "key": "B",
        "text": "Read document if found"
      },
      {
        "key": "C",
        "text": "Update a document if found, otherwise insert a new document"
      },
      {
        "key": "D",
        "text": "Replace all documents"
      }
    ],
    "answer": "C",
    "explanation": "upsert 逻辑：查到匹配文档则执行更新，未查到则自动插入新文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-063",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to retrieve a database in MongoDB Java?",
    "options": [
      {
        "key": "A",
        "text": "getClient()"
      },
      {
        "key": "B",
        "text": "getDatabase()"
      },
      {
        "key": "C",
        "text": "getDB()"
      },
      {
        "key": "D",
        "text": "getSchema()"
      }
    ],
    "answer": "B",
    "explanation": "通过 MongoClient.getDatabase(库名) 获取指定数据库对象。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-064",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which loop is used in the examples to display documents from the collection?",
    "options": [
      {
        "key": "A",
        "text": "while loop"
      },
      {
        "key": "B",
        "text": "do-while loop"
      },
      {
        "key": "C",
        "text": "for-each loop"
      },
      {
        "key": "D",
        "text": "infinite loop"
      }
    ],
    "answer": "C",
    "explanation": "开发中常用 Java 增强 for-each 循环遍历查询结果，语法简洁。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-065",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which statement closes the MongoDB connection in the finally block?",
    "options": [
      {
        "key": "A",
        "text": "closeConnection()"
      },
      {
        "key": "B",
        "text": "disconnect()"
      },
      {
        "key": "C",
        "text": "client.close();"
      },
      {
        "key": "D",
        "text": "end()"
      }
    ],
    "answer": "C",
    "explanation": "调用 MongoClient 的 close() 方法关闭数据库连接，一般放在 finally 块释放资源。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-066",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which class enables UPSERT functionality in MongoDB Java?",
    "options": [
      {
        "key": "A",
        "text": "UpdateOptions"
      },
      {
        "key": "B",
        "text": "InsertOptions"
      },
      {
        "key": "C",
        "text": "DeleteOptions"
      },
      {
        "key": "D",
        "text": "FindOptions"
      }
    ],
    "answer": "A",
    "explanation": "通过 UpdateOptions 类设置 upsert(true)，开启更新插入功能。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-067",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to update multiple documents in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "updateMany()"
      },
      {
        "key": "B",
        "text": "updateOne()"
      },
      {
        "key": "C",
        "text": "modify()"
      },
      {
        "key": "D",
        "text": "change()"
      }
    ],
    "answer": "A",
    "explanation": "updateMany() 更新所有匹配条件的文档；updateOne() 只更新第一条匹配文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-068",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which block is always executed whether an exception occurs or not?",
    "options": [
      {
        "key": "A",
        "text": "try"
      },
      {
        "key": "B",
        "text": "catch"
      },
      {
        "key": "C",
        "text": "finally"
      },
      {
        "key": "D",
        "text": "throw"
      }
    ],
    "answer": "C",
    "explanation": "finally 块代码无论程序是否抛出异常，都会执行，多用于资源释放。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-069",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which MongoDB operator is used to update specific fields in a document?",
    "options": [
      {
        "key": "A",
        "text": "$gt"
      },
      {
        "key": "B",
        "text": "$set"
      },
      {
        "key": "C",
        "text": "$eq"
      },
      {
        "key": "D",
        "text": "$inc"
      }
    ],
    "answer": "B",
    "explanation": "$set 用于修改、新增文档指定字段；$gt/$eq 是查询运算符，$inc 用于数值增减。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-070",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to display all documents from a collection?",
    "options": [
      {
        "key": "A",
        "text": "getAll()"
      },
      {
        "key": "B",
        "text": "select()"
      },
      {
        "key": "C",
        "text": "find()"
      },
      {
        "key": "D",
        "text": "fetch()"
      }
    ],
    "answer": "C",
    "explanation": "无参 find() 会查询集合内全部文档，配合循环即可遍历展示数据。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-071",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which class is used to create a connection with MongoDB in Java?",
    "options": [
      {
        "key": "A",
        "text": "MongoDatabase"
      },
      {
        "key": "B",
        "text": "MongoClient"
      },
      {
        "key": "C",
        "text": "MongoCollection"
      },
      {
        "key": "D",
        "text": "Document"
      }
    ],
    "answer": "B",
    "explanation": "MongoClient 是建立 MongoDB 服务连接的核心类；其余分别对应数据库、集合、文档对象。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-072",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query/Update Operators",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which operator is used to find documents where age is greater than 20?",
    "options": [
      {
        "key": "A",
        "text": "$lt"
      },
      {
        "key": "B",
        "text": "$lte"
      },
      {
        "key": "C",
        "text": "$gt"
      },
      {
        "key": "D",
        "text": "$gte"
      }
    ],
    "answer": "C",
    "explanation": "$gt 表示大于，可筛选出字段值大于指定数值的文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "Query/Update Operators"
    ]
  },
  {
    "id": "NS-O-073",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method is used to update only one document in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "updateAll()"
      },
      {
        "key": "B",
        "text": "updateMany()"
      },
      {
        "key": "C",
        "text": "updateOne()"
      },
      {
        "key": "D",
        "text": "modifyOne()"
      }
    ],
    "answer": "C",
    "explanation": "updateOne() 仅更新第一个匹配查询条件的文档。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-074",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which method completely replaces an existing document?",
    "options": [
      {
        "key": "A",
        "text": "updateOne()"
      },
      {
        "key": "B",
        "text": "replaceOne()"
      },
      {
        "key": "C",
        "text": "setOne()"
      },
      {
        "key": "D",
        "text": "swap()"
      }
    ],
    "answer": "B",
    "explanation": "replaceOne() 会用新文档整体替换原有文档（_id 字段保留）；updateOne() 仅修改部分字段。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 考试题(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-075",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which field is required for MongoDB time series collections to store timestamps?",
    "options": [
      {
        "key": "A",
        "text": "metaField"
      },
      {
        "key": "B",
        "text": "timeField"
      },
      {
        "key": "C",
        "text": "indexField"
      },
      {
        "key": "D",
        "text": "dataField"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB 时间序列集合中，timeField 是专门用来存储时间戳的必填核心字段。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Time Series"
    ]
  },
  {
    "id": "NS-O-076",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the main purpose of indexes in MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "To delete documents quickly"
      },
      {
        "key": "B",
        "text": "To find matching documents quickly"
      },
      {
        "key": "C",
        "text": "To update documents automatically"
      },
      {
        "key": "D",
        "text": "To duplicate data"
      }
    ],
    "answer": "B",
    "explanation": "索引的核心作用是提升查询效率，让数据库快速定位匹配条件的文档，避免全集合遍历。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-077",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What does the calculation 5 / 6378.1 mean in $centerSphere?",
    "options": [
      {
        "key": "A",
        "text": "To convert 5 km into radians"
      },
      {
        "key": "B",
        "text": "To convert radians into km"
      },
      {
        "key": "C",
        "text": "To calculate earth radius"
      },
      {
        "key": "D",
        "text": "To filter 5 km range"
      }
    ],
    "answer": "A",
    "explanation": "$centerSphere 地理查询的半径单位为弧度，地球半径约 6378.1 公里，该公式用于将 5 公里换算为弧度。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-078",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Multikey indexes are created for which type of fields?",
    "options": [
      {
        "key": "A",
        "text": "String"
      },
      {
        "key": "B",
        "text": "Number"
      },
      {
        "key": "C",
        "text": "Arrays"
      },
      {
        "key": "D",
        "text": "Boolean"
      }
    ],
    "answer": "C",
    "explanation": "多键索引（Multikey Index）专门针对数组字段创建，会为数组内每一个元素单独生成索引项。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-079",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What kind of data should be stored in metaField of time series collections?",
    "options": [
      {
        "key": "A",
        "text": "Real-time measured values"
      },
      {
        "key": "B",
        "text": "Stable grouping label"
      },
      {
        "key": "C",
        "text": "Dynamic time data"
      },
      {
        "key": "D",
        "text": "Temporary calculation result"
      }
    ],
    "answer": "B",
    "explanation": "时间序列集合的 metaField 用于存放不随时间变化的分组标识，如设备 ID、设备型号等静态信息。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Time Series"
    ]
  },
  {
    "id": "NS-O-080",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What value does MongoDB text search return to indicate matching degree?",
    "options": [
      {
        "key": "A",
        "text": "Relevance score"
      },
      {
        "key": "B",
        "text": "Distance value"
      },
      {
        "key": "C",
        "text": "Index number"
      },
      {
        "key": "D",
        "text": "Sort weight"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB 文本检索会为每条匹配文档返回相关性分数，用来体现文档和检索关键词的匹配程度。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-081",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which command correctly creates text indexes for title and description fields?",
    "options": [
      {
        "key": "A",
        "text": "db.books.createIndex({title:1, description:1})"
      },
      {
        "key": "B",
        "text": "db.books.createIndex({title:2d, description:2d})"
      },
      {
        "key": "C",
        "text": "db.books.createIndex({ title: \"text\", description: \"text\" })"
      },
      {
        "key": "D",
        "text": "db.books.createIndex({title:multikey, description:multikey})"
      }
    ],
    "answer": "C",
    "explanation": "创建文本索引，需要将字段类型指定为 text，该语句可同时为两个字段建立联合文本索引。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-082",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is LineString used to represent in GeoJSON?",
    "options": [
      {
        "key": "A",
        "text": "Closed area"
      },
      {
        "key": "B",
        "text": "Route or path representation"
      },
      {
        "key": "C",
        "text": "Single point"
      },
      {
        "key": "D",
        "text": "Multiple polygons"
      }
    ],
    "answer": "B",
    "explanation": "GeoJSON 中 LineString 由多个坐标点连接而成，主要用来表示路线、轨迹、线段。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-083",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Multikey index is designed for ____.",
    "options": [
      {
        "key": "A",
        "text": "Nested document"
      },
      {
        "key": "B",
        "text": "Array field"
      },
      {
        "key": "C",
        "text": "Geographic field"
      },
      {
        "key": "D",
        "text": "Text field"
      }
    ],
    "answer": "B",
    "explanation": "多键索引的设计目标就是优化数组字段的查询，是数组类型专属索引。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-084",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "db.collection.find().sort({ timestamp: -1 }) means:",
    "options": [
      {
        "key": "A",
        "text": "Sort from old to new"
      },
      {
        "key": "B",
        "text": "Sort from new to old"
      },
      {
        "key": "C",
        "text": "Random sort"
      },
      {
        "key": "D",
        "text": "No sort"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB 排序中，1 代表升序，-1 代表降序；按时间戳降序即由新到旧排列。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-O-085",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Query: find({cuisine:\"Chinese\"}).sort({rating:-1}), which index is the best choice?",
    "options": [
      {
        "key": "A",
        "text": "Single field index"
      },
      {
        "key": "B",
        "text": "Text index"
      },
      {
        "key": "C",
        "text": "Compound index"
      },
      {
        "key": "D",
        "text": "2dsphere index"
      }
    ],
    "answer": "C",
    "explanation": "该查询同时包含条件过滤 + 排序，使用复合索引可以同时优化过滤和排序操作，性能最优。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-086",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "db.users.createIndex({ username: 1 }) creates a ____ index.",
    "options": [
      {
        "key": "A",
        "text": "Descending"
      },
      {
        "key": "B",
        "text": "Geographic"
      },
      {
        "key": "C",
        "text": "Text"
      },
      {
        "key": "D",
        "text": "Ascending"
      }
    ],
    "answer": "D",
    "explanation": "索引定义中数值 1 表示升序索引，-1 表示降序索引。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-087",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Compound index follows which rule?",
    "options": [
      {
        "key": "A",
        "text": "Right prefix rule"
      },
      {
        "key": "B",
        "text": "Full match rule"
      },
      {
        "key": "C",
        "text": "Random match rule"
      },
      {
        "key": "D",
        "text": "Left prefix rule"
      }
    ],
    "answer": "D",
    "explanation": "复合索引遵循最左前缀原则，查询条件需要匹配索引左侧字段，索引才能生效。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-088",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "What is the coordinate order of GeoJSON Point?",
    "options": [
      {
        "key": "A",
        "text": "Latitude, Longitude"
      },
      {
        "key": "B",
        "text": "Longitude, Latitude"
      },
      {
        "key": "C",
        "text": "X, Y, Z"
      },
      {
        "key": "D",
        "text": "Y, X"
      }
    ],
    "answer": "B",
    "explanation": "GeoJSON 标准坐标顺序为 经度在前，纬度在后，和日常习惯相反。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-089",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "For frequent query on studentId field, which index is most suitable?",
    "options": [
      {
        "key": "A",
        "text": "Compound index"
      },
      {
        "key": "B",
        "text": "Single field index"
      },
      {
        "key": "C",
        "text": "Multikey index"
      },
      {
        "key": "D",
        "text": "Text index"
      }
    ],
    "answer": "B",
    "explanation": "针对单个高频查询字段，单字段索引结构最简单、查询效率最高。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-090",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Why the first and last coordinates must be the same in GeoJSON Polygon?",
    "options": [
      {
        "key": "A",
        "text": "To speed up query"
      },
      {
        "key": "B",
        "text": "To close the polygon shape"
      },
      {
        "key": "C",
        "text": "To create index"
      },
      {
        "key": "D",
        "text": "To reduce data size"
      }
    ],
    "answer": "B",
    "explanation": "Polygon（多边形）要求首尾坐标一致，作用是闭合图形，否则无法被正常识别。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-091",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "If a query field has no index, MongoDB will perform ____.",
    "options": [
      {
        "key": "A",
        "text": "Index scan"
      },
      {
        "key": "B",
        "text": "Geographic scan"
      },
      {
        "key": "C",
        "text": "Collection scan"
      },
      {
        "key": "D",
        "text": "Text search"
      }
    ],
    "answer": "C",
    "explanation": "查询字段无索引时，数据库只能遍历集合内所有文档，即全集合扫描，性能较差。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-O-092",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "geoWithin geographic queries need ____ index.",
    "options": [
      {
        "key": "A",
        "text": "Single field"
      },
      {
        "key": "B",
        "text": "2dsphere"
      },
      {
        "key": "C",
        "text": "Multikey"
      },
      {
        "key": "D",
        "text": "Text"
      }
    ],
    "answer": "B",
    "explanation": "球面地理位置查询（距离、区域范围）必须依赖 2dsphere 地理索引。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-O-093",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the main function of Arbiter in MongoDB replica set?",
    "options": [
      {
        "key": "A",
        "text": "Store data"
      },
      {
        "key": "B",
        "text": "Vote in election"
      },
      {
        "key": "C",
        "text": "Handle read request"
      },
      {
        "key": "D",
        "text": "Handle write request"
      }
    ],
    "answer": "B",
    "explanation": "副本集仲裁节点（Arbiter）不存储业务数据、不处理读写，仅参与主节点选举投票。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-094",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "When Primary node fails, replica set will ____.",
    "options": [
      {
        "key": "A",
        "text": "Stop service"
      },
      {
        "key": "B",
        "text": "Elect a new Primary from Secondary"
      },
      {
        "key": "C",
        "text": "Delete all data"
      },
      {
        "key": "D",
        "text": "Create new collection"
      }
    ],
    "answer": "B",
    "explanation": "副本集具备高可用特性，主节点故障后，会自动从从节点中选举出新主节点。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-095",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "The main job of Secondary node in replica set is ____.",
    "options": [
      {
        "key": "A",
        "text": "Accept write operation"
      },
      {
        "key": "B",
        "text": "Synchronize data replica from Primary"
      },
      {
        "key": "C",
        "text": "Vote only"
      },
      {
        "key": "D",
        "text": "Delete data"
      }
    ],
    "answer": "B",
    "explanation": "副本集从节点（Secondary）核心工作是异步同步主节点的数据，实现数据冗余备份。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-096",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MongoDB transaction ensures all operations succeed or all fail, this is called ____.",
    "options": [
      {
        "key": "A",
        "text": "Consistency"
      },
      {
        "key": "B",
        "text": "Isolation"
      },
      {
        "key": "C",
        "text": "Atomicity"
      },
      {
        "key": "D",
        "text": "Durability"
      }
    ],
    "answer": "C",
    "explanation": "事务的原子性指一组操作要么全部执行成功，要么全部回滚。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-097",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which one is more suitable for complex data analysis and multi-step processing?",
    "options": [
      {
        "key": "A",
        "text": "find()"
      },
      {
        "key": "B",
        "text": "update()"
      },
      {
        "key": "C",
        "text": "aggregate()"
      },
      {
        "key": "D",
        "text": "remove()"
      }
    ],
    "answer": "C",
    "explanation": "aggregate() 聚合框架支持多阶段管道处理，专门用于复杂统计、分析、数据转换；find() 仅做简单查询。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-O-098",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Which node accepts all write operations in replica set?",
    "options": [
      {
        "key": "A",
        "text": "Arbiter"
      },
      {
        "key": "B",
        "text": "Primary"
      },
      {
        "key": "C",
        "text": "Secondary"
      },
      {
        "key": "D",
        "text": "All nodes"
      }
    ],
    "answer": "B",
    "explanation": "副本集默认规则：只有主节点（Primary）接收写请求，数据再同步至从节点。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-099",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "In $sort stage, value -1 means ____.",
    "options": [
      {
        "key": "A",
        "text": "Ascending"
      },
      {
        "key": "B",
        "text": "Descending"
      },
      {
        "key": "C",
        "text": "Random"
      },
      {
        "key": "D",
        "text": "Invalid"
      }
    ],
    "answer": "B",
    "explanation": "聚合排序中，1 升序，-1 降序。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-O-100",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "General",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Transaction rollback means ____.",
    "options": [
      {
        "key": "A",
        "text": "Save all changes"
      },
      {
        "key": "B",
        "text": "Cancelling all transaction changes when an error occurs"
      },
      {
        "key": "C",
        "text": "Update data repeatedly"
      },
      {
        "key": "D",
        "text": "Copy data"
      }
    ],
    "answer": "B",
    "explanation": "事务回滚指执行出错时，撤销事务内所有已执行的数据修改，保证数据不变。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "General"
    ]
  },
  {
    "id": "NS-O-101",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "The purpose of sort is ____.",
    "options": [
      {
        "key": "A",
        "text": "Delete useless data"
      },
      {
        "key": "B",
        "text": "Count occurrences of each entity and sort results"
      },
      {
        "key": "C",
        "text": "Join two collections"
      },
      {
        "key": "D",
        "text": "Expand array fields"
      }
    ],
    "answer": "B",
    "explanation": "组合使用 $group + $sort，常用于分组统计数量，并对统计结果排序。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-O-102",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the main function of MongoDB aggregation framework?",
    "options": [
      {
        "key": "A",
        "text": "Delete bulk documents"
      },
      {
        "key": "B",
        "text": "Process and analyze data through multi-stage pipeline"
      },
      {
        "key": "C",
        "text": "Backup database"
      },
      {
        "key": "D",
        "text": "Rename collections"
      }
    ],
    "answer": "B",
    "explanation": "聚合框架依靠多阶段管道，完成数据过滤、分组、计算、转换、分析等复杂操作。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-103",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "medium",
    "question": "Which statement about Arbiter is correct?",
    "options": [
      {
        "key": "A",
        "text": "Stores user data"
      },
      {
        "key": "B",
        "text": "Can become Primary node"
      },
      {
        "key": "C",
        "text": "Only votes in election, no data storage"
      },
      {
        "key": "D",
        "text": "Handles read requests"
      }
    ],
    "answer": "C",
    "explanation": "仲裁节点仅参与选举投票，不存储业务数据，也无法当选主节点。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-104",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "Relationship data such as friends/followers is usually stored in ____.",
    "options": [
      {
        "key": "A",
        "text": "Single string field"
      },
      {
        "key": "B",
        "text": "Array field"
      },
      {
        "key": "C",
        "text": "Geographic field"
      },
      {
        "key": "D",
        "text": "Numeric field"
      }
    ],
    "answer": "B",
    "explanation": "好友、关注等一对多关系，在 MongoDB 中通常使用数组字段存储。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-O-105",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "What is the core purpose of MongoDB transaction?",
    "options": [
      {
        "key": "A",
        "text": "Sort data"
      },
      {
        "key": "B",
        "text": "Split array"
      },
      {
        "key": "C",
        "text": "Guarantee atomicity and data consistency"
      },
      {
        "key": "D",
        "text": "Create replica set"
      }
    ],
    "answer": "C",
    "explanation": "事务核心是保证一组操作的原子性，最终保障整体数据一致性。",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-O-106",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "mcpt",
    "sourceLabel": "MCPT / 月考题",
    "difficulty": "easy",
    "question": "MongoDB aggregation pipeline is ____.",
    "options": [
      {
        "key": "A",
        "text": "An ordered sequence of processing stages"
      },
      {
        "key": "B",
        "text": "A single query command"
      },
      {
        "key": "C",
        "text": "A kind of index"
      },
      {
        "key": "D",
        "text": "A replica set node"
      }
    ],
    "answer": "A",
    "explanation": "聚合管道是有序的处理阶段序列，数据按顺序依次经过每个阶段处理。 |（注：文档部分内容可能由 AI 生成）",
    "noteQuote": "",
    "sourceFiles": [
      "NoSQL(MongoDB) 全套试题1(1).docx"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-G-001",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What does NoSQL usually mean?",
    "options": [
      {
        "key": "A",
        "text": "No Storage Query Language"
      },
      {
        "key": "B",
        "text": "Not Only SQL"
      },
      {
        "key": "C",
        "text": "New Object SQL"
      },
      {
        "key": "D",
        "text": "No Structured Query List"
      }
    ],
    "answer": "B",
    "explanation": "NoSQL 通常理解为 Not Only SQL，强调不仅限于传统关系型数据库模型。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-G-002",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which feature is most associated with NoSQL databases?",
    "options": [
      {
        "key": "A",
        "text": "Rigid schema only"
      },
      {
        "key": "B",
        "text": "Flexible schema"
      },
      {
        "key": "C",
        "text": "Only SQL joins"
      },
      {
        "key": "D",
        "text": "Single-machine storage only"
      }
    ],
    "answer": "B",
    "explanation": "NoSQL 通常支持灵活 schema，适合半结构化和非结构化数据。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-G-003",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In CAP theorem, P stands for ____.",
    "options": [
      {
        "key": "A",
        "text": "Performance"
      },
      {
        "key": "B",
        "text": "Partition tolerance"
      },
      {
        "key": "C",
        "text": "Persistence"
      },
      {
        "key": "D",
        "text": "Primary key"
      }
    ],
    "answer": "B",
    "explanation": "CAP 中 P 表示分区容错性，即网络分区时系统仍能工作。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-G-004",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which NoSQL type stores data as documents similar to JSON?",
    "options": [
      {
        "key": "A",
        "text": "Document database"
      },
      {
        "key": "B",
        "text": "Column family database"
      },
      {
        "key": "C",
        "text": "Graph database"
      },
      {
        "key": "D",
        "text": "Key-value database"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB 属于文档型数据库，文档结构接近 JSON/BSON。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-G-005",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which NoSQL type is most suitable for simple cache scenarios?",
    "options": [
      {
        "key": "A",
        "text": "Graph store"
      },
      {
        "key": "B",
        "text": "Key-value store"
      },
      {
        "key": "C",
        "text": "Document store"
      },
      {
        "key": "D",
        "text": "Column store"
      }
    ],
    "answer": "B",
    "explanation": "键值数据库如 Redis 非常适合缓存、会话存储等简单快速访问场景。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics"
    ]
  },
  {
    "id": "NS-G-006",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "In MongoDB, a database contains collections, and a collection contains ____.",
    "options": [
      {
        "key": "A",
        "text": "Rows"
      },
      {
        "key": "B",
        "text": "Documents"
      },
      {
        "key": "C",
        "text": "Tables"
      },
      {
        "key": "D",
        "text": "Schemas"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB 的基本层级是 database → collection → document。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-G-007",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "MongoDB stores documents internally in ____ format.",
    "options": [
      {
        "key": "A",
        "text": "XML"
      },
      {
        "key": "B",
        "text": "BSON"
      },
      {
        "key": "C",
        "text": "CSV"
      },
      {
        "key": "D",
        "text": "YAML"
      }
    ],
    "answer": "B",
    "explanation": "BSON 是 Binary JSON，MongoDB 内部使用 BSON 存储文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-G-008",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which field is automatically created as a unique identifier if not provided?",
    "options": [
      {
        "key": "A",
        "text": "_id"
      },
      {
        "key": "B",
        "text": "id"
      },
      {
        "key": "C",
        "text": "primaryKey"
      },
      {
        "key": "D",
        "text": "index"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB 会自动生成 _id 字段，通常类型为 ObjectId。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-G-009",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which structure represents an array field in a MongoDB document?",
    "options": [
      {
        "key": "A",
        "text": "{ city: 'Haikou' }"
      },
      {
        "key": "B",
        "text": "['Java','MongoDB']"
      },
      {
        "key": "C",
        "text": "ObjectId('...')"
      },
      {
        "key": "D",
        "text": "null"
      }
    ],
    "answer": "B",
    "explanation": "数组字段使用中括号 []，可以存储多个值。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-G-010",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Document/BSON Model",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which design embeds address information inside a user document?",
    "options": [
      {
        "key": "A",
        "text": "Reference model"
      },
      {
        "key": "B",
        "text": "Embedded document model"
      },
      {
        "key": "C",
        "text": "Relational join model"
      },
      {
        "key": "D",
        "text": "Shard key model"
      }
    ],
    "answer": "B",
    "explanation": "把 address:{...} 放入 user 文档内属于嵌入式文档模型。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Document/BSON Model"
    ]
  },
  {
    "id": "NS-G-011",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which Java class represents a MongoDB document in the official driver examples?",
    "options": [
      {
        "key": "A",
        "text": "Document"
      },
      {
        "key": "B",
        "text": "ResultSet"
      },
      {
        "key": "C",
        "text": "Row"
      },
      {
        "key": "D",
        "text": "EntityManager"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB Java 驱动常用 org.bson.Document 表示文档对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-012",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method obtains a MongoDatabase object from MongoClient?",
    "options": [
      {
        "key": "A",
        "text": "getDatabase()"
      },
      {
        "key": "B",
        "text": "getCollection()"
      },
      {
        "key": "C",
        "text": "getTable()"
      },
      {
        "key": "D",
        "text": "openDatabase()"
      }
    ],
    "answer": "A",
    "explanation": "MongoClient.getDatabase('dbName') 返回数据库对象。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-013",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method inserts multiple documents at once?",
    "options": [
      {
        "key": "A",
        "text": "insertOne()"
      },
      {
        "key": "B",
        "text": "insertMany()"
      },
      {
        "key": "C",
        "text": "addAll()"
      },
      {
        "key": "D",
        "text": "saveMany()"
      }
    ],
    "answer": "B",
    "explanation": "insertMany() 用于批量插入多个文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-014",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method deletes all matching documents?",
    "options": [
      {
        "key": "A",
        "text": "deleteOne()"
      },
      {
        "key": "B",
        "text": "deleteMany()"
      },
      {
        "key": "C",
        "text": "dropOne()"
      },
      {
        "key": "D",
        "text": "removeField()"
      }
    ],
    "answer": "B",
    "explanation": "deleteMany() 删除所有匹配条件的文档；deleteOne() 只删除一条。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-015",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which method updates only the first matching document?",
    "options": [
      {
        "key": "A",
        "text": "updateOne()"
      },
      {
        "key": "B",
        "text": "updateMany()"
      },
      {
        "key": "C",
        "text": "replaceMany()"
      },
      {
        "key": "D",
        "text": "modifyAll()"
      }
    ],
    "answer": "A",
    "explanation": "updateOne() 只更新第一条匹配文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-016",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which method completely replaces a document except for _id?",
    "options": [
      {
        "key": "A",
        "text": "updateOne()"
      },
      {
        "key": "B",
        "text": "replaceOne()"
      },
      {
        "key": "C",
        "text": "setOne()"
      },
      {
        "key": "D",
        "text": "patchOne()"
      }
    ],
    "answer": "B",
    "explanation": "replaceOne() 是整体替换文档，updateOne() 通常只更新部分字段。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-017",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which option makes updateOne() insert a new document when no match is found?",
    "options": [
      {
        "key": "A",
        "text": "new InsertOptions()"
      },
      {
        "key": "B",
        "text": "new UpdateOptions().upsert(true)"
      },
      {
        "key": "C",
        "text": "new FindOptions().limit(1)"
      },
      {
        "key": "D",
        "text": "new DeleteOptions().safe(true)"
      }
    ],
    "answer": "B",
    "explanation": "UpdateOptions().upsert(true) 开启 upsert：查到则更新，查不到则插入。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-018",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Why should client.close() be called in a finally block?",
    "options": [
      {
        "key": "A",
        "text": "To delete the database"
      },
      {
        "key": "B",
        "text": "To release connection resources"
      },
      {
        "key": "C",
        "text": "To create indexes automatically"
      },
      {
        "key": "D",
        "text": "To commit SQL transaction"
      }
    ],
    "answer": "B",
    "explanation": "finally 中关闭连接可以保证无论是否异常都能释放资源。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "MongoDB Java CRUD"
    ]
  },
  {
    "id": "NS-G-019",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which operator means greater than or equal to?",
    "options": [
      {
        "key": "A",
        "text": "$gt"
      },
      {
        "key": "B",
        "text": "$gte"
      },
      {
        "key": "C",
        "text": "$lt"
      },
      {
        "key": "D",
        "text": "$lte"
      }
    ],
    "answer": "B",
    "explanation": "$gte 表示大于等于，$gt 表示大于。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Query Operators"
    ]
  },
  {
    "id": "NS-G-020",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which operator means not equal?",
    "options": [
      {
        "key": "A",
        "text": "$ne"
      },
      {
        "key": "B",
        "text": "$eq"
      },
      {
        "key": "C",
        "text": "$in"
      },
      {
        "key": "D",
        "text": "$set"
      }
    ],
    "answer": "A",
    "explanation": "$ne 用于匹配不等于指定值的文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Query Operators"
    ]
  },
  {
    "id": "NS-G-021",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator matches values not in a specified list?",
    "options": [
      {
        "key": "A",
        "text": "$in"
      },
      {
        "key": "B",
        "text": "$nin"
      },
      {
        "key": "C",
        "text": "$all"
      },
      {
        "key": "D",
        "text": "$exists"
      }
    ],
    "answer": "B",
    "explanation": "$nin 表示字段值不在指定数组中。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Query Operators"
    ]
  },
  {
    "id": "NS-G-022",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator checks whether a field exists?",
    "options": [
      {
        "key": "A",
        "text": "$exists"
      },
      {
        "key": "B",
        "text": "$type"
      },
      {
        "key": "C",
        "text": "$size"
      },
      {
        "key": "D",
        "text": "$regex"
      }
    ],
    "answer": "A",
    "explanation": "$exists 可判断字段是否存在。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Query Operators"
    ]
  },
  {
    "id": "NS-G-023",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Query Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator is often used for pattern matching strings?",
    "options": [
      {
        "key": "A",
        "text": "$regex"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$push"
      },
      {
        "key": "D",
        "text": "$lookup"
      }
    ],
    "answer": "A",
    "explanation": "$regex 用于正则表达式匹配字符串。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Query Operators"
    ]
  },
  {
    "id": "NS-G-024",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which operator sets a field value?",
    "options": [
      {
        "key": "A",
        "text": "$set"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$push"
      },
      {
        "key": "D",
        "text": "$pull"
      }
    ],
    "answer": "A",
    "explanation": "$set 用于新增或修改字段值。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-025",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator removes a field from a document?",
    "options": [
      {
        "key": "A",
        "text": "$unset"
      },
      {
        "key": "B",
        "text": "$rename"
      },
      {
        "key": "C",
        "text": "$pop"
      },
      {
        "key": "D",
        "text": "$drop"
      }
    ],
    "answer": "A",
    "explanation": "$unset 用于删除指定字段。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-026",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator renames a field?",
    "options": [
      {
        "key": "A",
        "text": "$rename"
      },
      {
        "key": "B",
        "text": "$set"
      },
      {
        "key": "C",
        "text": "$pull"
      },
      {
        "key": "D",
        "text": "$each"
      }
    ],
    "answer": "A",
    "explanation": "$rename 用于将一个字段名改为另一个字段名。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-027",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which operator adds an item to an array?",
    "options": [
      {
        "key": "A",
        "text": "$push"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$set"
      },
      {
        "key": "D",
        "text": "$rename"
      }
    ],
    "answer": "A",
    "explanation": "$push 向数组末尾添加元素。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-028",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator adds an item to an array only if it does not already exist?",
    "options": [
      {
        "key": "A",
        "text": "$push"
      },
      {
        "key": "B",
        "text": "$addToSet"
      },
      {
        "key": "C",
        "text": "$pull"
      },
      {
        "key": "D",
        "text": "$pop"
      }
    ],
    "answer": "B",
    "explanation": "$addToSet 可避免向数组中添加重复元素。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-029",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator removes matching values from an array?",
    "options": [
      {
        "key": "A",
        "text": "$pull"
      },
      {
        "key": "B",
        "text": "$push"
      },
      {
        "key": "C",
        "text": "$inc"
      },
      {
        "key": "D",
        "text": "$rename"
      }
    ],
    "answer": "A",
    "explanation": "$pull 从数组中删除满足条件的元素。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-030",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Update Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "In $pop, value 1 removes ____.",
    "options": [
      {
        "key": "A",
        "text": "The first element"
      },
      {
        "key": "B",
        "text": "The last element"
      },
      {
        "key": "C",
        "text": "All elements"
      },
      {
        "key": "D",
        "text": "No element"
      }
    ],
    "answer": "B",
    "explanation": "$pop: 1 删除最后一个元素，-1 删除第一个元素。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Update Operators"
    ]
  },
  {
    "id": "NS-G-031",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which command creates an ascending index on age?",
    "options": [
      {
        "key": "A",
        "text": "db.users.createIndex({age:1})"
      },
      {
        "key": "B",
        "text": "db.users.createIndex({age:-2})"
      },
      {
        "key": "C",
        "text": "db.users.index({age:'text'})"
      },
      {
        "key": "D",
        "text": "db.users.addIndex(age)"
      }
    ],
    "answer": "A",
    "explanation": "createIndex({age:1}) 创建 age 字段升序索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-032",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which index type is best for a query on { classId: 3, score: { $gt: 80 } }?",
    "options": [
      {
        "key": "A",
        "text": "Compound index"
      },
      {
        "key": "B",
        "text": "Text index"
      },
      {
        "key": "C",
        "text": "2dsphere index"
      },
      {
        "key": "D",
        "text": "TTL index"
      }
    ],
    "answer": "A",
    "explanation": "多个字段组合查询通常使用复合索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-033",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "What rule does a compound index mainly follow?",
    "options": [
      {
        "key": "A",
        "text": "Left prefix rule"
      },
      {
        "key": "B",
        "text": "Right suffix rule"
      },
      {
        "key": "C",
        "text": "Random rule"
      },
      {
        "key": "D",
        "text": "One-field rule"
      }
    ],
    "answer": "A",
    "explanation": "复合索引遵循最左前缀原则，查询条件从左侧字段开始匹配更容易命中索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-034",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which index is automatically created for array fields when indexed?",
    "options": [
      {
        "key": "A",
        "text": "Text index"
      },
      {
        "key": "B",
        "text": "Multikey index"
      },
      {
        "key": "C",
        "text": "TTL index"
      },
      {
        "key": "D",
        "text": "Hashed index"
      }
    ],
    "answer": "B",
    "explanation": "对数组字段建索引时，MongoDB 会创建多键索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-035",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which index is used to expire documents automatically after a period of time?",
    "options": [
      {
        "key": "A",
        "text": "TTL index"
      },
      {
        "key": "B",
        "text": "Text index"
      },
      {
        "key": "C",
        "text": "Unique index"
      },
      {
        "key": "D",
        "text": "2dsphere index"
      }
    ],
    "answer": "A",
    "explanation": "TTL 索引用于让文档在指定时间后自动过期删除。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-036",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which command is used to inspect query execution plan?",
    "options": [
      {
        "key": "A",
        "text": "explain()"
      },
      {
        "key": "B",
        "text": "debug()"
      },
      {
        "key": "C",
        "text": "trace()"
      },
      {
        "key": "D",
        "text": "profileIndex()"
      }
    ],
    "answer": "A",
    "explanation": "explain() 可以查看查询计划，如是否使用索引、扫描行数等。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-037",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "If explain() shows COLLSCAN, it means ____.",
    "options": [
      {
        "key": "A",
        "text": "Index scan is used"
      },
      {
        "key": "B",
        "text": "Collection scan is used"
      },
      {
        "key": "C",
        "text": "Text search is used"
      },
      {
        "key": "D",
        "text": "Replica election is used"
      }
    ],
    "answer": "B",
    "explanation": "COLLSCAN 表示全集合扫描，通常说明该查询没有有效使用索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Indexes"
    ]
  },
  {
    "id": "NS-G-038",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Text Search",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which index type is required for MongoDB text search?",
    "options": [
      {
        "key": "A",
        "text": "text"
      },
      {
        "key": "B",
        "text": "2dsphere"
      },
      {
        "key": "C",
        "text": "multikey"
      },
      {
        "key": "D",
        "text": "ttl"
      }
    ],
    "answer": "A",
    "explanation": "全文检索需要 text index。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Text Search"
    ]
  },
  {
    "id": "NS-G-039",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Text Search",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator is used for text search query?",
    "options": [
      {
        "key": "A",
        "text": "$text"
      },
      {
        "key": "B",
        "text": "$regexOnly"
      },
      {
        "key": "C",
        "text": "$lookup"
      },
      {
        "key": "D",
        "text": "$geoWithin"
      }
    ],
    "answer": "A",
    "explanation": "$text 用于基于文本索引进行全文搜索。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Text Search"
    ]
  },
  {
    "id": "NS-G-040",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "GeoJSON Point coordinates are written as ____.",
    "options": [
      {
        "key": "A",
        "text": "[latitude, longitude]"
      },
      {
        "key": "B",
        "text": "[longitude, latitude]"
      },
      {
        "key": "C",
        "text": "[x, z]"
      },
      {
        "key": "D",
        "text": "[radius, angle]"
      }
    ],
    "answer": "B",
    "explanation": "GeoJSON 坐标顺序是经度在前，纬度在后。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-G-041",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which index is required for GeoJSON sphere queries?",
    "options": [
      {
        "key": "A",
        "text": "2dsphere"
      },
      {
        "key": "B",
        "text": "text"
      },
      {
        "key": "C",
        "text": "TTL"
      },
      {
        "key": "D",
        "text": "single field"
      }
    ],
    "answer": "A",
    "explanation": "GeoJSON 球面地理查询通常需要 2dsphere 索引。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-G-042",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which operator finds documents within a specified geographic area?",
    "options": [
      {
        "key": "A",
        "text": "$geoWithin"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$lookup"
      },
      {
        "key": "D",
        "text": "$unwind"
      }
    ],
    "answer": "A",
    "explanation": "$geoWithin 用于查找位于指定区域内的地理位置文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-G-043",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "In $centerSphere, distance in kilometers is divided by Earth's radius to convert it into ____.",
    "options": [
      {
        "key": "A",
        "text": "Radians"
      },
      {
        "key": "B",
        "text": "Degrees"
      },
      {
        "key": "C",
        "text": "Meters"
      },
      {
        "key": "D",
        "text": "Index number"
      }
    ],
    "answer": "A",
    "explanation": "$centerSphere 的半径单位是弧度，因此公里数需要除以地球半径。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Geospatial"
    ]
  },
  {
    "id": "NS-G-044",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which field is mandatory for a MongoDB time series collection?",
    "options": [
      {
        "key": "A",
        "text": "timeField"
      },
      {
        "key": "B",
        "text": "indexField"
      },
      {
        "key": "C",
        "text": "arrayField"
      },
      {
        "key": "D",
        "text": "joinField"
      }
    ],
    "answer": "A",
    "explanation": "timeField 是时间序列集合中保存时间戳的必填字段。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Time Series"
    ]
  },
  {
    "id": "NS-G-045",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "What should metaField usually store in time series data?",
    "options": [
      {
        "key": "A",
        "text": "Stable metadata such as deviceId"
      },
      {
        "key": "B",
        "text": "Rapidly changing measured value"
      },
      {
        "key": "C",
        "text": "SQL query text"
      },
      {
        "key": "D",
        "text": "Aggregation result"
      }
    ],
    "answer": "A",
    "explanation": "metaField 适合存储设备编号、地点等相对稳定的分组信息。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Time Series"
    ]
  },
  {
    "id": "NS-G-046",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which aggregation stage filters documents?",
    "options": [
      {
        "key": "A",
        "text": "$match"
      },
      {
        "key": "B",
        "text": "$group"
      },
      {
        "key": "C",
        "text": "$sort"
      },
      {
        "key": "D",
        "text": "$out"
      }
    ],
    "answer": "A",
    "explanation": "$match 用于筛选文档，通常尽量放在管道前面。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-G-047",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which aggregation stage groups documents for statistics?",
    "options": [
      {
        "key": "A",
        "text": "$group"
      },
      {
        "key": "B",
        "text": "$project"
      },
      {
        "key": "C",
        "text": "$limit"
      },
      {
        "key": "D",
        "text": "$skip"
      }
    ],
    "answer": "A",
    "explanation": "$group 按指定字段分组，可配合 $sum、$avg 等表达式统计。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-G-048",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which expression calculates the sum of values?",
    "options": [
      {
        "key": "A",
        "text": "$sum"
      },
      {
        "key": "B",
        "text": "$avg"
      },
      {
        "key": "C",
        "text": "$max"
      },
      {
        "key": "D",
        "text": "$first"
      }
    ],
    "answer": "A",
    "explanation": "$sum 用于求和或计数。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-G-049",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which stage is similar to SQL JOIN?",
    "options": [
      {
        "key": "A",
        "text": "$lookup"
      },
      {
        "key": "B",
        "text": "$unwind"
      },
      {
        "key": "C",
        "text": "$sort"
      },
      {
        "key": "D",
        "text": "$skip"
      }
    ],
    "answer": "A",
    "explanation": "$lookup 可实现集合间关联查询，类似 SQL JOIN。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-G-050",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which stage deconstructs an array into separate documents?",
    "options": [
      {
        "key": "A",
        "text": "$unwind"
      },
      {
        "key": "B",
        "text": "$project"
      },
      {
        "key": "C",
        "text": "$limit"
      },
      {
        "key": "D",
        "text": "$match"
      }
    ],
    "answer": "A",
    "explanation": "$unwind 会把数组中的每个元素拆成单独文档。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Aggregation"
    ]
  },
  {
    "id": "NS-G-051",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "Which node receives write operations by default in a replica set?",
    "options": [
      {
        "key": "A",
        "text": "Primary"
      },
      {
        "key": "B",
        "text": "Secondary"
      },
      {
        "key": "C",
        "text": "Arbiter"
      },
      {
        "key": "D",
        "text": "Hidden node only"
      }
    ],
    "answer": "A",
    "explanation": "副本集默认只有 Primary 接收写请求，再同步到 Secondary。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-G-052",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replica Set",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What is the role of an Arbiter?",
    "options": [
      {
        "key": "A",
        "text": "Store all data"
      },
      {
        "key": "B",
        "text": "Vote in election only"
      },
      {
        "key": "C",
        "text": "Accept writes"
      },
      {
        "key": "D",
        "text": "Run aggregation only"
      }
    ],
    "answer": "B",
    "explanation": "Arbiter 只参与投票，不存储数据，也不能成为主节点。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Replica Set"
    ]
  },
  {
    "id": "NS-G-053",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Sharding",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "easy",
    "question": "What is the main purpose of sharding?",
    "options": [
      {
        "key": "A",
        "text": "Vertical backup"
      },
      {
        "key": "B",
        "text": "Horizontal scaling across multiple servers"
      },
      {
        "key": "C",
        "text": "Text search"
      },
      {
        "key": "D",
        "text": "Java exception handling"
      }
    ],
    "answer": "B",
    "explanation": "分片用于把数据分散到多台服务器，实现水平扩展。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Sharding"
    ]
  },
  {
    "id": "NS-G-054",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Sharding",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "A good shard key should generally have ____.",
    "options": [
      {
        "key": "A",
        "text": "Low cardinality and many hot writes"
      },
      {
        "key": "B",
        "text": "High cardinality and balanced distribution"
      },
      {
        "key": "C",
        "text": "Only null values"
      },
      {
        "key": "D",
        "text": "Only boolean values"
      }
    ],
    "answer": "B",
    "explanation": "好的分片键应尽量高基数、分布均匀，避免热点。",
    "noteQuote": "",
    "sourceFiles": [
      "AI-generated based on uploaded style"
    ],
    "tags": [
      "nosql",
      "Sharding"
    ]
  },
  {
    "id": "NS-PN-001",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Database systems designed for large volume, flexible structure, fast access, distributed storage, and high availability?",
    "options": [
      {
        "key": "A",
        "text": "RDBMS only"
      },
      {
        "key": "B",
        "text": "SQL Server"
      },
      {
        "key": "C",
        "text": "Spreadsheet"
      },
      {
        "key": "D",
        "text": "NoSQL"
      }
    ],
    "answer": "D",
    "explanation": "NoSQL 适合现代海量、灵活、分布式数据需求。 资料原句：NoSQL databases are designed for modern data requirements such as large volume, flexible structure, fast access, distributed storage, and high availability.",
    "noteQuote": "NoSQL databases are designed for modern data requirements such as large volume, flexible structure, fast access, distributed storage, and high availability.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-002",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Documents in a collection may have different fields?",
    "options": [
      {
        "key": "A",
        "text": "Flexible schema"
      },
      {
        "key": "B",
        "text": "Primary key"
      },
      {
        "key": "C",
        "text": "Fixed schema"
      },
      {
        "key": "D",
        "text": "Join table"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB 的灵活 schema 允许同一集合中文档字段不同。 资料原句：MongoDB uses a flexible schema, so documents in a collection may have different fields.",
    "noteQuote": "MongoDB uses a flexible schema, so documents in a collection may have different fields.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-003",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Adding more servers to manage growth?",
    "options": [
      {
        "key": "A",
        "text": "Normalization"
      },
      {
        "key": "B",
        "text": "Horizontal scalability"
      },
      {
        "key": "C",
        "text": "Index deletion"
      },
      {
        "key": "D",
        "text": "Vertical scalability"
      }
    ],
    "answer": "B",
    "explanation": "水平扩展是通过增加服务器应对数据和流量增长。 资料原句：Horizontal scalability means adding more servers to manage growth.",
    "noteQuote": "Horizontal scalability means adding more servers to manage growth.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-004",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Service remains accessible during failures or heavy use?",
    "options": [
      {
        "key": "A",
        "text": "Fixed schema"
      },
      {
        "key": "B",
        "text": "High availability"
      },
      {
        "key": "C",
        "text": "Manual backup only"
      },
      {
        "key": "D",
        "text": "Strong joins"
      }
    ],
    "answer": "B",
    "explanation": "高可用保证系统故障时仍尽量可访问。 资料原句：High availability: Service remains accessible.",
    "noteQuote": "High availability: Service remains accessible.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-005",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: The system handles failures, often helped by replication?",
    "options": [
      {
        "key": "A",
        "text": "Fault tolerance"
      },
      {
        "key": "B",
        "text": "Single server dependency"
      },
      {
        "key": "C",
        "text": "Schema lock"
      },
      {
        "key": "D",
        "text": "Manual SQL join"
      }
    ],
    "answer": "A",
    "explanation": "容错能力通常依赖复制等机制降低故障影响。 资料原句：Fault tolerance: System handles failures. Replication reduces data loss risk.",
    "noteQuote": "Fault tolerance: System handles failures. Replication reduces data loss risk.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-006",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: JSON/BSON-like documents such as MongoDB?",
    "options": [
      {
        "key": "A",
        "text": "Document store"
      },
      {
        "key": "B",
        "text": "Graph store"
      },
      {
        "key": "C",
        "text": "Key-value store"
      },
      {
        "key": "D",
        "text": "Column-family store"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB 是文档型数据库。 资料原句：MongoDB is a document-oriented database.",
    "noteQuote": "MongoDB is a document-oriented database.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-007",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: A key points to a value; Redis is a common example?",
    "options": [
      {
        "key": "A",
        "text": "Graph store"
      },
      {
        "key": "B",
        "text": "Relational table"
      },
      {
        "key": "C",
        "text": "Key-value store"
      },
      {
        "key": "D",
        "text": "Document store"
      }
    ],
    "answer": "C",
    "explanation": "Redis 常作为键值/数据结构存储。 资料原句：Redis is mainly a key-value and data-structure store.",
    "noteQuote": "Redis is mainly a key-value and data-structure store.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-008",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "NoSQL Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Best suited for relationship-intensive data such as social networks?",
    "options": [
      {
        "key": "A",
        "text": "Column-family store"
      },
      {
        "key": "B",
        "text": "Document store"
      },
      {
        "key": "C",
        "text": "Graph store"
      },
      {
        "key": "D",
        "text": "Key-value store"
      }
    ],
    "answer": "C",
    "explanation": "图数据库适合关系密集型数据。 资料原句：Graph store: Nodes and relationships; best use social networks, recommendation systems.",
    "noteQuote": "Graph store: Nodes and relationships; best use social networks, recommendation systems.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "NoSQL Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-009",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Container that holds collections?",
    "options": [
      {
        "key": "A",
        "text": "Collection"
      },
      {
        "key": "B",
        "text": "Field"
      },
      {
        "key": "C",
        "text": "MongoDB database"
      },
      {
        "key": "D",
        "text": "Document"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 中数据库包含集合，集合包含文档。 资料原句：A MongoDB database contains collections; a collection contains documents.",
    "noteQuote": "A MongoDB database contains collections; a collection contains documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-010",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Container that holds documents?",
    "options": [
      {
        "key": "A",
        "text": "Database"
      },
      {
        "key": "B",
        "text": "Collection"
      },
      {
        "key": "C",
        "text": "Row"
      },
      {
        "key": "D",
        "text": "Column"
      }
    ],
    "answer": "B",
    "explanation": "集合类似关系库里的表，但 schema 更灵活。 资料原句：A MongoDB database contains collections; a collection contains documents.",
    "noteQuote": "A MongoDB database contains collections; a collection contains documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-011",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Binary JSON used internally by MongoDB for efficient storage and datatype support?",
    "options": [
      {
        "key": "A",
        "text": "Plain SQL"
      },
      {
        "key": "B",
        "text": "HTML"
      },
      {
        "key": "C",
        "text": "CSV"
      },
      {
        "key": "D",
        "text": "BSON"
      }
    ],
    "answer": "D",
    "explanation": "BSON 支持更多数据类型并利于存储和处理。 资料原句：BSON means Binary JSON. MongoDB uses BSON internally for efficient storage and datatype support.",
    "noteQuote": "BSON means Binary JSON. MongoDB uses BSON internally for efficient storage and datatype support.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-012",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Datatypes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Common auto-generated unique identifier for _id?",
    "options": [
      {
        "key": "A",
        "text": "Boolean"
      },
      {
        "key": "B",
        "text": "Double"
      },
      {
        "key": "C",
        "text": "ObjectId"
      },
      {
        "key": "D",
        "text": "Regex"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB 未提供 _id 时通常自动生成 ObjectId。 资料原句：MongoDB automatically creates _id if it is not provided.",
    "noteQuote": "MongoDB automatically creates _id if it is not provided.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Datatypes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-013",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Datatypes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Datatype shown by skills: [\"Java\", \"MongoDB\"]?",
    "options": [
      {
        "key": "A",
        "text": "String"
      },
      {
        "key": "B",
        "text": "Array"
      },
      {
        "key": "C",
        "text": "Null"
      },
      {
        "key": "D",
        "text": "Embedded document"
      }
    ],
    "answer": "B",
    "explanation": "数组字段用 [] 表示多个值。 资料原句：skills is an array field.",
    "noteQuote": "skills is an array field.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Datatypes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-014",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Datatypes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Datatype shown by address: { city: \"Haikou\" }?",
    "options": [
      {
        "key": "A",
        "text": "ObjectId"
      },
      {
        "key": "B",
        "text": "Embedded document"
      },
      {
        "key": "C",
        "text": "Regex"
      },
      {
        "key": "D",
        "text": "Array"
      }
    ],
    "answer": "B",
    "explanation": "嵌入式文档适合一起读取的小型相关数据。 资料原句：address is an embedded document.",
    "noteQuote": "address is an embedded document.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Datatypes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-015",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Datatypes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Datatype/operator style used for pattern-based text searching?",
    "options": [
      {
        "key": "A",
        "text": "Integer"
      },
      {
        "key": "B",
        "text": "Null"
      },
      {
        "key": "C",
        "text": "Date"
      },
      {
        "key": "D",
        "text": "Regex"
      }
    ],
    "answer": "D",
    "explanation": "Regex 用于模式匹配，比如以 Ra 开头。 资料原句：Regex is used for pattern-based text searching.",
    "noteQuote": "Regex is used for pattern-based text searching.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Datatypes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-016",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Relationships",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Relationship style best when related data is read together?",
    "options": [
      {
        "key": "A",
        "text": "Arbiter"
      },
      {
        "key": "B",
        "text": "Reference"
      },
      {
        "key": "C",
        "text": "Embedded document"
      },
      {
        "key": "D",
        "text": "Shard key"
      }
    ],
    "answer": "C",
    "explanation": "地址、配置等常随主体一起读取，适合嵌入。 资料原句：Embedded document: Store related data inside one document. Best use: Data is read together.",
    "noteQuote": "Embedded document: Store related data inside one document. Best use: Data is read together.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Relationships",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-017",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Relationships",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Relationship style best when related data is large, updated often, or reused?",
    "options": [
      {
        "key": "A",
        "text": "Reference"
      },
      {
        "key": "B",
        "text": "Array only"
      },
      {
        "key": "C",
        "text": "Time series"
      },
      {
        "key": "D",
        "text": "Embedded document"
      }
    ],
    "answer": "A",
    "explanation": "大型、频繁更新或复用的数据适合引用。 资料原句：Reference: Data is large, updated often, or reused.",
    "noteQuote": "Reference: Data is large, updated often, or reused.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Relationships",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-018",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to insert one document?",
    "options": [
      {
        "key": "A",
        "text": "insertOne()"
      },
      {
        "key": "B",
        "text": "updateOne()"
      },
      {
        "key": "C",
        "text": "findOne()"
      },
      {
        "key": "D",
        "text": "insertMany()"
      }
    ],
    "answer": "A",
    "explanation": "insertOne 插入单个文档。 资料原句：Use insertOne for one document and insertMany for multiple documents.",
    "noteQuote": "Use insertOne for one document and insertMany for multiple documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-019",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to insert multiple documents?",
    "options": [
      {
        "key": "A",
        "text": "deleteMany()"
      },
      {
        "key": "B",
        "text": "insertMany()"
      },
      {
        "key": "C",
        "text": "insertOne()"
      },
      {
        "key": "D",
        "text": "countDocuments()"
      }
    ],
    "answer": "B",
    "explanation": "insertMany 批量插入多个文档。 资料原句：Use insertOne for one document and insertMany for multiple documents.",
    "noteQuote": "Use insertOne for one document and insertMany for multiple documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-020",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to retrieve documents, optionally with a filter?",
    "options": [
      {
        "key": "A",
        "text": "deleteOne()"
      },
      {
        "key": "B",
        "text": "createIndex()"
      },
      {
        "key": "C",
        "text": "insertOne()"
      },
      {
        "key": "D",
        "text": "find()"
      }
    ],
    "answer": "D",
    "explanation": "find 可查全部或按条件查匹配文档。 资料原句：Use find with a filter to retrieve matching documents.",
    "noteQuote": "Use find with a filter to retrieve matching documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-021",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method that returns one matching document?",
    "options": [
      {
        "key": "A",
        "text": "findMany()"
      },
      {
        "key": "B",
        "text": "updateMany()"
      },
      {
        "key": "C",
        "text": "insertOne()"
      },
      {
        "key": "D",
        "text": "findOne()"
      }
    ],
    "answer": "D",
    "explanation": "findOne 只返回第一条匹配文档。 资料原句：CRUD methods include find(), findOne().",
    "noteQuote": "CRUD methods include find(), findOne().",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-022",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to modify a single matching document?",
    "options": [
      {
        "key": "A",
        "text": "insertMany()"
      },
      {
        "key": "B",
        "text": "updateMany()"
      },
      {
        "key": "C",
        "text": "updateOne()"
      },
      {
        "key": "D",
        "text": "deleteOne()"
      }
    ],
    "answer": "C",
    "explanation": "updateOne 只更新一个匹配文档。 资料原句：Use updateOne or updateMany with update operators such as $set and $inc.",
    "noteQuote": "Use updateOne or updateMany with update operators such as $set and $inc.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-023",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to modify all matching documents?",
    "options": [
      {
        "key": "A",
        "text": "replaceOne only"
      },
      {
        "key": "B",
        "text": "updateOne()"
      },
      {
        "key": "C",
        "text": "deleteMany()"
      },
      {
        "key": "D",
        "text": "updateMany()"
      }
    ],
    "answer": "D",
    "explanation": "updateMany 更新所有符合条件的文档。 资料原句：Use updateOne or updateMany with update operators.",
    "noteQuote": "Use updateOne or updateMany with update operators.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-024",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Method used to remove a single matching document?",
    "options": [
      {
        "key": "A",
        "text": "findOne()"
      },
      {
        "key": "B",
        "text": "deleteMany()"
      },
      {
        "key": "C",
        "text": "deleteOne()"
      },
      {
        "key": "D",
        "text": "dropDatabase()"
      }
    ],
    "answer": "C",
    "explanation": "删除操作必须带好过滤条件。 资料原句：Use delete commands carefully with a proper filter condition.",
    "noteQuote": "Use delete commands carefully with a proper filter condition.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-025",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Update operator used to set or replace a field value?",
    "options": [
      {
        "key": "A",
        "text": "$inc"
      },
      {
        "key": "B",
        "text": "$set"
      },
      {
        "key": "C",
        "text": "$pop"
      },
      {
        "key": "D",
        "text": "$push"
      }
    ],
    "answer": "B",
    "explanation": "$set 是最基础的字段赋值更新操作符。 资料原句：An update should use operators such as $set or $inc.",
    "noteQuote": "An update should use operators such as $set or $inc.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-026",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Update operator used to increase or decrease a numeric field?",
    "options": [
      {
        "key": "A",
        "text": "$set"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$push"
      },
      {
        "key": "D",
        "text": "$rename"
      }
    ],
    "answer": "B",
    "explanation": "$inc 专门用于数值增减。 资料原句：Use update operators such as $set and $inc.",
    "noteQuote": "Use update operators such as $set and $inc.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-027",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Array operator suitable when duplicates are allowed?",
    "options": [
      {
        "key": "A",
        "text": "$pop"
      },
      {
        "key": "B",
        "text": "$push"
      },
      {
        "key": "C",
        "text": "$pull"
      },
      {
        "key": "D",
        "text": "$addToSet"
      }
    ],
    "answer": "B",
    "explanation": "$push 向数组添加元素，允许重复。 资料原句： $push is suitable when duplicates are allowed in an array.",
    "noteQuote": " $push is suitable when duplicates are allowed in an array.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-028",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Array operator suitable when duplicate values should be prevented?",
    "options": [
      {
        "key": "A",
        "text": "$push"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$pop"
      },
      {
        "key": "D",
        "text": "$addToSet"
      }
    ],
    "answer": "D",
    "explanation": "$addToSet 只在不存在时加入。 资料原句： $addToSet is suitable when duplicate values should be prevented.",
    "noteQuote": " $addToSet is suitable when duplicate values should be prevented.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-029",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Array operation that removes the last item?",
    "options": [
      {
        "key": "A",
        "text": "$addToSet"
      },
      {
        "key": "B",
        "text": "$pop: 1"
      },
      {
        "key": "C",
        "text": "$pop: -1"
      },
      {
        "key": "D",
        "text": "$push"
      }
    ],
    "answer": "B",
    "explanation": "$pop:1 删除数组最后一个元素。 资料原句：$pop: 1 removes the last item.",
    "noteQuote": "$pop: 1 removes the last item.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-030",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Array operation that removes the first item?",
    "options": [
      {
        "key": "A",
        "text": "$inc -1"
      },
      {
        "key": "B",
        "text": "$pop: 1"
      },
      {
        "key": "C",
        "text": "$pop: -1"
      },
      {
        "key": "D",
        "text": "$pull all"
      }
    ],
    "answer": "C",
    "explanation": "$pop:-1 删除数组第一个元素。 资料原句：$pop: -1 removes the first item.",
    "noteQuote": "$pop: -1 removes the first item.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-031",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "MongoDB Operators",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Feature that updates if found and inserts if not found?",
    "options": [
      {
        "key": "A",
        "text": "replication"
      },
      {
        "key": "B",
        "text": "upsert"
      },
      {
        "key": "C",
        "text": "rollback"
      },
      {
        "key": "D",
        "text": "projection"
      }
    ],
    "answer": "B",
    "explanation": "upsert = update + insert。 资料原句：upsert: Update if found, insert if not found.",
    "noteQuote": "upsert: Update if found, insert if not found.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "MongoDB Operators",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-032",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Special data structure that helps MongoDB find matching documents quickly?",
    "options": [
      {
        "key": "A",
        "text": "Shard"
      },
      {
        "key": "B",
        "text": "Collection"
      },
      {
        "key": "C",
        "text": "Document"
      },
      {
        "key": "D",
        "text": "Index"
      }
    ],
    "answer": "D",
    "explanation": "索引提升查询和排序效率，但过多索引会增加写入成本。 资料原句：An index is a special data structure that helps MongoDB find matching documents quickly.",
    "noteQuote": "An index is a special data structure that helps MongoDB find matching documents quickly.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-033",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: What MongoDB may perform when a query field has no index?",
    "options": [
      {
        "key": "A",
        "text": "Index scan"
      },
      {
        "key": "B",
        "text": "Arbiter election"
      },
      {
        "key": "C",
        "text": "Collection scan"
      },
      {
        "key": "D",
        "text": "Text search"
      }
    ],
    "answer": "C",
    "explanation": "无索引时可能全集合扫描，性能较差。 资料原句：Without an index, MongoDB may scan the whole collection.",
    "noteQuote": "Without an index, MongoDB may scan the whole collection.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-034",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Explain output indicating that an index scan is used?",
    "options": [
      {
        "key": "A",
        "text": "FETCH_ALL"
      },
      {
        "key": "B",
        "text": "COLLSCAN"
      },
      {
        "key": "C",
        "text": "IXSCAN"
      },
      {
        "key": "D",
        "text": "SORT_ONLY"
      }
    ],
    "answer": "C",
    "explanation": "explain 中 IXSCAN 说明使用了索引扫描。 资料原句：IXSCAN indicates that an index scan is used.",
    "noteQuote": "IXSCAN indicates that an index scan is used.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-035",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index type for one frequently searched field such as studentId?",
    "options": [
      {
        "key": "A",
        "text": "Single field index"
      },
      {
        "key": "B",
        "text": "2dsphere index"
      },
      {
        "key": "C",
        "text": "Text index"
      },
      {
        "key": "D",
        "text": "Compound index"
      }
    ],
    "answer": "A",
    "explanation": "单字段高频查询适合单字段索引。 资料原句：Single field index: One frequently searched field.",
    "noteQuote": "Single field index: One frequently searched field.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-036",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index type useful for filtering and sorting using multiple fields?",
    "options": [
      {
        "key": "A",
        "text": "Single field index"
      },
      {
        "key": "B",
        "text": "Compound index"
      },
      {
        "key": "C",
        "text": "Text index"
      },
      {
        "key": "D",
        "text": "Multikey index"
      }
    ],
    "answer": "B",
    "explanation": "如 cuisine 过滤 + rating 排序适合复合索引。 资料原句：Compound index: Filter and sort using multiple fields.",
    "noteQuote": "Compound index: Filter and sort using multiple fields.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-037",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index type created for array fields?",
    "options": [
      {
        "key": "A",
        "text": "Text index"
      },
      {
        "key": "B",
        "text": "2dsphere index"
      },
      {
        "key": "C",
        "text": "Single numeric index"
      },
      {
        "key": "D",
        "text": "Multikey index"
      }
    ],
    "answer": "D",
    "explanation": "数组字段会产生 multikey index。 资料原句：Multikey index: Array fields.",
    "noteQuote": "Multikey index: Array fields.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-038",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index type used for keyword search in text fields?",
    "options": [
      {
        "key": "A",
        "text": "2dsphere index"
      },
      {
        "key": "B",
        "text": "TTL only"
      },
      {
        "key": "C",
        "text": "Compound index"
      },
      {
        "key": "D",
        "text": "Text index"
      }
    ],
    "answer": "D",
    "explanation": "title/description 全文检索需要 text index。 资料原句：Text index: Keyword search in text fields.",
    "noteQuote": "Text index: Keyword search in text fields.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-039",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index required for GeoJSON location-based queries?",
    "options": [
      {
        "key": "A",
        "text": "Text index"
      },
      {
        "key": "B",
        "text": "Multikey index"
      },
      {
        "key": "C",
        "text": "2dsphere index"
      },
      {
        "key": "D",
        "text": "Hashed index only"
      }
    ],
    "answer": "C",
    "explanation": "地理位置查询常需要 2dsphere 索引。 资料原句：2dsphere index: Location-based GeoJSON queries.",
    "noteQuote": "2dsphere index: Location-based GeoJSON queries.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-040",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index direction meaning ascending order?",
    "options": [
      {
        "key": "A",
        "text": "2d"
      },
      {
        "key": "B",
        "text": "1"
      },
      {
        "key": "C",
        "text": "-1"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "answer": "B",
    "explanation": "MongoDB createIndex 中 1 表示升序。 资料原句：1 means ascending order.",
    "noteQuote": "1 means ascending order.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-041",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Indexes",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Index direction meaning descending order?",
    "options": [
      {
        "key": "A",
        "text": "1"
      },
      {
        "key": "B",
        "text": "text"
      },
      {
        "key": "C",
        "text": "-1"
      },
      {
        "key": "D",
        "text": "0"
      }
    ],
    "answer": "C",
    "explanation": "MongoDB createIndex 中 -1 表示降序。 资料原句：-1 means descending order.",
    "noteQuote": "-1 means descending order.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Indexes",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-042",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: GeoJSON type representing a single location?",
    "options": [
      {
        "key": "A",
        "text": "Collection"
      },
      {
        "key": "B",
        "text": "LineString"
      },
      {
        "key": "C",
        "text": "Polygon"
      },
      {
        "key": "D",
        "text": "Point"
      }
    ],
    "answer": "D",
    "explanation": "Point 表示一个经纬度位置。 资料原句：Point: Single location using longitude and latitude.",
    "noteQuote": "Point: Single location using longitude and latitude.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-043",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Correct coordinate order for GeoJSON Point?",
    "options": [
      {
        "key": "A",
        "text": "[city, country]"
      },
      {
        "key": "B",
        "text": "[x, z]"
      },
      {
        "key": "C",
        "text": "[longitude, latitude]"
      },
      {
        "key": "D",
        "text": "[latitude, longitude]"
      }
    ],
    "answer": "C",
    "explanation": "GeoJSON 顺序是经度在前，纬度在后。 资料原句：GeoJSON Point coordinates are written as [longitude, latitude].",
    "noteQuote": "GeoJSON Point coordinates are written as [longitude, latitude].",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-044",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: GeoJSON shape whose first and last coordinates must match to close the area?",
    "options": [
      {
        "key": "A",
        "text": "Point"
      },
      {
        "key": "B",
        "text": "Polygon"
      },
      {
        "key": "C",
        "text": "ObjectId"
      },
      {
        "key": "D",
        "text": "LineString"
      }
    ],
    "answer": "B",
    "explanation": "Polygon 必须闭合。 资料原句：Polygon: Closed area where first and last coordinates match.",
    "noteQuote": "Polygon: Closed area where first and last coordinates match.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-045",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: GeoJSON type representing a route or path?",
    "options": [
      {
        "key": "A",
        "text": "LineString"
      },
      {
        "key": "B",
        "text": "Text index"
      },
      {
        "key": "C",
        "text": "Polygon"
      },
      {
        "key": "D",
        "text": "Point"
      }
    ],
    "answer": "A",
    "explanation": "LineString 可以表示路线或轨迹。 资料原句：LineString: Route or path using multiple coordinates.",
    "noteQuote": "LineString: Route or path using multiple coordinates.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-046",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Operator used to find places near a point?",
    "options": [
      {
        "key": "A",
        "text": "$geoWithin"
      },
      {
        "key": "B",
        "text": "$near"
      },
      {
        "key": "C",
        "text": "$match"
      },
      {
        "key": "D",
        "text": "$lookup"
      }
    ],
    "answer": "B",
    "explanation": "$near 查询离某点最近的位置。 资料原句：$near: Finds places near a point.",
    "noteQuote": "$near: Finds places near a point.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-047",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Geospatial",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Operator used to find places inside an area?",
    "options": [
      {
        "key": "A",
        "text": "$near"
      },
      {
        "key": "B",
        "text": "$inc"
      },
      {
        "key": "C",
        "text": "$geoWithin"
      },
      {
        "key": "D",
        "text": "$group"
      }
    ],
    "answer": "C",
    "explanation": "$geoWithin 查询某区域内的数据。 资料原句：$geoWithin: Finds places inside an area.",
    "noteQuote": "$geoWithin: Finds places inside an area.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Geospatial",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-048",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Required time series field that stores time of reading?",
    "options": [
      {
        "key": "A",
        "text": "granularity"
      },
      {
        "key": "B",
        "text": "metaField"
      },
      {
        "key": "C",
        "text": "timeField"
      },
      {
        "key": "D",
        "text": "measurement"
      }
    ],
    "answer": "C",
    "explanation": "timeField 存储读数时间。 资料原句：timeField: Stores time of reading.",
    "noteQuote": "timeField: Stores time of reading.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Time Series",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-049",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Time series field that stores stable grouping label such as device_id?",
    "options": [
      {
        "key": "A",
        "text": "measurement"
      },
      {
        "key": "B",
        "text": "ObjectId"
      },
      {
        "key": "C",
        "text": "metaField"
      },
      {
        "key": "D",
        "text": "timeField"
      }
    ],
    "answer": "C",
    "explanation": "metaField 存储设备 ID 等稳定分组标签。 资料原句：metaField: Stable grouping label.",
    "noteQuote": "metaField: Stable grouping label.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Time Series",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-050",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Changing value in time series such as temperature or humidity?",
    "options": [
      {
        "key": "A",
        "text": "index name"
      },
      {
        "key": "B",
        "text": "measurement"
      },
      {
        "key": "C",
        "text": "metaField"
      },
      {
        "key": "D",
        "text": "timeField"
      }
    ],
    "answer": "B",
    "explanation": "测量值是随时间变化的数据。 资料原句：measurement: Changing value.",
    "noteQuote": "measurement: Changing value.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Time Series",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-051",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Time Series",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Query pattern used to show latest readings first?",
    "options": [
      {
        "key": "A",
        "text": "findOne only"
      },
      {
        "key": "B",
        "text": "limit({timestamp})"
      },
      {
        "key": "C",
        "text": "sort({ timestamp: -1 })"
      },
      {
        "key": "D",
        "text": "sort({timestamp:1})"
      }
    ],
    "answer": "C",
    "explanation": "按时间戳降序可显示最新数据。 资料原句：Use sort({ timestamp: -1 }) to show latest readings first.",
    "noteQuote": "Use sort({ timestamp: -1 }) to show latest readings first.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Time Series",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-052",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Feature used to process many documents step by step and produce meaningful output?",
    "options": [
      {
        "key": "A",
        "text": "Aggregation framework"
      },
      {
        "key": "B",
        "text": "GridFS"
      },
      {
        "key": "C",
        "text": "Replica set"
      },
      {
        "key": "D",
        "text": "ObjectId"
      }
    ],
    "answer": "A",
    "explanation": "聚合框架用于统计、分组、排序和报表。 资料原句：Aggregation is used to process many documents step by step and produce meaningful output.",
    "noteQuote": "Aggregation is used to process many documents step by step and produce meaningful output.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-053",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that filters documents?",
    "options": [
      {
        "key": "A",
        "text": "$project"
      },
      {
        "key": "B",
        "text": "$sort"
      },
      {
        "key": "C",
        "text": "$group"
      },
      {
        "key": "D",
        "text": "$match"
      }
    ],
    "answer": "D",
    "explanation": "$match 负责过滤文档。 资料原句：$match: Filters documents.",
    "noteQuote": "$match: Filters documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-054",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that groups documents and calculates values?",
    "options": [
      {
        "key": "A",
        "text": "$group"
      },
      {
        "key": "B",
        "text": "$match"
      },
      {
        "key": "C",
        "text": "$sort"
      },
      {
        "key": "D",
        "text": "$limit"
      }
    ],
    "answer": "A",
    "explanation": "$group 负责分组统计，如求和平均。 资料原句：$group: Groups documents and calculates values.",
    "noteQuote": "$group: Groups documents and calculates values.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-055",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that sorts results?",
    "options": [
      {
        "key": "A",
        "text": "$project"
      },
      {
        "key": "B",
        "text": "$lookup"
      },
      {
        "key": "C",
        "text": "$skip"
      },
      {
        "key": "D",
        "text": "$sort"
      }
    ],
    "answer": "D",
    "explanation": "$sort 用于排序聚合结果。 资料原句：$sort: Sorts results.",
    "noteQuote": "$sort: Sorts results.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-056",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that shows selected or computed fields?",
    "options": [
      {
        "key": "A",
        "text": "$project"
      },
      {
        "key": "B",
        "text": "$unwind"
      },
      {
        "key": "C",
        "text": "$group"
      },
      {
        "key": "D",
        "text": "$match"
      }
    ],
    "answer": "A",
    "explanation": "$project 控制输出字段或计算字段。 资料原句：$project: Shows selected or computed fields.",
    "noteQuote": "$project: Shows selected or computed fields.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-057",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that limits output?",
    "options": [
      {
        "key": "A",
        "text": "$lookup"
      },
      {
        "key": "B",
        "text": "$skip"
      },
      {
        "key": "C",
        "text": "$addFields"
      },
      {
        "key": "D",
        "text": "$limit"
      }
    ],
    "answer": "D",
    "explanation": "$limit 限制返回数量。 资料原句：$limit: Limits output.",
    "noteQuote": "$limit: Limits output.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-058",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Aggregation",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Aggregation stage that skips documents?",
    "options": [
      {
        "key": "A",
        "text": "$skip"
      },
      {
        "key": "B",
        "text": "$limit"
      },
      {
        "key": "C",
        "text": "$max"
      },
      {
        "key": "D",
        "text": "$sort"
      }
    ],
    "answer": "A",
    "explanation": "$skip 跳过指定数量文档。 资料原句：$skip: Skips documents.",
    "noteQuote": "$skip: Skips documents.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Aggregation",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-059",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Transactions",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Mechanism that groups multiple operations so they succeed or fail together?",
    "options": [
      {
        "key": "A",
        "text": "Index"
      },
      {
        "key": "B",
        "text": "Transaction"
      },
      {
        "key": "C",
        "text": "Text search"
      },
      {
        "key": "D",
        "text": "GeoJSON"
      }
    ],
    "answer": "B",
    "explanation": "事务用于保证多操作一致性。 资料原句：Transactions and rollback.",
    "noteQuote": "Transactions and rollback.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Transactions",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-060",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replication",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: MongoDB feature used for high availability through primary and secondary nodes?",
    "options": [
      {
        "key": "A",
        "text": "Text index"
      },
      {
        "key": "B",
        "text": "Replica set"
      },
      {
        "key": "C",
        "text": "Aggregation pipeline"
      },
      {
        "key": "D",
        "text": "Capped collection"
      }
    ],
    "answer": "B",
    "explanation": "副本集用于高可用和故障转移。 资料原句：Replication maintains copies for availability.",
    "noteQuote": "Replication maintains copies for availability.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Replication",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-061",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replication",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Replica set node that handles writes?",
    "options": [
      {
        "key": "A",
        "text": "Backup only"
      },
      {
        "key": "B",
        "text": "Secondary"
      },
      {
        "key": "C",
        "text": "Primary"
      },
      {
        "key": "D",
        "text": "Arbiter"
      }
    ],
    "answer": "C",
    "explanation": "主节点负责写入。 资料原句：primary/secondary.",
    "noteQuote": "primary/secondary.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Replication",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-062",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replication",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Replica set node that replicates data and may be elected new primary?",
    "options": [
      {
        "key": "A",
        "text": "Primary only"
      },
      {
        "key": "B",
        "text": "Mongos"
      },
      {
        "key": "C",
        "text": "Arbiter"
      },
      {
        "key": "D",
        "text": "Secondary"
      }
    ],
    "answer": "D",
    "explanation": "从节点复制数据，主节点故障后可选举为主节点。 资料原句：Primary/secondary.",
    "noteQuote": "Primary/secondary.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Replication",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-063",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Replication",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Replica set member that votes in elections but does not store data?",
    "options": [
      {
        "key": "A",
        "text": "Shard"
      },
      {
        "key": "B",
        "text": "Arbiter"
      },
      {
        "key": "C",
        "text": "Primary"
      },
      {
        "key": "D",
        "text": "Secondary"
      }
    ],
    "answer": "B",
    "explanation": "Arbiter 只投票，不保存业务数据。 资料原句：arbiter.",
    "noteQuote": "arbiter.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Replication",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-064",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Java client object used to connect to MongoDB server?",
    "options": [
      {
        "key": "A",
        "text": "MongoClient"
      },
      {
        "key": "B",
        "text": "MongoDatabase"
      },
      {
        "key": "C",
        "text": "Document"
      },
      {
        "key": "D",
        "text": "MongoCollection"
      }
    ],
    "answer": "A",
    "explanation": "Java 驱动中 MongoClient 表示客户端连接入口。 资料原句：Java CRUD with MongoDB.",
    "noteQuote": "Java CRUD with MongoDB.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Java CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-065",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Java method used to select a MongoDB database?",
    "options": [
      {
        "key": "A",
        "text": "connectDB()"
      },
      {
        "key": "B",
        "text": "getCollection()"
      },
      {
        "key": "C",
        "text": "getTable()"
      },
      {
        "key": "D",
        "text": "getDatabase()"
      }
    ],
    "answer": "D",
    "explanation": "MongoClient.getDatabase 获取数据库对象。 资料原句：Java CRUD with MongoDB.",
    "noteQuote": "Java CRUD with MongoDB.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Java CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-066",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Java method used to retrieve a collection from a database?",
    "options": [
      {
        "key": "A",
        "text": "getCollection()"
      },
      {
        "key": "B",
        "text": "getDatabase()"
      },
      {
        "key": "C",
        "text": "getSet()"
      },
      {
        "key": "D",
        "text": "getDocument()"
      }
    ],
    "answer": "A",
    "explanation": "MongoDatabase.getCollection 获取集合对象。 资料原句：Java CRUD with MongoDB.",
    "noteQuote": "Java CRUD with MongoDB.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Java CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-067",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Java CRUD",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Java class commonly used to represent MongoDB documents?",
    "options": [
      {
        "key": "A",
        "text": "Document"
      },
      {
        "key": "B",
        "text": "ModelAndView"
      },
      {
        "key": "C",
        "text": "ResultSet"
      },
      {
        "key": "D",
        "text": "BeanFactory"
      }
    ],
    "answer": "A",
    "explanation": "MongoDB Java 中 Document 用来构造文档。 资料原句：Document class.",
    "noteQuote": "Document class.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Java CRUD",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-068",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Remote Dictionary Server, an in-memory data structure store?",
    "options": [
      {
        "key": "A",
        "text": "Cassandra"
      },
      {
        "key": "B",
        "text": "Neo4j"
      },
      {
        "key": "C",
        "text": "Redis"
      },
      {
        "key": "D",
        "text": "MongoDB"
      }
    ],
    "answer": "C",
    "explanation": "Redis 全称 Remote Dictionary Server，主要在内存中存储活跃数据。 资料原句：Redis stands for Remote Dictionary Server.",
    "noteQuote": "Redis stands for Remote Dictionary Server.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-069",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Where Redis stores active data, making it very fast?",
    "options": [
      {
        "key": "A",
        "text": "Disk only"
      },
      {
        "key": "B",
        "text": "RAM"
      },
      {
        "key": "C",
        "text": "Browser cache"
      },
      {
        "key": "D",
        "text": "JDBC pool"
      }
    ],
    "answer": "B",
    "explanation": "Redis 快的关键是内存读写。 资料原句：Redis stores active data mainly in RAM.",
    "noteQuote": "Redis stores active data mainly in RAM.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-070",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Default Redis port?",
    "options": [
      {
        "key": "A",
        "text": "8080"
      },
      {
        "key": "B",
        "text": "6379"
      },
      {
        "key": "C",
        "text": "27017"
      },
      {
        "key": "D",
        "text": "3306"
      }
    ],
    "answer": "B",
    "explanation": "Redis 默认端口是 6379。 资料原句：6379 is the default Redis port.",
    "noteQuote": "6379 is the default Redis port.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-071",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command/program that starts the Redis database engine?",
    "options": [
      {
        "key": "A",
        "text": "mysqldump"
      },
      {
        "key": "B",
        "text": "redis-server"
      },
      {
        "key": "C",
        "text": "redis-cli"
      },
      {
        "key": "D",
        "text": "mongo"
      }
    ],
    "answer": "B",
    "explanation": "必须先启动 redis-server 才能执行命令。 资料原句：redis-server starts the Redis database engine.",
    "noteQuote": "redis-server starts the Redis database engine.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-072",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command-line client used to send Redis commands?",
    "options": [
      {
        "key": "A",
        "text": "redis-cli"
      },
      {
        "key": "B",
        "text": "redis-server"
      },
      {
        "key": "C",
        "text": "mongosh"
      },
      {
        "key": "D",
        "text": "mysql"
      }
    ],
    "answer": "A",
    "explanation": "redis-cli 用于连接并发送 Redis 命令。 资料原句：redis-cli.",
    "noteQuote": "redis-cli.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-073",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Basics",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Connectivity test where PONG means Redis server is responding?",
    "options": [
      {
        "key": "A",
        "text": "PING/PONG"
      },
      {
        "key": "B",
        "text": "SAVE/BGSAVE"
      },
      {
        "key": "C",
        "text": "GET/SET"
      },
      {
        "key": "D",
        "text": "AUTH/ACL"
      }
    ],
    "answer": "A",
    "explanation": "PING 返回 PONG 说明 Redis 正常响应。 资料原句：PONG means Redis server is responding correctly.",
    "noteQuote": "PONG means Redis server is responding correctly.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Basics",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-074",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used to store a string value by key?",
    "options": [
      {
        "key": "A",
        "text": "SET"
      },
      {
        "key": "B",
        "text": "HGET"
      },
      {
        "key": "C",
        "text": "DEL"
      },
      {
        "key": "D",
        "text": "GET"
      }
    ],
    "answer": "A",
    "explanation": "SET key value 设置字符串键。 资料原句：SET/GET/DEL.",
    "noteQuote": "SET/GET/DEL.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-075",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used to retrieve a string value by key?",
    "options": [
      {
        "key": "A",
        "text": "EXPIRE"
      },
      {
        "key": "B",
        "text": "GET"
      },
      {
        "key": "C",
        "text": "DEL"
      },
      {
        "key": "D",
        "text": "SET"
      }
    ],
    "answer": "B",
    "explanation": "GET key 获取字符串值。 资料原句：SET/GET/DEL.",
    "noteQuote": "SET/GET/DEL.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-076",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used to delete one or more keys?",
    "options": [
      {
        "key": "A",
        "text": "DEL"
      },
      {
        "key": "B",
        "text": "EXPIRE"
      },
      {
        "key": "C",
        "text": "INCR"
      },
      {
        "key": "D",
        "text": "TTL"
      }
    ],
    "answer": "A",
    "explanation": "DEL 删除键。 资料原句：SET/GET/DEL.",
    "noteQuote": "SET/GET/DEL.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-077",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used to set a time-to-live for a key?",
    "options": [
      {
        "key": "A",
        "text": "PERSIST"
      },
      {
        "key": "B",
        "text": "TTL"
      },
      {
        "key": "C",
        "text": "AUTH"
      },
      {
        "key": "D",
        "text": "EXPIRE"
      }
    ],
    "answer": "D",
    "explanation": "EXPIRE 设置键过期时间，适合验证码/Token。 资料原句：OTP or token: Store temporary data with expiry.",
    "noteQuote": "OTP or token: Store temporary data with expiry.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-078",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used to check remaining lifetime of a key?",
    "options": [
      {
        "key": "A",
        "text": "LASTSAVE"
      },
      {
        "key": "B",
        "text": "GET"
      },
      {
        "key": "C",
        "text": "TTL"
      },
      {
        "key": "D",
        "text": "EXPIRE"
      }
    ],
    "answer": "C",
    "explanation": "TTL 查看剩余过期时间。 资料原句：expiry.",
    "noteQuote": "expiry.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-079",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Commands",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command used for counters such as page views?",
    "options": [
      {
        "key": "A",
        "text": "LPUSH"
      },
      {
        "key": "B",
        "text": "SADD"
      },
      {
        "key": "C",
        "text": "HSET"
      },
      {
        "key": "D",
        "text": "INCR"
      }
    ],
    "answer": "D",
    "explanation": "INCR 可实现访问量计数。 资料原句：Page views: Use counters with INCR/INCRBY.",
    "noteQuote": "Page views: Use counters with INCR/INCRBY.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Commands",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-080",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Data Types",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis data type suitable for object profile fields under one key?",
    "options": [
      {
        "key": "A",
        "text": "List"
      },
      {
        "key": "B",
        "text": "Hash"
      },
      {
        "key": "C",
        "text": "Set"
      },
      {
        "key": "D",
        "text": "Sorted set"
      }
    ],
    "answer": "B",
    "explanation": "Hash 适合存对象字段。 资料原句：Object profile: Use hash fields under one key.",
    "noteQuote": "Object profile: Use hash fields under one key.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Data Types",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-081",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Data Types",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis data type often used for queues or ordered sequences?",
    "options": [
      {
        "key": "A",
        "text": "Set"
      },
      {
        "key": "B",
        "text": "List"
      },
      {
        "key": "C",
        "text": "Hash"
      },
      {
        "key": "D",
        "text": "String"
      }
    ],
    "answer": "B",
    "explanation": "List 可从两端推入弹出。 资料原句：Lists.",
    "noteQuote": "Lists.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Data Types",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-082",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Data Types",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis data type storing unique unordered values?",
    "options": [
      {
        "key": "A",
        "text": "Set"
      },
      {
        "key": "B",
        "text": "Hash"
      },
      {
        "key": "C",
        "text": "List"
      },
      {
        "key": "D",
        "text": "String"
      }
    ],
    "answer": "A",
    "explanation": "Set 天然去重。 资料原句：sets.",
    "noteQuote": "sets.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Data Types",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-083",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Data Types",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis data type used for leaderboards with scores?",
    "options": [
      {
        "key": "A",
        "text": "Bitmap"
      },
      {
        "key": "B",
        "text": "List"
      },
      {
        "key": "C",
        "text": "Sorted set"
      },
      {
        "key": "D",
        "text": "Hash"
      }
    ],
    "answer": "C",
    "explanation": "排行榜常用 Sorted Set。 资料原句：Leaderboard: Use sorted sets with scores.",
    "noteQuote": "Leaderboard: Use sorted sets with scores.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Data Types",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-084",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Persistence",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis persistence method that saves point-in-time snapshots?",
    "options": [
      {
        "key": "A",
        "text": "AUTH"
      },
      {
        "key": "B",
        "text": "Pipelining"
      },
      {
        "key": "C",
        "text": "AOF"
      },
      {
        "key": "D",
        "text": "RDB"
      }
    ],
    "answer": "D",
    "explanation": "RDB 是快照持久化。 资料原句：RDB.",
    "noteQuote": "RDB.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Persistence",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-085",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Persistence",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis persistence method that logs write operations for recovery?",
    "options": [
      {
        "key": "A",
        "text": "AOF"
      },
      {
        "key": "B",
        "text": "benchmark"
      },
      {
        "key": "C",
        "text": "BGSAVE only"
      },
      {
        "key": "D",
        "text": "RDB"
      }
    ],
    "answer": "A",
    "explanation": "AOF 记录写命令，恢复粒度更细。 资料原句：AOF.",
    "noteQuote": "AOF.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Persistence",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-086",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Persistence",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Blocking command to create an RDB snapshot?",
    "options": [
      {
        "key": "A",
        "text": "BGSAVE"
      },
      {
        "key": "B",
        "text": "AUTH"
      },
      {
        "key": "C",
        "text": "LASTSAVE"
      },
      {
        "key": "D",
        "text": "SAVE"
      }
    ],
    "answer": "D",
    "explanation": "SAVE 会阻塞服务器，生产更常用 BGSAVE。 资料原句：SAVE, BGSAVE, LASTSAVE.",
    "noteQuote": "SAVE, BGSAVE, LASTSAVE.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Persistence",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-087",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Persistence",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Background command to create an RDB snapshot?",
    "options": [
      {
        "key": "A",
        "text": "GET"
      },
      {
        "key": "B",
        "text": "SET"
      },
      {
        "key": "C",
        "text": "SAVE"
      },
      {
        "key": "D",
        "text": "BGSAVE"
      }
    ],
    "answer": "D",
    "explanation": "BGSAVE 后台保存快照。 资料原句：BGSAVE.",
    "noteQuote": "BGSAVE.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Persistence",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-088",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Persistence",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command that shows last successful save time?",
    "options": [
      {
        "key": "A",
        "text": "LASTSAVE"
      },
      {
        "key": "B",
        "text": "BGSAVE"
      },
      {
        "key": "C",
        "text": "TTL"
      },
      {
        "key": "D",
        "text": "PING"
      }
    ],
    "answer": "A",
    "explanation": "LASTSAVE 查看最后一次成功持久化时间。 资料原句：LASTSAVE.",
    "noteQuote": "LASTSAVE.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Persistence",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-089",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Performance",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Tool used to test Redis performance?",
    "options": [
      {
        "key": "A",
        "text": "redis-benchmark"
      },
      {
        "key": "B",
        "text": "mongostat"
      },
      {
        "key": "C",
        "text": "jmeter only"
      },
      {
        "key": "D",
        "text": "mysqlslap"
      }
    ],
    "answer": "A",
    "explanation": "redis-benchmark 用于 Redis 性能测试。 资料原句：redis-benchmark.",
    "noteQuote": "redis-benchmark.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Performance",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-090",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Performance",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Technique that sends multiple commands without waiting for each reply one by one?",
    "options": [
      {
        "key": "A",
        "text": "GeoJSON"
      },
      {
        "key": "B",
        "text": "Replication"
      },
      {
        "key": "C",
        "text": "Pipelining"
      },
      {
        "key": "D",
        "text": "Rollback"
      }
    ],
    "answer": "C",
    "explanation": "Pipelining 减少网络往返，提高吞吐。 资料原句：pipelining.",
    "noteQuote": "pipelining.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Performance",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-091",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Security",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Command/mechanism used for password authentication?",
    "options": [
      {
        "key": "A",
        "text": "EXPIRE"
      },
      {
        "key": "B",
        "text": "AUTH"
      },
      {
        "key": "C",
        "text": "PING"
      },
      {
        "key": "D",
        "text": "HGETALL"
      }
    ],
    "answer": "B",
    "explanation": "AUTH 用于认证。 资料原句：AUTH.",
    "noteQuote": "AUTH.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Security",
      "review-generated"
    ]
  },
  {
    "id": "NS-PN-092",
    "courseKey": "nosql",
    "course": "NoSQL / MongoDB / Redis",
    "topic": "Redis Security",
    "sourceGroup": "prediction",
    "sourceLabel": "预测题",
    "difficulty": "medium",
    "question": "Which NoSQL/MongoDB/Redis concept is described as: Redis safety mode that restricts unsafe remote access by default?",
    "options": [
      {
        "key": "A",
        "text": "protected mode"
      },
      {
        "key": "B",
        "text": "RDB mode"
      },
      {
        "key": "C",
        "text": "text mode"
      },
      {
        "key": "D",
        "text": "cluster mode"
      }
    ],
    "answer": "A",
    "explanation": "protected mode 是 Redis 安全保护机制。 资料原句：protected mode.",
    "noteQuote": "protected mode.",
    "sourceFiles": [
      "Review notes generated"
    ],
    "tags": [
      "nosql",
      "Redis Security",
      "review-generated"
    ]
  }
];
