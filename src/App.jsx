// import React from 'react'
// import Footer from './layout/footer'
// import RegisterFeatures from './features/registerFeatures'
// import ModernPaymentsFeatures from './features/modernPaymentsFeatures'
// import TradersFeatures from './features/tradersFeatures'
// import AccountsSection from './features/AccountsSection'
// import TradingCardSection from './features/TradingHistoryNumbers'
// import Header from './layer/Header'
// import TradingFeatures from "./features/TradingFeatures"
// import InfiniteImageSlider from './components/sliders/InfiniteImageSlider'
// import TradingLandingPage from './dashboard/pages/homepage'
// import BottomFourSection from './features/bottomFourSection'
// import TopFourSection from './features/topFourSection'
// import MiddleSixSection from './features/middleSixSection'

// function App() {
//   return (
//     <div>
//       <div>
//         <Header/>
//         <TradingLandingPage />
//         <MiddleSixSection />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App;
// import React, { useState } from "react";
// import Footer from "./layout/footer";
// import RegisterFeatures from "./features/registerFeatures";
// import ModernPaymentsFeatures from "./features/modernPaymentsFeatures";
// import TradersFeatures from "./features/tradersFeatures";
// import AccountsSection from "./features/AccountsSection";
// import TradingCardSection from "./features/TradingHistoryNumbers";
// import Header from "./layer/Header";
// import TradingFeatures from "./features/TradingFeatures";
// import InfiniteImageSlider from "./components/sliders/InfiniteImageSlider";
// import TradingLandingPage from "./dashboard/pages/homepage";
// import BottomFourSection from "./features/bottomFourSection";
// import TopFourSection from "./features/topFourSection";
// import MiddleSixSection from "./features/middleSixSection";
// import NewsEducation from "./features/newsEducation";
// import RewardsFeatures from "./features/rewardsFeatures";
// import DepositsWithdrawals from "./features/depositWithdrawl";
// import MarketAccess from "./features/MarketAccess";
// import MT5Platform from "./features/MT5Platform";
// import TradingConditions from "./features/TradingConditions";
// import AccountOptions from "./pages/dashboardLTI/AccountOptions";

// function App() {
//   const [currentPage, setCurrentPage] = useState("home"); // default home

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return (
//           <>
//             <TradingLandingPage />
//             <MiddleSixSection />
//           </>
//         );
//       case "newsEducation":
//         return <NewsEducation />;
//       case "rewardsAndFeatures":
//         return <RewardsFeatures />;
//       case "depositsAndWithdrawals":
//         return <DepositsWithdrawals />;
//       case "MarketAccess":
//         return <MarketAccess />;
//       case "Mt5":
//         return <MT5Platform />;
//       case "tradingconditions":
//         return <TradingConditions />;
//       case "AccountOptions":
//         return <AccountOptions />;
//       default:
//         return <TradingLandingPage />;
//     }
//   };

//   return (
//     <div>
//       <Header setCurrentPage={setCurrentPage} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layer/Header";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import TradingLandingPage from "./dashboard/pages/homepage";
import MiddleSixSection from "./features/middleSixSection";
import NewsEducation from "./features/newsEducation";
import RewardsFeatures from "./features/rewardsFeatures";
import DepositsWithdrawals from "./features/depositWithdrawl";
import MarketAccess from "./features/MarketAccess";
import MT5Platform from "./features/MT5Platform";
import TradingConditions from "./features/TradingConditions";
import AccountOptions from "./pages/dashboardLTI/AccountOptions";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TradingLandingPage />
              <MiddleSixSection />
            </>
          }
        />
        <Route path="/insights/news-education" element={<NewsEducation />} />
        <Route path="/insights/rewards" element={<RewardsFeatures />} />
        <Route path="/trading/deposits-withdrawals" element={<DepositsWithdrawals />} />
        <Route path="/trading/market-access" element={<MarketAccess />} />
        <Route path="/trading/mt5" element={<MT5Platform />} />
        <Route path="/trading/trading-conditions" element={<TradingConditions />} />
        <Route path="/trading/account-options" element={<AccountOptions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

