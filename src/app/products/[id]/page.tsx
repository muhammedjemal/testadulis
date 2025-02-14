"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import Image from "next/image";
import SlidingBanner from "@/components/VeryTop";
import Header from "@/components/navDesktop2";
import MobileNav from "@/components/mobilenav3";
import Hero from "@/components/Hero4";
import MyCartCheckout from "@/components/addcart";
import CartMessage from "@/components/CartMessage";
import ShareButton from "@/components/ShareButton";
import FAQ from "@/components/FAQ2";
import AboutArtistBanner from "@/components/ArtistBanner";
import ProductGrid from "@/components/Products";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ImageWithModal from "@/components/ImageOpen";
import { motion } from "framer-motion";
import NumberSelect from "@/components/NumberSelect";
import DropdownWrapper from "@/components/WrapHeaight";
import { usePathname } from "next/navigation";
import { Lexend, Poppins } from "@next/font/google";
import Link from "next/link";
import ReviewDropdown from "@/components/ReviewPopUp2";
import { createPopper } from "@popperjs/core";
import ScrollButton from "@/components/scrollBtn";
import { useGesture } from "react-use-gesture";
import ZoomableImage from "@/components/ZoomableImage";
import VirtualTour from "@/components/360/1";
import data1 from "@/components/360/data.json";
import CarouselDemo from "@/components/sideSlide";

// import { useDoubleTap } from "use-double-tap";
const poppinis = Poppins({
  weight: "400",
   subsets: ["latin"],

  // bold
});
const poppins = Lexend({ weight: "600", subsets: ["latin"] });

const App: React.FC = () => {
  const [oneHovered, setOneHovered] = useState(false);

  const oneHandleMouseEnter1 = () => setOneHovered(true);
  const oneHandleMouseLeave1 = () => setOneHovered(false);

  const [twoHovered, setTwoHovered] = useState(false);
  const twoHandleMouseEnter2 = () => setTwoHovered(true);
  const twoHandleMouseLeave2 = () => setTwoHovered(false);

  const [threeHovered, setThreeHovered] = useState(false);
  const threeHandleMouseEnter3 = () => setThreeHovered(true);
  const threeHandleMouseLeave3 = () => setThreeHovered(false);

  const pathname = usePathname();
  const amountOfMoney = 656;
  console.log(pathname);
  const prodName = pathname.split("/").pop();

  const [selectedSize, setSelectedSize] = useState("S"); // size of the selected product to be sent to cart

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const [selectedNumberVar, setSelectedNumberVar] = useState("customNumber");
  const handleNumberSelect = (selectedNumber) => {
    console.log("Selected number:", selectedNumber);

    setSelectedNumberVar(selectedNumber); // selectedNumberVar is to be sent to cart
  };
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState("customVariant");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [quantity, setQuantity] = useState(1); // Initialize the quantity to 1
  // now quantity is the number of items to be added to the cart to be sent to the cart

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const img1 =
    prodName === "1"
      ? "/images/1/1.webp"
      : prodName === "2"
      ? "/images/2/1.webp"
      : prodName === "3"
      ? "/images/3/1.webp"
      : "/images/3/1.png";
  const img2 =
    prodName === "1"
      ? "/images/1/2.webp"
      : prodName === "2"
      ? "/images/2/4.webp"
      : prodName === "3"
      ? "/images/3/2.webp"
      : "/images/3/2.png";

  const img3 =
    prodName === "1"
      ? "/images/1/3.webp"
      : prodName === "2"
      ? "/images/2/3.webp"
      : // "/images/2/test.webp"
      prodName === "3"
      ? "/images/3/3.webp"
      : "/images/3/3.png";
  const img4 =
    prodName === "1"
      ? "/images/1/4.webp"
      : prodName === "2"
      ? "/images/2/4.webp"
      : prodName === "3"
      ? "/images/3/4.webp"
      : "/images/3/4.png";
  const img5 =
    prodName === "1"
      ? "/images/infos/5.webp"
      : prodName === "2"
      ? "/images/infos/5.webp"
      : prodName === "3"
      ? "/images/infos/5.webp"
      : "/images/infos/5.png";
  const img6 =
    prodName === "1"
      ? "/images/infos/6.webp"
      : prodName === "2"
      ? "/images/infos/6.webp"
      : prodName === "3"
      ? "/images/infos/6.webp"
      : "/images/infos/6.png";
  const img7 =
    prodName === "1"
      ? "/images/infos/7.webp"
      : prodName === "2"
      ? "/images/infos/7.webp"
      : prodName === "3"
      ? "/images/infos/7.webp"
      : "/images/infos/7.png";
  const images = [
    {
      src: img1,
      alt: " image 1",
      size: "1406-1390",
      type: "image",
    },
    {
      src: img2,
      alt: " image 2",
      size: "1400-1400",
      type: "image",
    },
    {
      src: img3,
      alt: " image 3",
      size: "1400-1400",
      type: "image",
    },
    {
      src: img4,
      alt: "img4",
      size: "1400-1400",

      type: "image",
    },
    {
      src: img5,
      alt: "img5",
      size: "1400-1400",

      type: "image",
    },
    {
      src: img6,
      alt: "img5",
      size: "1400-1400",

      type: "image",
    },
    {
      src: img7,
      alt: "img5",
      size: "1400-1400",

      type: "image",
    },
  ];

  const [currentImg, setCurrentImg] = useState(images[0]);

  const mainImageRef = useRef(null);
  const [mainImageHeight, setMainImageHeight] = useState<number | null>(null);
  const imageWrapperRef = useRef(null);
  // const [zoomLevel, setZoomLevel] = useState(1);
  // const handleZoom = useCallback(() => {
  //   setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));
  // }, []);
  useEffect(() => {
    const updateHeight = () => {
      if (mainImageRef.current) {
        setMainImageHeight(mainImageRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const bind = useGesture(
    {
      onDrag: ({ direction }) => {
        if (!isOpen) {
          // Only allow drag when modal is closed
          if (direction[0] > 0) {
            const currentIndex = images.findIndex(
              (img) => img.src === currentImg.src
            );
            const prevIndex =
              (currentIndex - 1 + images.length) % images.length;
            setCurrentImg(images[prevIndex]);
          } else if (direction[0] < 0) {
            const currentIndex = images.findIndex(
              (img) => img.src === currentImg.src
            );
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentImg(images[nextIndex]);
          }
        }
      },
    },
    {
      drag: {
        axis: "x",
      },
    }
  );
  const [variant2, setVariant2] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const tooltipRefs = useRef({});
  const popperInstances = useRef({});
  const imageRefs = useRef([]);

  const imageLabels = [
    "Rolled Canvas",
    "Frameless Stretch",
    "Stretch+Gold Frame",
    "Stretch+Silver Frame",
    "Stretch+Black Frame",
    "Stretch+White Frame",
    "Stretch+Wood Frame",
  ];

  useEffect(() => {
    for (let i = 0; i < imageRefs.current.length; i++) {
      const imageElement = imageRefs.current[i];
      if (imageElement && tooltipRefs.current[i]) {
        if (hoveredIndex === i || variant2 === `variant2${i + 1}`) {
          tooltipRefs.current[i].style.display = "block";
          if (!popperInstances.current[i]) {
            popperInstances.current[i] = createPopper(
              imageElement,
              tooltipRefs.current[i],
              {
                placement: "top",
              }
            );
          }
        } else if (tooltipRefs.current[i]) {
          tooltipRefs.current[i].style.display = "none";
        }
      }
    }

    return () => {
      for (const key in popperInstances.current) {
        popperInstances.current[key].destroy();
      }
    };
  }, [hoveredIndex, variant2]);

  const handleMouseEnter = (i, event) => {
    if (imageRefs.current[i] && !tooltipRefs.current[i]) {
      const button = imageRefs.current[i];
      const tooltip = document.createElement("div");
      tooltip.textContent = imageLabels[i];
      tooltip.classList.add(
        "tooltip",
        "absolute",
        "bg-gray-800",
        "text-white",
        "text-sm",
        "py-2",
        "px-3",
        "rounded",
        "z-50",
        "whitespace-nowrap",
        "pointer-events-none",
        "transition-opacity",
        "duration-200"
      );
      button.parentNode.appendChild(tooltip);
      tooltipRefs.current[i] = tooltip;
    }
    setHoveredIndex(i);
  };

  const handleMouseLeave = (i) => {
    setHoveredIndex(null);
  };

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
      <Header />
      <Hero prodName={prodName} />
      {/* <MobileNav /> */}
      <div className="flex flex-col md:flex-row bg-hero-background  w-full max-w-7xl mx-auto  sm:mt-36 md:mt-72 overflow-hidden gap-5">
        {/* Left Column (Main Image and Thumbnails) */}
        <div className="md:w-2/3 pr-0 md:pr-4 mr-0 ">
          {/* Main Image */}
          <a
            key={0}
            data-lg-size={images[0].size}
            className="gallery-item block w-full h-auto"
            data-src={images[0].src}
          >
            <div
              {...bind()}
              ref={imageWrapperRef}
              className="w-full  flex justify-start items-start m-0 p-0 rounded-md relative "
            >
              {" "}
              <div onClick={openModal} style={{ cursor: "pointer" }}>
                <motion.div
                  key={currentImg.src}
                  initial={{ opacity: 0, scale: 0.9 }} // Initial styles for fade-in
                  animate={{ opacity: 1, scale: 1 }} // Animate to this style with scale for more smooth transition
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  // style={{ display: "inline-block", overflow: "hidden" }}
                >
                  <Image
                    ref={mainImageRef}
                    className="object-contain w-full z-200 transition-all duration-300" // added transition classes to make transition smooth
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={currentImg.src}
                    alt={images[0].alt}
                    width={1000}
                    height={1000}
                  />
                </motion.div>
              </div>
              {isOpen && (
                <motion.div // motion div for smooth transitions on modal open
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                  }}
                  onClick={closeModal}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      maxWidth: "90%",
                      maxHeight: "90%",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div>
                      {" "}
                      <ZoomableImage
                        src={currentImg.src}
                        alt={"image opened"}
                        isOpen={isOpen}
                        width={1000}
                        height={1000}
                        images={images}
                        currentImgIndex={images.findIndex(
                          (img) => img.src === currentImg.src
                        )}
                        setCurrentImgIndex={(index) =>
                          setCurrentImg(images[index])
                        }
                      />{" "}
                    </div>{" "}
                    {/* Bottom Navigation Buttons */}
                    <div
                      className="pswp__top-bar pswp__hide-on-close"
                      style={{
                        position: "fixed",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "10px",
                        zIndex: 1010,
                        alignItems: "center",
                      }}
                    >
                      {/* Left Arrow Button */}
                      <button
                        className="pswp__button circle-button group hover:animate-icon-inline"
                        type="button"
                        aria-label="Previous"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          height: "40px",
                          width: "40px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          overflow: "hidden",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = images.findIndex(
                            (img) => img.src === currentImg.src
                          );
                          const prevIndex =
                            (currentIndex - 1 + images.length) % images.length;
                          setCurrentImg(images[prevIndex]);
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          fill="none"
                          width="16"
                          className="icon icon--direction-aware transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0 "
                          viewBox="0 0 16 18"
                        >
                          <path
                            d="M11 1 3 9l8 8"
                            stroke="currentColor"
                            stroke-linecap="square"
                          ></path>
                        </svg>
                      </button>
                      {/* Close Button */}
                      <button
                        className="pswp__button circle-button group hover:animate-icon-block"
                        type="button"
                        aria-label="Close gallery"
                        onClick={closeModal}
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "12px",
                          height: "50px",
                          width: "50px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          overflow: "hidden",
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          fill="none"
                          width="16"
                          className="icon transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m1 1 14 14M1 15 15 1"
                            stroke="currentColor"
                            stroke-width="1"
                          ></path>
                        </svg>
                      </button>
                      {/* Right Arrow Button */}
                      <button
                        className="pswp__button circle-button group hover:animate-icon-inline"
                        type="button"
                        aria-label="Next"
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          height: "40px",
                          width: "40px",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          overflow: "hidden",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentIndex = images.findIndex(
                            (img) => img.src === currentImg.src
                          );
                          const nextIndex = (currentIndex + 1) % images.length;
                          setCurrentImg(images[nextIndex]);
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          fill="none"
                          width="16"
                          className="icon icon--direction-aware transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                          viewBox="0 0 16 18"
                        >
                          <path
                            d="m5 17 8-8-8-8"
                            stroke="currentColor"
                            stroke-linecap="square"
                          ></path>
                        </svg>
                      </button>
                      {/*  preloader removed because not needed */}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </a>

          {/* Thumbnail Images */}
          <div className="flex overflow-x-auto md:flex-wrap -m-2">
            {images.slice(1).map((image, index) => (
              <a
                key={index + 1}
                data-lg-size={image.size}
                className="gallery-item m-2 w-[calc(33.33%-8px)] md:w-[calc(10%-8px)]"
              >
                <div className="w-full aspect-square overflow-hidden rounded-md transition-all duration-300">
                  {" "}
                  {/* Thumbnail transition */}
                  <Image
                    className="img-responsive w-full h-full object-cover transition-all duration-300" // Transition on image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    onClick={() => setCurrentImg(image)}
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <FAQ prodName={prodName} />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 p-2 sm:p-4 md:p-8 md:pt-0 md:static   ">
          <h1
            className={`text-2xl font-bold mb-4 text-black w-full text-center md:text-start ${poppins.className} font-bold`}
          >
       
            {prodName === "1"
              ? "Sacred Procession"
              : prodName === "2"
              ? "Ethiopia as the Mother of Africa"
              : prodName === "3"
              ? "The Journey for Water"
              : `Not Specified! please check the url correctly, if the issue persists please contact us for support with the ERROR_CODE 'Product Not Specified' for product "${prodName}" at help@adulisethiopianart.`}
          </h1>
          {/* <div className="flex items-center justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5.0
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              out of
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              5
            </p>
          </div> */}
          <div className={"flex justify-center md:justify-start"}>
            <ReviewDropdown />
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start p-5 pl-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
            </svg>{" "}
            <p className="text-center md:text-start">
              {" "}
              <span className="text-orange-600">
                {" "}
                {prodName === "1"
                  ? "3"
                  : prodName === "2"
                  ? "2"
                  : prodName === "3"
                  ? "1"
                  : "0"}
              </span>{" "}
              sold in last{" "}
              <span className="text-orange-600">
                {prodName === "1"
                  ? "5"
                  : prodName === "2"
                  ? "5"
                  : prodName === "3"
                  ? "4"
                  : "0"}
              </span>{" "}
              hours
            </p>
            <span className="text-hero-background">{`-`}</span>
            <span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 "></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>{" "}
            </span>
          </div>
          <h1 className="text-center md:text-start">$ 656.00</h1>
          <div className="flex flex-row items-center justify-center md:justify-start p-5 pl-0 border-stone-300 border-b m-auto  mb-5" />
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/discount.avif"
              alt="Picture of the author"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-row items-center justify-center md:justify-start p-5 pl-0 border-stone-300 border-b m-auto  mb-5" />
          {/* <p className="text-center md:text-start">Size (Height x Width)</p>
          <select
            name="size"
            id="size"
            value={selectedSize}
            onChange={handleSizeChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          >
            <option value="S">24'X 20"/ 61 x 51 CM (S)</option>
            <option value="M">32"X 24"/ 81 x 61 CM (M)</option>
            <option value="L">36"x 24"/ 91 x 61 CM (L)</option>
            <option value="XL">40"X 30"/ 102 x 76 CM (XL)</option>
            <option value="XXL">48"X 32"/ 122 X 81 CM (XXL)</option>
          </select> */}
          <p className="p-3 pl-0 text-center md:text-start">Stretch or Frame</p>
          {/* create a mobile and desktop and other devices responsive horizontal list of square images*/}
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start p-2 pl-0 gap-5  border-orange-300 border-b m-auto  mt-0">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="relative">
                <Image
                  ref={(el) => {
                    if (el) {
                      imageRefs.current[i] = el;
                    }
                  }}
                  src={`/images/size${i + 1}.webp`}
                  alt={`Picture of the author ${i + 1}`}
                  width={60}
                  height={60}
                  onMouseEnter={(event) => handleMouseEnter(i, event)}
                  onMouseLeave={() => handleMouseLeave(i)}
                  className={`ring ring-slate-600 hover:ring-orange-500  rounded-md  hover:ring-2 hover:ring-offset-4  hover:scale-105 ${
                    variant === `variant${i + 1}` &&
                    "ring-2 ring-offset-4 ring-pink-500"
                  }`}
                  onClick={() => {
                    // check if the already selected variant and variant2 is not the one that is clicked and if it is not the one that is clicked then set the variant to the one that is clicked
                    if (variant2 !== `variant2${i + 1}`) {
                      setVariant2(`variant2${i + 1}`);
                      setVariant(`variant${i + 1}`);
                    }
                    // check if else already selected then make unselect specifically making the variant to "customVariant" and make the variant2 to null
                    else {
                      setVariant(`customVariant`);
                      setVariant2(null);
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <br />
          {/* <div className="inline-flex items-center rounded border border-gray-200 bg-gray-100">
            <button
              onClick={decrementQuantity}
              className="px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-300"
            >
              <span className="text-xl font-normal">-</span>
            </button>
            <span className="px-3 py-2 text-center text-lg font-normal select-none">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 active:bg-gray-300"
            >
              <span className="text-xl font-normal">+</span>
            </button>
          </div> */}
          {/* <DropdownWrapper>
            <NumberSelect
              onSelect={handleNumberSelect}
              cartData={{
                selectedSize,
                selectedNumberVar,
                variant,
                quantity,
                pathname,
                amountOfMoney,
              }}
              pathname={pathname}
            />
          </DropdownWrapper> */}
          <MyCartCheckout
            cartData={{
              selectedSize,
              selectedNumberVar,
              variant,
              quantity,
              pathname,
              amountOfMoney,
            }}
          />
          <CartMessage numberOfPeople={12} />
          <br />{" "}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/safe.avif"
              alt="Picture safe payments"
              width={400}
              height={100}
            />
          </div>
          <div className="p-4">
            <ShareButton
              productUrl={`https://www.adulis-test.vercel.app/products/${prodName}`}
              productName={
                prodName === "1"
                  ? "Sacred Procession"
                  : prodName === "2"
                  ? "Ethiopia as the Mother of Africa"
                  : prodName === "3"
                  ? "The Journey for Water"
                  : `Not Specified! please check the url correctly, if the issue persists please contact us for support with the ERROR_CODE 'Product Not Specified' for product "${prodName}" at help@adulisethiopianart.`
              }
            />
          </div>
          <h1 className={`text-2xl text-center mx-auto ${poppins.className}`}>
        YOU MAY ALSO LIKE
      </h1>

          <CarouselDemo />

        </div>
      </div>
      <div className="md:hidden ">
        <FAQ prodName={prodName} />
      </div>
      <div className=" flex-row items-center justify-start p-5 pl-0 border-stone-300 border-b m-auto  mb-5 hidden md:flex" />
      <AboutArtistBanner prodName={prodName} />
      <div className="flex flex-row items-center justify-start p-5 pl-0 border-stone-300 border-b m-auto  mb-5" />
      {/* <h4 className=" font-bold mb-4 text-center pt-6 text-base ">
      </h4> */}

    </>
  );
};

export default App;
