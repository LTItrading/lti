"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom"; // swap for next/link if using Next.js

export default function MegaMenu() {
  const navLinks = [
    {
      label: "Trading",
      subMenu: [
        {
          title: "Accounts",
          items: [
            { name: "Account Options", path: "/trading/account-options" },
          ],
        },
        {
          title: "Market Access",
          items: [
            { name: "Market Access", path: "/trading/market-access" }, // placeholder
          ],
        },
        {
          title: "Trading Information",
          items: [
            { name: "Trading Conditions", path: "/trading/trading-conditions" },
            {
              name: "Deposits and Withdrawals",
              path: "/trading/deposits-withdrawals",
            },
          ],
        },
        {
          title: "Tools & Platforms",
          items: [{ name: "MT5 Trading Platform", path: "/trading/mt5" }],
        },
      ],
    },
    {
      label: "Insights",
      subMenu: [
        {
          title: "Prop Trading",
          items: [
            {
              name: "LTI Proprietary",
              path: "https://www.ltiproprietary.com",
            },
          ],
        },
        {
          title: "Trading Tools",
          items: [
            { name: "News and Education", path: "/insights/news-education" },
            { name: "Rewards and Features", path: "/insights/rewards" },
          ],
        },
        {
          title: "Partnerships",
          items: [
            {
              name: "Partner With Us",
              path: "https://partnerships.londontradingindex.com",
            },
          ],
        },
      ],
    },
    {
      label: "Corporate",
      subMenu: [
        {
          title: null,
          items: [
            { name: "Our Story", path: "/about" },
            // { name: "Regulation and Licenses", path: "/licenses" },
            { name: "Contact Us", path: "/contact" },
            // { name: "Help Centre", path: "/help" },
          ],
        },
      ],
    },
  ];

  return (
    <NavigationMenu.Root className="relative z-50 flex justify-center text-gray-700">
      <NavigationMenu.List className="flex space-x-8 p-4 text-lg font-semibold">
        {navLinks.map(({ label, subMenu }) => (
          <NavigationMenu.Item key={label} >
            {/* Top-level menu trigger */}
            <NavigationMenu.Trigger className="flex items-center gap-1 hover:text-[#FF5722]  transition-colors">
              {label}
              <ChevronDownIcon className="h-4 w-4" />
            </NavigationMenu.Trigger>

            {/* Mega menu content */}
            {subMenu && (
              <NavigationMenu.Content className="absolute xl:left-[100px] lg:left-[50px] md:left-[-10px] top-full bg-white text-black shadow-lg rounded-lg mt-2 p-6 md:min-w-[55vw] lg:min-w-[70vw] xl:min-w-max max-w-[100vw] overflow-x-auto">
                <div className="flex flex-wrap gap-8 ">
                  {subMenu.map(({ title, items },i) => (
                    <div key={title || "untitled"} className={subMenu?.length-1 == i ? "" : "border-r"}>
                      {title && (
                        <p className="font-bold text-muted-foreground mb-2 text-sm uppercase whitespace-nowrap">
                          {title}
                        </p>
                      )}
                      <ul className="space-y-1 text-md">
                        {items.map((item) => (
                          <li
                            key={item.name}
                            className="text-base whitespace-nowrap"
                          >
                            <Link
                              to={item.path}
                              target={
                                item.path.startsWith("http")
                                  ? "_blank"
                                  : "_self"
                              }
                              className="block pr-5 py-1 text-brand hover:text-[#FF5722] hover:bg-[#FFF0EB] rounded transition"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenu.Content>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
