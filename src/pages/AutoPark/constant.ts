export interface ServiceItem {
  count: string;
  link: string;
  img: string;
  list: string[];
}

export interface ServiceLists {
  first: ServiceItem;
  second: ServiceItem;
  third: ServiceItem;
}

export const serviceLists: ServiceLists = {
  first: {
    count: "250",
    link: "тягачів",
    img: "/img/autopark/truck1.png",
    list: [
      "Тягачі моделі DAF та Mergedec",
      "Клас екологічності евро 6",
      "GPS трекінг",
      "Новітні системи безпеки і контролю",
    ],
  },
  second: {
    count: "50",
    link: "тентованих напівпричепів",
    img: "/img/autopark/truck2.png",
    list: [
      "Напівпричепи Schmitz Cargobull",
      "XL сертифікація для тентів",
      "Можливість повного розтентування",
      "Антивандальні напвіпричепи",
    ],
  },
  third: {
    count: "200",
    link: "рефрежираторів",
    img: "/img/autopark/truck3.png",
    list: [
      "Сучасні напівпричепи з рефрижераторами від Carrier",
      "Мультережимні рефрижератори",
      "FRC сертифікація кожного напівпричепа",
      "Рефрежиратори даблдек (на 66 палет)",
    ],
  },
};

export const transportationList = [
  "Перевезення усіх класів небезпеки (ADR) окрім 7",
  "Офіційна ліцензія від укртрансбезпеки",
  "Більше 20 років роботи з небезпечними вантажами",
];

export const transportationRoutesList = [
  {
    title: "Західна Європа",
    text: "Франція, Бельгія, Нідерланди, Люксембург, Німеччина, Австрія, Швейцарія",
  },
  {
    title: "Північна Європа",
    text: "Фінляндія, Швеція, Норвегія, Данія, Велика Британія,  Ісландія, Естонія, Литва, Латвія",
  },
  {
    title: "Південна Європа",
    text: "Італія, Греція, Іспанія, Португалія, Хорватія,  Словенія",
  },
  {
    title: "Східна Європа",
    text: "Україна, Молдова, Румунія, Болгарія, Угорщина, Чехія, Словаччина, Польща",
  },
  {
    title: "Балкани",
    text: "Албанія, Сербія, Чорногорія, Боснія і Герцеговина, Північна Македонія",
  },
  {
    title: "Азія",
    text: "Вірменія, Грузія, Азербайджан, Туреччина",
  },
];

export const logosList = [
  "/img/autopark/logos/1.png",
  "/img/autopark/logos/2.png",
  "/img/autopark/logos/3.png",
  "/img/autopark/logos/4.png",
  "/img/autopark/logos/5.png",
  "/img/autopark/logos/6.png",
  "/img/autopark/logos/7.png",
  "/img/autopark/logos/8.png",
  "/img/autopark/logos/9.png",
];
