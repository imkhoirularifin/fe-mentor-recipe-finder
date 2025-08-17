import Image from "next/image";

const contents = [
  {
    title: "Cut through the noise.",
    content:
      "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
  },
  {
    title: "Empower home kitchens.",
    content:
      "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    title: "Make healthy look good.",
    content:
      "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
  },
];

export default function WhyWeExistSection() {
  return (
    <section className="section-container gap-500 py-600 md:py-1000 lg:flex-row lg:gap-800 lg:py-1200">
      {/* title */}
      <h2 className="text-preset-2-mobile md:text-preset-2 w-full text-left lg:self-start">
        Why we exist
      </h2>

      {/* content */}
      <div className="flex flex-col items-center gap-300">
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
