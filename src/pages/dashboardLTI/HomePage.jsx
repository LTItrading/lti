import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfiniteImageSlider from "@/components/sliders/InfiniteImageSlider";
import TradingFeatures from "@/features/TradingFeatures";
import TradingHistoryNumbers from "@/features/TradingHistoryNumbers";
import Silder from "@/components/sliders/InfiniteImageSlider";

import image38 from "@/assets/images/dashboardsPng/image38.png";
import Group44055 from "@/assets/images/dashboardsPng/Group44055.png";
import MARKETWATCH from "@/assets/images/dashboardsPng/MARKETWATCH.png";
import YAHOO1 from "@/assets/images/dashboardsPng/YAHOO1.png";
import hand from "@/assets/images/dashboardsPng/hand.png";
import Frame from "@/assets/images/dashboardsPng/Frame.png";
import hand2 from "@/assets/images/dashboardsPng/hand2.png";
import line1 from "@/assets/images/dashboardsPng/line1.png";
import line2 from "@/assets/images/dashboardsPng/line2.png";
import rightupArrow4x from "@/assets/images/dashboardsPng/rightupArrow4x.png";
import straightArrow4x from "@/assets/images/dashboardsPng/straightArrow4x.png";
import grid from "@/assets/images/Grid.png";
import ellipse1 from "@/assets/images/Ellipse1.png";
import ellipse2 from "@/assets/images/Ellipse2.png";
import Header from "@/layer/Header";

// import Header from "@/layer/Header";

export default function TradingLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (label) =>
    setOpenDropdown(openDropdown === label ? null : label);

  const navLinks = [
    { label: "Trading", dropdownItems: ["Stocks", "Forex", "Crypto"] },
    { label: "Insights", dropdownItems: ["News", "Reports", "Analysis"] },
    { label: "Corporate", dropdownItems: ["About Us", "Careers", "Contact"] },
  ];

  const miniLinks = ["Partnerships", "Institutional", "Funding"];

  return (
    <div className="min-h-screen bg-white font-[Manrope] overflow-x-hidden relative">
      {/* =================== HEADER =================== */}

      {/* =================== MAIN CONTENT =================== */}
      <main className="relative z-10">
        {/* Background Gradients */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(circle at top right, rgba(238, 66, 35, 0.15) 0%, transparent 60%),
              radial-gradient(circle at bottom left, rgba(238, 66, 35, 0.07), transparent 70%),
              #ffffff
            `,
          }}
        />

        {/* Decorative Frame */}
        <img
          src={Frame}
          alt=""
          className="absolute w-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] top-[200px] left-[-100px] -rotate-[161deg] opacity-50 z-0"
        />

        <img
          src={grid}
          className="w-[680.65px] h-[690.85px] absolute top-[129.96px] left-[694.35px] z-10"
          alt=""
        />

        <img
          src={ellipse1}
          className=" absolute w-[491px] h-[480px] top-[200px] right-[0px]"
          alt=""
        />

        <img
          src={ellipse2}
          className=" absolute w-[591px] h-[580px] top-[200px] left-[650px]"
          alt=""
        />

        <button
          className="absolute px-[28px] py-[11px] rounded-full top-[500px] left-[1000px] text-[#EE4223] font-manrope font-semibold text-[16px] leading-[100%] tracking-[0%] bg-white"
          style={{
            boxShadow:
              "inset 0px -4px 4px 0px #EE422366, inset 0px 4px 4px 0px #EE422366",
          }}
        >
          MT5 Available
        </button>

        {/* Hero Section */}
        <div className="px-4 sm:px-8 md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[60px] md:pt-[80px] lg:pt-[90px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh] text-center lg:text-left">
            {/* LEFT */}
            <div className="space-y-6">
              <h1 className="text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[40px] md:leading-[56px] lg:text-[48px] lg:leading-[65px] font-bold font-[Manrope] text-[#1C1C1C]">
                Awarded Best Regional <br /> Broker in{" "}
                <span className="text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[40px] md:leading-[56px] lg:text-[48px] lg:leading-[65px] font-extrabold font-[Manrope] text-[#1C1C1C]">
                  2024
                </span>
              </h1>
              <p className="text-[18px] leading-[30px] sm:text-[20px] sm:leading-[36px] md:text-[22px] md:leading-[44px] lg:text-[24px] lg:leading-[50px] font-normal font-[Manrope] text-[#1C1C1C]">
                Join Thousands of Traders Who Made the Switch.
              </p>
              <Button className="relative bg-[#ee4223] hover:bg-[#FF6B3D] text-white text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 group px-[24px] py-5 rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                <div className="group flex items-center justify-center gap-2 leading-none">
                  <a href="https://clientarea.londontradingindex.com/register/">
                    Start Trading
                  </a>

                  <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 pl-2">
                    <img
                      src={straightArrow4x}
                      alt="Arrow icon"
                      className="w-8 h-6"
                    />
                  </span>
                </div>
              </Button>

              {/* Partner Logos */}
              <div className="flex justify-center lg:justify-start pt-4">
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[596px] h-[80px] sm:h-[100px] lg:h-[108px] rounded-full bg-[#FFFBFB] shadow-md border">
                  <img
                    src={Group44055}
                    alt="Reuters"
                    className="w-[60px] sm:w-[90px] lg:w-[120px]"
                  />
                  <img
                    src={MARKETWATCH}
                    alt="MarketWatch"
                    className="w-[60px] sm:w-[90px] lg:w-[120px]"
                  />
                  <img
                    src={YAHOO1}
                    alt="Yahoo"
                    className="w-[60px] sm:w-[90px] lg:w-[120px]"
                  />
                  <div className="flex items-center justify-center w-[50px] sm:w-[70px] lg:w-[88px] h-[50px] sm:h-[70px] lg:h-[88px] rounded-full border bg-[#FFD5CC]">
                    <img src={hand} alt="Hand Icon" className="w-7 sm:w-12" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center items-center">
              <img
                src={image38}
                alt="Trading Platform"
                className="w-[90%] max-w-xs sm:max-w-md lg:max-w-xl drop-shadow-2xl z-20"
              />
            </div>
          </div>
        </div>

        {/* Hand2 Image */}
        <div className="flex justify-center relative mt-10">
          <img
            src={hand2}
            alt=""
            className="w-[50px] sm:w-[60px] lg:w-[70px] opacity-60"
          />
        </div>

        {/* Global Footprint Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 py-8 mt-6">
          <img
            src={line1}
            alt=""
            className="hidden sm:block w-[200px] md:w-[300px] lg:w-[447px]"
          />
          <div className="font-extrabold text-sm sm:text-lg md:text-xl text-black text-center">
            Global Footprint. Local Impact
          </div>
          <img
            src={line2}
            alt=""
            className="hidden sm:block w-[200px] md:w-[300px] lg:w-[447px]"
          />
        </div>

        {/* Image Slider */}
        <Silder />
      </main>
    </div>
  );
}
