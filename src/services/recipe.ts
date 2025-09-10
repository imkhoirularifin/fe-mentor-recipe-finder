import type {
    RecipesResponse,
    RecipeFilters,
} from '@/types/recipe';

interface RecipeQueryParams extends RecipeFilters {
    page?: number;
}

// Recipe API service
export const recipeService = {
    // Get recipes with filtering and pagination
    getRecipes: async (
        params?: RecipeQueryParams
    ): Promise<RecipesResponse> => {
        const searchParams = new URLSearchParams();

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                if (value !== undefined && value !== null && value !== '') {
                    searchParams.append(key, String(value));
                }
            });
        }

        const queryString = searchParams.toString();
        const endpoint = `/api/recipes${queryString ? `?${queryString}` : ''}`;

        const response = await fetch(endpoint);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.statusText}`);
        }
        
        return response.json() as Promise<RecipesResponse>;
    },
};