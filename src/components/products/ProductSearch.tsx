"use client";

import type React from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

interface ProductSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export default function ProductSearch({ searchTerm, onSearchChange }: ProductSearchProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="relative mb-6">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={handleInputChange}
        className="pl-10 pr-4 py-2 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-sm"
        aria-label="Cari produk"
      />
    </div>
  );
}
