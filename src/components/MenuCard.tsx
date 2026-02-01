import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { MenuItem } from "@/types/menu";
import { formatCurrency } from "@/lib/format";

interface MenuCardProps {
  item: MenuItem;
  onAdd: () => void;
}

export function MenuCard({ item, onAdd }: MenuCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden"
    >
      <div className="flex gap-4 p-4">
        {/* Image */}
        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-accent/30 flex-shrink-0">
          {item.image && !imageError ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              {item.emoji}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-card-foreground truncate">
              {item.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mt-0.5">
              {item.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-primary">
              {formatCurrency(item.price)}
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onAdd}
              className="w-9 h-9 gradient-brand rounded-full flex items-center justify-center shadow-brand"
            >
              <Plus className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
