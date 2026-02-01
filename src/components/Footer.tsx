export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-4 mt-8">
      <div className="container">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2 text-sm text-muted">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Bantuan
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Kontak
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {currentYear} MON.J Petemon
          </p>
        </div>
      </div>
    </footer>
  );
}
