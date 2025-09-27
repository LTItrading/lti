import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { CheckCircle, ExternalLink, CircleX, Flag } from "lucide-react";
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
import { PageHeader } from "@/components/layout/PageHeader";
import pro from "@/assets/images/tradingFeaturesPng/protected.png";
import global from "@/assets/images/tradingFeaturesPng/global.png";
import traders from "@/assets/images/tradingFeaturesPng/traders.png";
import licensed from "@/assets/images/tradingFeaturesPng/licensed.png";
import support from "@/assets/images/tradingFeaturesPng/support.png";
import clarity from "@/assets/images/tradingFeaturesPng/clarity.png";
const accountTypes = [
  {
    icon: Play,
    name: "Cent",
    description: "Start micro-scale trading with a Cent Account.",
    details: [
      {
        text: "Micro Scale Trading",
        isCheck: true,
      },
      {
        text: "Min Deposit: $5",
        isCheck: true,
      },
      {
        text: "Leverage: Up to 1:1000.",
        isCheck: true,
      },
      {
        text: "Spreads: From 0.1 pips.",
        isCheck: true,
      },
      {
        text: "Commissions: Low.",
        isCheck: true,
      },
      {
        text: "Swap Free Available.",
        isCheck: false,
      },
      {
        text: "Negative balance protection",
        isCheck: true,
      },
    ],
  },
  {
    icon: Headphones,
    name: "Core",
    description: "Trade confidently with the Core Account.",
    details: [
      {
        text: "A balanced account for everyday trading.",
        isCheck: true,
      },
      {
        text: "Min Deposit: $50.",
        isCheck: true,
      },
      {
        text: "Spreads: Average.",
        isCheck: true,
      },
      {
        text: "Commission: Low",
        isCheck: true,
      },
      {
        text: "Leverage: Up to 1:500",
        isCheck: true,
      },
      {
        text: "Swap Free Available",
        isCheck: true,
      },
      {
        text: "Negative Balance Protection",
        isCheck: true,
      },
    ],
  },
  {
    icon: BookOpen,
    name: "Pro ",
    description: "Unlock high volume trading with the Pro Account.",
    details: [
      {
        text: "Raw spreads for high volume traders.",
        isCheck: true,
      },
      {
        text: "Min Deposit: $5,000",
        isCheck: true,
      },
      {
        text: "Spreads: Low",
        isCheck: true,
      },
      {
        text: "Commission: Low",
        isCheck: true,
      },
      {
        text: "Leverage: Up to 1:500",
        isCheck: true,
      },
      {
        text: "Swap Free Available",
        isCheck: true,
      },
      {
        text: "Priority withdrawals + VPS (optional).",
        isCheck: true,
      },
      {
        text: "Negative Balance Protection",
        isCheck: true,
      },
    ],
  },
  {
    icon: Monitor,
    name: "ECN ",
    description: "Raw spreads and deep liquidity with ECN Account.",
    details: [
      {
        text: "Giving traders raw spreads and deep liquidity.",
        isCheck: true,
      },
      {
        text: "Min Deposit: $50",
        isCheck: true,
      },
      {
        text: "Spreads: Raw",
        isCheck: true,
      },
      {
        text: "Commission: Medium",
        isCheck: "none",
      },
      {
        text: "Commission: Medium",
        isCheck: true,
      },
      {
        text: "Swap Free Available.",
        isCheck: false,
      },
      {
        text: "Negative Balance Protection",
        isCheck: true,
      },
    ],
  },
  {
    icon: Globe,
    name: "Flexi",
    description: "Trade your way with the Flexi Account.",
    details: [
      {
        text: "Customised trading environment.",
        isCheck: true,
      },
      {
        text: "Min Deposit: Negotiable.",
        isCheck: true,
      },
      
      {
        text: "Spreads: Negotiable.",
        isCheck: true,
      },
      {
        text: "Commissions: Negotiable.",
        isCheck: true,
      },
      {
        text: "Commissions: Negotiable.",
        isCheck: true,
      },
      {
        text: "Swap free Available.",
        isCheck: true
      },
      {
        text: "Negative Balance Protection.",
        isCheck: true,
      },
    ],
  },
  {
    icon: TrendingUp,
    name: "ECO",
    description: "Make a difference while trading with the Eco Account.",
    details: [
      {
        text: "Trade with impact",
        isCheck: true,
      },
      {
        text: "A portion of spread revenue is donated to environmental or social causes.",
        isCheck: true,
      },
      {
        text: "Min Deposit: $100",
        isCheck: true,
      },
      {
        text: "Spreads: As low as 0.1 pips",
        isCheck: true,
      },
      {
        text: "Commissions:Mid",
        isCheck: true,
      },
      {
        text: "Leverage: 1:100",
        isCheck: true,
      },
      {
        text: "Swap free",
        isCheck: true,
      },
      {
        text: "Negative Balance Protection.",
        isCheck: true,
      },
    ],
  },
];

const whatsSetsLTIApart = [
  {
    icon: traders,
    title: "Built for Serious Traders",
    description:
      "Our ecosystem is designed for high performance trading. With accounts, platforms, and conditions engineered for execution speed, stability, and scale..",
  },
  {
    icon: licensed,
    title: "Licensed Across Leading Jurisdictions.",
    description:
      "Our group structure holds regulatory licenses in multiple regions, offering our clients transparency, protection, and the confidence of trading with a globally recognised broker..",
  },
  {
    icon: clarity,
    title: "Clarity in Every Trade",
    description:
      "No hidden fees. No surprises. We offer clearly defined pricing structures with tight spreads, optional raw pricing, and institutional level transparency..",
  },
  {
    icon: global,
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
    icon: pro,
    title: "Your Funds, Fully Protected.",
    description:
      "Client funds are held in top tier segregated accounts with robust internal safeguards, two factor authentication, and end to end encryption protocols.",
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

              <Button
                size="sm"
                className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8 py-3 rounded-xl mb-2"
                asChild
              >
                <a href={"https://clientarea.londontradingindex.com/register"}>
                  {account.name == "Flexi" || account.name == "ECO" ? "Request Account" :"Open Account"} <ExternalLink />
                </a>
              </Button>

              <Accordion type="single" collapsible>
                <AccordionItem value="details">
                  <AccordionTrigger className="text-brand hover:underline font-semibold">
                    View Details
                  </AccordionTrigger>
                  <AccordionContent className="mt-2 space-y-2">
                    {account.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div>
                          {item?.isCheck === true && <CheckCircle className="text-foreground w-5 h-5" />}
                          {item?.isCheck === "none" && null}
                          {item?.isCheck === false && <CircleX className="text-brand w-5 h-5" />}
                        </div>

                        <div className="text-left">
                          <span>{item?.text}</span>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
