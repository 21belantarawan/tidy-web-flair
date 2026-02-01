import { UMKM } from "@/types/menu";

export const umkmData: UMKM[] = [
  {
    id: "umkm1",
    name: "Warung Bu Sri",
    address: "Jl. Petemon 4 No. 39, Surabaya",
    rating: 4.8,
    area: "Kecamatan Sawahan",
    emoji: "👨‍🍳",
    isOpen: true,
    menu: [
      {
        id: "m1",
        name: "Nasi Goreng Spesial",
        price: 15000,
        emoji: "🍛",
        description: "Nasi goreng dengan telur, ayam, dan kerupuk",
      },
      {
        id: "m2",
        name: "Mie Goreng Jawa",
        price: 13000,
        emoji: "🍜",
        description: "Mie goreng bumbu Jawa dengan sayuran",
      },
      {
        id: "m3",
        name: "Ayam Penyet",
        price: 18000,
        emoji: "🍗",
        description: "Ayam goreng penyet dengan sambal pedas",
      },
      {
        id: "m4",
        name: "Soto Ayam",
        price: 14000,
        emoji: "🥣",
        description: "Soto ayam kuah kuning dengan bihun",
      },
      {
        id: "m5",
        name: "Es Teh Manis",
        price: 5000,
        emoji: "🧊",
        description: "Es teh manis segar",
      },
      {
        id: "m6",
        name: "Es Jeruk",
        price: 6000,
        emoji: "🍊",
        description: "Es jeruk peras asli",
      },
      {
        id: "m7",
        name: "Nasi Putih",
        price: 5000,
        emoji: "🍚",
        description: "Nasi putih hangat",
      },
      {
        id: "m8",
        name: "Kerupuk",
        price: 2000,
        emoji: "🥨",
        description: "Kerupuk udang renyah",
      },
    ],
  },
];
