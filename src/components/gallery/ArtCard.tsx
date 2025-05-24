
import Image from 'next/image';
import type { GalleryItem } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link'; // Optional: if you want to link to a detail page

interface ArtCardProps {
  item: GalleryItem;
}

export default function ArtCard({ item }: ArtCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-card">
      <CardHeader className="p-0">
        <div className="aspect-[4/5] sm:aspect-square md:aspect-[4/5] relative w-full"> {/* Adjusted aspect ratio */}
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={item.imageHint || 'custom illustration'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1 line-clamp-2 text-primary">{item.title}</CardTitle>
        <Badge variant="secondary" className="mb-2 text-xs">{item.style}</Badge>
        <CardDescription className="text-sm line-clamp-3 text-muted-foreground">
          {item.description}
        </CardDescription>
      </CardContent>
      {/* Optional: Add a footer for actions, e.g., view details
      <CardFooter className="p-4 pt-0">
        <Link href={`/gallery/${item.id}`} passHref>
          <Button variant="outline" size="sm">Lihat Detail</Button>
        </Link>
      </CardFooter>
      */}
    </Card>
  );
}
