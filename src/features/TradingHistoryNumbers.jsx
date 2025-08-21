import React from "react";
import cardFrame from "@/assets/images/cardPng/cardFrame.png";
import centerEffect from "@/assets/images/cardPng/centerEffect.png";

export default function TradingCardSection() {
  const stats = [
    { label: "Year Founded", value: "2019" },
    { label: "Countries Served", value: "60+" },
    { label: "Active Traders", value: "15,000+" },
    { label: "Average Client Tenure", value: "5+ Years" },
    { label: "Institutional Partnerships", value: "12+" },
    { label: "Global Banking & PSP Partners", value: "8+" },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden py-0 sm:py-16 lg:py-24 px-0 bg-[#FFFBF9]">
      {/* Card Frame — hidden on small screens */}
      <img src={cardFrame} alt="" className=" absolute w-[1800px]" />

      {/* Card */}
      <div className="relative bg-[#1C1C1C] shadow-2xl rounded-none md:rounded-tl-[80px] md:rounded-br-[80px] xl:w-[1200px] lg:w-[1000px] sm:w-[900px] min-h-[450px] sm:min-h-[320px] lg:min-h-[400px] flex flex-col justify-center items-center sm:px-[60px] lg:px-[50px] py-[100px] sm:py-[120px] lg:py-[146px] ">

        {/* Glow Center */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div
            className="absolute w-[90%] max-w-[1000px] aspect-square rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              filter: "blur(100px)",
              opacity: 0.5,
            }}
          />
          <img
            src={centerEffect}
            alt="Center Effect"
            className="w-[80%] max-w-[950px] opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col [@media(min-width:867px)]:flex-row w-full justify-between items-center text-center [@media(min-width:867px)]:text-left gap-10 [@media(min-width:867px)]:gap-6">
          {/* Left Text */}
          <div className="flex-1 flex flex-col justify-center items-center [@media(min-width:867px)]:items-start space-y-4 sm:space-y-6 pr-0 [@media(min-width:867px)]:pr-[10px] mx-4">
            <h2 className="font-manrope font-extrabold text-[#EE4223] text-[16px] sm:text-[22px] md:text-[26px] lg:text-[24px] leading-[140%]">
              Designed for traders <br /> who expect more — and get it
            </h2>
            <p className="font-manrope font-medium pt-[30px] text-white text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[14px] leading-[2.1] max-w-[90%] [@media(min-width:867px)]:max-w-[95%]">
              London Trading Index was created to reflect the excellence and discipline
              of the world’s most renowned trading hub. With deep roots in the City and
              a forward-thinking approach to technology and transparency, LTI offers a
              refined trading experience for those who demand more from their broker.
            </p>
          </div>

          {/* Right Stats */}
          <div className="flex-1 grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-[10px] text-center w-full mx-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <p className="text-[#EE4223] font-manrope font-semibold text-[13px] sm:text-[16px] md:text-[18px] lg:text-[17px] leading-[150%]">
                  {stat.label}
                </p>
                <p className="mt-1 font-manrope font-bold text-[15px] sm:text-[14px] md:text-[24px] lg:text-[18px] text-white leading-[150%]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
