import Image from "next/image";

export default function BeyondThePlateSection() {
  return (
    <section className="section-container gap-400 py-600 md:gap-500 md:py-1000 lg:flex-row lg:gap-800 lg:py-1200">
      <div className="flex flex-col gap-250 lg:w-[40%]">
        <h2 className="text-preset-2-mobile md:text-preset-2 w-full text-left">
          Beyond the plate
        </h2>
        <div className="flex flex-col gap-150">
          <p className="text-preset-6">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>

          <ul className="text-preset-6 list-disc space-y-3 pl-6">
            <li className="pl-2">
              Encourage family dinners and social cooking.
            </li>
            <li className="pl-2">
              Reduce reliance on single-use packaging and delivery waste.
            </li>
            <li className="pl-2">
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:h-[400px] lg:w-[60%]">
        <Image
          src={"/images/about-beyond-the-plate-small.webp"}
          alt={"Beyond the plate"}
          width={343}
          height={184}
          className="rounded-md object-cover md:hidden"
        />
        <Image
          src={"/images/about-beyond-the-plate-large.webp"}
          alt={"Beyond the plate"}
          width={600}
          height={600}
          className="hidden h-full w-full rounded-md object-cover md:block"
        />
      </div>
    </section>
  );
}
