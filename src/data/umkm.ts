import { UMKM } from "@/types/menu";

// External image URLs - edit these with your own URLs
const warungBuSri = "";
const nasiGoreng = "";
const mieGoreng = "";
const ayamPenyet = "";
const sotoAyam = "";
const esTeh = "";
const esJeruk = "";
const nasiPutih = "";
const kerupuk = "";

export const umkmData: UMKM[] = [
  {
    id: "umkm1",
    name: "Warung Bu Sri",
    address: "Jl. Petemon 4 No. 39, Surabaya",
    rating: 4.8,
    area: "Kecamatan Sawahan",
    image: warungBuSri,
    isOpen: true,
    operatingHours: {
      open: "08:00",
      close: "21:00",
    },
    menu: [
      {
        id: "m1",
        name: "Nasi Goreng Spesial",
        price: 15000,
        emoji: "🍛",
        image: nasiGoreng,
        description: "Nasi goreng dengan telur, ayam, dan kerupuk",
      },
      {
        id: "m2",
        name: "Mie Goreng Jawa",
        price: 13000,
        emoji: "🍜",
        image: mieGoreng,
        description: "Mie goreng bumbu Jawa dengan sayuran",
      },
      {
        id: "m3",
        name: "Ayam Penyet",
        price: 18000,
        emoji: "🍗",
        image: ayamPenyet,
        description: "Ayam goreng penyet dengan sambal pedas",
      },
      {
        id: "m4",
        name: "Soto Ayam",
        price: 14000,
        emoji: "🥣",
        image: sotoAyam,
        description: "Soto ayam kuah kuning dengan bihun",
      },
      {
        id: "m5",
        name: "Es Teh Manis",
        price: 5000,
        emoji: "🧊",
        image: esTeh,
        description: "Es teh manis segar",
      },
      {
        id: "m6",
        name: "Es Jeruk",
        price: 6000,
        emoji: "🍊",
        image: esJeruk,
        description: "Es jeruk peras asli",
      },
      {
        id: "m7",
        name: "Nasi Putih",
        price: 5000,
        emoji: "🍚",
        image: nasiPutih,
        description: "Nasi putih hangat",
      },
      {
        id: "m8",
        name: "Kerupuk",
        price: 2000,
        emoji: "🥨",
        image: kerupuk,
        description: "Kerupuk udang renyah",
      },
    ],
  },
];
