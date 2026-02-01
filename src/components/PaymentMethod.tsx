import { useState, useRef, useEffect } from "react";
import { CreditCard, Upload, X, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export type PaymentType = "qris";

export interface PaymentInfo {
  method: PaymentType;
  proofImage?: string;
  proofFileName?: string;
}

interface PaymentMethodProps {
  onPaymentChange: (payment: PaymentInfo) => void;
}

export function PaymentMethod({ onPaymentChange }: PaymentMethodProps) {
  const [proofImage, setProofImage] = useState<string | null>(null);
  const [proofFileName, setProofFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with QRIS as default on mount
  useEffect(() => {
    onPaymentChange({ method: "qris" });
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProofImage(base64);
        setProofFileName(file.name);
        onPaymentChange({ 
          method: "qris", 
          proofImage: base64,
          proofFileName: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProof = () => {
    setProofImage(null);
    setProofFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onPaymentChange({ method: "qris" });
  };

  return (
    <div className="bg-card rounded-3xl p-5 shadow-card">
      <h3 className="font-bold text-card-foreground mb-4 flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-primary" />
        Metode Pembayaran
      </h3>

      <div className="space-y-3">
        {/* QRIS Info */}
        <div className="p-4 rounded-2xl border-2 border-primary bg-primary/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-primary-foreground">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm2 2h1v1H6V6zm10-3h5v5h-5V3zm1 1v3h3V4h-3zm1 1h1v1h-1V5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm2 2h1v1H6v-1zm8-3h1v2h-1v-2zm2 0h3v1h-3v-1zm-2 3h1v4h-1v-4zm2 0h1v1h-1v-1zm2 0h3v1h-3v-1zm0 2h1v3h-1v-3zm2 0h1v1h-1v-1zm-4 1h1v1h-1v-1zm2 1h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
            </svg>
          </div>
          <div className="text-left flex-1">
            <p className="font-semibold text-card-foreground">QRIS</p>
            <p className="text-xs text-muted-foreground">Transfer via QRIS, upload bukti bayar</p>
          </div>
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>

        {/* QRIS Upload Section */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden"
        >
          <div className="pt-3 space-y-3">
            {/* QRIS Code Display */}
            <div className="bg-background rounded-2xl p-4 border-2 border-dashed border-border">
              <p className="text-sm font-semibold text-card-foreground text-center mb-3">
                Scan QRIS untuk Pembayaran
              </p>
              <div className="bg-white p-4 rounded-xl mx-auto w-fit">
                <div className="w-40 h-40 bg-muted rounded-lg flex items-center justify-center">
                  <svg className="w-32 h-32 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 3h7v7H3V3zm1 1v5h5V4H4zm2 2h1v1H6V6zm10-3h5v5h-5V3zm1 1v3h3V4h-3zm1 1h1v1h-1V5zM3 14h7v7H3v-7zm1 1v5h5v-5H4zm2 2h1v1H6v-1zm8-3h1v2h-1v-2zm2 0h3v1h-3v-1zm-2 3h1v4h-1v-4zm2 0h1v1h-1v-1zm2 0h3v1h-3v-1zm0 2h1v3h-1v-3zm2 0h1v1h-1v-1zm-4 1h1v1h-1v-1zm2 1h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">
                a.n. MON.J Petemon
              </p>
            </div>

            {/* Upload Proof */}
            <div>
              <label className="block text-sm font-semibold text-card-foreground mb-2">
                Upload Bukti Pembayaran
              </label>
              
              {!proofImage ? (
                <label className="cursor-pointer">
                  <div className="border-2 border-dashed border-primary/50 rounded-2xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-all">
                    <Upload className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-card-foreground">
                      Klik untuk upload bukti
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      JPG, PNG (max 5MB)
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={proofImage}
                    alt="Bukti pembayaran"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <button
                    onClick={handleRemoveProof}
                    className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-2 rounded-full shadow-lg hover:bg-destructive/90 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    {proofFileName}
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground">
              * Upload bukti pembayaran setelah transfer via QRIS
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}