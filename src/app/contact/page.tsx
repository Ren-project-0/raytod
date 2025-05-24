
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Kontak & Pesan Ilustrasi - Ren Project Studio',
  description: 'Hubungi Ren Project Studio untuk memesan ilustrasi custom, bertanya tentang layanan, atau memesan produk merchandise. Kami siap membantu!',
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Kontak & Pemesanan</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Siap untuk memulai proyek ilustrasi Anda atau punya pertanyaan? Jangan ragu untuk menghubungi kami melalui formulir atau kanal di bawah ini.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ContactForm />

        <Card className="shadow-lg bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Info Kontak Lain</CardTitle>
            <CardDescription>Anda juga bisa menghubungi kami melalui:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
              <MessageCircle className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">WhatsApp</h3>
                <p className="text-muted-foreground">+62 812-3456-7890 (Placeholder)</p>
                <Button asChild variant="outline" size="sm" className="mt-2 border-primary text-primary hover:bg-primary/10">
                  <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    Chat via WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
              <Instagram className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Instagram</h3>
                <p className="text-muted-foreground">@renproject.studio (Placeholder)</p>
                 <Button asChild variant="outline" size="sm" className="mt-2 border-primary text-primary hover:bg-primary/10">
                  <Link href="https://instagram.com/renproject.studio" target="_blank" rel="noopener noreferrer">
                    Kunjungi Instagram
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:shadow-md transition-shadow">
              <Mail className="h-8 w-8 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-foreground">Email</h3>
                <p className="text-muted-foreground">info@renproject.studio (Placeholder)</p>
                 <Button asChild variant="outline" size="sm" className="mt-2 border-primary text-primary hover:bg-primary/10">
                  <Link href="mailto:info@renproject.studio">
                    Kirim Email
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mt-6 text-foreground">Jam Operasional Studio</h3>
              <p className="text-muted-foreground">Senin - Jumat: 09:00 - 17:00 WIB</p>
              <p className="text-muted-foreground">Sabtu, Minggu & Hari Libur: Tutup (diskusi via chat/email tetap dilayani)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
