import { IAboutUsCard, IService, IVacancy } from '@/shared/types/models'

export const serviceList: IService[] = [
  {
    card: {
      title: 'MVP от 2 месяцев',
      subtitle: 'Из ваших требований выделяем только самый основной функционал для оценки гипотез',
      category: 'MVP',
      description:
        'Такой подход помогает нашим клиентам на более ранней стадии посмотреть на свой продукт с разных сторон, получить обратную связь от своих потенциальных клиентов, оценить конкурентную среду и более точно сформировать функциональные требования для будущего развития продукта.',
      videoUrl: '/videos/MVP.mp4',
    },
    isOrange: true,
  },
  {
    card: {
      title: 'МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ',
      subtitle: '',
      category: 'Mobile',
      description:
        'Учитывая ваши требования, разрабатываем нативные и кроссплатформенные приложения с уникальным дизайном и функционалом, полностью соответствующими вашим требованиям.',
      videoUrl: '/videos/mobile.mp4',
      full_stack: [
        'React Native',
        'Fabric',
        'Tensorflow',
        'RabbitMQ',
        'Firebase',
        'Dio',
        'Sign in with Google',
        'Sign in with Facebook',
        'Flutter',
        'Dart',
        'Firebase Messaging',
        'Swift',
        'Java',
        'Kotlin',
        'CoreLocation',
        'MapKit',
        'CleanSwift(VIP)',
        'OneSignal',
        'AVFoundation',
        'Moya',
        'R.Swift',
        'Sass',
        'BLoC',
        'BLE',
        'Hive',
        'Dagger 2',
        'Kotlin Coroutines',
        'Kotlin Flow',
        'Retrofit',
        'MVI',
        'MVVM',
      ],
      url: 'mobile',
    },
  },
  {
    card: {
      title: 'ВЕБ ПРИЛОЖЕНИЯ И САЙТЫ',
      subtitle: '',
      category: 'Web',
      description:
        'Реализуем широкий функционал для сайта вашей организации с комплексным решением. Опираясь на мировые тренды и собственный опыт, создаем удобные и функциональные интерфейсы.',
      videoUrl: '/videos/web.mp4',
      full_stack: [
        'JavaScript',
        'Java',
        'Redux',
        'Axios',
        'Python',
        'Flask',
        'Celery',
        'Elasticsearch',
        'Pytorch',
        'Opencv',
        'Pycuda',
        'TensorRT',
        'Sqlalchemy',
        'Grpc',
        'Fastapi',
        'Zeromq',
        'Redis',
        'Docker',
        'Ffmpeg',
        'Webrtc (Janus)',
        'Websockets',
        'Firebase',
        'Django',
        'React Query',
        'React Router',
        'Styled Components',
        'PHP',
        'Mysql',
        'Laravel',
        'Voyager',
        'Redux Toolkit',
        'Konvs.js',
        'yarn',
        'Emotion',
        'Redux Form',
        'Kafka',
        'Keras',
        'GraphQL',
        'Next.js',
      ],
      url: 'web',
    },
  },
  {
    card: {
      title: 'ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ДЛЯ ВСТРАИВАЕМЫХ СИСТЕМ',
      subtitle: '',
      category: 'Hardware',
      description:
        'Разработка программного обеспечения для встраиваемых систем различного функционала, от реализации отдельных функций до полной автоматизации вашего бизнеса. Переход к реализации услуг в современном формате.',
      videoUrl: '/videos/hardware.mp4',
      full_stack: ['C++'],
      url: 'hardware',
    },
  },
  {
    card: {
      title: 'OUTSTAFF',
      category: 'Outstaff',
      subtitle: '',
      description:
        'Мы предлагаем выделенную команду или отдельных специалистов по следующим направлениям:',
      videoUrl: '/videos/outstaff.mp4',
      stack: ['Analytics', 'Design', 'Mobile', 'Web', 'Testing'],
    },
  },
]

export interface IProject {
  id: number
  title: string
  subtitle: string
  description?: string
  url: string
  technologies: string[]
  img: string
  stack: string[]
}

export const projectList: IProject[] = [
  {
    id: 0,
    title: 'Система обеспечения безопасности сотрудников на производстве «ДиэтархА»',
    subtitle: 'Реализация системы, автоматизирующая процессы контроля техники безопасности',
    img: '/img/projects/1.webp',
    url: 'dietarkha',
    technologies: ['Python', 'Fastapi', 'TypeScript', 'React', 'Flutter', 'Dart'],
    stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
  },
  {
    id: 1,
    title: 'Судейская система для проведения соревнований «Aerobiq»',
    subtitle: 'Реализация системы, автоматизирующая процесс организации спортивных соревнований',
    img: '/img/projects/2.webp',
    url: 'aerobiq',
    technologies: ['Python', 'Postgresql', 'React', 'Next.js'],
    stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
  },
  {
    id: 2,
    title: 'Определение и отслеживание пешеходов в видеоряде',
    subtitle: 'Определение и отслеживание пешеходов в видеоряде с последующим определением их...',
    img: '/img/projects/3.webp',
    url: 'ped-neuron',
    technologies: [
      'Python',
      'Celery',
      'Postgresql',
      'Pytorch',
      'Opencv',
      'Pycuda',
      'TensorRT',
      'Sqlalchemy',
      'Grpc',
      'Fastapi',
      'Zeromq',
      'Redis',
      'Docker',
      'Ffmpeg',
      'Webrtc (Janus)',
      'Websockets',
      'Firebase',
    ],
    stack: ['Web'],
  },
  {
    id: 3,
    title: 'Сервис для поиска и бронирования отелей по России',
    subtitle: 'Сервис позволяет гостям подбирать и бронировать жилье по городам России',
    img: '/img/projects/4.webp',
    url: 'innbi',
    technologies: [
      'Java',
      'Python',
      'Celery',
      'Sqlalchemy',
      'Redis',
      'TypeScript',
      'React',
      'Flutter',
      'Kafka',
    ],
    stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
  },
  {
    id: 4,
    title: 'Веб-система по отображению новостей и событий',
    subtitle:
      'Визуализирует данные из областей информационных технологий, машиностроения, робототехники и других сфер',
    img: '/img/projects/5.webp',
    url: 'techradar',
    technologies: ['Python', 'Fastapi', 'TypeScript', 'React', 'Flutter', 'Dart'],
    stack: ['Web', 'Analytics', 'Testing'],
  },
  {
    id: 5,
    title: 'Информационная система для терминалов',
    subtitle:
      'Разработка комплекса автоматизированных решений для продажи SIM-карт через терминалы',
    img: '/img/projects/6.webp',
    url: 'simpad',
    technologies: ['Redux', 'Redis', 'Docker', 'React', 'PHP', 'Mysql', 'Laravel', 'Voyager'],
    stack: ['Web', 'Analytics', 'Design', 'Hardware', 'Mobile', 'Testing'],
  },
  {
    id: 6,
    title: 'Комплекс мобильных приложений для фитнеса',
    subtitle: 'Приложения направлены на взаимодействие тренера и клиента',
    img: '/img/projects/7.webp',
    url: 'fitness',
    technologies: [
      'Python',
      'Postgresql',
      'Docker',
      'Firebase',
      'Flutter',
      'Dart',
      'BLoC',
      'Dio',
      'Django',
      'Docker-Compose',
      'Hive',
      'BLE',
    ],
    stack: ['Analytics', 'Mobile', 'Testing'],
  },
  {
    id: 7,
    title: 'Информационные сайты спортивных организаций',
    subtitle: 'Реализация сайтов в соответствии с требованиями Федеральных законов',
    img: '/img/projects/8.webp',
    url: 'sports',
    technologies: ['JavaScript', 'Redux', 'Python', 'Docker', 'React', 'Django', 'Docker-Compose'],
    stack: ['Web', 'Analytics', 'Mobile', 'Testing'],
  },
  {
    id: 8,
    title: 'Приложение для путешествий по необычным местам Парижа',
    subtitle:
      'Мобильное приложение с тематическими маршрутами, для прогулок туристов в различных...',
    img: '/img/projects/9.webp',
    url: 'ouiguide',
    technologies: [
      'Swift',
      'CoreLocation',
      'MapKit',
      'CleanSwift(VIP)',
      'OneSignal',
      'AVFoundation',
      'Moya',
      'Sign in with Google',
      'Sign in with Facebook',
      'R.Swift',
      'SwiftLint',
    ],
    stack: ['Analytics', 'Design', 'Mobile', 'Testing'],
  },
  {
    id: 9,
    title: 'Мобильное приложение по операциям с криптовалютой',
    subtitle:
      'Реализация системы, позволяющая осуществлять внутренние и внешние платежные операции с фиатными валютами',
    img: '/img/projects/10.webp',
    url: 'bizonex',
    technologies: ['Firebase', 'Flutter', 'Dart', 'BLoC', 'GraphQL'],
    stack: ['Mobile'],
  },
]

export const aboutUsCards: IAboutUsCard[] = [
  {
    title: 'Забота о здоровье',
    subtitle: 'Компенсация за занятия спортом и дорогостоящего лечения',
    img: '/img/healthcare.png',
  },
  {
    title: 'Развитие и обучение',
    subtitle:
      'Мы обеспечиваем участие в конференциях, частично покрываем расходы на курсы повышения квалификации',
    img: '/img/training.png',
  },
  {
    title: 'Периодическая аттестация',
    subtitle: 'Индивидуальный план развития, пересмотр зарплаты и переход на новую должность',
    img: '/img/certification.png',
  },
  {
    title: 'Библиотека',
    subtitle:
      'У нас есть корпоративная библиотека, где ты можешь найти что-то интересное для себя. Мы регулярно пополняем её, учитывая потребности сотрудников',
    img: '/img/library.png',
  },
  {
    title: 'Корпоративная жизнь',
    subtitle: 'Вечера с настольными играми, дни рождения и корпоративы',
    img: '/img/corpolife.png',
  },
  {
    title: 'Адаптация',
    subtitle:
      'С самого первого дня в нашей компании мы заботимся о твоей адаптации, чтобы ты легко влился в коллектив и привык к динамике нашей работы',
    img: '/img/adaptation.png',
  },
]

export const vacancies: IVacancy[] = [
  {
    id: 0,
    category: 'Backend',
    title: 'C#/.Net разработчик',
    subtitle: 'Удаленно',
    level: 'Middle / Senior',
    desc: 'Ищем опытного C# разработчика для участия в проекте разработки системы мониторинга финансовых процессов компании-застройщика',
    expectations: [
      'Опыт работы на C# более 3-х лет',
      'Опыт работы с Apache Kafka',
      'Знание принципов разработки микросервисов',
      'Понимание принципов работы REST API и опыт их использования для интеграции компонентов системы',
      'Опыт работы с базой данных PostgreSQL',
    ],
    plus: ['Опыт работы с Camunda'],
  },
  {
    id: 1,
    category: 'Backend',
    title: 'Java-разработчик',
    subtitle: 'Удаленно',
    level: 'Middle / Senior',
    desc: 'Для реализации задач в крупном FinTech-проекте в команду требуется опытный Java-разработчик',
    tasks: [
      'Разрабатывать сервисы в сложных интеграционных проектах',
      'Разрабатывать новую функциональность и развивать существующую',
      'Активно участвовать в решении архитектурных вопросов',
      'Активно взаимодействовать с заказчиками и командами разработки, тестирования и сопровождения',
    ],
    expectations: [
      'Опыт коммерческой разработки на Java 11+ или Kotlin',
      'Опыт коммерческой разработки с любым из фреймворков: Spring Boot, Quarkus, Micronaut',
      'Опыт коммерческой разработки с одним из контейнизаторов: Kubernetes, Docer или OpenShift',
      'Опыт коммерческой разработки с одним из брокеров: Kafka, Rabbit MQ или Active MQ',
    ],
    plus: ['Опыт коммерческой разработки с PostgreSQL, MySQL или Oracle'],
  },
  {
    id: 2,
    category: 'Backend',
    title: 'Java-разработчик',
    subtitle: 'Удаленно',
    level: 'Middle+',
    desc: `Мы в поиске специалиста в команду разработки на проект заказчика для крупного российского банка. 
    Цель заказчика- предоставить клиентам удобное мобильное приложение или личный кабинет, избегая необходимости стоять в очередях и ждать обслуживания. 
    
    Ищем специалиста, который будет разрабатывать новые функциональности и улучшать текущие инструменты, чтобы обеспечить удобную и эффективную работу.`,
    tasks: [
      'Разрабатывать сервисы в сложных интеграционных проектах',
      'Разрабатывать новую функциональность и развивать существующую',
      'Активно участвовать в решении архитектурных вопросов',
      'Активно взаимодействовать с заказчиками и командами разработки, тестирования и сопровождения',
    ],
    expectations: [
      'Опыт коммерческой разработки на Java 11+ или Kotlin',
      'Опыт коммерческой разработки с любым из фреймворков: Spring Boot, Quarkus, Micronaut',
      'Опыт коммерческой разработки с одним из контейнизаторов: Kubernetes, Docer или OpenShift',
      'Опыт коммерческой разработки с одним из брокеров: Kafka, Rabbit MQ или Active MQ',
    ],
    plus: ['Опыт коммерческой разработки с PostgreSQL, MySQL или Oracle'],
  },
  {
    id: 3,
    category: 'Analytics',
    title: 'Системный аналитик',
    subtitle: 'Удаленно',
    level: 'Senior',
    desc: 'Наш профиль – это разработка мобильных и веб приложений, а также программного обеспечения для терминалов. Работаем в сферах финтех, ритейл, e-commerce, образование, спорт, путешествия и другие',
    tasks: [
      'Выявление требований',
      'Анализ, систематизация и приоритезация требований',
      'Управление требованиями. Согласование требований с заказчиком и командой',
      'Проектирование API (REST/ SOAP)',
      'Написание простых запросов в СУБД (SQL/PostgreSQL)',
      'Формирование технической и пользовательской документации',
      'Подготовка ТЗ для разработчиков',
      'Аналитическая поддержка процессов разработки',
      'Проведение демонстраций ПО заказчику',
    ],
    expectations: [
      'Знание различных моделей, методологий, подходов к управлению разработкой ПО',
      'Знание различных способов и инструментов выявления требований',
      'Опыт работы с микросервисами',
      'Владение нотациями BPMN и/или UML',
      'Базовые знания Postman, Swagger, Figma',
      'Иметь навыки проектирования и прототипирования требований',
    ],
    plus: [
      'Опыт написания системных требований для интеграционных взаимодействий',
      'Участие в построение архитектуры систем',
      'Опыт построения простых баз данных',
      'Умение быстро погружаться в бизнес кейсы',
      'Желание разбираться в сложных и новых вещах',
    ],
  },
  {
    id: 4,
    category: 'Frontend',
    title: 'React-разработчик',
    subtitle: 'В офис',
    level: 'Middle / Senior',
    desc: 'В команду для работы над внутренними проектами и различными проектами заказчиков ищем опытного React-разработчика',
    tasks: [
      'Верстка интерфейсов различного уровня сложности с обеспечением адаптивности, доступности и кроссбраузерности',
      'Реализация визуального интерактива интерфейса и клиентской логики работы приложения с использованием JavaScript или TypeScript. Разрабатывать приложения с архитектурой SSR или SPA, используя React с прилегающим стеком инструментов',
      'Поддержка существующих клиентских приложений (рефакторинг, оптимизация, новая функциональность, багфикс)',
      'Code-review',
    ],
    expectations: [
      'Знание HTML, CSS, JavaScript или TypeScript, React',
      'Опыт адаптивной вёрстки',
      'Опыт работы с CSS препроцессорами (SCSS/SASS) или styled-components',
      'Понимание практик UX/UI',
      'Понимание особенностей SSR/SPA-приложений',
      'Опыт работы со стейт-менеджерами',
      'Опыт разработки в команде',
    ],
    plus: [
      'Опыт работы с Figma, Git, WebStorm',
      'Опыт работы с Next.js',
      'Опыт настройки сборщиком (Vite/Webpack)',
      'Опыт работы с Docker',
      'Технический английский',
    ],
  },
]

export interface ICategory {
  title: string
  count: number
}

export const categories: ICategory[] = [
  {
    title: 'Web',
    count: 7,
  },
  {
    title: 'Analytics',
    count: 8,
  },
  {
    title: 'Design',
    count: 6,
  },
  {
    title: 'Hardware',
    count: 1,
  },
  {
    title: 'Mobile',
    count: 7,
  },
  {
    title: 'Testing',
    count: 8,
  },
]
