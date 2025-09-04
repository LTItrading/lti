import React, { useState, useEffect } from 'react';
import { PiLessThanBold } from "react-icons/pi";
import tradersFeaturesIcon14x from "../assets/images/4x-Images/tradersFeaturesIcon1-4x.png";
import tradersFeaturesIcon24x from "../assets/images/4x-Images/tradersFeaturesIcon2-4x.png";
import tradersFeaturesIcon34x from "../assets/images/4x-Images/tradersFeaturesIcon3-4x.png";
import tradersFeaturesIcon44x from "../assets/images/4x-Images/tradersFeaturesIcon4-4x.png";
import rigisterColumnEffectImg from "../assets/images/4x-Images/rigisterColumnEffectImg4x.png";
import backgroundImgForHomePageRotate from "../assets/images/4x-Images/backgroundImgForHomePageRotate.png";
import { useInView } from 'react-intersection-observer';

const TradersFeatures = () => {
    const [sectionRef, inView] = useInView({ threshold: 0.2 });
    const [executionSpeed, setExecutionSpeed] = useState(0);

    useEffect(() => {
        let interval;

        if (inView) {
            setExecutionSpeed(0); // Reset count every time inView is true

            let start = 0;
            const end = 50;
            const duration = 2000;
            const incrementTime = 10;
            const totalSteps = duration / incrementTime;
            const increment = (end - start) / totalSteps;

            interval = setInterval(() => {
                setExecutionSpeed(prev => {
                    const next = prev + increment;
                    if (next >= end) {
                        clearInterval(interval);
                        return end;
                    }
                    return next;
                });
            }, incrementTime);
        } else {
            // Reset when component leaves view
            setExecutionSpeed(0);
        }

        return () => clearInterval(interval);
    }, [inView]);


    return (
        <div ref={sectionRef} className='relative w-full bg-[#FFFBF9] font-manrope overflow-hidden'>
            <img
                src={backgroundImgForHomePageRotate}
                alt="Background"
                className="absolute top-0 left-0 w-full h-full "
            />

            <div className="relative z-10 w-full px-0 sm:px-6 lg:px-12 py-0 md:pt-16 md:pb-[30px]">
                <div className="group relative mx-auto max-w-[1100px] bg-[#121212]/90 p-6 sm:p-10 rounded-[0px] md:rounded-[40px] overflow-hidden transition-all duration-900">
                    <img
                        src={rigisterColumnEffectImg}
                        alt="FX"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0 pointer-events-none"
                    />

                    <div className="relative z-10 pointer-events-none group-hover:pointer-events-auto sm:pointer-events-auto">
                        <div className={`transition-all duration-1000 ease-in-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
                            <div className="text-center mb-10 space-y-2">
                                <h2 className="text-[#EE4223] text-[28px] sm:text-[32px] md:text-[36px] font-extrabold leading-[1.5]">
                                    Numbers That Matter to Traders
                                </h2>
                                <p className="text-[#F4F4FA] text-[13px] sm:text-[14px] font-semibold leading-[1.6] max-w-xl mx-auto opacity-60">
                                    Our trading infrastructure reflects the highest standards in the industry delivering precision from price to payout.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
                                <div>
                                    <div className="text-[#EE4223] text-[32px] font-extrabold font-montserrat">Zero</div>
                                    <div className="text-[#F4F4F4] text-[16px] font-normal font-montserrat">Trade Rejections or Requotes</div>
                                </div>
                                <div>
                                    <div className="text-[#EE4223] text-[32px] font-extrabold font-montserrat">89.8%</div>
                                    <div className="text-[#F4F4F4] text-[16px] font-normal font-montserrat">Instant Withdrawal Approval</div>
                                </div>
                                <div>
                                    <div className="text-[#EE4223] text-[32px] font-extrabold font-montserrat flex justify-center items-center gap-1">
                                        <PiLessThanBold /> {Math.round(executionSpeed)}ms
                                    </div>
                                    <div className="text-[#F4F4F4] text-[16px] font-normal font-montserrat">Avg. Execution Speed</div>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ease-in-out delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {/* Card 1 */}
                               <div className="group bg-[#1E1E1E] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                                   <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[#292929] ring-1 ring-[#EE4223]/20 group-hover:ring-[#EE422333] group-hover:ring-[3px] transition-all duration-300">
                                        <img src={tradersFeaturesIcon14x} alt="Tight Spreads" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h4 className="text-[#F4F4F4] text-[16px] font-extrabold mb-2">Tight Spreads</h4>
                                    <p className="text-[#F4F4F4] text-[11px] font-bold opacity-60 leading-relaxed">
                                        Trade with raw spreads from 0.0 pips – no markups, just market pricing.
                                    </p>
                                </div>

                                {/* Card 2 */}
                               <div className="group bg-[#1E1E1E] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                                   <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[#292929] ring-1 ring-[#EE4223]/20 group-hover:ring-[#EE422333] group-hover:ring-[3px] transition-all duration-300">
                                        <img src={tradersFeaturesIcon24x} alt="Transparent Pricing" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h4 className="text-[#F4F4F4] text-[16px] font-extrabold mb-2">Transparent Pricing</h4>
                                    <p className="text-[#F4F4F4] text-[11px] font-bold opacity-60 leading-relaxed">
                                        Zero surprises. Low commissions and no fees on certain accounts.
                                    </p>
                                </div>

                                {/* Card 3 */}
                               <div className="group bg-[#1E1E1E] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                                   <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[#292929] ring-1 ring-[#EE4223]/20 group-hover:ring-[#EE422333] group-hover:ring-[3px] transition-all duration-300">
                                        <img src={tradersFeaturesIcon34x} alt="Flexible Leverage" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h4 className="text-[#F4F4F4] text-[16px] font-extrabold mb-2">Flexible Leverage</h4>
                                    <p className="text-[#F4F4F4] text-[11px] font-bold opacity-60 leading-relaxed">
                                        Control your risk with leverage options up to 1:500.
                                    </p>
                                </div>

                                {/* Card 4 */}
                               <div className="group bg-[#1E1E1E] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                                   <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-[#292929] ring-1 ring-[#EE4223]/20 group-hover:ring-[#EE422333] group-hover:ring-[3px] transition-all duration-300">
                                        <img src={tradersFeaturesIcon44x} alt="Risk Protection" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h4 className="text-[#F4F4F4] text-[16px] font-extrabold mb-2">Risk Protection Built In</h4>
                                    <p className="text-[#F4F4F4] text-[11px] font-bold opacity-60 leading-relaxed">
                                        Never lose more than your deposit. All accounts come with negative balance protection as standard.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradersFeatures;
