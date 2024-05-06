import {
  Contact,
  Hero,
  Location,
  OurApproach,
  Services,
  WhyChooseUs,
} from "./(modules)/home/components";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurApproach />
      <WhyChooseUs />
      <Contact />
      <Location />
    </>
  );
}
