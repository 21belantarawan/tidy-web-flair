export interface MenuItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
  description: string;
  image?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface UMKM {
  id: string;
  name: string;
  address: string;
  rating: number;
  image?: string;
  area: string;
  emoji: string;
  isOpen: boolean;
  menu: MenuItem[];
}

export interface ShippingInfo {
  kelurahan: string;
  distance: number;
  cost: number;
}

export const DISTANCE_MAP: Record<string, number> = {
  petemon: 0.5,
  sawahan: 1.5,
  kupang: 2,
  bubutan: 2.5,
  jepara: 3,
  keputran: 3.5,
};

export const ADMIN_FEE = 1000;
export const COST_PER_KM = 1000;
export const WHATSAPP_NUMBER = "6281234567890";
