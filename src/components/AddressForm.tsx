import { useState } from "react";
import { Calculator, MapPin, Navigation, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { DISTANCE_MAP, COST_PER_KM, ShippingInfo } from "@/types/menu";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

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

  const handleGetLocation = async () => {
    if (!navigator.geolocation) {
      toast.error("Browser Anda tidak mendukung GPS");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("GPS coordinates:", latitude, longitude);

        try {
          const { data, error } = await supabase.functions.invoke('reverse-geocode', {
            body: { latitude, longitude }
          });

          if (error) {
            console.error("Geocoding error:", error);
            toast.error("Gagal mendapatkan alamat dari GPS");
            setIsLoadingLocation(false);
            return;
          }

          if (data.success) {
            setAddress(data.address);
            
            if (data.kelurahan) {
              setKelurahan(data.kelurahan);
              toast.success(`Lokasi terdeteksi: ${data.kelurahanName}`);
            } else {
              toast.info("Alamat terdeteksi, silakan pilih kelurahan secara manual");
            }
          } else {
            toast.error(data.error || "Gagal mendapatkan alamat");
          }
        } catch (err) {
          console.error("Error calling geocode function:", err);
          toast.error("Terjadi kesalahan saat memproses lokasi");
        }

        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("GPS error:", error);
        setIsLoadingLocation(false);
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error("Akses lokasi ditolak. Izinkan akses lokasi di browser Anda");
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error("Lokasi tidak tersedia");
            break;
          case error.TIMEOUT:
            toast.error("Waktu permintaan lokasi habis");
            break;
          default:
            toast.error("Gagal mendapatkan lokasi GPS");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  return (
    <div className="bg-card rounded-3xl p-5 shadow-card">
      <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Alamat Pengiriman
      </h3>

      <div className="space-y-4">
        {/* GPS Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleGetLocation}
          disabled={isLoadingLocation}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoadingLocation ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Mendeteksi Lokasi...
            </>
          ) : (
            <>
              <Navigation className="w-5 h-5" />
              Gunakan Lokasi GPS Saat Ini
            </>
          )}
        </motion.button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-xs text-muted-foreground">atau isi manual</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>

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

        <p className="text-xs text-muted-foreground">
          * Klik "Gunakan Lokasi GPS" untuk deteksi otomatis atau pilih kelurahan manual
        </p>

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
