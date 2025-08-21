import React from "react";

import image1 from "@/assets/images/autoscrollPng/CRPTOEXPO (1).png";
import image2 from "@/assets/images/autoscrollPng/CYPRUS FINTECH.png";
import image3 from "@/assets/images/autoscrollPng/FINTECH.png";
import image4 from "@/assets/images/autoscrollPng/FMLS.png";
import image5 from "@/assets/images/autoscrollPng/FOREX EXPO.png";
import image6 from "@/assets/images/autoscrollPng/ICE.png";
import image7 from "@/assets/images/autoscrollPng/IFX EXPO.png";
import image8 from "@/assets/images/autoscrollPng/IFX INTERNATIONAL.png";
import image9 from "@/assets/images/autoscrollPng/LONDON BRAND LICENSING.png";
import image10 from "@/assets/images/autoscrollPng/MAKKAH FORUM.png";
import image11 from "@/assets/images/autoscrollPng/MONEY EXPO.png";
import image12 from "@/assets/images/autoscrollPng/PAY 360.png";
import image13 from "@/assets/images/autoscrollPng/SEALESS DIGITAL COMMERCE.png";
import image14 from "@/assets/images/autoscrollPng/THE BUSINESS SHOW.png";

const images = [
  image1, image2, image3, image4, image5, image6, image7,
  image8, image9, image10, image11, image12, image13, image14,
];

export default function InfiniteImageSlider() {
  return (
    <div
      className="relative w-screen h-[126px] overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.1) 23.56%, rgba(244, 240, 240, 0.1) 52.84%, rgba(244, 240, 240, 0.1) 71.63%, #FFFFFF 100%)",
        backdropFilter: "blur(21px)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 70%, transparent 100%)",
        maskRepeat: "no-repeat",
        maskSize: "100% 100%",
      }}
    >

      <div className="flex animate-scroll space-x-10 sm:space-x-14 md:space-x-18 lg:space-x-24 min-w-[200%] px-6">
        {[...images, ...images].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-20 h-14 sm:w-28 sm:h-20 md:w-28 md:h-20 lg:w-30 lg:h-28"
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="
                w-full h-full object-contain
                opacity-60 hover:opacity-100
                transition duration-500 ease-in-out
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}