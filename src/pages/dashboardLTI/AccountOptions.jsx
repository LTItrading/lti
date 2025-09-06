import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveForFooter from "../../assets/images/4x-Images/WaveForFooter.png";
import {
  Newspaper,
  Calendar,
  Play,
  Headphones,
  BookOpen,
  Monitor,
  Globe,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";
import labtop from "@/assets/images/tradingFeaturesPng/labtop.png";
import security from "@/assets/images/tradingFeaturesPng/security.png";
import ellipse from "@/assets/images/Ellipse.png";
import card1 from "@/assets/images/CARD-1.png";
import card3 from "@/assets/images/CARD-3.png";
import support from "@/assets/images/support.png";
import protect from "@/assets/images/protect.png";
import { PageHeader } from "@/components/layout/PageHeader";

const accountTypes = [
  {
    icon: Play,
    name: "Cent",
    description: "Perfect for beginners with low-risk exposure.",
    details: [
      "Spread: From 1.5 pips",
      "Commission: None",
      "Min Deposit: $5",
      "Leverage: Up to 1:1000",
    ],
  },
  {
    icon: Headphones,
    name: "Core",
    description: "Raw spreads with commission, ideal for scalpers.",
    details: [
      "Spread: From 0.0 pips",
      "Commission: $6/lot",
      "Min Deposit: $100",
      "Leverage: Up to 1:500",
    ],
  },
  {
    icon: BookOpen,
    name: "Pro ",
    description: "Perfect for beginners with low-risk exposure.",
    details: [
      "Raw spreads for high-volume traders.",
      "Min Deposit: $5,000",
      "- Spreads: Low",
      "Commission: Low",
      "- Leverage: Up to 1:500",
      "Swap-Free Available: Tick",
      "Priority withdrawals + VPS (optional) (tick).",
      "Negative Balance Protection: Tick",
    ],
  },
  {
    icon: Monitor,
    name: "ECN ",
    description: "Raw spreads with commission, ideal for scalpers.",
    details: [
      "Giving traders raw spreads and deep liquidity.",
      "Min Deposit: $50",
      "Spreads: Raw",
      "Commission: Medium",
      "Commission: Medium",
      "	Swap-Free Available: Untick.",
      "Negative Balance Protection: Tick",
    ],
  },
  {
    icon: Globe,
    name: "Flexi",
    description: "Perfect for beginners with low-risk exposure.",
    details: [
      "	Min Deposit: Negotiable.",
      "Customised trading environment.",
      "	Spreads: Negotiable.",
      "	Commissions: Negotiable.",
      "	Commissions: Negotiable.",
      "	SwapFree Available: Tick.",
      " 	Negative Balance Protection.",
    ],
  },
  {
    icon: TrendingUp,
    name: "ECO",
    description: "Raw spreads with commission, ideal for scalpers.",
    details: [
      "	Trade with impact",
      "	A portion of spread revenue is donated to environmental or social causes.",
      "Min Deposit: $100",
      "	Spreads: As low as 0.1 pips",
      "	Spreads: As low as 0.1 pips",
      "	Leverage: 1:100",
      "	Swapfree: Tick",
      "	Negative Balance Protection.",
    ],
  },
];

const whatsSetsLTIApart = [
  {
    icon: labtop,
    title: "Built for Serious Traders",
    description:
      "Our ecosystem is designed for high-performance trading. With accounts, platforms, and conditions engineered for execution speed, stability, and scale..",
  },
  {
    icon: security,
    title: "Licensed Across Leading Jurisdictions.",
    description:
      "Our group structure holds regulatory licenses in multiple regions, offering our clients transparency, protection, and the confidence of trading with a globally recognised broker..",
  },
  {
    icon: card3,
    title: "Clarity in Every Trade",
    description:
      "No hidden fees. No surprises. We offer clearly defined pricing structures with tight spreads, optional raw pricing, and institutional-level transparency..",
  },
  {
    icon: card1,
    title: "Global Reach. Local Insight.",
    description:
      "With clients in over 140+ countries, our infrastructure and support systems are built to scale, but our service remains personal, responsive, and localised..",
  },
  {
    icon: support,
    title: "Support That Speaks Trader.",
    description:
      "Our global support team offers expert assistance across languages, time zones, and trading needs, 24/5.",
  },
  {
    icon: protect,
    title: "Your Funds, Fully Protected.",
    description:
      "Client funds are held in top-tier segregated accounts with robust internal safeguards, two-factor authentication, and end-to-end encryption protocols.",
  },
];

export default function AccountOptions() {
  return (
    <div className="bg-base text-ink min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center mb-10 "
      >
        <PageHeader
          title="Open Your Trading Account"
          description="Choose from tailored account types designed to fit your trading
          strategy, experience level, and goals."
          showCta={true}
          background="gradient"
        />
      </motion.div>

      <div className="flex flex-col justify-center items-center">
        {/* Account Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center mx-5 md:mx-[80px]">
          {accountTypes.map((account, index) => (
            <motion.div
              key={account.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 20px rgba(238, 66, 35, 0.7)",
                transition: { duration: 0.3 },
              }}
              className="bg-base text-ink rounded-xl shadow-lg p-6 animate-fade-in"
            >
              <div class="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 gradient-primary rounded-full flex">
                <account.icon className="h-6 w-6 transition-colors duration-300 text-white group-hover:text-white" />
              </div>
              <h2 className="text-xl font-semibold mb-2 font-montserrat">
                {account.name}
              </h2>
              <p className="mb-4 font-manrope">{account.description}</p>
              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-brand hover:underline font-semibold">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 space-y-2">
                    {account.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div>
                          <CheckCircle className="text-brand w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <button className="mt-6 bg-brand text-brand-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">
                {" "}
                Open Account
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="py-20 mx-5 md:mx-[80px]"
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-[#EE4223]">
            What sets LTI apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatsSetsLTIApart.map((item, index) => (
              <motion.div
                key={item.name}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
              >
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex flex-wrap md:flex-nowrap">
                  <p className="lg:w-[440px]">{item.description}</p>
                  <div className="lg:w-[240px]">
                    <img src={item.icon} alt="Laptop" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
