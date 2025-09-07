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
      "Flexible leverage options tailored by account type, instrument category, and local jurisdiction requirements. Adjust your leverage settings anytime through the client portal to match your trading strategy and risk management preferences.",
    bgAndCardSizeClass:
      "bg-[#0F0F0F] w-full sm:w-[47%] lg:w-[31%] xl:w-[450px]",
  },
  {
    icon: security,
    title: "Live Risk & Margin Monitoring",
    description:
      "Real-time exposure tracking with advanced margin monitoring systems. Set custom alerts for margin levels, track your positions across multiple instruments, and receive notifications before reaching critical thresholds.",
    bgAndCardSizeClass:
      "bg-[rgba(255,102,51,1)] text-white w-full sm:w-[48%] lg:w-[48%] xl:w-[600px]",
  },
  {
    icon: card3,
    title: "Trade Your Strategy, Not Ours",
    description:
      "Scalable position sizing with adaptable trading conditions on request. Whether you need custom fees, execution speed optimizations, or specific spreads for your strategy, our flexible infrastructure can accommodate your requirements.",
    bgAndCardSizeClass:
      "bg-[rgba(238,66,35,1)] text-white w-full sm:w-[48%] lg:w-[48%] xl:w-[600px]",
  },
  {
    icon: protect,
    title: "No Overnight Surprises",
    description:
      "Stable margin conditions with predictable overnight policies. Benefit from consistent margin requirements and the possibility of custom agreements for high-volume traders requiring specialized overnight arrangements.",
    bgAndCardSizeClass:
      "bg-gradient-to-r from-[rgba(74,74,74,1)] to-[rgba(90,90,90,1)] text-white w-full sm:w-[47%] lg:w-[31%] xl:w-[450px]",
  },
];

const flexibilityBenefits = [
  "Custom leverage arrangements for qualified traders",
  "Tailored spread agreements for high-volume accounts",
  "Flexible commission structures based on trading patterns",
  "Personalized execution speed optimization",
  "Custom margin requirements for portfolio strategies",
  "Dedicated relationship management for institutional needs",
];

export default function TradingConditions() {
  return (
    <main className="bg-base min-h-screen">
      <PageHeader
        title="Flexible Trading Conditions. Tailored to You."
        description="Experience live margin monitoring and trader-centric controls that adapt to your unique trading style. Our flexible conditions give you the freedom to implement your strategy without constraints."
        showCta={true}
        background="gradient"
      />

      {/* Main Features Grid */}
      <Section padding="lg">
        <div className="flex flex-wrap gap-6 justify-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgAndCardSizeClass} relative min-h-[450px] text-white hover:shadow-elegant transition-shadow duration-300 border-none`}
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
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="lg:w-[240px]"
                  style={{ margin: "0 0 0 auto" }}
                  src={feature.icon}
                  alt="Laptop"
                />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Trading Highlights */}
      {/* <Section background="muted" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
              Professional Trading Environment
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">
                    Dynamic Leverage Control
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Adjust your leverage settings in real-time based on market
                    conditions and your risk appetite.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">
                    Advanced Risk Management
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive tools to monitor and manage your exposure
                    across all positions and instruments.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-2">
                    Customizable Conditions
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Tailored trading conditions that evolve with your trading
                    volume and strategy requirements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border border-border rounded-3xl overflow-hidden">
              <CardHeader className="bg-brand/5">
                <CardTitle className="text-xl font-bold text-ink">
                  Key Benefits
                </CardTitle>
                <CardDescription>
                  What makes LTI conditions different
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {[
                    "Real-time margin monitoring and alerts",
                    "Transparent pricing with no hidden fees",
                    "Leverage adjustable up to 1:500",
                    "Professional execution with minimal slippage",
                    "Custom arrangements for qualified traders",
                    "Stable overnight policies and conditions",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-brand rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section> */}

      {/* Flexibility Banner */}
      {/* <Section padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand/5 to-brand/10 border border-brand/20 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
              Need Custom Conditions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our flexible infrastructure allows us to accommodate specific
              trading requirements. Whether you need custom spreads, specialized
              execution, or unique margin arrangements, our team can work with
              you to create the perfect trading environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h3 className="font-semibold text-ink mb-3">
                  Available Customizations:
                </h3>
                <ul className="space-y-2">
                  {flexibilityBenefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-brand rounded-full mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-left">
                <h3 className="font-semibold text-ink mb-3">How to Request:</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 text-brand mr-2" />
                    Submit request via client portal
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-brand mr-2" />
                    Contact your relationship manager
                  </div>
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 text-brand mr-2" />
                    Automatic qualification for high-volume accounts
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8 py-3 rounded-xl"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand text-brand hover:bg-brand/5 font-semibold px-8 py-3 rounded-xl"
              >
                Request via Client Portal
              </Button>
            </div>
          </div>
        </motion.div>
      </Section> */}

      <div
        style={{ backgroundColor: "#ffe5e096" }}
        className="text-center max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 rounded-lg"
      >
        <h2 className={`text-2xl md:text-3xl font-bold mb-4`}>
          Experience Flexible Trading
        </h2>
        <p className={`text-lg mb-6`}>
          Open your LTI account and discover trading conditions that adapt to
          your needs.
        </p>
        <Button size="lg" className={`font-semibold px-8 py-3 rounded-xl`}>
          <a href="/accounts">Open an Account</a>
        </Button>
      </div>
    </main>
  );
}
