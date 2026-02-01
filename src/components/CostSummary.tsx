import { Receipt } from "lucide-react";
import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/format";
import { ADMIN_FEE, ShippingInfo } from "@/types/menu";

interface CostSummaryProps {
  subtotal: number;
  shipping: ShippingInfo;
}

export function CostSummary({ subtotal, shipping }: CostSummaryProps) {
  const total = subtotal + shipping.cost + ADMIN_FEE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-3xl p-5 shadow-card"
    >
      <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
        <Receipt className="w-5 h-5 text-primary" />
        Ringkasan Biaya
      </h3>

      <div className="space-y-3">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal Produk</span>
          <span className="font-semibold text-card-foreground">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Jarak Pengiriman</span>
          <span className="font-semibold text-card-foreground">
            {shipping.distance} km
          </span>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Ongkos Kirim (Rp 1.000/km)</span>
          <span className="font-semibold text-card-foreground">
            {formatCurrency(shipping.cost)}
          </span>
        </div>

        <div className="flex justify-between text-muted-foreground">
          <span>Jasa Admin</span>
          <span className="font-semibold text-card-foreground">
            {formatCurrency(ADMIN_FEE)}
          </span>
        </div>

        <div className="border-t-2 border-dashed border-border pt-3 mt-3">
          <div className="flex justify-between">
            <span className="font-bold text-lg text-card-foreground">Total Bayar</span>
            <span className="font-bold text-lg text-primary">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
