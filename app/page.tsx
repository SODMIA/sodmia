import Hero from "./(modules)/home/components/Hero";
import OurApproach from "./(modules)/home/components/OurApproach";
import Services from "./(modules)/home/components/Services";
import WhyChooseUs from "./(modules)/home/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurApproach />
      <WhyChooseUs />
    </>
  );
}
