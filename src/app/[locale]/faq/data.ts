interface IFAQList {
  [key: string]: {
    q: string
    a: string
  }[]
}

export const list: IFAQList = {
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
};
