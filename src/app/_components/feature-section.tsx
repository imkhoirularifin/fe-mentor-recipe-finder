import FeatureCard from "./feature-card";

const features = [
  {
    icon: "/icons/whole-food-recipes.svg",
    iconAlt: "Icon Carrot",
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon: "/icons/minimum-fuss.svg",
    iconAlt: "Icon Flash",
    title: "Minimum fuss",
    description:
      "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon: "/icons/search-in-seconds.svg",
    iconAlt: "Icon Search",
    title: "Search in seconds",
    description:
      "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

export default function FeatureSection() {
  return (
    <section className="section-container gap-400 pt-800 md:gap-600 md:py-1000 lg:py-1200">
      <h2 className="text-preset-2-mobile self-stretch lg:text-center">
        What you'll get
      </h2>

      {/* features */}
      <div className="flex w-full flex-col items-center gap-300 lg:flex-row lg:gap-400">
        {/* feature card */}
        {features.map((feat, index) => (
          <FeatureCard
            key={index}
            icon={feat.icon}
            iconAlt={feat.iconAlt}
            title={feat.title}
            description={feat.description}
          />
        ))}
      </div>
    </section>
  );
}
