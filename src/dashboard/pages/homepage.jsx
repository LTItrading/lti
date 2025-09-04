import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfiniteImageSlider from "@/components/sliders/InfiniteImageSlider";
import TradingFeatures from "@/features/TradingFeatures";
import TradingHistoryNumbers from "@/features/TradingHistoryNumbers"
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
import mt5Asset from "@/assets/images/MT5-asset.png";
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
        <div className="min-h-screen bg-[#FFFBF9] font-[Manrope] overflow-x-hidden relative">
            {/* =================== HEADER =================== */}
            {/* =================== MAIN CONTENT =================== */}
            <main className="relative z-10">
                {/* Background Gradients */}
                <div
                    className="absolute inset-0 -z-10"
                //         style={{
                //             background: `
                //   radial-gradient(circle at top right, rgba(238, 66, 35, 0.15) 0%, transparent 60%),
                //   radial-gradient(circle at bottom left, rgba(238, 66, 35, 0.07), transparent 70%),
                //   #ffffff
                // `,
                //         }}
                />

                {/* Decorative Frame */}
                <img
                    src={Frame}
                    alt=""
                    className="absolute w-[200px] sm:w-[400px] md:w-[600px] lg:w-[891.25px] h-[249px] top-[340px] left-[-240px] -rotate-[131deg] z-0"
                />



                {/* Grid Image */}
                {/* Grid Image - Shifted slightly right */}
                <img
                    src={grid}
                    alt=""
                    className="absolute w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[680px] h-auto top-[10px] left-2/4 -translate-x-[0%] z-10 max-[1024px]:hidden"
                />

                {/* Ellipse 1 (Right Side) - Already on the right, just add some right padding */}
                <img
                    src={ellipse2}
                    alt=""
                    className="absolute w-[300px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[491px] h-auto -top-[50px] -right-[100px] max-[1024px]:hidden z-0 opacity-60"
                />

                <img
                    src={ellipse2}
                    alt=""
                    className="absolute w-[300px] sm:w-[400px] md:w-[450px] lg:w-[480px] xl:w-[491px] h-auto -top-[300px] -right-[150px] max-[1024px]:hidden z-0 opacity-60"
                />

                   <img
                    src={ellipse2}
                    alt=""
                    className="absolute w-[300px] sm:w-[400px] md:w-[450px] lg:w-[680px] xl:w-[791px] h-auto -top-[300px] -right-[20px] max-[1024px]:hidden z-0 opacity-60"
                />

                {/* Ellipse 2 (Left Side) - Shifted slightly more right */}
                <img
                    src={ellipse2}
                    alt=""
                    className="absolute w-[350px] sm:w-[450px] md:w-[500px] lg:w-[650px] xl:w-[691px] h-auto top-[100px] left-1/2 -translate-x-[5%] max-[1024px]:hidden z-0 opacity-100"
                />


                {/* Hero Section */}
                <div className="px-4 sm:px-8 md:px-[60px] lg:px-[90px] xl:px-[100px] pt-[60px] md:pt-[80px] lg:pt-[90px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[40vh] text-center lg:text-left">
                        {/* LEFT */}
                        <div className="space-y-8">
                            <h1 className="text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[40px] md:leading-[56px] lg:text-[48px] lg:leading-[65px] font-bold font-[Manrope] text-[#1C1C1C]">
                                Awarded Best Regional <br /> Broker in <span className="text-[32px] leading-[42px] sm:text-[36px] sm:leading-[48px] md:text-[40px] md:leading-[56px] lg:text-[48px] lg:leading-[65px] font-extrabold font-[Manrope] text-[#1C1C1C]">2024</span>
                            </h1>
                            <p className="text-[18px] leading-[30px] sm:text-[20px] sm:leading-[36px] md:text-[22px] md:leading-[44px] lg:text-[24px] lg:leading-[50px] font-normal font-[Manrope] text-[#1C1C1C]">
                                Join Thousands of Traders Who Made the Switch.
                            </p>
                            <Button className="relative bg-[#ee4223] hover:bg-[#FF6B3D] text-white text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 group px-[24px] py-[28px] rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-2 leading-none transform transition-transform duration-300 group-hover:scale-105">
                                    <span>Start Trading</span>
                                    <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 pl-2">
                                        <img src={straightArrow4x} alt="Arrow icon" className="w-8 h-6" />
                                    </span>
                                </div>
                            </Button>

                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center items-center">
                            <img
                                src={mt5Asset}
                                alt="Trading Platform"
                                className=" z-20 w-[360px] md:w-[550px] lg:w-full min-[640px]:w-[410px]"
                            />
                        </div>
                    </div>
                </div>
                {/* Partner Logos */}
                <div className="w-full flex flex-col mt-[30px] lg:flex-row items-center lg:items-center justify-between gap-6 px-4 sm:px-6 lg:px-[95px]">
                    {/* Logo Strip */}
                    <div className="flex items-center justify-between w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[596px] h-[50px] sm:h-[70px] lg:h-[108px] px-4 sm:px-6 py-3 rounded-full bg-[#FFFBFB] shadow-md border z-20">
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
                        <div className="flex items-center justify-center w-[40px] sm:w-[50px] lg:w-[80px] h-[40px] sm:h-[50px] lg:h-[80px] rounded-full border bg-[#FFD5CC]">
                            <img src={hand} alt="Hand Icon" className="lg:w-12 sm:w-8" />
                        </div>
                    </div>
                </div>

                {/* Hand2 Image */}
                {/* Hand Icon */}
                <div className="flex justify-center relative mt-[60px] lg:mt-[150px]">
                    <img
                        src={hand2}
                        alt="Hand Icon"
                        className="w-[34px] sm:w-[40px] lg:w-[50px] opacity-90"
                    />
                </div>

                {/* Global Footprint Section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-2 py-6 sm:py-8 mt-3">
                    {/* Left Line */}
                    <img
                        src={line1}
                        alt="Decorative Line"
                        className="hidden sm:block w-[150px] md:w-[250px] lg:w-[347px]"
                    />

                    {/* Center Text */}
                    <p className="font-extrabold text-center text-gray-600 text-sm md:text-lg leading-snug">
                        Global Footprint. Local Impact
                    </p>

                    {/* Right Line */}
                    <img
                        src={line2}
                        alt="Decorative Line"
                        className="hidden sm:block w-[150px] md:w-[250px] lg:w-[347px]"
                    />
                </div>


                {/* Image Slider */}
                <Silder />

            </main>
        </div>

    );
}
