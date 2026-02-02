import { UMKM } from "@/types/menu";

// External image URLs - edit these with your own URLs
const esTehNusantara =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956073/LOGO_ES_TEH_NUSANTARA.png_5cd2f673_meyjc0.webp";
const originalTea =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956030/PHOTO-2026-02-01-21-24-41_dg0twx.jpg";
const lemonTea = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956030/PHOTO-2026-02-01-21-24-46_brzp8b.jpg";
const lycheeTea = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956030/PHOTO-2026-02-01-21-24-43_c0itmi.jpg";
const peachTea = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956031/PHOTO-2026-02-01-21-24-40_fc4j70.jpg";
const milkTea = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-42_2_zwl7ux.jpg";
const chocoMilkTea =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-54_2_x97jmq.jpg";
const mangoMilkTea =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-42_awmoa1.jpg";
const strawberryMilkTea =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956030/PHOTO-2026-02-01-21-24-39_gfwkmm.jpg";
const redVelvetMilkTea =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956031/PHOTO-2026-02-01-21-24-40_2_mogloj.jpg";
const taro = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-55_ml3xaz.jpg";
const greenTea = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956030/PHOTO-2026-02-01-21-24-51_kinfkn.jpg";
const esMelon = "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-53_db9ybh.jpg";
const coffeeLatte =
  "https://res.cloudinary.com/dwssxrftk/image/upload/v1769956029/PHOTO-2026-02-01-21-24-54_nihjic.jpg";

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
      open: "11:00",
      close: "19:00",
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
