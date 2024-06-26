import {
  IAboutUsCard,
  IFAQ,
  IFeedback,
  ILocaleList,
  IProject,
  IService,
  IVacancy,
} from '@/shared/types/models'

export const serviceList: ILocaleList<IService> = {
  ru: [
    {
      card: {
        title: 'MVP от 2 месяцев',
        subtitle:
          'Из ваших требований выделяем только самый основной функционал для оценки гипотез',
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
  ],
  en: [
    {
      card: {
        title: 'MVP in 2 months',
        subtitle:
          'We select the most basic and necessary functionality from your requirements to evaluate hypotheses',
        category: 'MVP',
        description:
          'This approach helps our customers to see their product from different angles at an earlier stage, get feedback from their potential customers, assess the competitive environment and form functional requirements more accurately for future product development',
        videoUrl: '/videos/MVP.mp4',
      },
      isOrange: true,
    },
    {
      card: {
        title: 'MOBILE APPLICATIONS',
        subtitle: '',
        category: 'Mobile',
        description:
          'Taking into account your requirements, we develop native and cross-platform applications with a unique design and functionality that fully meet your requirements.',
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
        title: 'WEB APPLICATIONS AND SITES',
        subtitle: '',
        category: 'Web',
        description:
          "We implement wide functionality for your organization's website with a comprehensive solution. Based on global trends and our own experience, we create convenient and functional interfaces",
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
        title: 'EMBEDDED SOFTWARE',
        subtitle: '',
        category: 'Hardware',
        description:
          'Development of software for embedded systems of various functionality, from the implementation of individual functions to the complete automation of your business. Transition to the implementation of services in a modern format.',
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
        description: 'We offer a dedicated team or individuals in the following areas:',
        videoUrl: '/videos/outstaff.mp4',
        stack: ['Analytics', 'Design', 'Mobile', 'Web', 'Testing'],
      },
    },
  ],
}

export const projectList: ILocaleList<IProject> = {
  ru: [
    {
      id: 0,
      title: 'Музыкальный интернет-магазин MusicStore',
      img: '/img/projects/project5.png',
      url: 'Music-Store',
      subtitle:
        'Музыкальный магазин - это веб-приложение, разработанное с использованием React, которое предоставляет пользователям возможность просматривать и покупать музыкальные альбомы. Проект был создан как образовательное и практическое задание для демонстрации навыков разработки интерфейса с использованием React и связанных с ним технологий.',
      github: 'https://github.com/Vlaek/MusicStore-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Router',
        'React Icons',
        'React Yandex Maps',
        'React Bootstrap',
        'React Transition',
        'React Helmet',
        'React Toastify',
        'React CountUp',
        'Axios',
        'Formik',
        'Yup',
        'Redux',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/w2gfxl8v0eHvPQdLnJ/giphy.gif',
        'https://media.giphy.com/media/NWhIZv4AoM0Yc2vF8C/giphy.gif',
        'https://media.giphy.com/media/owKgnDfAPfBTY9JT9u/giphy.gif',
        'https://media.giphy.com/media/86eXlfopmCnwmT5nPG/giphy.gif',
        'https://media.giphy.com/media/nuArXT2eLdUoqlE69D/giphy.gif',
        'https://media.giphy.com/media/2hIS8g1G9wrjYOy59J/giphy.gif',
        'https://media.giphy.com/media/yx3knnGg22b3rL3F0N/giphy.gif',
        'https://media.giphy.com/media/txPVnsOeSCyO77I1wo/giphy.gif',
        'https://media.giphy.com/media/Oad1IBfYZrObtXspOj/giphy.gif',
        'https://media.giphy.com/media/Nv6SLAqH2vA95kSIIZ/giphy.gif',
      ],
    },
    {
      id: 1,
      title: 'Сервис для поиска и прослушивания музыки',
      img: '/img/projects/project7.png',
      url: 'Soundboard',
      subtitle:
        'Soundboard - это веб-приложение, разработанное с использованием React, которое позволяет пользователям прослушивать треки. Проект был создан как образовательное и практическое задание для демонстрации навыков разработки интерфейса с использованием React и связанных с ним технологий.',
      github: 'https://github.com/Vlaek/Soundboard-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Select',
        'React Transition Group',
        'React Loading Skeleton',
        'Redux',
        'Axios',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/to1rnY8vRmKdPreqiO/giphy.gif',
        'https://media.giphy.com/media/SHdYpqWAZa0kSAZxqo/giphy.gif',
      ],
    },
    {
      id: 2,
      title: 'CookBookHub - База кулинарных знаний',
      img: '/img/projects/project11.png',
      url: 'CookBookHub',
      subtitle:
        'CookBook Hub - это приложение на основе React, которое позволяет пользователям просматривать, создавать, редактировать и удалять рецепты. Пользователи также могут добавлять рецепты в свой список избранных. Все эти действия выполняются с помощью RTK Query, а сервер работает на базе json-сервера.',
      github: 'https://github.com/Vlaek/CookBookHub',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Router Dom',
        'React Icons',
        'SCSS Modules',
        'Redux',
        'RTK Query',
        'json-server',
      ],
      stack: ['Web'],
      screens: [
        'https://media.giphy.com/media/0oABVbP3fJ4j3RNOaU/giphy.gif',
        'https://media.giphy.com/media/eEfRL0tQrtDk9pmWOO/giphy.gif',
        'https://media.giphy.com/media/qQGLkoSgm2ClLwh2XA/giphy.gif',
        'https://media.giphy.com/media/WPnpjJJOWxP5srkyjp/giphy.gif',
      ],
    },
    {
      id: 3,
      title: 'Сервис заметок - GKeep-Lite',
      img: '/img/projects/project6.png',
      url: 'GKeep-Lite',
      subtitle:
        'GKeep-Lite-React - это простое веб-приложение, разработанное на базе React, которое позволяет создавать заметки, редактировать, удалять, перемещать и изменять их цвет. Пользователи могут легко упорядочивать свои заметки, выбирая цвет, соответствующий их настроению или содержанию заметки. Кроме того, пользователи могут воспользоваться функцией поиска, чтобы быстро найти нужную заметку. GKeep-Lite-React - это простое и удобное приложение для тех, кто хочет быстро создавать заметки и упорядочивать свои мысли.',
      github: 'https://github.com/Vlaek/GKeep-Lite-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Masonry',
        'React Responsive',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNraHl4cWwxMnkyMGVqajg1cGwzNjg2Z20yN2w0OTVtMGM0OTF3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RxjxcMngnaqbVZcp6h/giphy.gif',
      ],
    },
    {
      id: 4,
      title: 'Worms3D - 3D модели',
      img: '/img/projects/project10.png',
      url: 'Worms3D',
      subtitle:
        'Проект pet - это галерея 3D-моделей, созданная с помощью React, где пользователи могут взаимодействовать с моделями, поворачивая их и меняя фон. Проект был создан с целью отработки работы с библиотекой Three.js. Пользователи могут изучать различные 3D-модели и манипулировать ими в виртуальной среде, обеспечивая интерактивный и привлекательный опыт. Этот проект служит возможностью обучения для реализации Three.js в приложении React и демонстрации возможностей 3D-моделирования.',
      github: 'https://github.com/Vlaek/Worms3D-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'ThreeJS',
        'React Three',
        'React Icons',
      ],
      stack: ['Web', 'Analytics', 'Testing'],
      screens: [
        'https://media.giphy.com/media/yoeMvcpwA3JZdCd8A4/giphy.gif',
        'https://media.giphy.com/media/xHFraukXKtpjAsvVt4/giphy.gif',
        'https://media.giphy.com/media/oi0DIQJXCiQZczZliJ/giphy.gif',
      ],
    },
    {
      id: 5,
      title: 'SurveyForm - Надежный сервис для анкетирования',
      img: '/img/projects/project8.png',
      url: 'SurveyForm',
      subtitle:
        'SurveyForm - это простой проект для домашних пользователей, основанный на задании freeCodeCamp. Проект представляет собой форму опроса, написанную в форме React Hook.',
      github: 'https://github.com/Vlaek/SurveyForm-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Hook Form',
        'React Select',
        'React Icons',
        'React Transition Group',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTkyc3lsZ3J0N3AyMGp1MGF5NXoxNzhpOTJpNjh0bW43c3dwYmFudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i1Fgd3scSajMIXdz1z/giphy.gif',
      ],
    },
    {
      id: 6,
      title: 'OnlineStore - Интернет магазин',
      subtitle:
        'Product Showcase - это веб-приложение, представляющее собой демонстрацию продуктов. Оно состоит из двух страниц: страницы со списком продуктов и страницы с подробной информацией о продукте.',
      img: '/img/projects/project9.png',
      url: 'OnlineStore',
      github: 'https://github.com/Vlaek/ProductShowcase-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Loading Skeleton',
        'Axios',
        'i18next',
      ],
      stack: ['Analytics', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Nyb3ducjVncjJ3bmw2ZnhlYzJza3hjZDh6aHdodXdnaGhlNHM0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IuUmK1PYQDBA7FMqqa/giphy.gif',
      ],
    },
    {
      id: 7,
      title: 'Ant Design приложение',
      subtitle:
        'Целью этого проекта было попрактиковаться в использовании готовых компонентов от Ant Design. Было создано несколько страниц, включая список дел с возможностью создания описаний задач и сроков их выполнения, галерею изображений, страницу "О нас" с разбивкой по страницам, страницу команды и страницу, на которой представлены другие проекты.',
      img: '/img/projects/project12.png',
      url: 'AntDesign',
      github: 'https://github.com/Vlaek/AntDesign',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'Ant Design',
        'React Router',
        'DayJS',
      ],
      stack: ['Web', 'Analytics', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/D0FyC5tYX9lJqOqrXn/giphy.gif',
        'https://media.giphy.com/media/dbbQDMOuEH1Ss9vDs7/giphy.gif',
        'https://media.giphy.com/media/xKYbhIAtErp9KsLDXx/giphy.gif',
        'https://media.giphy.com/media/pRHeuN7Ph6h78s9Q9r/giphy.gif',
      ],
    },
    {
      id: 8,
      title: 'АнгуляйWEB',
      subtitle: 'Это мой первый тестовый проект на Angular.',
      img: '/img/projects/project13.png',
      url: 'AngularTestProject',
      github: 'https://github.com/Vlaek/AngularTestProject',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
      stack: ['Mobile'],
    },
    {
      id: 9,
      title: 'Список Дел | Flask',
      subtitle:
        'ToDo - это пет-проект, разработанный с использованием Flask, Python, JS, HTML и CSS, и представляющий собой простую, но эффективную систему управления задачами. Он предоставляет пользователю удобный интерфейс для создания, просмотра и редактирования списка задач.',
      img: '/img/projects/project2.png',
      url: 'todo-flask',
      github: 'https://github.com/Vlaek/ToDo-Flask',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy'],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://i.imgur.com/HtuciwT.jpg',
        'https://i.imgur.com/xqAsh8w.jpg',
        'https://i.imgur.com/e8LC090.jpg',
        'https://i.imgur.com/y6iqTXM.jpg',
        'https://i.imgur.com/YXytaJj.gif',
      ],
    },
    {
      id: 10,
      title: 'СУБД для проектной организации',
      subtitle:
        'СУБД для проектной организации - это графический интерфейс, основанный на платформе Flask для базы данных проектных организаций. В качестве базы данных используется MySQL. Для реализации запросов в базе данных был выбран модуль PyMySQL.',
      url: 'db-flask',
      technologies: ['HTML, CSS, JavaScript', 'Python', 'Flask', 'PyMySQL'],
      img: '/img/projects/project3.png',
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://i.imgur.com/KvaWXwi.jpg',
        'https://i.imgur.com/olaJWIP.jpg',
        'https://i.imgur.com/WJG8AQz.jpg',
        'https://i.imgur.com/NkuKS4I.jpg',
        'https://i.imgur.com/1qNOA6o.jpg',
        'https://i.imgur.com/0EmwMw8.jpg',
      ],
    },
    {
      id: 11,
      title: 'Donatik - скрипт для SAMP',
      subtitle:
        'Donatik - это скрипт, предназначенный для сбора пожертвований от других игроков, аналогичный платформе Donation Alerts, но специально адаптированный для SAMP. Он открывает новый путь к финансовому росту в игре и позволяет создавать топовые пожертвования за разные периоды, помогая отслеживать вклад игроков и достигнутые цели.',
      url: 'Donatik',
      technologies: ['Lua', 'imgui'],
      img: '/img/projects/project4.png',
      stack: ['Hardware', 'Web'],
      github: 'https://vlaek.github.io/Donatik/',
      screens: [
        'https://i.imgur.com/GlnaIIo.png',
        'https://i.imgur.com/Edz9mZO.png',
        'https://i.imgur.com/1jUqG10.png',
        'https://i.imgur.com/YSt8m55.png',
        'https://i.imgur.com/I96z2X8.png',
      ],
    },
  ],
  en: [
    {
      id: 0,
      title: 'MusicStore Online Music Store',
      img: '/img/projects/project5.png',
      url: 'Music-Store',
      subtitle:
        'The Music Store is a web application developed using React that provides users with the ability to view and buy music albums. The project was created as an educational and practical task to demonstrate frontend development skills using React and related technologies.',
      github: 'https://github.com/Vlaek/MusicStore-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Router',
        'React Icons',
        'React Yandex Maps',
        'React Bootstrap',
        'React Transition',
        'React Helmet',
        'React Toastify',
        'React CountUp',
        'Axios',
        'Formik',
        'Yup',
        'Redux',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/w2gfxl8v0eHvPQdLnJ/giphy.gif',
        'https://media.giphy.com/media/NWhIZv4AoM0Yc2vF8C/giphy.gif',
        'https://media.giphy.com/media/owKgnDfAPfBTY9JT9u/giphy.gif',
        'https://media.giphy.com/media/86eXlfopmCnwmT5nPG/giphy.gif',
        'https://media.giphy.com/media/nuArXT2eLdUoqlE69D/giphy.gif',
        'https://media.giphy.com/media/2hIS8g1G9wrjYOy59J/giphy.gif',
        'https://media.giphy.com/media/yx3knnGg22b3rL3F0N/giphy.gif',
        'https://media.giphy.com/media/txPVnsOeSCyO77I1wo/giphy.gif',
        'https://media.giphy.com/media/Oad1IBfYZrObtXspOj/giphy.gif',
        'https://media.giphy.com/media/Nv6SLAqH2vA95kSIIZ/giphy.gif',
      ],
    },
    {
      id: 1,
      title: 'Service for searching and listening to music',
      img: '/img/projects/project7.png',
      url: 'Soundboard',
      subtitle:
        'Soundboard is a web application developed using React that allows users to listen to tracks. The project was created as an educational and practical task to demonstrate frontend development skills using React and related technologies.',
      github: 'https://github.com/Vlaek/Soundboard-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Select',
        'React Transition Group',
        'React Loading Skeleton',
        'Redux',
        'Axios',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/to1rnY8vRmKdPreqiO/giphy.gif',
        'https://media.giphy.com/media/SHdYpqWAZa0kSAZxqo/giphy.gif',
      ],
    },
    {
      id: 2,
      title: 'CookBookHub - Culinary knowledge base',
      img: '/img/projects/project11.png',
      url: 'CookBookHub',
      subtitle:
        'CookBookHub is a React application that allows users to browse, create, edit, and delete recipes. Users can also add recipes to their favorites list. All of these actions are implemented using RTK Query, and the server is powered by json-server.',
      github: 'https://github.com/Vlaek/CookBookHub',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Router Dom',
        'React Icons',
        'SCSS Modules',
        'Redux',
        'RTK Query',
        'json-server',
      ],
      stack: ['Web'],
      screens: [
        'https://media.giphy.com/media/0oABVbP3fJ4j3RNOaU/giphy.gif',
        'https://media.giphy.com/media/eEfRL0tQrtDk9pmWOO/giphy.gif',
        'https://media.giphy.com/media/qQGLkoSgm2ClLwh2XA/giphy.gif',
        'https://media.giphy.com/media/WPnpjJJOWxP5srkyjp/giphy.gif',
      ],
    },
    {
      id: 3,
      title: 'Note Service - GKeep-Lite',
      img: '/img/projects/project6.png',
      url: 'GKeep-Lite',
      subtitle:
        'GKeep-Lite-React is a simple web application developed on React that allows you to create notes, edit, delete, move and change their color. Users can easily organize their notes by choosing a color that matches their mood or the content of the note. In addition, users can use the search function to quickly find the desired note. GKeep-Lite-React is a simple and user-friendly application for those who want to quickly create notes and organize their thoughts.',
      github: 'https://github.com/Vlaek/GKeep-Lite-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Masonry',
        'React Responsive',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTNraHl4cWwxMnkyMGVqajg1cGwzNjg2Z20yN2w0OTVtMGM0OTF3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RxjxcMngnaqbVZcp6h/giphy.gif',
      ],
    },
    {
      id: 4,
      title: 'Worms3D - 3D models',
      img: '/img/projects/project10.png',
      url: 'Worms3D',
      subtitle:
        'The pet project is a 3D model gallery built with React, where users can interact with the models by rotating them and changing the background. The project was created for the purpose of practicing the Three.js library. Users can explore different 3D models and manipulate them in a virtual environment, providing an interactive and engaging experience. This project serves as a learning opportunity for implementing Three.js in a React application and showcasing 3D modeling capabilities.',
      github: 'https://github.com/Vlaek/Worms3D-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'ThreeJS',
        'React Three',
        'React Icons',
      ],
      stack: ['Web', 'Analytics', 'Testing'],
      screens: [
        'https://media.giphy.com/media/yoeMvcpwA3JZdCd8A4/giphy.gif',
        'https://media.giphy.com/media/xHFraukXKtpjAsvVt4/giphy.gif',
        'https://media.giphy.com/media/oi0DIQJXCiQZczZliJ/giphy.gif',
      ],
    },
    {
      id: 5,
      title: 'SurveyForm is a reliable survey service',
      img: '/img/projects/project8.png',
      url: 'SurveyForm',
      subtitle:
        'SurveyForm is a simple pet project based on a freeCodeCamp assignment. The project is a survey form written in React Hook Form.',
      github: 'https://github.com/Vlaek/SurveyForm-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Hook Form',
        'React Select',
        'React Icons',
        'React Transition Group',
      ],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTkyc3lsZ3J0N3AyMGp1MGF5NXoxNzhpOTJpNjh0bW43c3dwYmFudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i1Fgd3scSajMIXdz1z/giphy.gif',
      ],
    },
    {
      id: 6,
      title: 'OnlineStore',
      subtitle:
        'Product Showcase is a web application that represents a showcase of products. It consists of two pages: a page with a list of products and a page with detailed information about the product.',
      img: '/img/projects/project9.png',
      url: 'OnlineStore',
      github: 'https://github.com/Vlaek/ProductShowcase-React',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'React Icons',
        'React Loading Skeleton',
        'Axios',
        'i18next',
      ],
      stack: ['Analytics', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Nyb3ducjVncjJ3bmw2ZnhlYzJza3hjZDh6aHdodXdnaGhlNHM0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IuUmK1PYQDBA7FMqqa/giphy.gif',
      ],
    },
    {
      id: 7,
      title: 'Ant Design App',
      subtitle:
        'The goal of this project was to practice using ready-made components from Ant Design. Several pages were created, including a ToDo list with the ability to create task descriptions and due dates, an image gallery, an about us page with pagination, a team page, and a page showcasing other projects.',
      img: '/img/projects/project12.png',
      url: 'AntDesign',
      github: 'https://github.com/Vlaek/AntDesign',
      technologies: [
        'HTML',
        'CSS',
        'SASS',
        'JavaScript',
        'React',
        'TypeScript',
        'Ant Design',
        'React Router',
        'DayJS',
      ],
      stack: ['Web', 'Analytics', 'Mobile', 'Testing'],
      screens: [
        'https://media.giphy.com/media/D0FyC5tYX9lJqOqrXn/giphy.gif',
        'https://media.giphy.com/media/dbbQDMOuEH1Ss9vDs7/giphy.gif',
        'https://media.giphy.com/media/xKYbhIAtErp9KsLDXx/giphy.gif',
        'https://media.giphy.com/media/pRHeuN7Ph6h78s9Q9r/giphy.gif',
      ],
    },
    {
      id: 8,
      title: 'AngularWeb',
      subtitle: 'This is my first Angular test project.',
      img: '/img/projects/project13.png',
      url: 'AngularTestProject',
      github: 'https://github.com/Vlaek/AngularTestProject',
      technologies: ['HTML', 'SCSS', 'TypeScript', 'Angular'],
      stack: ['Mobile'],
    },
    {
      id: 9,
      title: 'ToDo | Flask',
      subtitle:
        'ToDo is a pet project developed using Flask, Python, JS, HTML and CSS, and is a simple but effective task management system. It provides the user with a user-friendly interface for creating, viewing and editing a task list.',
      img: '/img/projects/project2.png',
      url: 'todo-flask',
      github: 'https://github.com/Vlaek/ToDo-Flask',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'SQLAlchemy'],
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://i.imgur.com/HtuciwT.jpg',
        'https://i.imgur.com/xqAsh8w.jpg',
        'https://i.imgur.com/e8LC090.jpg',
        'https://i.imgur.com/y6iqTXM.jpg',
        'https://i.imgur.com/YXytaJj.gif',
      ],
    },
    {
      id: 10,
      title: 'DBMS for the project organization',
      subtitle:
        'DB is a graphical interface based on the Flask framework for the Project Organizations database. MySQL is used as a database. The PyMySQL module was selected to implement queries in the database.',
      url: 'db-flask',
      technologies: ['HTML, CSS, JavaScript', 'Python', 'Flask', 'PyMySQL'],
      img: '/img/projects/project3.png',
      stack: ['Web', 'Analytics', 'Design', 'Mobile', 'Testing'],
      screens: [
        'https://i.imgur.com/KvaWXwi.jpg',
        'https://i.imgur.com/olaJWIP.jpg',
        'https://i.imgur.com/WJG8AQz.jpg',
        'https://i.imgur.com/NkuKS4I.jpg',
        'https://i.imgur.com/1qNOA6o.jpg',
        'https://i.imgur.com/0EmwMw8.jpg',
      ],
    },
    {
      id: 11,
      title: 'Donatik - script for SAMP',
      subtitle:
        'Donatik is a script designed to collect donations from other players, similar to the Donation Alerts platform, but specially adapted for SAMP. It opens a new path to financial growth in the game and allows you to create a top donation for different periods, helping to track player contributions and goals achieved.',
      url: 'Donatik',
      technologies: ['Lua', 'imgui'],
      img: '/img/projects/project4.png',
      stack: ['Hardware', 'Web'],
      github: 'https://vlaek.github.io/Donatik/',
      screens: [
        'https://i.imgur.com/GlnaIIo.png',
        'https://i.imgur.com/Edz9mZO.png',
        'https://i.imgur.com/1jUqG10.png',
        'https://i.imgur.com/YSt8m55.png',
        'https://i.imgur.com/I96z2X8.png',
      ],
    },
  ],
}

export const aboutUsCards: ILocaleList<IAboutUsCard> = {
  ru: [
    {
      title: 'Забота о здоровье',
      subtitle: 'Компенсация за занятия спортом и дорогостоящего лечения',
    },
    {
      title: 'Развитие и обучение',
      subtitle:
        'Мы обеспечиваем участие в конференциях, частично покрываем расходы на курсы повышения квалификации',
    },
    {
      title: 'Периодическая аттестация',
      subtitle: 'Индивидуальный план развития, пересмотр зарплаты и переход на новую должность',
    },
    {
      title: 'Библиотека',
      subtitle:
        'У нас есть корпоративная библиотека, где ты можешь найти что-то интересное для себя. Мы регулярно пополняем её, учитывая потребности сотрудников',
    },
    {
      title: 'Корпоративная жизнь',
      subtitle: 'Вечера с настольными играми, дни рождения и корпоративы',
    },
    {
      title: 'Адаптация',
      subtitle:
        'С самого первого дня в нашей компании мы заботимся о твоей адаптации, чтобы ты легко влился в коллектив и привык к динамике нашей работы',
    },
  ],
  en: [
    {
      title: 'Health Care',
      subtitle: 'Compensation for sports and expensive treatment',
    },
    {
      title: 'Development and training',
      subtitle:
        'We provide participation in conferences, partially cover the costs of advanced training courses',
    },
    {
      title: 'Periodic certification',
      subtitle: 'Individual development plan, salary review and transition to a new position',
    },
    {
      title: 'Library',
      subtitle:
        'We have a corporate library where you can find something interesting for yourself. We regularly replenish it, taking into account the needs of employees.',
    },
    {
      title: 'Corporate life',
      subtitle: 'Board game nights, birthdays and corporate events',
    },
    {
      title: 'Adaptation',
      subtitle:
        'From the very first day in our company, we take care of your adaptation so that you easily join the team and get used to the dynamics of our work',
    },
  ],
}

export const workCards: ILocaleList<IAboutUsCard> = {
  ru: [
    {
      title: 'Оставь заявку',
      subtitle:
        'Оставь заявку на сайте или напиши на почту vlad.eichwald@gmail.com, мы обязательно просмотрим твое резюме и дадим ответ',
    },
    {
      title: 'Выполни тестовое задание',
      subtitle:
        'Наш HR менеджер свяжется с тобой, выяснит все подробности и отправит тебе тестовое задание на выполнение',
    },
    {
      title: 'Пройди собеседование',
      subtitle:
        'После успешно выполненного тестового задания мы пригласим тебя на собеседование, где покажем тебе офис',
    },
  ],
  en: [
    {
      title: 'Leave a request',
      subtitle:
        'Leave a request on the website or write to vlad.eichwald@gmail.com, we will definitely review your resume and give you an answer',
    },
    {
      title: 'Complete the test task',
      subtitle:
        'Our HR manager will contact you, find out all the details and send you a test task to complete',
    },
    {
      title: 'Pass the interview',
      subtitle:
        'After successfully completing the test task, we will invite you for an interview, where we will show you the office and introduce you to our team',
    },
  ],
}

export const vacancies: ILocaleList<IVacancy> = {
  ru: [
    {
      id: 0,
      category: 'Backend',
      title: 'C#/.Net разработчик',
      subtitle: 'Удаленно',
      level: 'Middle / Senior',
      desc: 'Мы ищем опытного C#-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного Java-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного Java-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного системного аналитика для участия в работе над внутренними проектами и проектами для клиентов.',
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
      desc: 'Мы ищем опытного специалиста по React для участия в работе над внутренними проектами и проектами для клиентов',
      tasks: [
        'Верстка интерфейсов различного уровня сложности с обеспечением адаптивности, доступности и кроссбраузерности',
        'Реализация визуального интерактива интерфейса и клиентской логики работы приложения с использованием JavaScript или TypeScript. Разрабатывать приложения с архитектурой SSR или SPA, используя React с прилегающим стеком инструментов',
        'Поддержка существующих клиентских приложений (рефакторинг, оптимизация, новая функциональность, багфикс)',
        'Code-review',
      ],
      expectations: [
        'Знание HTML, CSS, TypeScript, React',
        'Опыт адаптивной вёрстки',
        'Опыт работы с CSS препроцессорами (SCSS/SASS, Less)',
        'Понимание практик UX/UI',
        'Понимание особенностей SSR/SPA-приложений',
        'Опыт работы со стейт-менеджерами: Redux, Zustand, MobX',
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
  ],
  en: [
    {
      id: 0,
      category: 'Backend',
      title: 'C#/.Net разработчик',
      subtitle: 'Удаленно',
      level: 'Middle / Senior',
      desc: 'Мы ищем опытного C#-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного Java-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного Java-разработчика для участия в работе над внутренними проектами и проектами для клиентов',
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
      desc: 'Мы ищем опытного системного аналитика для участия в работе над внутренними проектами и проектами для клиентов.',
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
      desc: 'Мы ищем опытного специалиста по React для участия в работе над внутренними проектами и проектами для клиентов',
      tasks: [
        'Верстка интерфейсов различного уровня сложности с обеспечением адаптивности, доступности и кроссбраузерности',
        'Реализация визуального интерактива интерфейса и клиентской логики работы приложения с использованием JavaScript или TypeScript. Разрабатывать приложения с архитектурой SSR или SPA, используя React с прилегающим стеком инструментов',
        'Поддержка существующих клиентских приложений (рефакторинг, оптимизация, новая функциональность, багфикс)',
        'Code-review',
      ],
      expectations: [
        'Знание HTML, CSS, TypeScript, React',
        'Опыт адаптивной вёрстки',
        'Опыт работы с CSS препроцессорами (SCSS/SASS, Less)',
        'Понимание практик UX/UI',
        'Понимание особенностей SSR/SPA-приложений',
        'Опыт работы со стейт-менеджерами: Redux, Zustand, MobX',
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
  ],
}

export const categories: string[] = ['Web', 'Analytics', 'Design', 'Hardware', 'Mobile', 'Testing']

export const partnerList = [
  'user1.png',
  'user2.png',
  'user3.png',
  'user4.png',
  'user5.png',
  'user6.png',
]

export const feedbackList: ILocaleList<IFeedback> = {
  ru: [
    {
      company: 'BestCorp',
      comment: 'Отличный сервис, очень профессионально!',
      name: 'Джон Доу',
      position: 'Генеральный директор',
    },
    {
      company: 'TopTech',
      comment: 'Отличный опыт, настоятельно рекомендую!',
      name: 'Джейн Смит',
      position: 'Старший разработчик',
    },
    {
      company: 'Global Solutions',
      comment: 'Отличная работа, превзошла наши ожидания!',
      name: 'Алекс Джонсон',
      position: 'Менеджер проекта',
    },
    {
      company: 'InnovateX',
      comment: 'Исключительное качество и внимание к деталям!',
      name: 'Эмили Браун',
      position: 'Директор по маркетингу',
    },
    {
      company: 'FutureBuilders',
      comment: 'Впечатляющие результаты, с которыми приятно работать!',
      name: 'Майкл Уилсон',
      position: 'Операционный менеджер',
    },
    {
      company: 'EcoFriendly',
      comment: 'Профессиональный и надежный сервис, спасибо вам!',
      name: 'София Ли',
      position: 'Специалист по охране окружающей среды',
    },
  ],
  en: [
    {
      company: 'BestCorp',
      comment: 'Great service, very professional!',
      name: 'John Doe',
      position: 'CEO',
    },
    {
      company: 'TopTech',
      comment: 'Excellent experience, highly recommended!',
      name: 'Jane Smith',
      position: 'Senior Developer',
    },
    {
      company: 'Global Solutions',
      comment: 'Outstanding work, exceeded our expectations!',
      name: 'Alex Johnson',
      position: 'Project Manager',
    },
    {
      company: 'InnovateX',
      comment: 'Exceptional quality and attention to detail!',
      name: 'Emily Brown',
      position: 'Marketing Director',
    },
    {
      company: 'FutureBuilders',
      comment: 'Impressive results, a pleasure to work with!',
      name: 'Michael Wilson',
      position: 'Operations Manager',
    },
    {
      company: 'EcoFriendly',
      comment: 'Professional and reliable service, thank you!',
      name: 'Sophia Lee',
      position: 'Environmental Specialist',
    },
  ],
}

export const faqList: ILocaleList<IFAQ> = {
  ru: [
    {
      q: 'Мне нужно приложение для iOS и Android. С какой платформы лучше начать?',
      a: `Для начала, вам необходимо определить бюджет, который вы закладываете на разработку приложения, а также функционал.

      Далее, в зависимости от бюджета и функционала можно выбирать между нативной и кроссплатформенной разработкой мобильных приложений.
      
      Если сравнивать кроссплатформенную и нативную разработку, то можно сказать о том, что оба подхода обеспечивают высокую масштабируемость и качественный пользовательский интерфейс.
      
      Однако, реализация вашего приложения с помощью кроссплатформенных технологий происходит быстрее, так как кодовая база реализуется сразу для двух платформ. Такой подход подойдет, если вам необходимо как можно быстрее запустить MVP-версию приложения при учёте невысоких затрат на разработку.
      
      В отличие от кроссплатформенных инструментов, разработка нативных приложений зависит от приложений Android или iOS. Нативные приложения написаны на языках, поддерживаемых поставщиком ОС устройства.
      
      Как правило, в нативных приложениях пользователи могут в полной мере использовать сложные функции, которые задействуют аппаратную часть устройства.`,
    },
    {
      q: 'Вы даёте гарантию на мобильное приложение?',
      a: 'Да, гарантия на приложение — от 1 до 3 месяцев, в зависимости от нашей с вами договоренности. В течение этого времени бесплатно устраним ошибки, которые вы найдёте. Одно условие — исходный код программы должен быть без изменений.',
    },
    {
      q: 'У меня есть недоработанное приложение. Вы можете его доработать?',
      a: `Мы доработаем ваше приложение, при условии, что стек технологий, на котором реализовано приложение, совпадает с нашим. Для этого понадобятся первичные требования, макеты дизайна и исходный код.

      Мы изучим документацию, проведём ревью макетов и кода приложения. Мы поймём состояние проекта, дадим заключение и оценку трудозатрат на доработку приложения.`,
    },
    {
      q: 'Сколько стоит разработка приложения?',
      a: `Существует две наиболее распространенные модели финансового взаимодействия между заказчиком и компанией - разработчиком - это Fixed Price и Time&Materials.

      Fixed Price - цена на проект фиксирована и чаще всего используется в проектах с четко зафикcированным функционалом.
      
      Обычно, в проекты, которые реализуются по схеме Fixed Price, после того, как договор уже был подписан, очень сложно внести изменения или дополнения.
      
      Time and Materials (T&M) - такой тип договорных отношений, предполагает, что работа будет оплачена по факту её выполнения, при этом команде разработке предварительно необходимо проанализировать проект на предмет того, какие задачи необходимо реализовать, а также дать предварительную оценку.
      
      Схема T&M позволяет заказчику вносить изменения в требования, а команде разработки безболезненно их реализовывать.`,
    },
    {
      q: 'Сколько времени потребуется на разработку мобильного приложения/web-приложения?',
      a: `Как и стоимость реализации, сроки выполнения сильно зависят от ваших требований и пожеланий, после формирования первичных требований мы согласовываем с вами сроки и даты реализации проекта.

      Как правило, реализация проекта может занять от 2 месяцев до 1 года, в зависимости от его сложности. Некоторые проекты, в которых веб-приложения или мобильные приложения должны быть интегрированы со сторонними системами, такими как платежные шлюзы, могут занять больше времени на реализацию.`,
    },
    {
      q: 'Как я могу контролировать процесс разработки продукта?',
      a: `На каждый проект назначается менеджер, который регулярно общается с вами, держит вас в курсе и отвечает на ваши вопросы.

      Менеджер связывается с вами каждую неделю и высылает отчет о проведенной за неделю работе.
      
      Также раз в 3-4 недели (по договоренности) мы предоставляем вам актуальную версию вашего проекта: файл для сборки на мобильных устройствах или ссылку на стенд для web-приложений.`,
    },
  ],
  en: [
    {
      q: 'I need an app for iOS and Android. Which platform should I start with?',
      a: `First, you need to determine the budget you have for app development, as well as the functionality.

      Then, depending on the budget and functionality, you can choose between native and cross-platform mobile app development.
      
      Comparing cross-platform and native development, both approaches provide high scalability and a quality user interface.
      
      However, implementing your application using cross-platform technologies happens faster since the code base is implemented for both platforms at once. This approach is suitable if you need to launch the MVP version of the application as quickly as possible while keeping development costs low.
      
      Unlike cross-platform tools, native app development depends on Android or iOS applications. Native apps are written in languages supported by the device OS provider.
      
      Generally, in native applications, users can fully utilize complex functions that engage the hardware of the device.`,
    },
    {
      q: 'Do you provide a warranty for the mobile app?',
      a: 'Yes, the warranty for the app is from 1 to 3 months, depending on our agreement with you. During this time, we will fix any errors you find for free. The only condition is that the source code must remain unchanged.',
    },
    {
      q: 'I have an unfinished app. Can you finish it?',
      a: `We will complete your application, provided that the technology stack used to implement the application matches ours. For this, initial requirements, design mockups, and source code will be needed.

      We will review the documentation, conduct a review of the mockups and app code. We will understand the state of the project, give a conclusion, and estimate the effort required to complete the application.`,
    },
    {
      q: 'How much does it cost to develop an application?',
      a: `There are two most common financial interaction models between the customer and the developer company - Fixed Price and Time&Materials.

      Fixed Price - the price for the project is fixed and is most often used in projects with clearly defined functionality.
      
      Usually, in projects implemented under the Fixed Price scheme, it is very difficult to make changes or additions after the contract has been signed.
      
      Time and Materials (T&M) - this type of contractual relationship implies that the work will be paid upon completion, while the development team needs to analyze the project in advance to determine which tasks need to be implemented and provide a preliminary estimate.
      
      The T&M scheme allows the customer to make changes to the requirements, and the development team to implement them seamlessly.`,
    },
    {
      q: 'How long does it take to develop a mobile/web application?',
      a: `As with the cost of implementation, the timeline depends heavily on your requirements and preferences. After forming the initial requirements, we agree with you on the timing and dates for project implementation.

      Typically, project implementation can take from 2 months to 1 year, depending on its complexity. Some projects, where web or mobile applications need to be integrated with third-party systems, such as payment gateways, may take longer to implement.`,
    },
    {
      q: 'How can I control the product development process?',
      a: `A manager is assigned to each project, who regularly communicates with you, keeps you informed, and answers your questions.

      The manager contacts you weekly and sends a report on the work done over the week.
      
      Also, every 3-4 weeks (by agreement), we provide you with the current version of your project: a build file for mobile devices or a link to the staging site for web applications.`,
    },
  ],
}
