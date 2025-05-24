
"use client";

import type { ArtStyle } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StyleFilterProps {
  styles: ArtStyle[];
  selectedStyle: ArtStyle | 'All';
  onSelectStyle: (style: ArtStyle | 'All') => void;
}

export default function StyleFilter({ styles, selectedStyle, onSelectStyle }: StyleFilterProps) {
  const allStyles: (ArtStyle | 'All')[] = ['All', ...styles];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {allStyles.map((style) => (
        <Button
          key={style}
          variant={selectedStyle === style ? 'default' : 'outline'}
          onClick={() => onSelectStyle(style)}
          className={cn(
            "transition-colors",
            selectedStyle === style ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground border-border text-foreground"
          )}
        >
          {style === 'All' ? 'Semua Gaya' : style}
        </Button>
      ))}
    </div>
  );
}
