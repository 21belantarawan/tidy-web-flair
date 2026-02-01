import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { MenuItem } from "@/types/menu";
import { formatCurrency } from "@/lib/format";

interface MenuCardProps {
  item: MenuItem;
  onAdd: () => void;
}

export function MenuCard({ item, onAdd }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden"
    >
      <div className="flex gap-4 p-4">
        {/* Emoji Image */}
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-muted to-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-4xl">{item.emoji}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-card-foreground truncate">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mt-0.5">
            {item.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-primary">
              {formatCurrency(item.price)}
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={onAdd}
              className="w-8 h-8 gradient-brand rounded-full flex items-center justify-center shadow-brand"
            >
              <Plus className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
