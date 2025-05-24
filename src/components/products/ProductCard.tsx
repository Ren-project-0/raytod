import Image from 'next/image';
import type { Product } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={product.imageHint || 'product image'}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg mb-1 line-clamp-2">{product.name}</CardTitle>
        <Badge variant="outline" className="mb-2">{product.category}</Badge>
        <CardDescription className="text-sm line-clamp-3">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <p className="text-lg font-semibold text-accent">{formattedPrice}</p>
      </CardFooter>
    </Card>
  );
}
