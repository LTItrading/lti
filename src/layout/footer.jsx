import React from "react";
import FooterLeftLogo4x from "../assets/images/4x-Images/FooterLeftLogo4x.png";
import AppStore4x from "../assets/images/4x-Images/AppStore4x.png";
import playstoreApk4x from "../assets/images/4x-Images/playstoreApk4x.png";
import { Link } from "react-router-dom";
import Mastercard4x from "../assets/images/4x-Images/Mastercard4x.png";
import Visa4x from "../assets/images/4x-Images/Visa4x.png";
import Tether4x from "../assets/images/4x-Images/Tether4x.png";
import Bitcoin4x from "../assets/images/4x-Images/Bitcoin4x.png";
import Skrill4x from "../assets/images/4x-Images/Skrill4x.png";
import Neteller4x from "../assets/images/4x-Images/Neteller4x.png";
import GooglePay4x from "../assets/images/4x-Images/GooglePay4x.png";
import ApplePay4x from "../assets/images/4x-Images/ApplePay4x.png";
import BankWire4x from "../assets/images/4x-Images/BankWire4x.png";
import MetaQuotes4x from "../assets/images/4x-Images/MetaQuotes4x.png";
import FXCubic4x from "../assets/images/4x-Images/FXCubic4x.png";
import AyMabMission4x from "../assets/images/4x-Images/AyMabMission4x.png";
import brokeragerelated4x from "../assets/images/4x-Images/brokeragerelated4x.png";
import Paysafe4x from "../assets/images/4x-Images/Paysafe4x.png";
import Sumsub4x from "../assets/images/4x-Images/Sumsub4x.png";
import Binance4x from "../assets/images/4x-Images/Binance4x.png";

import Fb4xBW from "../assets/images/4x-Images/Fb4xBW.png";
import Tw4xBW from "../assets/images/4x-Images/Tw4xBW.png";
import Link4xBW from "../assets/images/4x-Images/Link4xBW.png";
import Insta4xBW from "../assets/images/4x-Images/Insta4xBW.png";

import OgFb4x from "../assets/images/4x-Images/ogFb4x.png";
import OgTw4x from "../assets/images/4x-Images/ogTw4x.png";
import OgLink4x from "../assets/images/4x-Images/ogLink4x.png";
import OgInsta4x from "../assets/images/4x-Images/ogInsta4x.png";

const Footer = () => {
  return (
    <div className="w-full px-3 sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-[1440px] mx-auto">
      {/* Top Section */}
      <div className="border-b border-[rgba(0,0,0,0.22)] flex flex-col md:flex-row items-center justify-between py-6 gap-6">
        <div className="text-center md:text-left">
          <div className="text-[24px] sm:text-[28px] md:text-custom-32 font-extrabold">
            Powering Global Trading.
          </div>
          <div className="text-sm sm:text-base font-normal">
            Designed for traders who demand more.
          </div>
        </div>
        <div className="flex items-center gap-5 sm:gap-6 md:gap-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/19zTXUJSpc/?mibextid=LQQJ4d"
            className="relative w-[50px] h-[50px]"
          >
            <img
              src={Fb4xBW}
              alt="Facebook"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-[0.56] transition-opacity duration-300 hover:opacity-0"
            />
            <img
              src={OgFb4x}
              alt="Facebook Hover"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/ldntradingindex?s=21"
            className="relative w-[50px] h-[50px]"
          >
            <img
              src={Tw4xBW}
              alt="Twitter"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-[0.56] transition-opacity duration-300 hover:opacity-0"
            />
            <img
              src={OgTw4x}
              alt="Twitter Hover"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/london-trading-index/"
            className="relative w-[50px] h-[50px]"
          >
            <img
              src={Link4xBW}
              alt="LinkedIn"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-[0.56] transition-opacity duration-300 hover:opacity-0"
            />
            <img
              src={OgLink4x}
              alt="LinkedIn Hover"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/londontradingindex/profilecard/?igsh=MTBxMXZmbjRvcWo1dg=="
            className="relative w-[50px] h-[50px]"
          >
            <img
              src={Insta4xBW}
              alt="Instagram"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-[0.56] transition-opacity duration-300 hover:opacity-0"
            />
            <img
              src={OgInsta4x}
              alt="Instagram Hover"
              className="absolute inset-0 w-[50px] h-[50px] p-2 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        </div>
      </div>

      {/* Middle Section - Logo + App Stores */}
      <div className="border-b border-[rgba(0,0,0,0.22)] py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          <img
            src={FooterLeftLogo4x}
            alt="Logo"
            className="w-[90px] sm:w-[100px] md:w-[107px] h-[60px] sm:h-[70px] md:h-[80px]"
          />
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <img
              src={playstoreApk4x}
              alt="Play Store"
              className="w-[110px] sm:w-[125px] md:w-[139px] h-[32px] sm:h-[36px] md:h-[39px] object-contain"
            />
            <img
              src={AppStore4x}
              alt="App Store"
              className="w-[110px] sm:w-[125px] md:w-[139px] h-[32px] sm:h-[36px] md:h-[39px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-3 border-b border-[rgba(0,0,0,0.22)] pb-5">
        <div className="text-[16px] leading-[156%] font-semibold tracking-[0] font-manrope">
          Contact Us
        </div>
        <div className="text-[12px] leading-[156%] font-normal tracking-[0] font-manrope text-[#EE4223]">
          support@londontradingindex.com
        </div>

        {/* Footer Links */}
        <div className="pt-5 grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-y-6 gap-x-1">
          {/* Column 1 */}
          <ul>
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extrabold text-[#FF6633] mb-1 font-manrope leading-[100%] tracking-[0]">
              Trading
              <li>
                <Link
                  to="/trading/account-options"
                  className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
                >
                  Account Options
                </Link>
              </li>
              <li>
                <Link
                  to="/trading/market-access"
                  className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
                >
                  Market Access (↓)
                </Link>
              </li>
              <li>
                <Link
                  to="/trading/trading-conditions"
                  className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
                >
                  Trading Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/trading/deposits-withdrawals"
                  className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
                >
                  Deposits and Withdrawals
                </Link>
              </li>
              <li>
                <Link
                  to="/trading/mt5"
                  className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
                >
                  MT5 Trading Platform
                </Link>
              </li>
            </li>
          </ul>

          {/* Column 2 */}
          <ul>
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extrabold text-[#FF6633] mb-1 font-manrope leading-[100%] tracking-[0]">
              Insights
            </li>
            <li className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
              <a href="https://www.ltiproprietary.com/">LTI Proprietary (↓)</a>
            </li>
            <li>
              <Link
                to="/insights/news-education"
                className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
                News and Education
              </Link>

            </li>
            <li>
              <Link
                to="/insights/rewards"
                className="text-[#1C1C1C] font-normal text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] leading-[28px]"
              >
                Rewards and Features
              </Link>
            </li>
          </ul>

          {/* Column 3 */}
          <ul>
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extrabold text-[#FF6633] mb-1 font-manrope leading-[100%] tracking-[0]">
              Corporate
            </li>
            <li>
              <Link
                to="/about"
                className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
                Our Story
              </Link>

            </li>
            {/* <li className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
              Regulation & Licenses
            </li> */}
            <li>
              <Link
                to="/contact"
                className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
                Contact Us
              </Link>

            </li>
            {/* <li className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]">
              Help Centre
            </li> */}
          </ul>

          {/* Column 4 */}
          <ul>
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-extrabold text-[#FF6633] mb-1 font-manrope leading-[100%] tracking-[0]">
                Partnerships
            </li>
            <Link
              to="https://partnerships.londontradingindex.com "
              className="text-[#1C1C1C] font-normal text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[28px]"
            >
              Partner With Us (↓)
            </Link>
          </ul>
        </div>
      </div>

      <div className="space-y-4 pb-[60px]">
        {/* Top Links */}
        <div className="space-y-4 pb-[60px]">
          <div className="flex gap-x-4 pt-5">
            <a
              href="/pdfs/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope font-extrabold leading-[100%] opacity-90 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FF6633] pr-4 border-r-2 border-[#FF6633]"
            >
              Terms and Conditions
            </a>

            <a
              href="/pdfs/privacy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope font-extrabold leading-[100%] opacity-90 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FF6633] pr-4"
            >
              Privacy Policy
            </a>
          </div>
        </div>


        {/* Risk Warning */}
        <div className="sm:pt-6">
          <ul className="space-y-4">
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#1C1C1C] opacity-70">
              Risk Warning
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%]  text-[#888888]">
              Trading derivatives carries significant risks. It is not suitable
              for all investors, and if you are a professional client, you could
              lose substantially more than your initial investment. When
              acquiring our derivative products, you have no entitlement, right,
              or obligation to the underlying financial assets.
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              Past performance is no indication of future results, and tax laws
              are subject to change. The information on this website is general
              in nature and does not consider your specific objectives,
              financial circumstances, or needs. Before acting on any advice,
              you should assess whether it is appropriate for you in light of
              your personal situation. We strongly encourage you to seek
              independent financial advice if necessary.
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              Please review our Terms and Conditions and AML Policy
              and ensure you fully understand the risks before making any
              trading decisions.
            </li>
          </ul>
        </div>

        {/* Regional Restrictions */}
        <div>
          <ul className="space-y-4">
            <li className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold text-[#1C1C1C] opacity-70">
              Regional Restrictions
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              We do not offer our services to residents of certain jurisdictions
              such as Canada, Singapore, the United States, and to jurisdictions
              on the FATF and EU/UN sanctions lists. For more information,
              please refer to our  FAQ page
              {/* <span className="text-[#FF6633] font-medium text-[12px] leading-[200%] px-1 font-manrope"> */}

              {/* </span> */}
              .
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              The information on this site and the products and services offered
              are not intended for distribution to any person in any country or
              jurisdiction where such distribution or use would be contrary to
              local law or regulation.
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              London Trading Index is a registered trading name of Equivest
              (Mauritius) Limited, which is regulated by the Financial Services
              Commission of the Republic of Mauritius under licence number
              00321997. Equivest (Mauritius) Limited is incorporated under
              company number GB24203378, with its registered address at The
              Cyberati Lounge, Ground Floor, The Catalyst, 40 Silicon Avenue,
              Cybercity, 72201 Eben, Republic of Mauritius.
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              The website www.londontradingindex.com
              is operated by London Trading Index Limited, a company
              incorporated in Saint Vincent and the Grenadines under
              registration number 25630, with its registered office at Suite
              305, Griffith Corporate Centre, Kingstown. London Trading Index
              Limited is authorised by the Financial Services Authority (FSA) of
              Saint Vincent and the Grenadines to operate in accordance with
              local laws.
            </li>
            <li className="font-manrope font-normal text-[12px] leading-[158%] text-[#888888]">
              Palm Valley Commercial Brokers L.L.C (Incorporation No. 1205462, registered address: Al Khabeesi Building, Plot 128-246, Office 9-473, Dubai, United Arab Emirates) is duly authorised and acts solely in the capacity of payment agent on behalf of London Trading Index Limited (Incorporation No. 25630, registered address: Suite 305, Griffith Corporate Centre, Beachmont, Kingstown, Saint Vincent and the Grenadines
            </li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <div className="capitalize text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[158%] text-[#1C1C1C] opacity-70">
            Payment Methods
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-6 opacity-[0.76] ">
            <img
              src={Mastercard4x}
              alt="Mastercard"
              className="w-[31.74px] h-[24.67px] opacity-[0.60]"
            />
            <img
              src={Visa4x}
              alt="Visa"
              className="w-[38.3px] h-[12.46px] opacity-[0.60]"
            />
            <img
              src={Tether4x}
              alt="Tether"
              className="w-[29.95px] h-[26.71px] opacity-[0.60]"
            />
            <img
              src={Bitcoin4x}
              alt="Bitcoin"
              className="w-[28.33px] h-[27.87px] opacity-[0.60]"
            />
            <img
              src={Skrill4x}
              alt="Skrill"
              className="w-[37.83px] h-[12.65px] opacity-[0.60]"
            />
            <img
              src={Neteller4x}
              alt="Neteller"
              className="w-[67.54px] h-[11.26px] opacity-[0.60]"
            />
            <img
              src={GooglePay4x}
              alt="Google Pay"
              className="w-[91.4px] h-[19.35px] opacity-[0.60]"
            />
            <img
              src={ApplePay4x}
              alt="Apple Pay"
              className="w-[67.48px] h-[27.98px] opacity-[0.55]"
            />
            <img
              src={BankWire4x}
              alt="Bank Wire"
              className="w-[60px] h-[22px] opacity-[0.60]"
            />
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="space-y-4">
          <div className="capitalize text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold leading-[158%] text-[#1C1C1C] opacity-70">
            Trusted Partners
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-6 opacity-[0.76]">
            <img
              src={MetaQuotes4x}
              alt="MetaQuotes"
              className="w-[119px] h-[18px] opacity-[0.60]"
            />
            <img
              src={FXCubic4x}
              alt="FXCubic"
              className="w-[56px] h-[32px] opacity-[0.60]"
            />
            <img
              src={AyMabMission4x}
              alt="AyMabMission"
              className="w-[36px] h-[41px] opacity-[0.60]"
            />
            <img
              src={brokeragerelated4x}
              alt="Brokerage Related"
              className="w-[32px] h-[30px] opacity-[0.60]"
            />
            <img
              src={Paysafe4x}
              alt="Paysafe"
              className="w-[68.79px] h-[16.13px] opacity-[0.40]"
            />
            <img
              src={Sumsub4x}
              alt="Sumsub"
              className="w-[89px] h-[20px] opacity-[0.60]"
            />
            <img
              src={Binance4x}
              alt="Binance"
              className="w-[73.71px] h-[14px] opacity-[0.50]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
