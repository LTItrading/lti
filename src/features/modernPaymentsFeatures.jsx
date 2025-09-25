// import React from 'react';
// import ModernPaymentImg14x from "../assets/images/4x-Images/ModernPaymentImg1-4x.png";
// import ModernPaymentImg24x from "../assets/images/4x-Images/ModernPaymentImg2-4x.png";
// import ModernPaymentImg34x from "../assets/images/4x-Images/ModernPaymentImg3-4x.png";
// import rigisterColumnEffectImg from "../assets/images/4x-Images/rigisterColumnEffectImg4x.png";
// import backgroundImgForHomePage4x from "../assets/images/4x-Images/backgroundImgForHomePage4x.png";

// const ModernPaymentsFeatures = () => {
//     return (
//         <div className="w-full mx-auto relative overflow-hidden px-0 sm:px-6 md:px-10 lg:px-20 xl:px-32 sm:px-6 lg:px-8 py-[0px] sm:py-[80px] lg:py-[40px] bg-[#FFFBF9]">

//             {/* Background Image like Screenshot */}
//             <img
//                 src={backgroundImgForHomePage4x}
//                 alt="Decorative Background"
//                 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] max-w-none pointer-events-none z-0 h-full"
//             />

//             {/* Main Container */}
//             <div className="relative z-[2] font-manrope bg-[#1C1C1C] text-white rounded-none sm:rounded-[50px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-20 overflow-hidden max-w-[1440px] mx-auto">

//                 {/* Effect Layer */}
//                 <img
//                     src={rigisterColumnEffectImg}
//                     alt="Effect"
//                     className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-60"
//                 />

//                 {/* Content */}
//                 <div className="relative z-[2] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">

//                     {/* Scrolling Images */}
//                     <div className="flex gap-3 sm:gap-4 md:gap-6 lg:w-1/2 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
//                         {[ModernPaymentImg14x, ModernPaymentImg24x, ModernPaymentImg34x].map((img, index) => (
//                             <div key={index} className="relative w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-full overflow-hidden">
//                                 <div className={`absolute w-full flex flex-col ${index % 2 === 0 ? 'animate-scroll-y' : 'animate-scroll-y-reverse'}`}>
//                                     {[...Array(4)].map((_, i) => (
//                                         <img key={i} src={img} alt={`col-${index}-${i}`} className="w-full mb-3 sm:mb-4" />
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Text Section */}
//                     <div className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-5 px-2 sm:px-0">
//                         <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-manrope font-bold leading-[140%] tracking-[0] text-[#F4F4F4]">
//                             Modern <span className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-[#EE4223]">Payments </span>
//                             for Modern <span className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-[#EE4223]">Traders</span>
//                         </h2>
//                         <p className="text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-[198%] text-[#F4F4F4]">
//                             From cards to crypto, we offer a wide range of deposit and withdrawal options – fast, flexible, and built for modern traders.
//                         </p>
//                         <p className="text-[10px] sm:text-[11px] md:text-[12px] font-light leading-[191%] text-[#F4F4F4] opacity-[0.54]">
//                             *Availability of payment methods may vary by region and client verification status. Processing times and fees depend on the provider and account type.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ModernPaymentsFeatures;




import React from 'react';
import ModernPaymentImg14x from "../assets/images/4x-Images/ModernPaymentImg1-4x.png";
import ModernPaymentImg24x from "../assets/images/4x-Images/ModernPaymentImg2-4x.png";
import ModernPaymentImg34x from "../assets/images/4x-Images/ModernPaymentImg3-4x.png";
import rigisterColumnEffectImg from "../assets/images/4x-Images/rigisterColumnEffectImg4x.png";
import backgroundImgForHomePage4x from "../assets/images/4x-Images/backgroundImgForHomePage4x.png";

const ModernPaymentsFeatures = () => {
    return (
<div className="w-full mx-auto relative overflow-hidden px-0 sm:px-6 md:px-10 lg:px-20 xl:px-32 sm:px-6 lg:px-8 py-[0px] sm:py-[80px] lg:py-[40px] bg-white">

    {/* Background Image */}
    <img
        src={backgroundImgForHomePage4x}
        alt="Decorative Background"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] max-w-none pointer-events-none z-0 h-full"
    />

    {/* Main Container */}
    <div className="relative z-[2] font-manrope text-black rounded-none sm:rounded-[50px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-20 overflow-hidden max-w-[1440px] mx-auto bg-white">

        {/* Effect Layer */}
        <img
            src={rigisterColumnEffectImg}
            alt="Effect"
            className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none opacity-20 "
        />

        {/* Content */}
        <div className="relative z-[2] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">

            {/* Scrolling Images */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 lg:w-2/2 h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden bg-black rounded-[2rem] ">
                {[ModernPaymentImg14x, ModernPaymentImg24x, ModernPaymentImg34x].map((img, index) => (
                    <div key={index} className="relative w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-full overflow-hidden">
                        <div className={`absolute w-full flex flex-col ${index % 2 === 0 ? 'animate-scroll-y' : 'animate-scroll-y-reverse'}`}>
                            {[...Array(4)].map((_, i) => (
                                <img key={i} src={img} alt={`col-${index}-${i}`} className="w-full mb-3 sm:mb-4" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-5 px-2 sm:px-0">
                <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-manrope font-bold leading-[140%] tracking-[0] text-black">
                    Modern <span className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-[#EE4223]">Payments </span>
                    for Modern <span className="text-[26px] sm:text-[30px] md:text-[36px] font-extrabold text-[#EE4223]">Traders</span>
                </h2>
                <p className="text-[13px] sm:text-[14px] md:text-[16px] font-medium leading-[198%] text-black opacity-80">
                    From cards to crypto, we offer a wide range of deposit and withdrawal options – fast, flexible, and built for modern traders.
                </p>
                <p className="text-[20px] sm:text-[11px] md:text-[12px] font-light leading-[191%] text-black opacity-50">
                    *Availability of payment methods may vary by region and client verification status. Processing times and fees depend on the provider and account type.
                </p>
            </div>
        </div>
    </div>
</div>

    );
};

export default ModernPaymentsFeatures;

