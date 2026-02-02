import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const LOGO_URL =
  "https://res.cloudinary.com/djtc6jsxw/image/upload/v1769946520/WhatsApp_Image_2026-01-27_at_23.18.22-removebg-preview_x5am71.png";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Header({ cartCount, onCartClick }: HeaderProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="gradient-brand sticky top-0 z-50 shadow-lg">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-md overflow-hidden">
              {logoError ? (
                <span className="text-2xl">🍜</span>
              ) : (
                <img
                  src={LOGO_URL}
                  alt="MON.J Logo"
                  className="w-full h-full object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">MON.J Petemon</h1>
              <p className="text-xs text-primary-foreground/80 font-medium">
                Kuliner Petemon, Cepat, Praktis,& Terpercaya
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onCartClick}
            className="relative bg-primary-foreground/20 backdrop-blur-sm p-3 rounded-2xl"
          >
            <ShoppingCart className="w-6 h-6 text-primary-foreground" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
}
