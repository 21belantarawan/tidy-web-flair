import { useState } from "react";
import { Calculator, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { DISTANCE_MAP, COST_PER_KM, ShippingInfo } from "@/types/menu";

interface AddressFormProps {
  onCalculate: (shipping: ShippingInfo, address: string) => void;
}

const KELURAHAN_OPTIONS = [
  { value: "petemon", label: "Petemon (0.5 km - Titik Asal)" },
  { value: "sawahan", label: "Sawahan (1 km)" },
  { value: "kupang_krajan", label: "Kupang Krajan (1.5 km)" },
  { value: "banyu_urip", label: "Banyu Urip (2 km)" },
  { value: "putat_jaya", label: "Putat Jaya (2.5 km)" },
  { value: "pakis", label: "Pakis (3 km)" },
];

export function AddressForm({ onCalculate }: AddressFormProps) {
  const [kelurahan, setKelurahan] = useState("");
  const [address, setAddress] = useState("");

  const handleCalculate = () => {
    if (!kelurahan || !address) return;

    const distance = DISTANCE_MAP[kelurahan];
    const cost = Math.round(distance * COST_PER_KM);

    onCalculate(
      {
        kelurahan,
        distance,
        cost,
      },
      address
    );
  };

  return (
    <div className="bg-card rounded-3xl p-5 shadow-card">
      <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Alamat Pengiriman
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Pilih Kelurahan
          </label>
          <select
            value={kelurahan}
            onChange={(e) => setKelurahan(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors bg-card text-card-foreground"
          >
            <option value="">-- Pilih Kelurahan di Kecamatan Sawahan --</option>
            {KELURAHAN_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-card-foreground mb-2">
            Alamat Lengkap
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Contoh: Jl. Petemon 2 No. 15"
            className="w-full px-4 py-3 border-2 border-border rounded-2xl focus:border-primary focus:outline-none transition-colors bg-card text-card-foreground placeholder:text-muted-foreground"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleCalculate}
          disabled={!kelurahan || !address}
          className="w-full bg-primary/10 text-primary font-semibold py-3 rounded-2xl hover:bg-primary/20 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Calculator className="w-5 h-5" />
          Hitung Ongkir
        </motion.button>
      </div>
    </div>
  );
}
