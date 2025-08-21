import React from "react";

import labtop from "@/assets/images/tradingFeaturesPng/labtop.png";
import security from "@/assets/images/tradingFeaturesPng/security.png";
import ellipse from "@/assets/images/Ellipse.png";
import card1 from "@/assets/images/CARD-1.png"
import card3 from "@/assets/images/CARD-3.png"

export default function TradingFeatures() {
  return (
    <div className="px-4 sm:px-6 lg:px-[87px] mt-[20px] bg-[#FFFBF9]">
      <div className="text-center space-y-5">
        <h1 className="font-extrabold text-[28px] sm:text-[32px] lg:text-[36px] leading-[100%] tracking-[6%] font-manrope">
          Tools Our Traders Rely On
        </h1>
        <p className="font-semibold text-[14px] sm:text-[16px] leading-[100%] tracking-[5%] font-manrope opacity-51 text-[#1C1C1C]">
          Our most-used features, chosen by traders who demand more.
        </p>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col lg:flex-row gap-5 text-white mt-[40px]">
        {/* First Card */}
        <div className="group flex flex-wrap sm:flex-nowrap justify-between items-center bg-gradient-to-r from-[#E62E1C] via-[#F04C1A] to-[#FF6B2C] rounded-3xl w-full lg:w-[725px] sm:h-[190.14px] pl-[20px] pr-[16px] relative overflow-hidden max-sm:gap-2 max-sm:pt-[20px] max-sm:pl-[20px] max-sm:pr-0 ">
          {/* Background Ellipse */}
          <img
            src={ellipse}
            className="hidden sm:block absolute top-[-10px] right-[-180px] sm:right-[-210px] z-[1]"
          />

          {/* Text Section */}
          <div className="w-full sm:w-auto z-[2]">
            <h1 className="font-manrope font-extrabold text-[18px] sm:text-[20px] mb-[12px] sm:mb-[19px] tracking-wide">
              LTI&nbsp;App&nbsp;Coming Soon
            </h1>
            <p className="font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[24px] font-manrope opacity-90">
              Access your accounts and manage your <br className="hidden sm:block" /> funds all from one secure platform.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-auto flex justify-end sm:justify-start z-[2]">
            <img
              src={card1}
              alt="Mobile App"
              className="w-[90px] md:w-[200px] md:h-[190px] lg:w-[211px] h-[110px] lg:h-[193px] max-sm:h-[150px] max-sm:w-[150px] transition-all duration-1000 ease-in-out transform group-hover:scale-125 group-hover:translate-y-6 min-[640px]:h-[190px] min-[640px]:w-[210px]"
            />
          </div>
        </div>


        {/* Second Card */}
        <div className="group flex flex-wrap sm:flex-nowrap justify-between items-center bg-gradient-to-r from-[#222222ec] to-[#2B2B2B] rounded-3xl w-full lg:w-[513px] sm:h-[190.14px] pl-[20px] max-sm:pr-0 overflow-hidden relative max-sm:gap-2 max-sm:pt-[20px]  max-sm:pl-[20px]">
          {/* Ellipse Background */}
           <img
            src={ellipse}
            className="hidden sm:block absolute top-[-10px] right-[-180px] sm:right-[-210px] z-[1]"
          />

          {/* Text Block */}
          <div className="w-full sm:w-auto z-[2]">
            <h1 className="font-manrope font-extrabold text-[18px] sm:text-[20px] mb-[12px] sm:mb-[19px] tracking-wide ">
              Trading&nbsp;Tools
            </h1>
            <p className="font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px] font-manrope opacity-90 pr-10">
              Stay ahead with our daily market updates and insights
            </p>
          </div>

          {/* Image Block */}
          <div className="w-full sm:w-auto flex justify-end sm:justify-start z-[2]">
            <img
              src={labtop}
              alt="Laptop"
              className="w-[90px] md:w-[220px] md:h-[190px] lg:w-[440px] lg:h-[190px] xl:w-[311px] h-[210px] xl:h-[193px] max-sm:h-[150px] max-sm:w-[150px] transition-transform duration-1000 ease-in-out group-hover:scale-105 group-hover:translate-x-6 min-[640px]:h-[190px] min-[640px]:w-[210px]"
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col lg:flex-row gap-5 text-white mt-[24.72px]">
        {/* Third Card */}
        <div className="group flex flex-wrap sm:flex-nowrap justify-between items-center relative bg-[#CECCCD] rounded-3xl w-full lg:w-[513px] sm:h-[176.14px] lg:h-[190.14px] text-[#323233] pl-[20px] pr-[1px] overflow-hidden max-sm:gap-2 max-sm:pt-[20px]  max-sm:pl-[20px] max-sm:pr-0  gap-[0px]">
          {/* Ellipse Background */}
           <img
            src={ellipse}
            className="hidden sm:block absolute top-[-10px] right-[-180px] sm:right-[-210px] z-[1]"
          />

          {/* Text Content */}
          <div className="w-full sm:w-auto z-[2]">
            <h1 className="font-manrope font-extrabold text-[18px] sm:text-[20px] mb-[12px] sm:mb-[19px] tracking-wide">
              24/5 Support
            </h1>
            <p className="font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px] font-manrope opacity-90">
              Get support from real people, every market&nbsp;day
            </p>
          </div>

          {/* Image Content */}
          <div className="w-full sm:w-auto flex justify-end sm:justify-start z-[2]">
            <img
              src={card3}
              alt="24/5 Support"
              className="w-[90px] md:w-[250px] md:h-[190px] lg:w-[720px] lg:h-[200px] xl:w-[500px] h-[110px] xl:h-[293px] max-sm:h-[150px] max-sm:w-[150px] object-contain transition-transform duration-1000 ease-in-out group-hover:scale-110 mb-[-18px] min-[640px]:h-[200px] min-[640px]:w-[260px]"
            />
          </div>
        </div>


        {/* Fourth Card */}
        <div className="group flex flex-wrap sm:flex-nowrap justify-between items-center bg-gradient-to-r from-[#1A1A1A] to-[#2B2B2B] rounded-3xl w-full lg:w-[725px] sm:h-[190.14px] pl-[20px] pr-[16px] overflow-hidden relative max-sm:gap-2 max-sm:pt-[20px]  max-sm:pl-[20px] max-sm:pr-0 gap-[0px]">
          {/* Background Ellipse */}
          <img
            src={ellipse}
            className="hidden sm:block absolute top-[-10px] right-[-180px] sm:right-[-210px] z-[1]"
          />

          {/* Text Content */}
          <div className="w-full sm:w-auto z-[2]">
            <h1 className="font-manrope font-extrabold text-[18px] sm:text-[20px] mb-[12px] sm:mb-[19px] tracking-wide">
              Secure&nbsp;Client&nbsp;Funds
            </h1>
            <p className="font-medium text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] font-manrope opacity-90">
              We safeguard client assets through segregated accounts, encrypted infrastructure, and strict internal&nbsp;controls – ensuring your capital is always&nbsp;protected.
            </p>
          </div>

          {/* Image */}
          <div className="w-full sm:w-auto flex justify-end sm:justify-start z-[2]">
            <img
              src={security}
              alt="Security"
              className="mt-3 w-[90px] pt-[20px] md:w-[340px] md:h-[190px] lg:w-[600px] xl:w-[400px] xl:h-[193px] h-[110px] lg:h-[193px] max-sm:h-[150px] max-sm:w-[150px] object-contain transition-transform duration-1000 ease-in-out group-hover:scale-125 min-[640px]:h-[190px] min-[640px]:w-[410px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}