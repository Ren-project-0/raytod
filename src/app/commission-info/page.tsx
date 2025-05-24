
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, HelpCircle, ShoppingCart, Edit3 } from 'lucide-react';

export const metadata = {
  title: 'Info Komisi Ilustrasi - Ren Project Studio',
  description: 'Pesan ilustrasi custom di Ren Project Studio. Pelajari cara order, tipe ilustrasi, daftar harga, dan FAQ seputar jasa commission art kami.',
};

const commissionTypes = [
  { 
    name: "Chibi Karakter", 
    priceRange: "Mulai dari Rp 150.000", 
    description: "Karakter full body dengan style chibi yang imut. Cocok untuk avatar, stiker, atau hadiah." ,
    details: ["Revisi minor 2x", "Background simpel/transparan", "File PNG/JPG resolusi tinggi"]
  },
  { 
    name: "Anime Style Bust-Up", 
    priceRange: "Mulai dari Rp 250.000", 
    description: "Ilustrasi karakter dari kepala hingga dada dengan gaya anime.",
    details: ["Revisi minor 2x", "Background simpel/warna solid", "File PNG/JPG resolusi tinggi"]
  },
  { 
    name: "Anime Style Half-Body", 
    priceRange: "Mulai dari Rp 400.000", 
    description: "Ilustrasi karakter dari kepala hingga pinggang/paha dengan gaya anime.",
    details: ["Revisi minor 2x", "Background simpel/abstrak", "File PNG/JPG resolusi tinggi"]
  },
  { 
    name: "Anime Style Full-Body", 
    priceRange: "Mulai dari Rp 600.000", 
    description: "Ilustrasi karakter seluruh badan dengan gaya anime, pose dinamis.",
    details: ["Revisi minor 2x", "Background simpel/abstrak", "File PNG/JPG + source file (PSD/CLIP)"]
  },
  { 
    name: "Digital Painting (Potrait/Karakter)", 
    priceRange: "Mulai dari Rp 800.000", 
    description: "Lukisan digital semi-realis atau stylised untuk potret atau karakter.",
    details: ["Revisi minor 3x", "Diskusi detail konsep", "File PNG/JPG resolusi tinggi + source file (PSD/CLIP)"]
  },
  { 
    name: "Desain Merchandise (Maskot/Logo)", 
    priceRange: "Hubungi untuk diskusi", 
    description: "Desain vector untuk maskot, logo, atau grafis merchandise lainnya.",
    details: ["Diskusi kebutuhan branding", "Beberapa opsi konsep awal", "File vector (AI/SVG/EPS) & PNG/JPG"]
  },
];

const faqs = [
  {
    question: "Bagaimana cara memesan ilustrasi?",
    answer: "Anda bisa mengisi formulir di halaman Kontak, atau langsung menghubungi kami via WhatsApp/Email dengan detail brief Anda. Kami akan mendiskusikan konsep, harga, dan timeline."
  },
  {
    question: "Format file apa yang akan saya dapatkan?",
    answer: "Umumnya Anda akan mendapatkan file PNG atau JPG resolusi tinggi. Untuk beberapa tipe komisi seperti full-body anime atau digital painting, source file (PSD/CLIP) bisa disertakan. Untuk desain vector, file AI/SVG/EPS akan diberikan."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Estimasi waktu pengerjaan bervariasi tergantung kompleksitas dan antrian, biasanya antara 7-21 hari kerja setelah konfirmasi pembayaran. Kami akan informasikan estimasi lebih akurat saat diskusi."
  },
  {
    question: "Apakah saya boleh menggunakan ilustrasi untuk keperluan komersial?",
    answer: "Penggunaan komersial (misalnya untuk dijual kembali, branding utama bisnis) biasanya memiliki biaya tambahan. Mohon diskusikan kebutuhan Anda agar kami bisa memberikan penawaran yang sesuai."
  },
  {
    question: "Berapa kali revisi yang diizinkan?",
    answer: "Jumlah revisi minor (perubahan kecil seperti warna, detail kecil) biasanya 2-3 kali, tergantung tipe komisi. Revisi mayor (perubahan besar pada pose, konsep dasar) setelah sketsa disetujui mungkin dikenakan biaya tambahan."
  }
];

export default function CommissionInfoPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
          <Edit3 className="h-8 w-8 text-accent" /> Info Komisi Ilustrasi
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Wujudkan ide dan karakter impian Anda menjadi karya seni digital yang unik dan personal.
        </p>
      </section>

      <Card className="shadow-lg border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-2"><ShoppingCart className="h-6 w-6"/>Cara Memesan Ilustrasi</CardTitle>
          <CardDescription>Ikuti langkah-langkah mudah berikut untuk memesan karya kustom Anda.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ol className="list-decimal list-inside space-y-3 text-foreground">
            <li><strong className="font-semibold">Hubungi Kami:</strong> Isi formulir di halaman <Link href="/contact" className="text-accent hover:underline">Kontak</Link>, atau chat via WhatsApp/Email dengan ide dan referensi Anda.</li>
            <li><strong className="font-semibold">Diskusi Konsep:</strong> Kami akan membahas detail brief, gaya ilustrasi, ukuran, dan kebutuhan spesifik lainnya.</li>
            <li><strong className="font-semibold">Penawaran & Pembayaran:</strong> Setelah konsep disepakati, kami akan memberikan penawaran harga. Pembayaran DP (biasanya 50%) diperlukan untuk memulai pengerjaan.</li>
            <li><strong className="font-semibold">Proses Kreatif & Revisi:</strong> Kami akan mengirimkan sketsa awal untuk persetujuan. Setelah sketsa disetujui, proses pewarnaan dan detailing dimulai. Revisi minor bisa dilakukan sesuai kesepakatan.</li>
            <li><strong className="font-semibold">Finalisasi & Pengiriman:</strong> Setelah ilustrasi selesai dan sisa pembayaran dilunasi, kami akan mengirimkan file final resolusi tinggi melalui email atau link download.</li>
          </ol>
          <div className="text-center mt-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Pesan Sekarang</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Tipe Ilustrasi & Estimasi Harga</CardTitle>
          <CardDescription>Berikut adalah beberapa tipe layanan ilustrasi yang kami tawarkan beserta estimasi harganya. Harga dapat disesuaikan tergantung kompleksitas.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {commissionTypes.map((type) => (
            <div key={type.name} className="p-4 border border-border rounded-lg bg-background shadow-sm">
              <h3 className="text-xl font-semibold text-accent">{type.name}</h3>
              <p className="text-lg font-medium text-primary">{type.priceRange}</p>
              <p className="text-muted-foreground text-sm mt-1 mb-2">{type.description}</p>
              <ul className="list-disc list-inside text-sm text-foreground space-y-1 pl-4">
                {type.details.map(detail => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          ))}
          <p className="text-sm text-muted-foreground italic text-center">Harga di atas adalah estimasi dan dapat berubah tergantung tingkat kesulitan, jumlah karakter, detail background, dan penggunaan komersial. Hubungi kami untuk penawaran yang lebih akurat.</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg border-border bg-card">
        <CardHeader>
          <CardTitle className="text-2xl text-primary flex items-center gap-2"><HelpCircle className="h-6 w-6" />Pertanyaan Umum (FAQ)</CardTitle>
          <CardDescription>Jawaban untuk pertanyaan yang sering diajukan seputar jasa ilustrasi kami.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left hover:no-underline text-foreground hover:text-accent">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
