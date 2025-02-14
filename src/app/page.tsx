import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Header from "@/components/navDesktop";
import MobileNav from "@/components/mobilenav";
import SlidingBanner from "@/components/VeryTop";
import SlidingBanner2 from "@/components/slidingBanner2";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FlipWordsDemo } from "@/components/ui/Steps";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import FocusCardsDemo from "@/components/focusCards";
import { Lexend, Poppins } from "@next/font/google";
import LensDemo from "@/components/offerCard";
import TrustpilotFallback from "@/components/trustpilot";
import IconTextBanner from "@/components/bnr";
import ExampleWrapper from "@/components/modal";
import LensDemoMaster3 from "@/components/offerCardMaster3";
import LensDemoMaster2 from "@/components/offerCardMaster2";
import LensDemoMaster1 from "@/components/offerCardMaster1";
import LensDemoOffer2 from "@/components/offerCardOffer2";
import LensDemoOffer1 from "@/components/offerCardOffer3";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});
const poppins2 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
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
      {/* <FocusCardsDemo/> */}
      <div>
      <h1 className={`pl-48 text-3xl hidden md:block mt-10 ${poppins.className}`}>Our Products</h1>
      </div>
          <div className="h-[40rem] relative  hidden items-center justify-center md:gap-5 gap-1 md:flex-row flex-col w-screen mt-5 md:-mt-24 md:flex">
      <DirectionAwareHover imageUrl={"/images/2/1.webp"}>
        <p className="font-bold text-xl">Ethiopia as the Mother of Africa</p>
        <p className="font-normal text-sm">$1100</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={"/images/3.jpg"}>
        <p className="font-bold text-xl">The Journey for Water</p>
        <p className="font-normal text-sm">$1299</p>
      </DirectionAwareHover>
      <DirectionAwareHover imageUrl={"/images/2.jpg"}>
        <p className="font-bold text-xl">Sacred Procession</p>
         <p className="font-normal text-sm">$1200</p>
      </DirectionAwareHover>


     </div>
     <h1 className={`pl-5 text-3xl md:hidden mt-10 ${poppins.className}`}>Our Products</h1>
    <div className="h-[20rem] relative px-5 flex  items-center justify-center md:gap-5 gap-3  w-screen mt-5 md:-mt-24 md:hidden">
      
      <div className="">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299</p>
      </DirectionAwareHover>
      <h1 className={` text-md  md:hidden  ${poppins2.className}`}>art num1</h1>
      <h5>
        $500
      </h5>
        </div>
        <div>
      <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299</p>
      </DirectionAwareHover>
      <h1 className={` text-md  md:hidden  ${poppins2.className}`}>art num2</h1>
      <h5>
        $600
      </h5>
        </div>
    </div>
    <div className="h-[20rem] relative px-5 flex  items-center justify-center md:gap-5 gap-3  w-screen mt-5 md:-mt-24 md:hidden">
      
      <div className="">
        <DirectionAwareHover imageUrl={"https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">$1299</p>
      </DirectionAwareHover>
      <h1 className={` text-md  md:hidden  ${poppins2.className}`}>art num1</h1>
      <h5>
        $500
      </h5>
        </div>
    </div>
    <div>
    </div>

      {/* <secial /> */}
      <h1 className={`pl-48 text-3xl hidden md:block mt-10 ${poppins.className}`}>Special Offers</h1>
      <h1 className={`pl-7 text-3xl  md:hidden mt-10 ${poppins.className}`}>Special Offers</h1>

      <div className="md:flex md:px-32 px-5 md:w-screen md:justify-center md:gap-5">

<LensDemoOffer1 />
<LensDemoOffer2 />
<LensDemo />
</div>
      {/* <secial /> */}
      <h1 className={`pl-48 text-3xl hidden md:block mt-10 ${poppins.className}`}>Special Offer Master Works</h1>
      <h1 className={`pl-7 text-3xl  md:hidden mt-10 ${poppins.className}`}>Special Offer Master Works</h1>

      <div className="md:flex md:px-32 px-5 md:w-screen md:justify-center md:gap-5">

<LensDemoMaster1 />
<LensDemoMaster2 />
<LensDemoMaster3 />
</div>

<IconTextBanner />

<div className="md:px-[650px] md:py-10 px-[90px] py-5">

<TrustpilotFallback />
</div>
<ExampleWrapper />
    </>
  );
};

export default HomePage;
