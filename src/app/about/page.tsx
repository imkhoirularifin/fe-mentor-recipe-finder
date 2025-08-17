import OurMissionSection from "@/app/about/_components/our-mission-section";
import Navbar from "@/components/shared/navbar";
import WhyWeExistSection from "./_components/why-we-exist-section";
import OurFoodPhilosophySection from "./_components/our-food-section";

export default function About() {
  return (
    <div>
      <Navbar />
      <main>
        <OurMissionSection />
        <WhyWeExistSection />
        <OurFoodPhilosophySection />
      </main>
    </div>
  );
}
