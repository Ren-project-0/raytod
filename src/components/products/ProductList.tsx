
"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Product, ProductCategory } from '@/types';
import { getProducts, getCategories } from '@/data/products'; // Updated import
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import CategoryFilter from './CategoryFilter';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProductList() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [allCategories, setAllCategories] = useState<ProductCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function fetchData() {
      setIsLoading(true);
      try {
        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setAllProducts(productsData);
        setAllCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
        // Handle error appropriately, e.g., show a toast
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (isLoading) return []; // Return empty or skeleton if still loading initial data
    return allProducts.filter(product => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearchTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory, allProducts, isLoading]);

  if (!mounted) {
    // Render skeleton or null during SSR to prevent hydration mismatch
    return (
      <div>
        <div className="mb-6">
          <Skeleton className="h-10 w-full md:w-1/2 lg:w-1/3" />
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {/* Placeholder for categories skeleton */}
          {['All', 'Kaos', 'Akrilik', 'Merchandise'].map(cat => <Skeleton key={cat} className="h-10 w-24" />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <Skeleton className="aspect-[4/3] w-full rounded-t-lg" />
              <div className="p-4 border border-t-0 rounded-b-lg">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-8 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <ProductSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {isLoading ? (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {Array.from({ length: 8 }).map((_, index) => (
           <div key={index} className="flex flex-col">
             <Skeleton className="aspect-[4/3] w-full rounded-t-lg" />
             <div className="p-4 border border-t-0 rounded-b-lg">
               <Skeleton className="h-6 w-3/4 mb-2" />
               <Skeleton className="h-4 w-1/4 mb-2" />
               <Skeleton className="h-4 w-full mb-1" />
               <Skeleton className="h-4 w-2/3 mb-4" />
               <Skeleton className="h-8 w-1/2" />
             </div>
           </div>
         ))}
       </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg col-span-full py-10">
          Tidak ada produk yang cocok dengan pencarian Anda.
        </p>
      )}
    </div>
  );
}
