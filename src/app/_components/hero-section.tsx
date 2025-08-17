import Image from "next/image";
import XButton from "../../components/ui/x-button";

export default function HeroSection() {
  return (
    <section className="section-container gap-500 pt-600 lg:gap-1000 lg:pt-1000">
      {/* top */}
      <div className="flex flex-col items-start gap-400">
        <div className="flex flex-col items-start gap-200">
          <h1 className="text-preset-1-mobile md:text-preset-1-tablet lg:text-preset-1">
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-md bg-orange-500/45" />
              Healthy
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-preset-6 self-center lg:w-[580px] lg:text-center">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
        </div>

        <XButton variant={"normal"} className="lg:self-center">
          Start exploring
        </XButton>
      </div>

      {/* bottom */}
      <Image
        src={"/images/home-hero-small.webp"}
        alt={"Hero Section"}
        width={345}
        height={230}
        className="w-full rounded-lg border-4 border-white md:hidden"
      />
      <Image
        src={"/images/home-hero-large.webp"}
        alt={"Hero Section"}
        width={704}
        height={350}
        className="hidden w-full rounded-lg border-4 border-white md:block"
      />
    </section>
  );
}
