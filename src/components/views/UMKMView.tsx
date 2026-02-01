import { Store } from "lucide-react";
import { motion } from "framer-motion";
import { UMKMCard } from "@/components/UMKMCard";
import { UMKM } from "@/types/menu";

interface UMKMViewProps {
  umkmList: UMKM[];
  onSelectUMKM: (umkm: UMKM) => void;
}

export function UMKMView({ umkmList, onSelectUMKM }: UMKMViewProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Store className="w-6 h-6 text-primary" />
        <h2 className="text-lg font-bold text-foreground">UMKM Partner</h2>
      </div>

      <div className="space-y-4">
        {umkmList.map((umkm) => (
          <UMKMCard
            key={umkm.id}
            umkm={umkm}
            onClick={() => onSelectUMKM(umkm)}
          />
        ))}
      </div>
    </motion.section>
  );
}
