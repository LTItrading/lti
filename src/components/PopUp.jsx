import React from "react";

const RiskWarningPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 transition-opacity duration-300 ease-in-out animate-fadeIn">
            {/* Container is now a flexbox column to organize content vertically */}
            <div
                className="relative bg-white rounded-xl shadow-2xl w-full mx-4 max-w-lg p-6 text-center max-h-[90vh] flex flex-col transform transition-transform duration-300 scale-95 animate-scaleUp
                   sm:max-w-xl sm:p-8">

                {/* Professional Icon (unchanged) */}
                <div className="flex justify-center items-center mb-4 sm:mb-6">
                    <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.506 2.505-1.506 3.27 0l7.302 14.363c.766 1.506-.272 3.27-1.928 3.27H2.883c-1.656 0-2.694-1.764-1.928-3.27l7.302-14.363zM10 11a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-xl font-bold text-gray-800 mb-4 sm:text-2xl md:text-3xl sm:mb-6">
                    Important Risk Warning
                </h2>

                {/* Text Body: Now has flex-grow to take up all available vertical space and becomes scrollable */}
                <p className="text-xs text-gray-600 leading-relaxed text-left whitespace-pre-line overflow-y-auto flex-grow pr-2 mb-6 sm:text-sm">
                    Trading derivatives carries significant risks. These products are not suitable for all investors.

                    {"\n\n"}If you are classified as a professional client, you may lose substantially more than your initial investment.

                    {"\n\n"}When trading our derivative products, you have no entitlement, right, or obligation to the underlying financial assets.

                    {"\n\n"}Past performance does not guarantee future results. Tax laws may change and affect your outcomes.

                    {"\n\n"}The information provided on this website is general in nature and does not take into account your specific objectives, financial situation, or needs.

                    {"\n\n"}Before making any trading decision:

                    {"\n\n"}Carefully consider whether trading is appropriate for you.

                    {"\n\n"}Review our [Terms & Conditions] and [AML Policy].

                    {"\n\n"}Seek independent financial advice if necessary.

                    {"\n\n"}By continuing, you confirm that you understand the risks involved and accept our Terms and Conditions.
                </p>

                {/* Buttons: Fixed at the bottom of the container */}
                <div className="flex flex-col items-center gap-3 mt-auto sm:flex-row sm:justify-center sm:gap-6">
                    <button
                        onClick={onClose}
                        className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg  transition-all duration-200 transform hover:scale-105 active:scale-100 sm:w-auto"
                    >
                        I Understand and Accept the Risks
                    </button>
                    <button
                        onClick={() => {
                            localStorage.removeItem("hasSeenPopUp")
                            window.close();
                        }}
                        className="w-full px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 active:scale-100 sm:w-auto"
                    >
                        Exit Website
                    </button>

                </div>
            </div>
        </div>
    );
};

export default RiskWarningPopup;