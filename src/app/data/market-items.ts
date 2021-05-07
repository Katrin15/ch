import { MarketItem } from 'src/app/interfaces/MarketItem';

export const PRODUCTS: MarketItem[] = [
  {
    id: "1",
    title: "Бутылка для воды",
    // preview: string,
    pictures: [
    {link: "./assets/images/market-products/carousel-test/1_1.jpg", is_preview: true},
    {link: "./assets/images/market-products/carousel-test/1_6.jpg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 20,
    price: 454,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Иван Иванов",
  },
  {
    id: "2",
    title: "Игрушка-пазл",
    // preview: string,
    pictures: [
    {link: "./assets/images/market-products/carousel-test/2_1.jpg", is_preview: true},
    {link: "./assets/images/market-products/carousel-test/2_2.jpg", is_preview: false},
    {link: "./assets/images/market-products/carousel-test/2_3.jpg", is_preview: false},
    {link: "./assets/images/market-products/carousel-test/1_6.jpg", is_preview: false}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 20,
    price: 454,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Иван Петров",
  },
  {
    id: "3",
    title: "Набор мягких приколюх ",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/3.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 20,
    price: 454,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Иванов",
  },
  {
    id: "4",
    title: "Бутылочка для кормления",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/carousel-test/1_1.jpg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 22,
    price: 90,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
  {
    id: "5",
    title: "Море тваринок",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/5.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 23,
    price: 550,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
  {
    id: "6",
    title: "Магнитные динозаврики",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/6.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 24,
    price: 100,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
  {
    id: "7",
    title: "Пазл мартышка",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/7.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 20,
    price: 300,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
  {
    id: "8",
    title: "Пазл с рамкой",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/8.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 25,
    price: 200,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
  {
    id: "9",
    title: "Мятные динозаврики",
    // preview: string,
    pictures: [{link: "./assets/images/market-products/2.svg", is_preview: true}],
    createdAt: new Date('December 17, 2019 03:24:00'),//01.09.2020,
    likesCount: 10,
    category: "новое",
    viewsCount: 26,
    price: 500,
    location1: "Киев",
    location2: "Голосевский район",

    // details
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    condition: "новое",
    payment: "visa, mastercard",
    delivery: "новая почта",
    provider: "Петр Петров",
  },
];