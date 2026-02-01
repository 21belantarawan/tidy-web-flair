import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UMKMView } from "@/components/views/UMKMView";
import { MenuView } from "@/components/views/MenuView";
import { CartView } from "@/components/views/CartView";
import { useCart } from "@/hooks/useCart";
import { umkmData } from "@/data/umkm";
import { UMKM } from "@/types/menu";

type View = "umkm" | "menu" | "cart";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("umkm");
  const [selectedUMKM, setSelectedUMKM] = useState<UMKM | null>(null);
  const cart = useCart();

  const handleSelectUMKM = (umkm: UMKM) => {
    setSelectedUMKM(umkm);
    setCurrentView("menu");
  };

  const handleBackToUMKM = () => {
    setCurrentView("umkm");
    setSelectedUMKM(null);
  };

  const handleBackFromCart = () => {
    if (selectedUMKM) {
      setCurrentView("menu");
    } else {
      setCurrentView("umkm");
    }
  };

  const handleCartClick = () => {
    setCurrentView("cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cart.totalItems} onCartClick={handleCartClick} />

      <main className="container py-6 flex-1">
        <AnimatePresence mode="wait">
          {currentView === "umkm" && (
            <UMKMView
              key="umkm"
              umkmList={umkmData}
              onSelectUMKM={handleSelectUMKM}
            />
          )}

          {currentView === "menu" && selectedUMKM && (
            <MenuView
              key="menu"
              umkm={selectedUMKM}
              onBack={handleBackToUMKM}
              onAddToCart={cart.addItem}
            />
          )}

          {currentView === "cart" && (
            <CartView
              key="cart"
              items={cart.items}
              subtotal={cart.subtotal}
              onBack={handleBackFromCart}
              onUpdateQuantity={cart.updateQuantity}
              onRemoveItem={cart.removeItem}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
