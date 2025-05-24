import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react"; // Using MessageCircle for generic WhatsApp icon

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp RenProject" className="text-secondary-foreground hover:text-accent transition-colors">
            <MessageCircle size={24} />
          </Link>
          <Link href="https://instagram.com/renproject" target="_blank" rel="noopener noreferrer" aria-label="Instagram RenProject" className="text-secondary-foreground hover:text-accent transition-colors">
            <Instagram size={24} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} RenCart. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Kreasi Kustom, Unik Milikmu.
        </p>
      </div>
    </footer>
  );
}
