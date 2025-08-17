import Image from "next/image";

const contents = [
  {
    title: "Whole ingredients first.",
    content:
      "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    title: "Flavor without compromise.",
    content:
      "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    title: "Respect for time.",
    content:
      "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
  },
  {
    title: "Sustainable choices.",
    content:
      "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

export default function OurFoodPhilosophySection() {
  return (
    <section className="section-container gap-500 py-600 md:py-1000 lg:flex-row lg:gap-800 lg:py-1200">
      {/* title */}
      <h2 className="text-preset-2-mobile md:text-preset-2 w-full text-left lg:w-1/3 lg:self-start">
        Our food philosophy
      </h2>

      {/* content */}
      <div className="flex flex-col items-center gap-300 lg:w-2/3">
        {/* content card */}
        {contents.map((content, index) => (
          <div key={index} className="flex flex-row gap-250">
            <Image
              src={"/icons/right-arrow.svg"}
              alt={"Bullet Point"}
              width={32}
              height={32}
              className="self-start"
            />
            <div className="flex flex-col gap-150">
              <h3 className="text-preset-4">{content.title}</h3>
              <p className="text-preset-6">{content.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
