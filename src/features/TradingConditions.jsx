import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import labtop from "@/assets/images/tradingFeaturesPng/labtop.png";
import security from "@/assets/images/tradingFeaturesPng/security.png";
import card3 from "@/assets/images/CARD-3.png";
import protect from "@/assets/images/protect.png";

const features = [
  {
    icon: labtop,
    title: "Leverage Up to 1:500 - Adjustable to Your Risk Appetite",
    description:
      "Our leverage tiers are flexible based on your account type, instrument, and jurisdiction. High or conservative, you decide.",
    bgAndCardSizeClass:
      "bg-[#0F0F0F] w-full sm:w-[47%] lg:w-[31%] xl:w-[450px]",
  },
  {
    icon: security,
    title: "Live Risk & Margin Monitoring",
    description:
      "Access real-time exposure updates through our trading platform. Set custom alerts, track margin levels, and stay in control always.",
    bgAndCardSizeClass:
      "bg-[rgba(255,102,51,1)] text-white w-full sm:w-[48%] lg:w-[48%] xl:w-[600px]",
  },
  {
    icon: card3,
    title: "Trade Your Strategy, Not Ours",
    description:
      "Take advantage of market volatility with scalable position sizing and conditions that can be adapted upon request from fees to execution speed.",
    bgAndCardSizeClass:
      "bg-[rgba(238,66,35,1)] text-white w-full sm:w-[48%] lg:w-[48%] xl:w-[600px]",
  },
  {
    icon: protect,
    title: "No Overnight Surprises",
    description:
      "We keep our margin conditions stable, no unannounced hikes on weekends or overnight. For bespoke setups, custom agreements are available.",
    bgAndCardSizeClass:
      "bg-gradient-to-r from-[rgba(74,74,74,1)] to-[rgba(90,90,90,1)] text-white w-full sm:w-[47%] lg:w-[31%] xl:w-[450px]",
  },
];

export default function TradingConditions() {
  return (
    <main className="bg-base min-h-screen">
      <PageHeader
        title="Flexible Trading Conditions. Tailored to You."
        description="From tailored leverage to live margin monitoring, our conditions are designed to give traders control, stability, and clarity across every position."
        showCta={true}
        background="gradient"
      />

      {/* Main Features Grid */}
      <Section padding="lg">
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgAndCardSizeClass} relative min-h-[350px] text-white hover:shadow-elegant transition-shadow duration-300 border-none`}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  <span className="text-2xl font-bold mb-3 leading-tight leading-10">
                    {feature.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{feature.description}</p>
              </CardContent>
              <div className="">
                <img
                  className="md:w-[240px]"
                  style={{ margin: "0 0 0 auto" }}
                  src={feature.icon}
                  alt="Laptop"
                />
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <div
        style={{ backgroundColor: "#ffe5e096" }}
        className="text-center max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 rounded-lg"
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-4`}>
          Need Custom Conditions?
        </h2>
        <p className={`text-lg mb-6`}>
          We work with serious traders to structure bespoke conditions,
          including tailored commissions, VIP leverage, margin exceptions, and
          priority execution.
        </p>
        <Button size="lg" className={`font-semibold px-8 py-3 rounded-xl`}>
          <a href="/accounts">Contact Us</a>
        </Button>
      </div>
    </main>
  );
}
