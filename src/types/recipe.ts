export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: {
    large: string;
    small: string;
  };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
}

export interface RecipesResponse {
  recipes: Recipe[];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasMore: boolean;
    totalItems: number;
  };
}

export interface RecipeFilters {
  search?: string;
  maxPrepTime?: string;
  maxCookTime?: string;
}