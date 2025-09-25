import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import zigzag from "@/assets/images/accountSectionPng/zigzag.png";
import offMoon from "@/assets/images/accountSectionPng/offMoon.png";
import settings from "@/assets/images/accountSectionPng/settings.png";
import leaf from "@/assets/images/accountSectionPng/leaf.png";
import TwoStone from "@/assets/images/accountSectionPng/TwoStone.png";
import database from "@/assets/images/accountSectionPng/database.png";

export default function AccountsSection() {
  const accountTypes = [
    {
      title: "CENT",
      subtitle: "Scaled-Risk Traders",
      desc: "Trade with real money using smaller volumes - balances are displayed in cents.",
      icon: "database",
      size: "small",
      shadow: "shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.3)]",
    },
    {
      title: "CORE",
      subtitle: "Everyday Traders",
      desc: "Designed for traders who want simple, cost-effective access to all markets with balanced conditions.",
      icon: "zigzag",
      size: "large",
      shadow: "shadow-[inset_0px_-4px_4px_rgba(219,80,34,1)]",
      core: true,
    },
    {
      title: "PRO",
      subtitle: "Professional Traders",
      desc: "Built for experienced traders, with raw spreads from 0.0 pips, low commissions, and faster execution.",
      icon: "chart",
      size: "large",
      shadow: "shadow-[inset_0px_-4px_4px_rgba(202,54,28,1)]",
      pro: true,
    },
    {
      title: "SWAP-FREE",
      subtitle: "Any Level",
      desc: "For traders who require interest-free conditions - no swaps, just compliant trading flexibility.",
      icon: "refresh",
      size: "small",
      light: true,
      shadow: "shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.25)]",
    },
    {
      title: "FLEXI",
      subtitle: "Customisable conditions",
      desc: "Fully tailored trading solution - all conditions negotiable, including spreads, leverage, and commissions.",
      icon: "settings",
      size: "small",
      flexi: true,
      light: true,
    },
    {
      title: "ECO",
      subtitle: "Impact-Orientated Traders",
      desc: "Trade as usual while making a difference - a portion of spread revenue supports charitable causes.",
      icon: "leaf",
      size: "large",
      eco: true,
      shadow: "shadow-[inset_0px_-4px_4px_rgba(0,0,0,0.3)]",
    },
  ];

  return (
    <div className="w-full py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-[#FFFBF9]">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-[24px] sm:text-[30px] md:text-[34px] lg:text-[42px] xl:text-[48px] font-extrabold text-gray-900 mb-2 sm:mb-4 leading-[150%] tracking-[0.02em] font-manrope">
            Accounts Designed for
          </h2>
          <h3 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[30px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#F85E42] to-[#BB1D00] mb-4 sm:mb-6 leading-[150%] tracking-[0.02em] font-manrope">
            Performance, Flexibility, and Growth
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-black/60 max-w-4xl mx-auto leading-[175%] tracking-[0.03em] font-semibold font-manrope">
            From new traders to high-volume professionals, our six account types are built to match every level, every strategy, and every trading style.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {accountTypes.map((account, index) => (
            <AccountCard key={index} {...account} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccountCard({
  title,
  subtitle,
  desc,
  icon,
  size,
  light,
  core,
  pro,
  eco,
  flexi,
  shadow,
}) {
  const iconMap = {
    database,
    zigzag,
    chart: TwoStone,
    refresh: offMoon,
    settings,
    leaf,
  };

  const backgroundClass = light
    ? "bg-gradient-to-r from-[rgba(74,74,74,1)] to-[rgba(90,90,90,1)] text-white"
    : core
    ? "bg-[rgba(255,102,51,1)] text-white"
    : pro
    ? "bg-[rgba(255,102,51,1)] text-white"
    : eco
    ? "bg-[rgba(255,102,51,1)] text-white"
    : flexi
    ? "bg-[#0F0F0F] text-white"
    : "bg-gradient-to-r from-[rgba(74,74,74,1)] to-[rgba(90,90,90,1)] text-white";

  const cardSize =
    size === "large"
      ? "w-full sm:w-[48%] lg:w-[48%] xl:w-[700px]"
      : "w-full sm:w-[47%] lg:w-[31%] xl:w-[380px]";

  const iconSizeMap = {
    database: "w-[65px] sm:w-[80px] md:w-[85px] lg:w-[88px] xl:w-[92px]",
    zigzag: "w-[100px] sm:w-[110px] md:w-[120px] lg:w-[125px] xl:w-[130px]",
    chart: "w-[70px] sm:w-[78px] md:w-[85px] lg:w-[90px] xl:w-[92.75px]",
    refresh: "w-[58px] sm:w-[62px] md:w-[66px] lg:w-[68px] xl:w-[69px]",
    settings: "w-[60px] sm:w-[64px] md:w-[68px] lg:w-[70px] xl:w-[71.12px]",
    leaf: "w-[82px] sm:w-[90px] md:w-[95px] lg:w-[100px] xl:w-[103.68px]",
  };

  return (
    <Card
      className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-in-out hover:-translate-y-3 ${backgroundClass} ${shadow} ${cardSize} min-h-[260px]`}
    >
      {/* Icon */}
      <div className="absolute transition-transform duration-1000 ease-in-out top-10 right-8 group-hover:-translate-y-6 group-hover:translate-x-4">
        <img
          src={iconMap[icon]}
          alt={title}
          className={`${iconSizeMap[icon]} h-auto object-contain`}
        />
      </div>

      {/* Text */}
      <CardContent className="relative z-10 pr-1 flex flex-col justify-center h-full">
        <div className="transition-transform duration-700 ease-in-out group-hover:-translate-y-2">
          <h3 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-extrabold mb-[24px] leading-[1.2] font-manrope mt-[28px] text-[F4F4F4]">
            {title}
          </h3>
          <h4
            className={`text-[18px] sm:text-[20px] font-extrabold mb-3 leading-[1.5] font-manrope ${
              light ? "text-white" : "text-[#FAFAFA]"
            }`}
          >
            {subtitle}
          </h4>
          <p
            className={`text-[14px] sm:text-[15px] mt-[15px] font-semibold leading-relaxed font-manrope ${
              light ? "text-white" : "text-[#FAFAFA]"
            }`}
          >
            {desc}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
