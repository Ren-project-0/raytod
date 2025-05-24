
import Link from "next/link";
import { Instagram, MessageCircle, Mail } from "lucide-react"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp RenArt Studio" className="text-secondary-foreground hover:text-accent transition-colors">
            <MessageCircle size={24} />
          </Link>
          <Link href="https://instagram.com/renproject" target="_blank" rel="noopener noreferrer" aria-label="Instagram RenArt Studio" className="text-secondary-foreground hover:text-accent transition-colors">
            <Instagram size={24} />
          </Link>
          <Link href="mailto:info@renart.studio" aria-label="Email RenArt Studio" className="text-secondary-foreground hover:text-accent transition-colors">
            <Mail size={24} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} RenArt Studio. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Ilustrasi Kustom, Ekspresikan Imajinasimu.
        </p>
      </div>
    </footer>
  );
}
