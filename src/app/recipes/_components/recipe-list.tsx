import RecipeCards from "./recipe-cards";
import RecipeFilter from "./recipe-filter";

export default function RecipeListSection() {
  return (
    <section>
      {/* recipe filter */}
      <RecipeFilter />

      {/* recipe cards */}
      <RecipeCards />
    </section>
  );
}
