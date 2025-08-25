// import { useState } from "react"
// import { useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const toggleMenu = () => setMenuOpen(!menuOpen)

//   const miniLinks = ["Partnerships", "Institutional", "Funding"]
//   const navLinks = ["Trading", "Insights", "Corporate"]
//   const [isSticky, setIsSticky] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <>
//       <header
//         className={`sticky top-0 w-full z-20 overflow-hidden transition-colors duration-300 ${isSticky ? 'bg-[#FFFBF9]' : ''
//           }`}
//         style={{
//           background: isSticky ? undefined : "rgba(242, 216, 211, 0.1)",
//           boxShadow: isSticky ? "0 2px 4px rgba(0,0,0,0.1)" : "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
//         }}
//       >

//         <div
//           className="absolute top-0 right-0 w-full h-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(circle at 90% 20%, rgba(255, 87, 34, 0.10) 0%, rgba(255, 87, 34, 0.05) 25%, rgba(255, 87, 34, 0.025) 40%, transparent 60%)",
//           }}
//         />
//         <div
//           className="absolute top-0 right-0 w-full h-full pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 800px 400px at 95% 30%, rgba(255, 87, 34, 0.07) 0%, rgba(255, 87, 34, 0.035) 30%, rgba(255, 87, 34, 0.018) 50%, transparent 70%)",
//           }}
//         />
//         <div
//           className="absolute top-0 right-0 w-full h-full pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(135deg, transparent 60%, rgba(255, 87, 34, 0.05) 75%, rgba(255, 87, 34, 0.025) 85%, transparent 95%)",
//           }}
//         />

//         <div className="relative z-10 max-w-[1440px] mx-5 sm:mx-6 md:mx-10 lg:mx-[80px] xl:mx-[100px]">
//           <div className="flex justify-end py-2">
//             <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] text-sm sm:text-base md:text-[14px] lg:text-[16px] font-medium text-[#DE2605]">
//               {miniLinks.map((label) => (
//                 <span
//                   key={label}
//                   className="hover:underline focus:outline-none transition-all duration-200"
//                 >
//                   {label}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center justify-between px-[] py-3 sm:py-2 relative">
//             <div className="flex items-center gap-4 sm:gap-10 md:gap-[60px]">
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-JvtCp3eGbwrNUCKAHpTas3wGuWwtQU.png"
//                 alt="LTI Logo"
//                 className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto object-contain"
//                 crossOrigin="anonymous"
//               />
//               <nav className="hidden md:flex gap-[30px] lg:gap-[60px] text-gray-700 text-[20px] font-semibold">
//                 {navLinks.map((label) => (
//                   <div
//                     key={label}
//                     className="group flex items-center gap-1 cursor-pointer transition-colors duration-200"
//                   >
//                     <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
//                       {label}
//                     </span>
//                     <ChevronDown className="h-6 w-6 transition-colors duration-200 text-gray-600 group-hover:text-[#FF5722]" />
//                   </div>
//                 ))}
//               </nav>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="hidden md:block">
//                 <Button className="group mt-1 py-[20px] px-[40px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold text-[16px]">
//                   <span className="transform transition-transform duration-300 group-hover:scale-105">
//                     Login
//                   </span>
//                 </Button>

//               </div>
//               <div className="md:hidden">
//                 <button onClick={toggleMenu} aria-label="Toggle Menu">
//                   {menuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {menuOpen && (
//         <>
//           <div onClick={toggleMenu} className="fixed inset-0 bg-black bg-opacity-50 z-30" />
//           <div
//             className="fixed top-0 right-0 h-full w-full z-40 transform transition-transform duration-300 translate-x-0"
//             style={{
//               background: "#FFF0EB",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <div className="flex justify-between items-center p-4 border-b">
//               <h2 className="text-lg font-semibold text-[#FF5722]">Menu</h2>
//               <button onClick={toggleMenu}>
//                 <X className="h-6 w-6 text-gray-800" />
//               </button>
//             </div>
//             <nav className=" flex flex-col gap-4 px-6 py-6 text-gray-700 text-base font-medium">
//               {navLinks.map((label) => (
//                 <div
//                   key={label}
//                   className="group flex items-center gap-1 cursor-pointer transition-colors duration-200"
//                 >
//                   <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
//                     {label}
//                   </span>
//                   <ChevronDown className="h-4 w-4 transition-colors duration-200 text-gray-600 group-hover:text-[#FF5722]" />
//                 </div>

//               ))}
//               <Button className="mt-4 py-[9px] px-[39px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold transform transition-transform duration-300 hover:scale-105">
//                 Login
//               </Button>
//             </nav>
//           </div>
//         </>
//       )}
//     </>
//   )
// }

// export default Header

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = ({ setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const miniLinks = ["Partnerships", "Institutional", "Funding"];
  const navLinks = [
    {
      label: "Trading",
      subMenu: [
        // "Spot Trading",
        // "Margin Trading",
        // "Derivatives",
        // "Futures",
        "Home",
        "Deposits and Withdrawals",
        // "NewsEducation",
        // "Rewards and Features",
      ],
    },
    { label: "Insights", subMenu: ["Market News", "Reports", "Research"] },
    { label: "Corporate", subMenu: ["About Us", "Careers", "Contact"] },
    // { label: "News Education", page: "newsEducation" },
    // { label: "Rewards", page: "rewardsAndFeatures" },
  ];

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper for navigation
  const handleNavClick = (item) => {
    if (item === "NewsEducation") {
      setCurrentPage("newsEducation");
    } else if (item === "Rewards and Features") {
      setCurrentPage("rewardsAndFeatures");
    } else if (item === "Deposits and Withdrawals") {
      setCurrentPage("depositsAndWithdrawals");
    } else {
      setCurrentPage("home"); // fallback, can expand later
    }
    setMenuOpen(false); // close mobile menu after navigation
  };

  return (
    <>
      <header
        className={`sticky top-0 w-full z-20 overflow-visible transition-colors duration-300 ${
          isSticky ? "bg-[#FFFBF9]" : ""
        }`}
        style={{
          background: isSticky ? undefined : "rgba(242, 216, 211, 0.1)",
          boxShadow: isSticky
            ? "0 2px 4px rgba(0,0,0,0.1)"
            : "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
        }}
      >
        {/* Gradient overlays */}
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 90% 20%, rgba(255, 87, 34, 0.10) 0%, rgba(255, 87, 34, 0.05) 25%, rgba(255, 87, 34, 0.025) 40%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 800px 400px at 95% 30%, rgba(255, 87, 34, 0.07) 0%, rgba(255, 87, 34, 0.035) 30%, rgba(255, 87, 34, 0.018) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, transparent 60%, rgba(255, 87, 34, 0.05) 75%, rgba(255, 87, 34, 0.025) 85%, transparent 95%)",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-5 sm:mx-6 md:mx-10 lg:mx-[80px] xl:mx-[100px]">
          {/* Mini links */}
          <div className="flex justify-end py-2">
            <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] text-sm sm:text-base md:text-[14px] lg:text-[16px] font-medium text-[#DE2605]">
              {miniLinks.map((label) => (
                <span
                  key={label}
                  className="hover:underline focus:outline-none transition-all duration-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-3 sm:py-2 relative">
            <div className="flex items-center gap-4 sm:gap-10 md:gap-[60px]">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-JvtCp3eGbwrNUCKAHpTas3wGuWwtQU.png"
                alt="LTI Logo"
                className="h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] w-auto object-contain"
                crossOrigin="anonymous"
              />
              {/* Desktop nav */}
              {/* <nav className="hidden md:flex gap-[30px] lg:gap-[60px] text-gray-700 text-[20px] font-semibold">
                {navLinks.map(({ label, subMenu }) => (
                  <div
                    key={label}
                    className="group relative flex items-center gap-1 cursor-pointer"
                  >
                    <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
                      {label}
                    </span>
                    <ChevronDown className="h-5 w-5 text-gray-600 group-hover:text-[#FF5722]" />

                    {subMenu && (
                      <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-gray-200 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {subMenu.map((item) => (
                          <a
                            key={item}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item);
                            }}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#FFF0EB] hover:text-[#FF5722] transition"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav> */}
              <nav className="hidden md:flex gap-[30px] lg:gap-[60px] text-gray-700 text-[20px] font-semibold">
                {navLinks.map(({ label, subMenu, page }) => (
                  <div
                    key={label}
                    className="group relative flex items-center gap-1 cursor-pointer"
                  >
                    {/* Standalone link */}
                    {!subMenu ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (page) setCurrentPage(page);
                        }}
                        className="text-gray-600 transition-colors duration-200 hover:text-[#FF5722]"
                      >
                        {label}
                      </a>
                    ) : (
                      <>
                        <span className="text-gray-600 transition-colors duration-200 group-hover:text-[#FF5722]">
                          {label}
                        </span>
                        <ChevronDown className="h-5 w-5 text-gray-600 group-hover:text-[#FF5722]" />
                        {/* Dropdown */}
                        <div className="absolute left-0 top-full mt-2 min-w-[180px] bg-white border border-gray-200 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          {subMenu.map((item) => (
                            <a
                              key={item}
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-[#FFF0EB] hover:text-[#FF5722] transition"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Login + Mobile menu toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Button className="group mt-1 py-[20px] px-[40px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold text-[16px]">
                  <span className="transform transition-transform duration-300 group-hover:scale-105">
                    Login
                  </span>
                </Button>
              </div>
              <div className="md:hidden">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                  {menuOpen ? (
                    <X className="h-6 w-6 text-gray-800" />
                  ) : (
                    <Menu className="h-6 w-6 text-gray-800" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
          />
          <div
            className="fixed top-0 right-0 h-full w-full z-40 transform transition-transform duration-300 translate-x-0"
            style={{
              background: "#FFF0EB",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold text-[#FF5722]">Menu</h2>
              <button onClick={toggleMenu}>
                <X className="h-6 w-6 text-gray-800" />
              </button>
            </div>
            {/* <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 text-base font-medium">
              {navLinks.map(({ label, subMenu }) => (
                <div key={label}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(openDropdown === label ? null : label)
                    }
                  >
                    <span className="text-gray-600">{label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openDropdown === label ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openDropdown === label && subMenu && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {subMenu.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleNavClick(item)}
                          className="text-left text-sm text-gray-600 hover:text-[#FF5722] transition"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="mt-4 py-[9px] px-[39px] rounded-full bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold transform transition-transform duration-300 hover:scale-105">
                Login
              </Button>
            </nav> */}
            <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 text-base font-medium">
              {navLinks.map(({ label, subMenu, page }) => (
                <div key={label}>
                  {!subMenu ? (
                    // Standalone item
                    <button
                      onClick={() => {
                        if (page) handleNavClick(page);
                      }}
                      className="text-left text-sm text-gray-600 hover:text-[#FF5722] transition"
                    >
                      {label}
                    </button>
                  ) : (
                    <>
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() =>
                          setOpenDropdown(openDropdown === label ? null : label)
                        }
                      >
                        <span className="text-gray-600">{label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === label ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {openDropdown === label && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {subMenu.map((item) => (
                            <button
                              key={item}
                              onClick={() => handleNavClick(item)}
                              className="text-left text-sm text-gray-600 hover:text-[#FF5722] transition"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
