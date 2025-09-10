"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Clock, Users } from 'lucide-react';
import { useRecipes } from '@/queries/recipes';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { RecipeFilters } from '@/types/recipe';

export default function RecipeCards() {
  const searchParams = useSearchParams();
  
  const filters: RecipeFilters = {
    search: searchParams.get('search') || '',
    maxPrepTime: searchParams.get('maxPrepTime') || '',
    maxCookTime: searchParams.get('maxCookTime') || '',
  };
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRecipes(filters);

  const loadMoreRef = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    enabled: hasNextPage && !isFetchingNextPage,
  });

  if (isError) {
    return (
      <div className="mx-auto max-w-7xl px-200 py-400 text-center md:px-250">
        <div className="text-preset-4 text-x-neutral-900 mb-200">
          Failed to load recipes
        </div>
        <div className="text-preset-7 text-x-neutral-500">
          {error instanceof Error ? error.message : 'Something went wrong'}
        </div>
      </div>
    );
  }

  const allRecipes = data?.pages.flatMap(page => page.recipes) || [];
  const totalItems = data?.pages[0]?.pagination.totalItems || 0;

  if (!isLoading && allRecipes.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-200 py-400 text-center md:px-250">
        <div className="text-preset-4 text-x-neutral-900 mb-200">
          No recipes found
        </div>
        <div className="text-preset-7 text-x-neutral-500">
          Try adjusting your search or filter criteria
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-200 pb-400 md:px-250">
      <div className="grid gap-300 md:grid-cols-2 lg:grid-cols-3">
        {allRecipes.map((recipe) => (
          <article key={recipe.id} className="group">
            <Link href={`/recipes/${recipe.id}`}>
              <div className="rounded-12 overflow-hidden mb-200 relative aspect-[4/3] bg-x-neutral-100">
                <Image
                  src={recipe.image.small}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="space-y-100">
                <h3 className="text-preset-4 text-x-neutral-900 font-semibold group-hover:text-orange-500 transition-colors">
                  {recipe.title}
                </h3>
                
                <p className="text-preset-7 text-x-neutral-500 line-clamp-2">
                  {recipe.overview}
                </p>
                
                <div className="flex items-center gap-300 text-preset-8 text-x-neutral-600">
                  <div className="flex items-center gap-100">
                    <Users className="h-4 w-4" />
                    <span>Servings {recipe.servings}</span>
                  </div>
                  
                  <div className="flex items-center gap-100">
                    <Clock className="h-4 w-4" />
                    <span>Prep: {recipe.prepMinutes} mins</span>
                  </div>
                  
                  <div className="flex items-center gap-100">
                    <Clock className="h-4 w-4" />
                    <span>Cook: {recipe.cookMinutes} mins</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {isFetchingNextPage && (
        <div className="flex justify-center py-400">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
        </div>
      )}

      {hasNextPage && (
        <div ref={loadMoreRef} className="h-10 w-full" />
      )}

      <div className="text-center py-300">
        <p className="text-preset-7 text-x-neutral-500">
          Showing {allRecipes.length} of {totalItems} recipes
        </p>
      </div>
    </div>
  );
}
