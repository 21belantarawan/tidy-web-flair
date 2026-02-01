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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-card rounded-3xl shadow-card overflow-hidden cursor-pointer border-2 border-primary/20 transition-shadow hover:shadow-card-hover"
    >
      {/* UMKM Header Image */}
      <div className="h-48 relative overflow-hidden bg-gradient-to-br from-muted to-accent/30">
        {umkm.image && !imageError ? (
          <img
            src={umkm.image}
            alt={umkm.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-8xl">
            {umkm.emoji}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        
        {umkm.isOpen && (
          <div className="absolute top-3 right-3 bg-brand-green px-3 py-1 rounded-full flex items-center gap-1.5 z-10">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary-foreground">Buka</span>
          </div>
        )}

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
