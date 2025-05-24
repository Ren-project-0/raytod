
import { Skeleton } from "@/components/ui/skeleton";
import { artStyles } from "@/data/gallery";

export default function LoadingGallery() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <Skeleton className="h-10 w-3/5 md:w-2/5 mx-auto mb-2" />
        <Skeleton className="h-6 w-4/5 md:w-3/5 mx-auto" />
      </section>
      
      <div>
        <div className="relative mb-6">
          <Skeleton className="h-10 w-full md:w-1/2 lg:w-1/3" />
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {['All', ...artStyles].map(cat => <Skeleton key={cat} className="h-10 w-24 rounded-md" />)}
        </div>
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
      </div>
    </div>
  );
}
