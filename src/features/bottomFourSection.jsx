import React from 'react';
import Footer from '@/layout/footer';
import ModernPaymentsFeatures from './modernPaymentsFeatures';
import RegisterFeatures from './registerFeatures';
import TradersFeatures from './tradersFeatures';

const BottomFourSection = () => {
    return (
        <div className="mx-auto space-y-0 lg:space-y-10">
            <TradersFeatures />
            <ModernPaymentsFeatures />
            <RegisterFeatures/>
            <Footer />
        </div>
    );
};

export default BottomFourSection;