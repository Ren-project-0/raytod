import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle } from 'lucide-react'; // Using MessageCircle as a generic icon for WhatsApp
import Link from 'next/link';

export const metadata = {
  title: 'Kontak Kami - RenCart',
  description: 'Hubungi RenCart untuk pemesanan produk custom atau pertanyaan lebih lanjut.',
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Hubungi Kami</h1>
        <p className="text-lg text-muted-foreground">
          Kami siap membantu mewujudkan kreasi kustom Anda.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ContactForm />

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Info Kontak</CardTitle>
            <CardDescription>Anda juga bisa menghubungi kami melalui:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-muted-foreground">+62 812-3456-7890 (Placeholder)</p>
                <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    Chat via WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Instagram className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold text-lg">Instagram</h3>
                <p className="text-muted-foreground">@renproject (Placeholder)</p>
                 <Button asChild variant="outline" size="sm" className="mt-2">
                  <Link href="https://instagram.com/renproject" target="_blank" rel="noopener noreferrer">
                    Kunjungi Instagram
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-4">Jam Operasional</h3>
              <p className="text-muted-foreground">Senin - Sabtu: 09:00 - 17:00 WIB</p>
              <p className="text-muted-foreground">Minggu & Hari Libur: Tutup</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
