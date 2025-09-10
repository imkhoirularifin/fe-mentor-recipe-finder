import { useInfiniteQuery } from '@tanstack/react-query';
import { recipeService } from '@/services/recipe';
import type { RecipeFilters } from '@/types/recipe';

// Query keys
export const recipeKeys = {
    all: ['recipes'] as const,
    lists: () => [...recipeKeys.all, 'list'] as const,
    list: (filters?: RecipeFilters) => [...recipeKeys.lists(), filters] as const,
    details: () => [...recipeKeys.all, 'detail'] as const,
    detail: (id: string) => [...recipeKeys.details(), id] as const,
};

// Get recipes with infinite scroll, filtering and pagination
export const useRecipes = (filters: RecipeFilters) => {
    return useInfiniteQuery({
        queryKey: recipeKeys.list(filters),
        queryFn: async ({ pageParam = 1 }) => {
            return recipeService.getRecipes({
                ...filters,
                page: pageParam,
            });
        },
        getNextPageParam: (lastPage) => {
            return lastPage.pagination.hasMore 
                ? lastPage.pagination.currentPage + 1 
                : undefined;
        },
        initialPageParam: 1,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    });
};