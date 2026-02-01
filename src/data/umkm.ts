import { UMKM } from "@/types/menu";

// External image URLs - edit these with your own URLs
const esTehNusantara = "";
const originalTea = "";
const lemonTea = "";
const lycheeTea = "";
const peachTea = "";
const milkTea = "";
const chocoMilkTea = "";
const mangoMilkTea = "";
const strawberryMilkTea = "";
const redVelvetMilkTea = "";
const taro = "";
const greenTea = "";
const esMelon = "";
const coffeeLatte = "";

export const umkmData: UMKM[] = [
  {
    id: "umkm1",
    name: "Es Teh Nusantara",
    address: "Jl. Petemon 4 No. 39, Surabaya",
    rating: 4.8,
    area: "Kecamatan Sawahan",
    image: esTehNusantara,
    isOpen: true,
    operatingHours: {
      open: "08:00",
      close: "21:00",
    },
    menu: [
      // Tea Series
      {
        id: "m1",
        name: "Original Tea",
        price: 3000,
        emoji: "🍵",
        image: originalTea,
        description: "Teh pilihan yang diseduh sempurna. Otentik, dan menyegarkan.",
      },
      {
        id: "m2",
        name: "Lemon Tea",
        price: 6000,
        emoji: "🍋",
        image: lemonTea,
        description: "Kombinasi teh pilihan yang segar dengan rasa lemon.",
      },
      {
        id: "m3",
        name: "Lychee Tea",
        price: 6000,
        emoji: "🧃",
        image: lycheeTea,
        description: "Kombinasi teh pilihan dengan rasa buah leci yang manis.",
      },
      {
        id: "m4",
        name: "Peach Tea",
        price: 6000,
        emoji: "🍑",
        image: peachTea,
        description: "Teh dengan rasa buah peach yang lembut dan sedikit manis.",
      },
      // Milk Tea Series
      {
        id: "m5",
        name: "Milk Tea",
        price: 6000,
        emoji: "🥛",
        image: milkTea,
        description: "Teh pilihan menyegarkan yang berpadu dengan susu creamy.",
      },
      {
        id: "m6",
        name: "Choco Milk Tea",
        price: 6000,
        emoji: "🍫",
        image: chocoMilkTea,
        description: "Milk tea yang creamy berpadu dengan rasa coklat yang manis.",
      },
      {
        id: "m7",
        name: "Mango Milk Tea",
        price: 6000,
        emoji: "🥭",
        image: mangoMilkTea,
        description: "Milk tea yang creamy berpadu dengan rasa mangga yang manis.",
      },
      {
        id: "m8",
        name: "Strawberry Milk Tea",
        price: 6000,
        emoji: "🍓",
        image: strawberryMilkTea,
        description: "Milk tea yang creamy berpadu dengan rasa stroberi yang manis.",
      },
      {
        id: "m9",
        name: "Red Velvet Milk Tea",
        price: 6000,
        emoji: "🧁",
        image: redVelvetMilkTea,
        description: "Milk tea yang creamy berpadu dengan rasa Red Velvet.",
      },
      {
        id: "m10",
        name: "Taro",
        price: 6000,
        emoji: "🍠",
        image: taro,
        description: "Milk tea yang creamy berpadu dengan aroma khas ubi taro.",
      },
      {
        id: "m11",
        name: "Green Tea",
        price: 6000,
        emoji: "🍃",
        image: greenTea,
        description: "Milk tea yang creamy berpadu dengan rasa teh hijau autentik.",
      },
      {
        id: "m12",
        name: "Es Melon",
        price: 6000,
        emoji: "🍈",
        image: esMelon,
        description: "Es rasa melon yang manis dan menyegarkan.",
      },
      // Coffee Series
      {
        id: "m13",
        name: "Coffee Latte",
        price: 6000,
        emoji: "☕",
        image: coffeeLatte,
        description: "Es kopi yang berpadu dengan susu segar yang creamy.",
      },
    ],
  },
];
