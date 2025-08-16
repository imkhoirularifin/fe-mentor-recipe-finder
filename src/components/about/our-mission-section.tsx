import Image from "next/image";

export default function OurMissionSection() {
  return (
    <section className="section-container mt-600 mb-800 gap-500 md:mt-800 md:mb-1000 md:gap-800 lg:mt-1000 lg:mb-1200 lg:flex-row">
      <div className="lg:w-1/2">
        <div className="mb-6 flex flex-col gap-6">
          <span className="text-preset-5 rounded-6 px-075 py-025 text-x-neutral-900 w-fit bg-orange-500">
            Our mission
          </span>
          <h1 className="text-preset-2-mobile md:text-preset-2">
            Help more people cook nourishing meals, more often.
          </h1>
        </div>

        <div className="text-preset-6 flex flex-col gap-200">
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
      </div>

      <Image
        src={"/images/image-about-our-mission-small.webp"}
        alt={"Our Mission Image"}
        width={343}
        height={333}
        className="w-full rounded-md shadow-md md:hidden"
      />
      <Image
        src={"/images/image-about-our-mission-large.webp"}
        alt={"Our Mission Image"}
        width={704}
        height={684}
        className="hidden w-full rounded-md shadow-md md:block lg:hidden"
      />
      <Image
        src={"/images/image-about-our-mission-large.webp"}
        alt={"Our Mission Image"}
        width={618}
        height={600}
        className="hidden w-full rounded-md shadow-md lg:block lg:w-1/2"
      />
    </section>
  );
}
