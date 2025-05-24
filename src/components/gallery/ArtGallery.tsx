
"use client";

import { useState, useMemo, useEffect } from 'react';
import type { GalleryItem, ArtStyle } from '@/types';
import { galleryItems as allArtItems, artStyles as allArtStyles } from '@/data/gallery';
import ArtCard from './ArtCard';
import StyleFilter from './StyleFilter';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ArtGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<ArtStyle | 'All'>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); 
    return () => clearTimeout(timer);
  }, []);

  const filteredArtItems = useMemo(() => {
    return allArtItems.filter(item => {
      const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStyle = selectedStyle === 'All' || item.style === selectedStyle;
      return matchesSearchTerm && matchesStyle;
    });
  }, [searchTerm, selectedStyle]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  if (!mounted) {
     // Render skeleton or null during SSR to prevent hydration mismatch
    return (
      <div>
        <div className="relative mb-6">
          <Skeleton className="h-10 w-full md:w-1/2 lg:w-1/3" />
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', ...allArtStyles].map(cat => <Skeleton key={cat} className="h-10 w-24" />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="aspect-[4/5] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-3/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }


  return (
    <div>
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Cari karya seni..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pl-10 pr-4 py-2 w-full md:w-1/2 lg:w-1/3 rounded-md shadow-sm bg-card"
          aria-label="Cari karya seni"
        />
      </div>
      <StyleFilter
        styles={allArtStyles}
        selectedStyle={selectedStyle}
        onSelectStyle={setSelectedStyle}
      />
      {isLoading ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
             <div key={index} className="flex flex-col space-y-3">
               <Skeleton className="aspect-[4/5] w-full rounded-xl" />
               <div className="space-y-2 p-2">
                 <Skeleton className="h-4 w-4/5" />
                 <Skeleton className="h-4 w-1/4" />
                 <Skeleton className="h-4 w-3/5" />
               </div>
             </div>
           ))}
        </div>
      ) : filteredArtItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredArtItems.map(item => (
            <ArtCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">Tidak ada karya yang cocok dengan kriteria Anda.</p>
          <p className="text-sm text-muted-foreground mt-2">Coba kata kunci atau filter gaya yang berbeda.</p>
        </div>
      )}
    </div>
  );
}
