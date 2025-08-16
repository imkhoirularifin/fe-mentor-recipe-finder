import XButton from "../ui/x-button";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="section-container mt-800 md:mt-1000 lg:mt-1200">
      <div className="rounded-16 bg-x-neutral-200 relative flex w-full flex-col items-center gap-400 overflow-hidden px-200 py-600 md:gap-500 md:py-1000 lg:py-1200">
        {/* text */}
        <div className="z-10 flex flex-col items-center gap-150 text-center">
          <h2 className="text-preset-2-mobile">Ready to cook smarter?</h2>
          <p className="text-preset-6">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
        </div>

        {/* button */}
        <XButton variant={"normal"} className="z-10">
          Browse recipes
        </XButton>

        {/* illustration */}
        {/* md */}
        <Image
          src={"images/pattern-knife.svg"}
          alt={"Knife Illustration"}
          width={171}
          height={171}
          className="absolute top-[-50px] right-[-10px] hidden md:inline-block lg:hidden"
        />
        <Image
          src={"images/pattern-fork.svg"}
          alt={"Fork Illustration"}
          width={179}
          height={231}
          className="absolute top-[182px] left-[-48px] hidden md:inline-block lg:hidden"
        />
        {/* lg */}
        <Image
          src={"images/pattern-knife.svg"}
          alt={"Knife Illustration"}
          width={338}
          height={338}
          className="pointer-events-none absolute top-[24px] right-[-70px] hidden select-none lg:inline-block"
        />
        <Image
          src={"images/pattern-fork.svg"}
          alt={"Fork Illustration"}
          width={314}
          height={390}
          className="pointer-events-none absolute bottom-[-17] left-[-73px] hidden select-none lg:inline-block"
        />
      </div>
    </section>
  );
}
