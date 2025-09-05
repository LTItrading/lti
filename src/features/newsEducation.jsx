import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Users
} from 'lucide-react';


const NewsEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationFormats = [
    {
      icon: Play,
      title: 'Video Courses',
      description: 'Comprehensive video tutorials covering all aspects of trading',
      duration: '50+ hours',
    },
    {
      icon: Headphones,
      title: 'Audio Sessions',
      description: 'Listen to expert insights and market analysis on the go',
      duration: '30+ episodes',
    },
    {
      icon: BookOpen,
      title: 'eBooks & Guides',
      description: 'Detailed written materials and trading strategies',
      duration: '20+ guides',
    },
    {
      icon: Monitor,
      title: 'Live Tutorials',
      description: 'Interactive sessions with professional traders',
      duration: 'Weekly',
    },
  ];

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'IT', name: 'Italian', flag: '🇮🇹' },
    { code: 'JP', name: 'Japanese', flag: '🇯🇵' },
    { code: 'CN', name: 'Chinese', flag: '🇨🇳' },
    { code: 'AR', name: 'Arabic', flag: '🇸🇦' },
  ];

  return (
    <section ref={ref} className="py-20 bg-background" id="education">
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay one step ahead with real-time news and economic event directly from your trading platform - and strengthen your trading knowledge with expert video, audio, and eBook content in multiple languages.
            </p>
          </motion.div>

          {/* Live Market News Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Newspaper className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">
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
                      Access streaming market news and a global economic calendar directly within your MT5 trading platform — no need for external apps or plugins. Our integration with MT5 ensures you have the latest financial developments, central bank decisions, and economic event forecasts at your fingertips.

                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">Market Analysis</div>
                        <div className="text-xs text-muted-foreground">Real-time insights</div>
                      </div>
                      <div className="text-center p-4 bg-muted/50 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                        <div className="text-sm font-medium text-foreground">Economic Calendar</div>
                        <div className="text-xs text-muted-foreground">Upcoming events</div>
                      </div>
                    </div>

                    <Button variant="cta" size="lg">
                      Open an Account
                    </Button>
                  </div>

                  <div className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.6 }}
                      className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">USD/EUR</div>
                            <div className="text-xs text-muted-foreground">ECB Rate Decision Impact</div>
                          </div>
                          <div className="text-xs text-green-500">+0.23%</div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">GBP/USD</div>
                            <div className="text-xs text-muted-foreground">UK Inflation Data</div>
                          </div>
                          <div className="text-xs text-red-500">-0.15%</div>
                        </div>

                        <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Oil Futures</div>
                            <div className="text-xs text-muted-foreground">OPEC Meeting Results</div>
                          </div>
                          <div className="text-xs text-blue-500">+1.8%</div>
                        </div>
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
            <Card className="shadow-elegant hover:shadow-glow transition-smooth bg-card/80 backdrop-blur-sm border-primary/10">
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
                    Learning Formats Available
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  </div>
                </div>

                <div className="mb-8">
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
                </div>

                <div className="text-center">
                  <Button variant="cta" size="lg">
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
              <blockquote className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6 leading-relaxed">
                "Education is the foundation of successful trading. 
                Knowledge transforms risk into opportunity."
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
              Trading involves substantial risk of loss and is not suitable for all investors. 
              Past performance is not indicative of future results. Please ensure you fully 
              understand the risks involved and seek independent advice if necessary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsEducation;