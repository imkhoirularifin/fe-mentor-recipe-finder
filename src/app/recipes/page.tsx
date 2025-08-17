import Navbar from "@/components/shared/navbar";
import RecipeHeroSection from "./_components/recipe-hero";
import Footer from "@/components/shared/footer";
import RecipeListSection from "./_components/recipe-list";

export default function Recipes() {
  return (
    <div>
      <Navbar />
      <main>
        <RecipeHeroSection />
        <RecipeListSection />
      </main>
      <Footer />
    </div>
  );
}
