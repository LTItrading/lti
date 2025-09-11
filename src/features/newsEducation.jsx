import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import ReactCountryFlag from "react-country-flag";
import LanguagesSlider from "@/components/sliders/LanguagesSlider";

const NewsEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationFormats = [
    {
      icon: Play,
      title: "Video Courses",
      description:
        "Comprehensive video tutorials covering all aspects of trading",
      duration: "50+ hours",
      bgcolor: "bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)] text-gray-900",
      textColor: "text-gray-900"
    },
    {
      icon: Headphones,
      title: "Audio Sessions",
      description: "Listen to expert insights and market analysis on the go",
      duration: "30+ episodes",
      bgcolor: "bg-gradient-to-r from-[rgba(74,74,74,1)] to-[rgba(90,90,90,1)] text-white",
      textColor: "text-white"
    },
    {
      icon: BookOpen,
      title: "eBooks & Guides",
      description: "Detailed written materials and trading strategies",
      duration: "20+ guides",
      bgcolor: "bg-[rgba(238,66,35,1)] text-white",
      textColor: "text-white"
    },
    {
      icon: Monitor,
      title: "Live Tutorials",
      description: "Interactive sessions with professional traders",
      duration: "Weekly",
      bgcolor: "bg-[rgba(50,50,51,1)] text-white",
      textColor: "text-white"
    },
  ];

  const languages = [
    { code: "EN", name: "English", flag: "US" },
    { code: "ES", name: "Spanish", flag: "ES" },
    { code: "FR", name: "French", flag: "FR" },
    { code: "DE", name: "German", flag: "DE" },
    { code: "IT", name: "Italian", flag: "IT" },
    { code: "JP", name: "Japanese", flag: "JP" },
    { code: "CN", name: "Chinese", flag: "CN" },
    { code: "AR", name: "Arabic", flag: "SA" },
  ];


  const marketData = [
    {
      pair: ["US", "EU"],
      title: "USD/EUR",
      subtitle: "ECB Rate Decision Impact",
      change: "+0.23%",
      color: "blue",
    },
    {
      pair: ["GB", "US"],
      title: "GBP/USD",
      subtitle: "UK Inflation Data",
      change: "-0.15%",
      color: "red",
    },
    {
      pair: ["SA"],
      title: "Oil Futures",
      subtitle: "OPEC Meeting Results",
      change: "+1.8%",
      color: "blue",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-background font-manrope"
      id="education"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Market Intelligence Meets Expert Education
            </h2>
            <p className="text-md text-muted-foreground max-w-2xl mx-auto">
              Stay one step ahead with real-time news and economic event
              directly from your trading platform - and strengthen your trading
              knowledge with expert video, audio, and eBook content in multiple
              languages.
            </p>

            <Button
              className="mt-6 bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold"
              variant="cta"
              size="lg"
            >
              Open an Account
            </Button>

          </motion.div>





          {/* Live Market News Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="relative text-white shadow-2xl rounded-none rounded-[80px] min-h-[463px] sm:min-h-[320px] lg:min-h-[400px] flex flex-col justify-center sm:px-[60px] lg:px-[50px] py-[100px] sm:py-[50px] lg:py-[50px]">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Newspaper className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground font-bold">
                      Real-time Market Coverage, Built In
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Real-time updates that impact your trading decisions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      Access streaming market news and a global economic
                      calendar directly within your MT5 trading platform — no
                      need for external apps or plugins. Our integration with
                      MT5 ensures you have the latest financial developments,
                      central bank decisions, and economic event forecasts at
                      your fingertips.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8 my-2">
                      <div className="text-center p-4 text-white rounded-lg bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-md font-medium">
                          Market News Feed
                        </div>
                        <div className="text-xs text-white">
                         Delivered inside MT5 via leading financial news providers, covering global assets in real time.
                        </div>
                      </div>
                      <div className="text-center p-4 text-white rounded-lg bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] p-6 rounded-[20px] shadow-[0px_4px_4px_0px_#FF66334D] transition-all duration-300 border border-transparent hover:border-[#EE422333] hover:border-[2px] hover:bg-[linear-gradient(180deg,rgba(28,28,28,0.2)_60%,rgba(238,66,35,0.2)_100%)] hover:backdrop-blur-[20px]">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-md font-medium">
                          Economic Calendar
                        </div>
                        <div className="text-xs text-gray-400">
                         Built into MT5, filterable by country, impact level, and event type — helping you track announcements like NFP, CPI, and rate decisions.

                        </div>
                      </div>
                    </div>

                    <Button
                      className="bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold"
                      variant="cta"
                      size="lg"
                    >
                      Open an Account
                    </Button>
                  </div>


                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.6 }}
                      className="bg-[rgba(255,102,51,1)] text-white rounded-2xl p-6 border border-primary/20 backdrop-blur-sm"
                    >
                      <div className="space-y-4">
                        {marketData.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg"
                          >
                            <div
                              className={`w-2 h-2 rounded-full animate-pulse ${item.color === "green"
                                  ? "bg-green-500"
                                  : item.color === "red"
                                    ? "bg-red-500"
                                    : "bg-blue-500"
                                }`}
                            />
                            <div className="flex-1 flex items-center space-x-2">
                              {/* Flags */}
                              <div className="flex -space-x-2">
                                {item.pair.map((code) => (
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
                              {/* Texts */}
                              <div>
                                <div className="text-sm font-medium text-foreground">
                                  {item.title}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {item.subtitle}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`text-xs ${item.color === "green"
                                  ? "text-green-500"
                                  : item.color === "red"
                                    ? "text-red-500"
                                    : "text-blue-500"
                                }`}
                            >
                              {item.change}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Hub Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/10 rounded-[80px] ">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold mb-2">
                  FX & MetaTrader Education Hub
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    Coming Soon
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-12">
                  <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                    Learn From the Best - In Your Language
                  </h4>
               <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed text-lg">
  LTI’s multilingual education library is designed to help you gain deep expertise in both financial markets and our trading platforms. Whether you’re building a solid foundation or enhancing advanced strategies, our resources are available anytime through the client portal.
</p>


                  {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {educationFormats.map((format, index) => (
                      <motion.div
                        key={format.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        className="text-center p-6 bg-muted/30 rounded-xl border border-primary/10 hover:border-primary/20 transition-smooth"
                      >
                        <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                          <format.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h5 className="text-lg font-semibold text-foreground mb-2">
                          {format.title}
                        </h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          {format.description}
                        </p>
                        <div className="text-xs font-medium text-primary">
                          {format.duration}
                        </div>
                      </motion.div>
                    ))}
                  </div> */}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {educationFormats.map((format, index) => (
                      <motion.div
                        key={format.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                          isInView ? { opacity: 1, y: 0 } : { opacity: 0 }
                        }
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 0 20px rgba(238, 66, 35, 0.7)",
                          transition: { duration: 0.3 },
                        }}
                        className={`relative text-center p-8 rounded-xl  transition-all duration-300 group ${format.bgcolor}`}                     >
                        {/* Glow Effect Element */}
                        <span
                          className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                          style={{ boxShadow: "0 0 20px #EE4223" }}
                        ></span>

                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                          <format.icon className="h-6 w-6 transition-colors duration-300 group-hover:text-white" />
                        </div>

                        <h5 className={`font-manrope font-extrabold text-[18px] sm:text-[20px] mb-3 relative z-10 ${format.textColor}`}>
                          {format.title}
                        </h5>

                        <p className="font-manrope font-medium text-white-400 text-[13px] sm:text-[14px] leading-[20px] mb-3 relative z-10">
                          {format.description}
                        </p>

                        <div className={`${format.textColor} font-manrope font-semibold text-[13px] sm:text-[14px] relative z-10`}>
                          {format.duration}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* <div className="mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                    Available Languages
                  </h4>
                  
                  <div className="flex flex-wrap justify-center gap-3">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.code}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 1.0 + index * 0.05 }}
                        className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-lg border border-primary/10"
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-medium text-foreground">{lang.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div> */}

                <LanguagesSlider languages={languages} isInView={isInView} />

                <div className="text-center">
                  <Button
                      className="bg-[#ee4223] hover:bg-[#FF6B3D] text-white font-semibold"
                      variant="cta"
                      size="lg"
                    >
                      Open an Account
                    </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.2 }}
            className="relative gradient-hero rounded-2xl p-12 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <Users className="h-12 w-12 text-primary-foreground mx-auto mb-6 opacity-80" />
               <h5 className={`font-manrope font-extrabold text-[18px] sm:text-[20px] mb-3 relative z-10 text-white`}>
                         Stay informed. Stay Ahead.

                        </h5>
              <blockquote className="text-xl md:text-2xl font-bold text-primary-foreground mb-6 leading-relaxed">
                "The trader that prepares, is the trader that survives. With LTI, you’re equipped with both the insight and the education to make confident decisions."
              </blockquote>
              <cite className="text-primary-foreground/90 text-lg">
                — LTI Trading Academy
              </cite>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-foreground/10 rounded-full -ml-12 -mb-12" />
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4 }}
            className="text-center mt-8"
          >
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed">
             The content provided through LTI’s platforms - including market news, economic calendars, videos, audio, and educational materials - is intended solely for general informational and educational purposes. It does not constitute investment advice, a recommendation, or a solicitation to buy or sell any financial instruments.
All trading involves risk. Information published on this page, within the Client Portal, or via our trading platforms is not tailored to your personal financial circumstances or investment objectives. Users should exercise their own judgement and seek independent financial advice where necessary.
Access to these materials is subject to our Terms & Conditions, and Risk Disclosure. Market commentary and third-party content made available through MT5 or the LTI Portal are provided “as is” and are not guaranteed for accuracy, completeness, or timeliness. Where applicable, educational resources may be considered marketing communication under relevant laws and are not intended to constitute regulated research.

            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEducation;
