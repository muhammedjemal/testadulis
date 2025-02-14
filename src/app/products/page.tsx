// "use client";
// import Hero from "@/components/Hero3";
// import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing/Pricing";
// import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
// import Benefits from "@/components/Benefits/Benefits";
// import Container from "@/components/Container";
// import Section from "@/components/Section";
// import Stats from "@/components/Stats";
// import CTA from "@/components/CTA";
// import Header from "@/components/navDesktop3";
// import MobileNav from "@/components/mobilenav3";
// import SlidingBanner from "@/components/VeryTop";
// import SlidingBanner2 from "@/components/slidingBanner23";
// import ProductGrid from "@/components/Products";
// import Image from "next/image";
// import { useState } from "react";

// const HomePage: React.FC = () => {
//   const [oneHovered, setOneHovered] = useState(false);

//   const oneHandleMouseEnter1 = () => {
//     setOneHovered(true);
//   };

//   const oneHandleMouseLeave1 = () => {
//     setOneHovered(false);
//   };
//   const [twoHovered, setTwoHovered] = useState(false);

//   const twoHandleMouseEnter2 = () => {
//     setTwoHovered(true);
//   };

//   const twoHandleMouseLeave2 = () => {
//     setTwoHovered(false);
//   };
//   const [threeHovered, setThreeHovered] = useState(false);

//   const threeHandleMouseEnter3 = () => {
//     setThreeHovered(true);
//   };

//   const threeHandleMouseLeave3 = () => {
//     setThreeHovered(false);
//   };
//   return (
//     <>
//       <SlidingBanner
//         texts={[
//           "Welcome to our site!",
//           "Check out our deals!",
//           "Get Christmas 20% off!",
//           "Enjoy free shipping!",
//           // tell the chrstimas 20 percent off in a good and marking english
//         ]}
//       />
//       <Header />
//       <MobileNav />

//       <Hero />
//       <SlidingBanner2 />
//       <div className=" py-16 font-sans">
//         <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Product 1 */}
//           <div className="flex flex-col items-center">
//             <div
//               className="w-full h-72 relative overflow-hidden rounded"
//               onMouseEnter={oneHandleMouseEnter1}
//               onMouseLeave={oneHandleMouseLeave1}
//             >
//               <Image
//                 src={oneHovered ? "/images/1/1.jpg" : "/images/1/2.jpg"} // Replace with your image path
//                 alt="Abstract Canvas Art"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="mt-4 text-center">
//               <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
//                 Art number 1
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div className="flex flex-col items-center">
//             <div
//               className="w-full h-72 relative overflow-hidden rounded"
//               onMouseEnter={twoHandleMouseEnter2}
//               onMouseLeave={twoHandleMouseLeave2}
//             >
//               <Image
//                 src={twoHovered ? "/images/2/1.jpg" : "/images/2/2.jpg"} // Replace with your image path
//                 alt="Abstract Canvas Art"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="mt-4 text-center">
//               <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
//                 Art Number 2
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div className="flex flex-col items-center">
//             <div
//               className="w-full h-72 relative overflow-hidden rounded"
//               onMouseEnter={threeHandleMouseEnter3}
//               onMouseLeave={threeHandleMouseLeave3}
//             >
//               <Image
//                 src={threeHovered ? "/images/3/1.jpg" : "/images/3/2.jpg"} // Replace with your image path
//                 alt="Abstract Canvas Art"
//                 fill
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="mt-4 text-center">
//               <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
//                 Art Number 3
//               </h3>
//               <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
"use client";
import Hero from "@/components/Hero3";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Header from "@/components/navDesktop3";
import MobileNav from "@/components/mobilenav3";
import SlidingBanner from "@/components/VeryTop";
import SlidingBanner2 from "@/components/slidingBanner23";
import ProductGrid from "@/components/Products";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FlipWordsDemo } from "@/components/ui/Steps";
import LensDemo from "@/components/offerCard";
import { Poppins } from "@next/font/google";
import LensDemoMaster1 from "@/components/offerCardMaster1";
import LensDemoMaster2 from "@/components/offerCardMaster2";
import LensDemoMaster3 from "@/components/offerCardMaster3";
import LensDemoOffer1 from "@/components/offerCardOffer3";
import LensDemoOffer2 from "@/components/offerCardOffer2";
const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
  const [oneHovered, setOneHovered] = useState(false);

  const oneHandleMouseEnter1 = () => setOneHovered(true);
  const oneHandleMouseLeave1 = () => setOneHovered(false);

  const [twoHovered, setTwoHovered] = useState(false);
  const twoHandleMouseEnter2 = () => setTwoHovered(true);
  const twoHandleMouseLeave2 = () => setTwoHovered(false);

  const [threeHovered, setThreeHovered] = useState(false);
  const threeHandleMouseEnter3 = () => setThreeHovered(true);
  const threeHandleMouseLeave3 = () => setThreeHovered(false);

  return (
    <>
      <SlidingBanner
        texts={[
          "Welcome to our site!",
          "Check out our deals!",
          "Get Christmas 20% off!",
          "Enjoy free shipping!",
        ]}
      />
      <div className="hidden md:block">{/* <Header /> */}</div>
      <div className="md:hidden">{/* <MobileNav /> */}</div>

      <Hero />
      <SlidingBanner2 />
      <FlipWordsDemo />

      <div className="py-16 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={oneHandleMouseEnter1}
              onMouseLeave={oneHandleMouseLeave1}
            >
              <Link href={"/products/1"}>
                <Image
                  src={oneHovered ? "/images/1/1.webp" : "/images/1/2.webp"}
                  alt="Abstract Canvas Art"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="mt-4 text-center">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              Sacred Procession
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={twoHandleMouseEnter2}
              onMouseLeave={twoHandleMouseLeave2}
            >
              <Link href={"/products/2"}>
                <Image
                  src={twoHovered ? "/images/2/1.webp" : "/images/2/3.webp"}
                  alt="Abstract Canvas Art"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="mt-4 text-center">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              Ethiopia as the Mother of Africa
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={threeHandleMouseEnter3}
              onMouseLeave={threeHandleMouseLeave3}
            >
              <Link href={"/products/3"}>
                <Image
                  src={threeHovered ? "/images/3/1.webp" : "/images/3/2.webp"}
                  alt="Abstract Canvas Art"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="mt-4 text-center">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              The Journey for Water
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 656.00</p>
            </div>
          </div>
        </div>
      </div>      
       {/* <Logos /> */}
      <h1 className={`pl-48 text-3xl hidden md:block mt-10 ${poppins.className}`}>Special Offers</h1>
      <h1 className={`pl-7 text-3xl  md:hidden mt-10 ${poppins.className}`}>Special Offers</h1>

      <div className="md:flex md:px-32 px-5 md:w-screen md:justify-center md:gap-5">

<LensDemoOffer1 />
<LensDemoOffer2 />
<LensDemo />
</div>
       {/* <Logos /> */}
       <h1 className={`pl-48 text-3xl hidden md:block mt-10 ${poppins.className}`}>Special Offer Master works</h1>
      <h1 className={`pl-7 text-xl  md:hidden mt-10 ${poppins.className}`}>Special Offer Master works</h1>

      <div className="md:flex md:px-32 px-5 md:w-screen md:justify-center md:gap-5">
 
<LensDemoMaster1 />
<LensDemoMaster2 />
<LensDemoMaster3 />
</div>

    </>
  );
};

export default HomePage;
