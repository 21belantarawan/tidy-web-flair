import { ChevronLeft, UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuCard } from "@/components/MenuCard";
import { MenuItem, UMKM } from "@/types/menu";
import { toast } from "sonner";

interface MenuViewProps {
  umkm: UMKM;
  onBack: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuView({ umkm, onBack, onAddToCart }: MenuViewProps) {
  const handleAddItem = (item: MenuItem) => {
    onAddToCart(item);
    toast.success(`${item.name} ditambahkan ke keranjang!`, {
      icon: "✓",
      duration: 2000,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-1 text-primary font-semibold"
        >
          <ChevronLeft className="w-5 h-5" />
          Kembali
        </motion.button>

        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <UtensilsCrossed className="w-5 h-5 text-primary" />
          Menu
        </h2>
      </div>

      {/* UMKM Info */}
      <div className="bg-card rounded-2xl p-4 mb-4 shadow-card">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-accent/30 flex items-center justify-center">
            <span className="text-2xl">{umkm.emoji}</span>
          </div>
          <div>
            <h3 className="font-bold text-card-foreground">{umkm.name}</h3>
            <p className="text-sm text-muted-foreground">{umkm.address}</p>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <AnimatePresence>
        <div className="space-y-3">
          {umkm.menu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MenuCard item={item} onAdd={() => handleAddItem(item)} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.section>
  );
}
