"use client";

import type { ProductCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | 'All';
  onSelectCategory: (category: ProductCategory | 'All') => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const allCategories: (ProductCategory | 'All')[] = ['All', ...categories];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {allCategories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "transition-colors",
            selectedCategory === category ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {category === 'All' ? 'Semua Kategori' : category}
        </Button>
      ))}
    </div>
  );
}
