import { NextRequest } from 'next/server';
import recipesData from '@/app/data.json';
import type { Recipe, RecipesResponse } from '@/types/recipe';

const ITEMS_PER_PAGE = 6;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const search = searchParams.get('search') || '';
  const maxPrepTime = searchParams.get('maxPrepTime');
  const maxCookTime = searchParams.get('maxCookTime');

  let filteredRecipes = [...recipesData] as Recipe[];

  // Filter by search (title or ingredients)
  if (search) {
    const searchLower = search.toLowerCase();
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchLower) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchLower)
      )
    );
  }

  // Filter by max prep time
  if (maxPrepTime && maxPrepTime !== '') {
    const maxPrep = parseInt(maxPrepTime);
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.prepMinutes <= maxPrep
    );
  }

  // Filter by max cook time
  if (maxCookTime && maxCookTime !== '') {
    const maxCook = parseInt(maxCookTime);
    filteredRecipes = filteredRecipes.filter(recipe => 
      recipe.cookMinutes <= maxCook
    );
  }

  // Pagination
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIndex, endIndex);
  
  const totalPages = Math.ceil(filteredRecipes.length / ITEMS_PER_PAGE);
  const hasMore = page < totalPages;

  const response: RecipesResponse = {
    recipes: paginatedRecipes,
    pagination: {
      currentPage: page,
      totalPages,
      hasMore,
      totalItems: filteredRecipes.length
    }
  };

  return Response.json(response);
}