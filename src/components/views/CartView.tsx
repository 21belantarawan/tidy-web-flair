import { useState } from "react";
import { ChevronLeft, ShoppingCart as CartIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "@/components/CartItem";
import { AddressForm } from "@/components/AddressForm";
import { CostSummary } from "@/components/CostSummary";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PaymentMethod, PaymentInfo } from "@/components/PaymentMethod";
import { CartItem as CartItemType, ShippingInfo } from "@/types/menu";

interface CartViewProps {
  items: CartItemType[];
  subtotal: number;
  onBack: () => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

export function CartView({
  items,
  subtotal,
  onBack,
  onUpdateQuantity,
  onRemoveItem,
}: CartViewProps) {
  const [shipping, setShipping] = useState<ShippingInfo | null>(null);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState<PaymentInfo>({ method: "cod" });

  const handleCalculateShipping = (shippingInfo: ShippingInfo, addr: string) => {
    setShipping(shippingInfo);
    setAddress(addr);
  };

  const isEmpty = items.length === 0;

  // Check if order can be placed
  const canOrder = payment.method === "cod" || (payment.method === "qris" && payment.proofImage);

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
          <CartIcon className="w-5 h-5 text-primary" />
          Keranjang
        </h2>
      </div>

      {isEmpty ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <span className="text-6xl mb-4 block">🛒</span>
          <p className="text-muted-foreground font-medium">
            Keranjang masih kosong
          </p>
          <p className="text-muted-foreground/70 text-sm">
            Yuk pilih menu favoritmu!
          </p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {/* Cart Items */}
          <AnimatePresence>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={(qty) => onUpdateQuantity(item.id, qty)}
                onRemove={() => onRemoveItem(item.id)}
              />
            ))}
          </AnimatePresence>

          {/* Address Form */}
          <AddressForm onCalculate={handleCalculateShipping} />

          {/* Payment Method */}
          {shipping && (
            <PaymentMethod onPaymentChange={setPayment} />
          )}

          {/* Cost Summary */}
          {shipping && (
            <>
              <CostSummary subtotal={subtotal} shipping={shipping} />
              <WhatsAppButton
                items={items}
                subtotal={subtotal}
                shipping={shipping}
                address={address}
                payment={payment}
                disabled={!canOrder}
              />
            </>
          )}
        </div>
      )}
    </motion.section>
  );
}
