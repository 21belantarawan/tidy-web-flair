import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface LogoUploaderProps {
  logoUrl: string | null;
  onLogoChange: (url: string) => void;
}

export function LogoUploader({ logoUrl, onLogoChange }: LogoUploaderProps) {
  const [inputUrl, setInputUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleSave = () => {
    if (inputUrl.trim()) {
      onLogoChange(inputUrl.trim());
      setInputUrl("");
      setOpen(false);
      setImageError(false);
    }
  };

  const handleRemove = () => {
    onLogoChange("");
    setOpen(false);
    setImageError(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-card rounded-2xl flex items-center justify-center shadow-md cursor-pointer overflow-hidden hover:ring-2 hover:ring-primary-foreground/50 transition-all"
        >
          {logoUrl && !imageError ? (
            <img
              src={logoUrl}
              alt="MON.J Logo"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-2xl">🍜</span>
          )}
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            Upload Logo MON.J
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              URL Gambar Logo
            </label>
            <Input
              type="url"
              placeholder="https://example.com/logo.png"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
            <p className="text-xs text-muted-foreground">
              Masukkan URL gambar dari internet (format: JPG, PNG, WebP)
            </p>
          </div>

          {/* Preview */}
          {inputUrl && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Preview
              </label>
              <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center overflow-hidden border">
                <img
                  src={inputUrl}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button onClick={handleSave} className="flex-1">
              Simpan
            </Button>
            {logoUrl && (
              <Button variant="outline" onClick={handleRemove}>
                Hapus Logo
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
