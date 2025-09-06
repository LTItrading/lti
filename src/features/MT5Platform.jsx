import { motion } from 'framer-motion';
import { Download, Smartphone, Globe, Monitor, Zap, BarChart3, Shield, Cog } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAStrip } from '@/components/ui/cta-strip';

const downloadButtons = [
  {
    title: 'Windows',
    description: 'Download for Windows PC',
    icon: Monitor,
    href: '#',
    variant: 'primary' 
  },
  {
    title: 'macOS',
    description: 'Download for Mac',
    icon: Monitor,
    href: '#',
    variant: 'primary' 
  },
  {
    title: 'WebTrader',
    description: 'Trade in your browser',
    icon: Globe,
    href: '#',
    variant: 'outline' 
  },
  {
    title: 'Mobile',
    description: 'iOS & Android apps',
    icon: Smartphone,
    href: '#',
    variant: 'outline' 
  }
];

const benefits = [
  {
    icon: Zap,
    title: 'Lightning Speed',
    description: 'Ultra-fast execution with minimal latency for optimal trading performance.'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Advanced encryption and security protocols to protect your trading activities.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Charting',
    description: '50+ technical indicators, multiple timeframes, and professional analysis tools.'
  },
  {
    icon: Cog,
    title: 'Automated Trading',
    description: 'Expert Advisors (EAs) and algorithmic trading capabilities for 24/7 automation.'
  },
  {
    icon: Globe,
    title: 'Multi-Device Sync',
    description: 'Seamlessly switch between desktop, web, and mobile platforms.'
  },
  {
    icon: Monitor,
    title: 'Professional Tools',
    description: 'One-click trading, advanced order types, and risk management features.'
  }
];

const devicePlatforms = [
  {
    title: 'Desktop Application',
    description: 'Full-featured trading platform for Windows and Mac',
    features: ['Advanced charting', 'Expert Advisors', 'Market depth', 'Economic calendar'],
    icon: Monitor
  },
  {
    title: 'Web Platform',
    description: 'Trade directly from your browser without downloads',
    features: ['No installation required', 'Cross-platform compatibility', 'Real-time quotes', 'Mobile responsive'],
    icon: Globe
  },
  {
    title: 'Mobile Apps',
    description: 'Trade on-the-go with iOS and Android applications',
    features: ['Touch-optimized interface', 'Push notifications', 'Biometric login', 'Offline charts'],
    icon: Smartphone
  }
];

export default function MT5Platform() {
  return (
    <main className="bg-base min-h-screen">
      <PageHeader
        title="Download LTI MT5"
        description="Experience professional trading with MetaTrader 5 - the world's leading multi-asset platform offering superior execution, advanced analysis, and automated trading capabilities."
        showCta={false}
        background="gradient"
      />

      {/* Download Buttons */}
      <Section padding="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {downloadButtons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                variant={button.variant === 'primary' ? 'default' : 'outline'}
                size="lg"
                className={`w-full h-auto p-6 flex flex-col items-center space-y-3 rounded-3xl ${
                  button.variant === 'primary' 
                    ? 'bg-brand hover:bg-brand/90 text-brand-foreground' 
                    : 'border-brand text-brand hover:bg-brand/5'
                }`}
                asChild
              >
                <a href={button.href}>
                  <button.icon className="w-8 h-8" />
                  <div className="text-center">
                    <div className="font-semibold">{button.title}</div>
                    <div className="text-sm opacity-80">{button.description}</div>
                  </div>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Benefits Grid */}
      <Section background="muted" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Why Choose LTI MT5?
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional trading features designed for serious traders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
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
                    <benefit.icon className="w-5 h-5 text-brand mr-2" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Device Platforms */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Pick Your Device
          </h2>
          <p className="text-muted-foreground text-lg">
            Trade anywhere, anytime with our multi-platform solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {devicePlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-elegant transition-shadow duration-300 border border-border rounded-3xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-brand" />
                  </div>
                  <CardTitle className="text-xl font-bold text-ink">
                    {platform.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Platform Features */}
      <Section background="muted" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-6">
            Professional Trading Experience
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            MetaTrader 5 combines powerful functionality with an intuitive interface, 
            providing everything you need for successful trading across multiple asset classes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-card border border-border rounded-3xl p-6">
              <h3 className="font-semibold text-ink mb-3">Trading Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• One-click trading and instant execution</li>
                <li>• Advanced order types (Stop, Limit, Stop Limit)</li>
                <li>• Partial position closing and netting system</li>
                <li>• Real-time market depth and news feed</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-3xl p-6">
              <h3 className="font-semibold text-ink mb-3">Analysis Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 50+ built-in technical indicators</li>
                <li>• 21 timeframes for detailed analysis</li>
                <li>• Multiple chart types and drawing tools</li>
                <li>• Economic calendar integration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Section>

      <CTAStrip
        title="Ready to Start Trading?"
        description="Download LTI MT5 now and experience professional trading at your fingertips."
        ctaText="Open Trading Account"
        variant="brand"
      />
    </main>
  );
}