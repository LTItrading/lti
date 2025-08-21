import React from 'react';
import TradingCardSection from './TradingHistoryNumbers';
import TradingFeatures from './TradingFeatures';
import AccountsSection from './AccountsSection';
import ModernPaymentsFeatures from './modernPaymentsFeatures';
import RegisterFeatures from './registerFeatures';
import TradersFeatures from './tradersFeatures';
import NewsEducation from './newsEducation';
import RewardsFeatures from './rewardsFeatures';

const MiddleSixSection = () => {
    return (
        <div className='bg-[#FFFBF9]'>
            <TradingCardSection />
            <TradingFeatures />
            <AccountsSection />
            <TradersFeatures />
            {/* <NewsEducation/>
            <RewardsFeatures/> */}
            <ModernPaymentsFeatures />
            <RegisterFeatures />
        </div>
    );
}

export default MiddleSixSection;
