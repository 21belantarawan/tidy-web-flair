import { Minus, Plus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { CartItem as CartItemType } from "@/types/menu";
import { formatCurrency } from "@/lib/format";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-card rounded-2xl p-4 shadow-card"
    >
      <div className="flex gap-3">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-muted to-accent/30 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">{item.emoji}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-card-foreground truncate">
            {item.name}
          </h4>
          <p className="text-primary font-bold text-sm">
            {formatCurrency(item.price)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.quantity - 1)}
            className="w-8 h-8 bg-muted rounded-full flex items-center justify-center"
          >
            <Minus className="w-4 h-4 text-muted-foreground" />
          </motion.button>
          
          <span className="w-8 text-center font-bold text-card-foreground">
            {item.quantity}
          </span>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onUpdateQuantity(item.quantity + 1)}
            className="w-8 h-8 gradient-brand rounded-full flex items-center justify-center"
          >
            <Plus className="w-4 h-4 text-primary-foreground" />
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onRemove}
            className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center ml-1"
          >
            <Trash2 className="w-4 h-4 text-destructive" />
          </motion.button>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-border flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Subtotal</span>
        <span className="font-bold text-primary">
          {formatCurrency(item.price * item.quantity)}
        </span>
      </div>
    </motion.div>
  );
}
