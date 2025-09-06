import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Building2,
  Zap,
  Bitcoin,
  BarChart3,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubNavTabs } from "@/components/layout/SubNavTabs";
import { Section } from "@/components/layout/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAStrip } from "@/components/ui/cta-strip";
import { instruments } from "@/contents/instruments";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { useEffect, useState } from "react";
import RegisterFeatures from "./registerFeatures";
import ReactCountryFlag from "react-country-flag";
import XAG from "@/assets/images/metals/silver.svg"
import XAU from "@/assets/images/metals/gold.svg"
import XPD from "@/assets/images/metals/palladium.svg"
import XPT from "@/assets/images/metals/platinum.svg"
import UKOIL from "@/assets/images/metals/brent.svg"
import USOIL from "@/assets/images/metals/oil.svg"

function ForexTab({ data, columns }) {
  return (
    <div className="space-y-8">
      <motion.div
        key={1}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1 * 0.1 }}
      >
        <Card className="h-full hover:shadow-elegant transition-shadow duration-300 border border-border rounded-3xl">
          {/* <CardHeader>
                  <CardTitle className="text-lg font-bold text-ink flex items-center">
                    <feature.icon className="w-5 h-5 text-brand mr-2" />
                    {feature.title}
                  </CardTitle>
                </CardHeader> */}
          <CardContent className="m-5">
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default function MarketAccess() {
  const [forexTabVal, setForexTabVal] = useState("standard");
  const [shareTabVal, setShareTabVal] = useState("usshare");
  const metals= {
    XAG : XAG,
    XAU,
    XPD,
    XPT,
    UKOIL,
    USOIL
  }
  const tabs = [
    {
      id: "forex",
      label: "Forex CFDs",
      isMulti: true,
      standard: [
        {
          symbol: "USD/JPY",
          name: "U.S. Dollar vs Japanese Yen",
          spread: 2.5,
          lowSpread: 2.0,
          leverage: 1500,
          flags: ["US", "JP"],
        },
        {
          symbol: "EUR/USD",
          name: "Euro vs U.S. Dollar",
          spread: 2.0,
          lowSpread: 1.6,
          leverage: 1500,
          flags: ["EU", "US"],
        },
        {
          symbol: "AUD/USD",
          name: "Australian Dollar vs U.S. Dollar",
          spread: 2.4,
          lowSpread: 2.3,
          leverage: 1500,
          flags: ["AU", "US"],
        },
        {
          symbol: "GBP/JPY",
          name: "Pound sterling vs Japanese Yen",
          spread: 3.8,
          lowSpread: 3.0,
          leverage: 1500,
          flags: ["GB", "JP"],
        },
        {
          symbol: "GBP/USD",
          name: "Pound sterling vs U.S. Dollar",
          spread: 2.4,
          lowSpread: 1.8,
          leverage: 1500,
          flags: ["GB", "US"],
        },
        {
          symbol: "EUR/JPY",
          name: "Euro vs Japanese Yen",
          spread: 3.2,
          lowSpread: 2.1,
          leverage: 1500,
          flags: ["EU", "JP"],
        },
        {
          symbol: "EUR/GBP",
          name: "Euro vs Pound sterling",
          spread: 2.4,
          lowSpread: 1.8,
          leverage: 1500,
          flags: ["EU", "GB"],
        },
        {
          symbol: "USD/CHF",
          name: "U.S. Dollar vs Swiss Franc",
          spread: 2.6,
          lowSpread: 1.9,
          leverage: 400,
          flags: ["US", "CH"],
        },
        {
          symbol: "NZD/USD",
          name: "New Zealand Dollar vs U.S. Dollar",
          spread: 2.9,
          lowSpread: 2.8,
          leverage: 1500,
          flags: ["NZ", "US"],
        },
        {
          symbol: "EUR/CHF",
          name: "Euro vs Swiss Franc",
          spread: 3.3,
          lowSpread: 2.4,
          leverage: 400,
          flags: ["EU", "CH"],
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div className="flex flex-row">
              <div className="flex -space-x-2 mr-2">
                {row?.flags?.map((code) => (
                  <ReactCountryFlag
                    key={code}
                    countryCode={code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    title={code}
                  />
                ))}
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">
                  {row.symbol}
                </div>
                <div className="text-xs text-gray-600">{row.name}</div>
              </div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
      ultralowstandard: [
        {
          symbol: "USD/JPY#",
          name: "U.S. Dollar vs Japanese Yen",
          spread: 1.3,
          lowSpread: 0.8,
          leverage: 1500,
          flags: ["US", "JP"],
        },
        {
          symbol: "EUR/USD#",
          name: "Euro vs U.S. Dollar",
          spread: 1.1,
          lowSpread: 0.8,
          leverage: 1500,
          flags: ["EU", "US"],
        },
        {
          symbol: "AUD/USD#",
          name: "Australian Dollar vs U.S. Dollar",
          spread: 1.4,
          lowSpread: 1.3,
          leverage: 1500,
          flags: ["AU", "US"],
        },
        {
          symbol: "GBP/JPY#",
          name: "Pound sterling vs Japanese Yen",
          spread: 2.9,
          lowSpread: 1.5,
          leverage: 1500,
          flags: ["GB", "JP"],
        },
        {
          symbol: "GBP/USD#",
          name: "Pound sterling vs U.S. Dollar",
          spread: 1.3,
          lowSpread: 0.8,
          leverage: 1500,
          flags: ["GB", "US"],
        },
        {
          symbol: "EUR/JPY#",
          name: "Euro vs Japanese Yen",
          spread: 2.3,
          lowSpread: 1.7,
          leverage: 1500,
          flags: ["EU", "JP"],
        },
        {
          symbol: "EUR/GBP#",
          name: "Euro vs Pound sterling",
          spread: 2.0,
          lowSpread: 1.7,
          leverage: 1500,
          flags: ["EU", "GB"],
        },
        {
          symbol: "USD/CHF#",
          name: "U.S. Dollar vs Swiss Franc",
          spread: 1.5,
          lowSpread: 1.1,
          leverage: 400,
          flags: ["US", "CH"],
        },
        {
          symbol: "NZD/USD#",
          name: "New Zealand Dollar vs U.S. Dollar",
          spread: 2.1,
          lowSpread: 2.0,
          leverage: 1500,
          flags: ["NZ", "US"],
        },
        {
          symbol: "EUR/CHF#",
          name: "Euro vs Swiss Franc",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 400,
          flags: ["EU", "CH"],
        },
      ],
    },
    {
      id: "metals",
      label: "Metals",
      data: [
        {
          symbol: "XAG/EUR",
          name: "Silver vs Euro",
          spread: 3.5,
          lowSpread: 2.9,
          leverage: 1500,
          flags: ["XAG", "EU"], // Silver + Euro
        },
        {
          symbol: "XAG/USD",
          name: "Silver vs US Dollar",
          spread: 2.8,
          lowSpread: 2.1,
          leverage: 1500,
          flags: ["XAG", "US"], // Silver + United States
        },
        {
          symbol: "XAU/EUR",
          name: "Gold vs Euro",
          spread: 4.2,
          lowSpread: 3.6,
          leverage: 1500,
          flags: ["XAU", "EU"], // Gold + Euro
        },
        {
          symbol: "XAU/USD",
          name: "Gold vs US Dollar",
          spread: 3.7,
          lowSpread: 3.0,
          leverage: 1500,
          flags: ["XAU", "US"], // Gold + United States
        },
        {
          symbol: "XPD/USD",
          name: "Palladium vs US Dollar",
          spread: 5.5,
          lowSpread: 4.8,
          leverage: 1500,
          flags: ["XPD", "US"], // Palladium + United States
        },
        {
          symbol: "XPT/USD",
          name: "Platinum vs US Dollar",
          spread: 4.9,
          lowSpread: 4.1,
          leverage: 1500,
          flags: ["XPT", "US"], // Platinum + United States
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div className="flex flex-row">
              <div className="flex -space-x-2 mr-2">
                {row?.flags?.map((code,i) => (
                  i == 0 ? <img src={metals[code]} alt={code} width={24} height={24} /> :
                  <ReactCountryFlag
                    key={code}
                    countryCode={code}
                    svg
                    style={{
                      width: "1.5em",
                      height: "1.5em",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    title={code}
                  />
                ))}
              </div>
              <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
              </div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
    },
    {
      id: "indices-cash",
      label: "Indices (Cash)",
      data: [
        {
          symbol: "AUS200.c",
          name: "S&P/ASX 200 Index",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 200,
        },
        {
          symbol: "DE40.c",
          name: "DAX 40 Index (Germany)",
          spread: 1.5,
          lowSpread: 1.1,
          leverage: 200,
        },
        {
          symbol: "F40.c",
          name: "CAC 40 Index (France)",
          spread: 1.7,
          lowSpread: 1.2,
          leverage: 200,
        },
        {
          symbol: "HK50.c",
          name: "Hang Seng Index (Hong Kong)",
          spread: 2.4,
          lowSpread: 1.9,
          leverage: 200,
        },
        {
          symbol: "NE25.c",
          name: "AEX 25 Index (Netherlands)",
          spread: 1.6,
          lowSpread: 1.2,
          leverage: 200,
        },
        {
          symbol: "STOXX50.c",
          name: "Euro Stoxx 50 Index",
          spread: 1.4,
          lowSpread: 1.0,
          leverage: 200,
        },
        {
          symbol: "UK100.c",
          name: "FTSE 100 Index (UK)",
          spread: 1.9,
          lowSpread: 1.4,
          leverage: 200,
        },
        {
          symbol: "US500.c",
          name: "S&P 500 Index (US)",
          spread: 1.2,
          lowSpread: 0.9,
          leverage: 200,
        },
        {
          symbol: "USTEC.c",
          name: "Nasdaq 100 Index (US)",
          spread: 1.5,
          lowSpread: 1.0,
          leverage: 200,
        },
        {
          symbol: "DJ30.c",
          name: "Dow Jones 30 Index (US)",
          spread: 1.6,
          lowSpread: 1.1,
          leverage: 200,
        },
        {
          symbol: "ES35.c",
          name: "IBEX 35 Index (Spain)",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 200,
        },
        {
          symbol: "SWI20.c",
          name: "Swiss Market Index (Switzerland)",
          spread: 1.7,
          lowSpread: 1.2,
          leverage: 200,
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
    },
    {
      id: "indices-futures",
      label: "Indices Futures",
      data: [
        {
          symbol: "DE40.U25",
          name: "DAX 40 Index Futures (Germany)",
          spread: 2.1,
          lowSpread: 1.6,
          leverage: 100,
        },
        {
          symbol: "DJ30.U25",
          name: "Dow Jones 30 Index Futures (US)",
          spread: 2.4,
          lowSpread: 1.9,
          leverage: 100,
        },
        {
          symbol: "DX.U25",
          name: "US Dollar Index Futures",
          spread: 1.7,
          lowSpread: 1.2,
          leverage: 100,
        },
        {
          symbol: "JPN225.U25",
          name: "Nikkei 225 Index Futures (Japan)",
          spread: 2.3,
          lowSpread: 1.7,
          leverage: 100,
        },
        {
          symbol: "NGAS.Q25",
          name: "Natural Gas Futures",
          spread: 3.2,
          lowSpread: 2.6,
          leverage: 100,
        },
        {
          symbol: "SILVER.U25",
          name: "Silver Futures",
          spread: 2.9,
          lowSpread: 2.3,
          leverage: 100,
        },
        {
          symbol: "TY10.U25",
          name: "10-Year US Treasury Note Futures",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 100,
        },
        {
          symbol: "UKBRENT.U25",
          name: "Brent Crude Oil Futures (UK)",
          spread: 2.6,
          lowSpread: 2.0,
          leverage: 100,
        },
        {
          symbol: "US500.U25",
          name: "S&P 500 Index Futures (US)",
          spread: 1.9,
          lowSpread: 1.4,
          leverage: 100,
        },
        {
          symbol: "USOIL.Q25",
          name: "WTI Crude Oil Futures (US)",
          spread: 2.7,
          lowSpread: 2.1,
          leverage: 100,
        },
        {
          symbol: "USTEC.U25",
          name: "Nasdaq 100 Index Futures (US)",
          spread: 2.2,
          lowSpread: 1.6,
          leverage: 100,
        },
        {
          symbol: "XAUUSD.Q25",
          name: "Gold Futures (US Dollar)",
          spread: 3.4,
          lowSpread: 2.7,
          leverage: 100,
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
    },
    {
      id: "energies",
      label: "Energies",
      data: [
        {
          symbol: "UKOIL.c",
          name: "Brent Crude Oil (Spot)",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 500,
          flags:['UKOIL']
        },
        {
          symbol: "USOIL.c",
          name: "WTI Crude Oil (Spot)",
          spread: 1.9,
          lowSpread: 1.4,
          leverage: 500,
          flags:['USOIL']
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div className="flex flex-row items-center">
              <div className="mr-2">
                <img src={metals[row?.flags[0]]} alt={row?.flags[0]} width={24} height={24} />
              </div>
              <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
              </div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
    },
    {
      id: "crypto",
      label: "Crypto",
      data: [
        {
          symbol: "BCH/USD",
          name: "Bitcoin Cash vs US Dollar",
          spread: 3.8,
          lowSpread: 2.9,
          leverage: 50,
        },
        {
          symbol: "BTC/EUR",
          name: "Bitcoin vs Euro",
          spread: 4.5,
          lowSpread: 3.7,
          leverage: 50,
        },
        {
          symbol: "BTC/JPY",
          name: "Bitcoin vs Japanese Yen",
          spread: 5.2,
          lowSpread: 4.1,
          leverage: 50,
        },
        {
          symbol: "BTC/USD",
          name: "Bitcoin vs US Dollar",
          spread: 3.9,
          lowSpread: 3.0,
          leverage: 50,
        },
        {
          symbol: "SOL/USD",
          name: "Solana vs US Dollar",
          spread: 2.6,
          lowSpread: 2.0,
          leverage: 50,
        },
        {
          symbol: "ADA/USD",
          name: "Cardano vs US Dollar",
          spread: 2.2,
          lowSpread: 1.7,
          leverage: 50,
        },
        {
          symbol: "CHZ/USD",
          name: "Chiliz vs US Dollar",
          spread: 2.4,
          lowSpread: 1.8,
          leverage: 50,
        },
        {
          symbol: "DOG/USD",
          name: "Dogecoin vs US Dollar",
          spread: 2.8,
          lowSpread: 2.1,
          leverage: 50,
        },
        {
          symbol: "ONE/USD",
          name: "Harmony vs US Dollar",
          spread: 2.5,
          lowSpread: 1.9,
          leverage: 50,
        },
        {
          symbol: "TRX/USD",
          name: "TRON vs US Dollar",
          spread: 2.3,
          lowSpread: 1.7,
          leverage: 50,
        },
        {
          symbol: "VET/USD",
          name: "VeChain vs US Dollar",
          spread: 2.7,
          lowSpread: 2.0,
          leverage: 50,
        },
        {
          symbol: "XEM/USD",
          name: "NEM vs US Dollar",
          spread: 2.9,
          lowSpread: 2.2,
          leverage: 50,
        },
        {
          symbol: "XLM/USD",
          name: "Stellar Lumens vs US Dollar",
          spread: 2.6,
          lowSpread: 2.0,
          leverage: 50,
        },
        {
          symbol: "ETH/USD",
          name: "Ethereum vs US Dollar",
          spread: 3.2,
          lowSpread: 2.5,
          leverage: 50,
        },
      ],
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
    },
    {
      id: "shares",
      label: "Shares",
      columns: [
        {
          key: "symbol",
          header: "Symbol",
          render: (_, row) => (
            <div>
              <div className="font-bold text-lg text-gray-900">
                {row.symbol}
              </div>
              <div className="text-xs text-gray-600">{row.name}</div>
            </div>
          ),
        },
        { key: "spread", header: "Average Spread (pips)" },
        { key: "lowSpread", header: "Spread As Low As (pips)" },
        { key: "leverage", header: "Max Leverage" },
        {
          key: "actions",
          header: "",
          render: (_, row) => (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {}}
              className="text-brand"
            >
              Trade
            </Button>
          ),
        },
      ],
      usshare: [
        {
          symbol: "AAPL.OQ",
          name: "Apple Inc.",
          spread: 1.5,
          lowSpread: 1.1,
          leverage: 20,
        },
        {
          symbol: "MSFT.OQ",
          name: "Microsoft Corp.",
          spread: 1.6,
          lowSpread: 1.2,
          leverage: 20,
        },
        {
          symbol: "AMZN.OQ",
          name: "Amazon.com Inc.",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 20,
        },
        {
          symbol: "TSLA.OQ",
          name: "Tesla Inc.",
          spread: 2.2,
          lowSpread: 1.6,
          leverage: 20,
        },
      ],
      eushare: [
        {
          symbol: "LVMH.PA",
          name: "LVMH Moët Hennessy Louis Vuitton SE",
          spread: 1.9,
          lowSpread: 1.4,
          leverage: 20,
        },
        {
          symbol: "SAPG.DE",
          name: "SAP SE",
          spread: 1.7,
          lowSpread: 1.3,
          leverage: 20,
        },
        {
          symbol: "BAYGn.DE",
          name: "Bayer AG",
          spread: 1.8,
          lowSpread: 1.3,
          leverage: 20,
        },
        {
          symbol: "AIR.PA",
          name: "Airbus SE",
          spread: 2.0,
          lowSpread: 1.5,
          leverage: 20,
        },
      ],
      honkongshare: [
        {
          symbol: "0700.HK",
          name: "Tencent Holdings Ltd.",
          spread: 2.3,
          lowSpread: 1.8,
          leverage: 20,
        },
        {
          symbol: "0939.HK",
          name: "China Construction Bank Corp.",
          spread: 2.1,
          lowSpread: 1.6,
          leverage: 20,
        },
        {
          symbol: "2318.HK",
          name: "Ping An Insurance (Group) Co. of China Ltd.",
          spread: 2.2,
          lowSpread: 1.7,
          leverage: 20,
        },
        {
          symbol: "0388.HK",
          name: "Hong Kong Exchanges and Clearing Ltd.",
          spread: 2.4,
          lowSpread: 1.9,
          leverage: 20,
        },
      ],
    },
  ];
  const [currentState, setCurrentState] = useState(tabs[0]);

  const forexTabs = [
    {
      id: "standard",
      label: "Standard",
    },
    {
      id: "ultralowstandard",
      label: "Ultra Low Standard",
    },
  ];

  const sharesTabs = [
    {
      id: "usshare",
      label: "US Shares",
    },
    {
      id: "eushare",
      label: "EU Shares",
    },
    {
      id: "honkongshare",
      label: "Hong Kong Shares",
    },
  ];
  useEffect(() => {
    setCurrentState(tabs[0]);
  }, []);

  useEffect(() => {
    if (currentState?.id == "forex") {
      setForexTabVal("standard");
      setShareTabVal("usshare");
    }
    if (currentState?.id == "shares") {
      setShareTabVal("usshare");
    }
  }, [currentState]);

  return (
    <main className=" bg-base min-h-screen">
      <PageHeader
        title="Market Access"
        description="Trade a comprehensive range of instruments across global markets with competitive conditions and professional execution."
        showCta={true}
        background="gradient"
      />

      <Section padding="lg">
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-5 text-white mt-[40px] mb-5 ">
          {tabs.map((t) => (
            <Button
              variant={currentState?.id === t?.id ? "default" : "outline"}
              size="lg"
              onClick={() => {
                console.log(t);
                if (t?.id == "forex") {
                  setForexTabVal("standard");
                }
                if (t?.id == "shares") {
                  setShareTabVal("usshare");
                }
                setCurrentState(t);
              }}
              className={
                currentState?.id === t?.id ? "text-white" : "text-brand"
              }
            >
              {t?.label}
            </Button>
          ))}
        </div>
        {currentState.id == "forex" ? (
          <SubNavTabs
            onTabChange={(id) => setForexTabVal(id)}
            istabCenter
            tabs={forexTabs}
            defaultTab="standard"
            activeTabId={forexTabVal}
          >
            {forexTabVal && (
              <ForexTab
                data={currentState[forexTabVal]}
                columns={currentState?.columns}
              />
            )}
          </SubNavTabs>
        ) : currentState?.id === "shares" ? (
          <SubNavTabs
            onTabChange={(id) => setShareTabVal(id)}
            istabCenter
            tabs={sharesTabs}
            defaultTab="usshare"
            activeTabId={shareTabVal}
          >
            {shareTabVal && (
              <ForexTab
                data={currentState[shareTabVal]}
                columns={currentState?.columns}
              />
            )}
          </SubNavTabs>
        ) : (
          <ForexTab
            data={currentState?.data || []}
            columns={currentState?.columns || []}
          />
        )}
      </Section>

      <RegisterFeatures />

      {/* Market Overview Cards */}
      {/* <Section background="muted" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Why Trade with LTI?
          </h2>
          <p className="text-muted-foreground text-lg">
            Access global markets with institutional-grade technology and
            execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: "Competitive Spreads",
              description:
                "Tight spreads across all major instruments with transparent pricing.",
            },
            {
              icon: Zap,
              title: "Fast Execution",
              description:
                "Lightning-fast order execution with minimal slippage and no requotes.",
            },
            {
              icon: Building2,
              title: "Deep Liquidity",
              description:
                "Access to tier-1 liquidity providers for optimal trading conditions.",
            },
            {
              icon: BarChart3,
              title: "Advanced Tools",
              description:
                "Professional trading platforms with advanced charting and analysis.",
            },
            {
              icon: DollarSign,
              title: "Flexible Leverage",
              description:
                "Leverage options up to 1:500 tailored to your risk appetite.",
            },
            {
              icon: Bitcoin,
              title: "Diverse Assets",
              description:
                "Trade forex, metals, indices, energies, crypto, and individual stocks.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-elegant transition-shadow duration-300 border border-border rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-ink flex items-center">
                    <feature.icon className="w-5 h-5 text-brand mr-2" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTAStrip
        title="Start Trading Global Markets"
        description="Open your LTI account and access institutional-grade trading conditions."
        variant="brand"
      /> */}
    </main>
  );
}
