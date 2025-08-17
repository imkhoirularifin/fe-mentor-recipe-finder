import Image from "next/image";

export default function RealLifeSection() {
  return (
    <section className="section-container gap-400 pt-800 md:gap-500 md:pt-1000 lg:flex-row lg:gap-600 lg:py-1200">
      <div className="flex flex-col gap-250">
        <h2 className="text-preset-2-mobile">Built for real life</h2>
        <p className="text-preset-6">
          Cooking shouldn't be complicated. These recipes come in under{" "}
          <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 -z-10 hidden h-1/2 w-full rounded-md bg-orange-500/45 md:inline-block" />
            <span className="text-preset-5">30 minutes</span>
          </span>{" "}
          of active time, fit busy schedules, and taste good enough to repeat.
        </p>
        <p className="text-preset-6">
          Whether you're new to the kitchen or just need fresh ideas, we've got
          you covered.
        </p>
      </div>

      <Image
        src={"/images/home-real-life-small.webp"}
        alt={"Real Life Section"}
        width={380}
        height={254}
        className="rounded-lg md:hidden"
      ></Image>
      <Image
        src={"/images/home-real-life-large.webp"}
        alt={"Real Life Section"}
        width={635}
        height={450}
        className="hidden w-full rounded-lg md:block"
      ></Image>
    </section>
  );
}
