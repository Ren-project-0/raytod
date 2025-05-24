
import ArtGallery from '@/components/gallery/ArtGallery';

export const metadata = {
  title: 'Galeri Karya - Ren Project Studio',
  description: 'Lihat portofolio ilustrasi custom dari Ren Project Studio. Temukan inspirasi untuk proyek Anda dari berbagai gaya seperti chibi, anime, digital painting, dan lainnya.',
};

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Galeri Karya Seni</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Jelajahi koleksi ilustrasi yang pernah kami buat. Dari karakter imut hingga lukisan digital mendetail.
        </p>
      </section>
      
      <ArtGallery />
    </div>
  );
}
