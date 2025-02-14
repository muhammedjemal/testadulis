import SlidingBanner2 from "@/components/slidingBanner2";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Benefits from "@/components/Benefits/Benefits";
import Pricing from "@/components/Pricing/Pricing";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import SlidingBanner from "@/components/VeryTop";
import Hero from "@/components/Hero";
import ExampleWrapper from "@/components/modalPrem";
import Link from "next/link";

const Home = () => {
    return (
        <>
              <SlidingBanner
        texts={[
          "Welcome to our site!",
          "Check out our deals!",
          "Get Christmas 20% off!",
          "Enjoy free shipping!",
          // tell the chrstimas 20 percent off in a good and marking english
        ]}
      />
      {/* <Header /> */}
      {/* <MobileNav /> */}
      <Hero />
      <div className="mt-5 w-full">
            {/* <VirtualTour panoData={data1} /> */}
             <Link href={"/vt"}>
            <button className="shadow-[inset_0_0_0_2px_#616467] w-full text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-orange-500 hover:text-white dark:text-neutral-200 transition duration-200">
 Try our immersive Gallery VT for Free 
</button>
             </Link>
          </div>

        <SlidingBanner2 />
        <Container>
        <Benefits />
        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>
        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>
        <FAQ />
        <Stats />
        {/* <CTA /> */}
      </Container>

      <ExampleWrapper/>
      </>

         );
  };
  
  export default Home;
  