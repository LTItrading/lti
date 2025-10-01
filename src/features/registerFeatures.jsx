import React from "react";
import RegisterColumnEffectImg4x from "../assets/images/4x-Images/RegisterColumnEffectImg4x.png";
import BusinessChart4x from "../assets/images/4x-Images/BusinessChart4x.png";
import BusinessChartOrangeArrow4x from "../assets/images/4x-Images/BusinessChartOrangeArrow4x.png";
import straightArrow4x from "../assets/images/dashboardsPng/straightArrow4x.png";
import { Button } from "@/components/ui/button";
import backgroundImgForHomePageRotate from "../assets/images/4x-Images/backgroundImgForHomePageRotate.png";
import WaveForFooter from "../assets/images/4x-Images/WaveForFooter.png";
import { useInView } from "react-intersection-observer";

const RegisterFeatures = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div className="w-full relative bg-[#FFFBF9] font-manrope px-0 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-[0px] sm:pt-[80px] lg:pt-[50px] ">
      {/* Animated Wave Background */}
      <img
        src={WaveForFooter}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full pointer-events-none animate-[wave_12s_linear_infinite]"
      />

      {/* Hover Zone */}
      <div className="relative h-auto sm:h-[700px] flex items-end justify-center">
        <div className="pb-0 sm:pb-[200px] w-full max-w-full md:w-[600px] lg:w-[800px] xl:w-[1000px] min-[640px]:w-[900px]">
          <div
            ref={ref}
            className={`mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)] rounded-[0px] sm:rounded-[30px] transition-all duration-700 ease-in-out
  ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"}`}
          >
            {/* Top Banner */}
            <div className="bg-[#1C1C1C] text-[#FFFAFA] flex flex-col sm:flex-row items-center md:h-[240px] lg:h-[225px] rounded-t-[0px] sm:rounded-t-[30px] rounded-b-none w-full justify-between gap-4 sm:gap-6 md:py-0 px-4 sm:px-4 md:px-6 lg:pl-6 xl:pl-10 pt-10">
              {/* Text Block */}
              <div className="flex-1 md:text-left px-4 sm:px-0">
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-tight">
                  LTI: Your Edge in Every Market
                </h2>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal mt-3">
                  From Sign Up to execution - you’re only a few clicks away
                </p>
                <a href="https://clientarea.londontradingindex.com/register">
                <Button className="bg-[#ee4223] hover:bg-[#FF6B3D] text-white text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 group px-[20px] py-[24px] rounded-full mt-10">
                  <div className="group flex items-center justify-center gap-2 leading-none">
                    <span>Register Now</span>
                    <span className="inline-block transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                      <img
                        src={straightArrow4x}
                        alt="Arrow icon"
                        className="w-6 h-5"
                      />
                    </span>
                  </div>
                </Button>
                </a>
              </div>

              {/* Chart Image */}
              <div className="relative w-full sm:w-[220px] md:w-[320px] lg:w-[320px] xl:w-[340px] h-[240px] sm:h-[220px] md:h-[320px] lg:h-[320px] xl:h-[340px]">
                <img
                  src={RegisterColumnEffectImg4x}
                  alt="Effect"
                  className="hidden md:block w-full h-full object-contain absolute bottom-0 -top-10"
                />
                <img
                  src={BusinessChart4x}
                  alt="Chart"
                  className="absolute inset-0 w-full h-full object-contain"
                />
                <img
                  src={BusinessChartOrangeArrow4x}
                  alt="Arrow"
                  className="absolute w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[80px] sm:h-[100px] md:h-[120px] lg:h-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            {/* Steps Section */}
            <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 p-[40px] rounded-b-[0px] sm:rounded-b-[30px]">
              <div className="text-left space-y-2">
                <div className="border border-[#FF5A1F] rounded-full w-9 h-9 flex items-center justify-center text-[13px] font-bold text-white bg-[#FF5A1F]">
                  1
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-[#1C1C1C]">
                  Register
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#333] font-normal">
                  Quick and easy account opening process.
                </p>
              </div>
              <div className="text-left space-y-2">
                <div className="border border-[#FF5A1F] rounded-full w-9 h-9 flex items-center justify-center text-[13px] font-bold text-white bg-[#FF5A1F]">
                  2
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-[#1C1C1C]">
                  Verify your Identity
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#333] font-normal">
                  Upload your KYC documents to get approved quickly and
                  securely.
                </p>
              </div>
              <div className="text-left space-y-2">
                <div className="border border-[#FF5A1F] rounded-full w-9 h-9 flex items-center justify-center text-[13px] font-bold text-white bg-[#FF5A1F]">
                  3
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-[#1C1C1C]">
                  Deposit
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#333] font-normal">
                  Fund your trading account via our deposit methods.
                </p>
              </div>
              <div className="text-left space-y-2">
                <div className="border border-[#FF5A1F] rounded-full w-9 h-9 flex items-center justify-center text-[13px] font-bold text-white bg-[#FF5A1F]">
                  4
                </div>
                <h3 className="text-[15px] sm:text-[17px] font-bold text-[#1C1C1C]">
                  Start Trading
                </h3>
                <p className="text-[13px] sm:text-[14px] text-[#333] font-normal">
                  Trade with spreads as low as 0.0 and have access to over 1000+
                  CFDs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFeatures;
