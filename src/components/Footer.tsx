export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-4 mt-8">
      <div className="container">
        <p className="text-xs text-muted-foreground text-center">
          © {currentYear} MON.J Petemon
        </p>
      </div>
    </footer>
  );
}
