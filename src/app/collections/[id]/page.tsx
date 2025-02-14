"use client";
import Hero from "@/components/Hero32";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Header from "@/components/navDesktop2";
import MobileNav from "@/components/mobilenav3";
import SlidingBanner from "@/components/VeryTop";
import SlidingBanner2 from "@/components/slidingBanner23";
import ProductGrid from "@/components/Products";
import ArtistBio from "@/components/ArtistBio";
import { usePathname } from "next/navigation";

const HomePage: React.FC = () => {
  const pathname = usePathname();
  const prodName = pathname.split("/").pop();

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
      <Header />
      {/* <MobileNav /> */}
      <Hero prodName={prodName} />
      <ArtistBio prodName={prodName} />
    </>
  );
};

export default HomePage;
