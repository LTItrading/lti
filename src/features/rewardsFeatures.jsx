import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Trophy, 
  Calculator, 
  Bell, 
  BarChart3, 
  Globe, 
  Smartphone,
  Users,
  Target,
  Award,
  Clock
} from 'lucide-react';

const RewardsFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tradingTools = [
    {
      icon: Calculator,
      title: 'Trade Calculators',
      description: ' Instantly calculate pip value, margin requirements, and potential profit/loss before opening a trade.',
    },
    {
      icon: Bell,
      title: 'Custom Alerts',
      description: 'Set price-based or indicator-triggered alerts across platforms.',
    },
    {
      icon: BarChart3,
      title: 'Technical Analysis',
      description: 'Professional charting tools and indicators',
    },
    {
      icon: Globe,
      title: 'Strategy Tester',
      description: 'Backtest your expert advisors (EAs) against historical data',
    },
    {
      icon: Smartphone,
      title: 'MQL5 Market Access',
      description: 'Download hundreds of scripts, indicators, and automated strategies',
    },
    {
      icon: Users,
      title: 'Built-in Robots & EA’s',
      description: 'Free access to expert advisors pre-installed on MT5',
    },
    {
      icon: Users,
      title: 'Correlation Matrix',
      description: 'Analyse market interdependencies in real time',
    },
  ];

  const contestFeatures = [
    'Monthly Leaderboard Challenges',
    'Prizes including cash, bonuses, or funded accounts.',
    'Transparent rules and live rankings',
    'Open to both demo accounts and live accounts (T&Cs apply) Keep an eye in your client portal for launch updates and registrations',
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-subtle" id="trading">
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
              Tools that Empower. Rewards That Motivate
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
               LTI gives you more than a trading platform — we offer smart tools and performance-based rewards to elevate your trading experience. From real-time utilities to cashback and competitions, every feature is designed to support your trading.
              Tools that Empower. Rewards That Motivate
            </p>
          </motion.div>

          {/* Trading Contests Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/10">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Compete. Climb. Win
                </CardTitle>
                <CardDescription className="text-lg">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    Coming Soon
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      LTI’s trading contests will give you the chance to test your skills, showcase your strategy, and win real rewards - all in a fair and competitive environment.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {contestFeatures.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="flex items-center text-muted-foreground"
                        >
                          <Target className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
 <Button className="relative bg-[#ee4223] hover:bg-[#FF6B3D] text-white text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 group px-[24px] py-[28px] rounded-full mx-auto lg:mx-0 flex items-center justify-center">
                                <div className="flex items-center justify-center gap-2 leading-none transform transition-transform duration-300 group-hover:scale-105">
                                    <span>Register Now</span>
                                </div>
                            </Button>
                    {/* <button  size="lg" className="w-full md:w-auto">
                      Register Now
                    </button> */}
                  </div>

                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.8 }}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
                    >
                      <div className="text-center">
                        <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-foreground mb-2">Prize Pool</h3>
                        <div className="text-3xl font-bold text-primary mb-4">$50,000+</div>
                        <p className="text-muted-foreground">
                          Monthly prizes distributed among top performers
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Advanced Trading Tools Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Powerful tools. Built In
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                
                Whether you're analysing trades, testing strategies, or executing with precision - our platform and client area come equipped with advanced tools designed to enhance your trading intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tradingTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="h-full shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/20">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 gradient-primary rounded-lg flex items-center justify-center">
                        <tool.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1.2 }}
              className="text-center mt-12"
            >
              <Button variant="cta" size="xl">
                Launch Client Portal
              </Button>
            </motion.div>
          </motion.div>

          {/* Closing Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4 }}
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
          >
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              More Features Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're constantly innovating and adding new features to enhance your trading experience. 
              Stay tuned for exciting updates and powerful new tools.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RewardsFeatures;