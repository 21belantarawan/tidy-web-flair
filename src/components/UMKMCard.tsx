import { useState } from "react";
import { Clock, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { UMKM } from "@/types/menu";

interface UMKMCardProps {
  umkm: UMKM;
  onClick: () => void;
}

export function UMKMCard({ umkm, onClick }: UMKMCardProps) {
  const [imageError, setImageError] = useState(false);

  // Check if currently open based on operating hours
  const checkIsOpen = () => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const [openHour, openMin] = umkm.operatingHours.open.split(":").map(Number);
    const [closeHour, closeMin] = umkm.operatingHours.close.split(":").map(Number);
    
    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;
    
    return currentTime >= openTime && currentTime < closeTime;
  };

  const isCurrentlyOpen = checkIsOpen();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card rounded-3xl shadow-card overflow-hidden cursor-pointer transition-shadow hover:shadow-card-hover"
    >
      {/* UMKM Header Image */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-muted to-accent/30">
        {umkm.image && !imageError && (
          <img
            src={umkm.image}
            alt={umkm.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full flex items-center gap-1.5 z-10 ${
          isCurrentlyOpen ? 'bg-brand-green' : 'bg-destructive'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            isCurrentlyOpen ? 'bg-primary-foreground animate-pulse' : 'bg-primary-foreground'
          }`} />
          <span className="text-xs font-bold text-primary-foreground">
            {isCurrentlyOpen ? 'Buka' : 'Tutup'}
          </span>
        </div>

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-primary-foreground text-xl drop-shadow-lg">
            {umkm.name}
          </h3>
        </div>
      </div>

      {/* UMKM Info */}
      <div className="p-5">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {umkm.address}
        </p>
        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
          <Clock className="w-4 h-4" />
          {umkm.operatingHours.open} - {umkm.operatingHours.close}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            {umkm.rating}
          </span>
          <span className="bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">
            {umkm.area}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
