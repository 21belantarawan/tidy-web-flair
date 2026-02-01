import { UMKM } from "@/types/menu";

// ========================================
// GANTI URL GAMBAR DI BAWAH INI
// ========================================

// Gambar UMKM
const WARUNG_BU_SRI_IMAGE = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800";

// Gambar Menu
const NASI_GORENG_IMAGE = "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400";
const MIE_GORENG_IMAGE = "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400";
const AYAM_PENYET_IMAGE = "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400";
const SOTO_AYAM_IMAGE = "https://images.unsplash.com/photo-1547928576-b822bc410b00?w=400";
const ES_TEH_IMAGE = "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400";
const ES_JERUK_IMAGE = "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400";
const NASI_PUTIH_IMAGE = "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400";
const KERUPUK_IMAGE = "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400";

export const umkmData: UMKM[] = [
  {
    id: "umkm1",
    name: "Warung Bu Sri",
    address: "Jl. Petemon 4 No. 39, Surabaya",
    rating: 4.8,
    area: "Kecamatan Sawahan",
    image: WARUNG_BU_SRI_IMAGE,
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
        image: NASI_GORENG_IMAGE,
        description: "Nasi goreng dengan telur, ayam, dan kerupuk",
      },
      {
        id: "m2",
        name: "Mie Goreng Jawa",
        price: 13000,
        emoji: "🍜",
        image: MIE_GORENG_IMAGE,
        description: "Mie goreng bumbu Jawa dengan sayuran",
      },
      {
        id: "m3",
        name: "Ayam Penyet",
        price: 18000,
        emoji: "🍗",
        image: AYAM_PENYET_IMAGE,
        description: "Ayam goreng penyet dengan sambal pedas",
      },
      {
        id: "m4",
        name: "Soto Ayam",
        price: 14000,
        emoji: "🥣",
        image: SOTO_AYAM_IMAGE,
        description: "Soto ayam kuah kuning dengan bihun",
      },
      {
        id: "m5",
        name: "Es Teh Manis",
        price: 5000,
        emoji: "🧊",
        image: ES_TEH_IMAGE,
        description: "Es teh manis segar",
      },
      {
        id: "m6",
        name: "Es Jeruk",
        price: 6000,
        emoji: "🍊",
        image: ES_JERUK_IMAGE,
        description: "Es jeruk peras asli",
      },
      {
        id: "m7",
        name: "Nasi Putih",
        price: 5000,
        emoji: "🍚",
        image: NASI_PUTIH_IMAGE,
        description: "Nasi putih hangat",
      },
      {
        id: "m8",
        name: "Kerupuk",
        price: 2000,
        emoji: "🥨",
        image: KERUPUK_IMAGE,
        description: "Kerupuk udang renyah",
      },
    ],
  },
];
