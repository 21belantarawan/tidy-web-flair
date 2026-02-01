import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LogoUploader } from "./LogoUploader";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const LOGO_STORAGE_KEY = "monj-logo-url";

export function Header({ cartCount, onCartClick }: HeaderProps) {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const savedLogo = localStorage.getItem(LOGO_STORAGE_KEY);
    if (savedLogo) {
      setLogoUrl(savedLogo);
    }
  }, []);

  const handleLogoChange = (url: string) => {
    if (url) {
      localStorage.setItem(LOGO_STORAGE_KEY, url);
      setLogoUrl(url);
    } else {
      localStorage.removeItem(LOGO_STORAGE_KEY);
      setLogoUrl(null);
    }
  };

  return (
    <header className="gradient-brand sticky top-0 z-50 shadow-lg">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoUploader logoUrl={logoUrl} onLogoChange={handleLogoChange} />
            <div>
              <h1 className="text-xl font-bold text-primary-foreground tracking-tight">
                MON.J Petemon
              </h1>
              <p className="text-xs text-primary-foreground/80 font-medium">
                Kuliner Petemon, Antar Cepat!
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
