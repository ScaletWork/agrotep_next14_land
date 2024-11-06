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
      "Типи тентових перевезень",
      "Можливо переваги наших тентів",
      "Будь який перелік про рефи",
      "Типи тентових перевезень",
    ],
  },
  third: {
    count: "200",
    link: "рефрежираторів",
    img: "/img/autopark/truck3.png",
    list: [
      "Перевезення з контрольованою температурою",
      "Перевезення небезпечних вантажів",
      "Перевезення в мультирежимі",
      "Рефрежиратори даблдек (на 66 палет)",
      "Сертифікація GDP",
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
    title: "Балкани",
    text: "Бельгія Нідерланди Люксембург Німеччина Франція Велика Британія Польща",
  },
  {
    title: "Балкани",
    text: "Бельгія Нідерланди Люксембург Німеччина Франція Велика Британія Польща",
  },
  {
    title: "Балкани",
    text: "Бельгія Нідерланди Люксембург Німеччина Франція Велика Британія Польща",
  },
  {
    title: "Балкани",
    text: "Бельгія Нідерланди Люксембург Німеччина Франція Велика Британія Польща",
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
