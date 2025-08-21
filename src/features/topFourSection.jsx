import TradingLandingPage from '@/dashboard/pages/homepage';
import Header from '@/layer/Header';
import React from 'react';
import TradingCardSection from './TradingHistoryNumbers';
import TradingFeatures from './TradingFeatures';
import AccountsSection from './AccountsSection';

const TopFourSection = () => {
    return (
        <div>
            <Header/>
            <TradingLandingPage/>
            <TradingCardSection/>
            <TradingFeatures/>
            <AccountsSection/>

        </div>
    );
}

export default TopFourSection;
