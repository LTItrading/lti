import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Building2, Zap, Bitcoin, BarChart3 } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { SubNavTabs } from '@/components/layout/SubNavTabs';
import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CTAStrip } from '@/components/ui/cta-strip';
import { instruments } from '@/contents/instruments';

function InstrumentTable({ instruments: instList, title }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-ink mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instList.map((instrument, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-elegant transition-shadow duration-300 border border-border rounded-xl">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-ink">{instrument.symbol}</h4>
                    {instrument.name && (
                      <p className="text-sm text-muted-foreground">{instrument.name}</p>
                    )}
                  </div>
                  <TrendingUp className="w-4 h-4 text-brand" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ForexTab() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-brand/5 border border-brand/20 rounded-3xl p-8"
      >
        <h3 className="text-2xl font-bold text-ink mb-4">Forex CFDs</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Trade major, minor, and exotic currency pairs with competitive spreads and fast execution. 
          Access the world's largest financial market with leverage up to 1:500.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="border-brand text-brand">Leverage up to 1:500</Badge>
          <Badge variant="outline" className="border-brand text-brand">24/5 Trading</Badge>
          <Badge variant="outline" className="border-brand text-brand">Tight Spreads</Badge>
          <Badge variant="outline" className="border-brand text-brand">Fast Execution</Badge>
        </div>
      </motion.div>
      
      <div className="bg-muted/50 rounded-3xl p-8">
        <h4 className="text-lg font-semibold text-ink mb-4">Sample Forex Instruments</h4>
        <div className="text-muted-foreground">
          <p>
            Trade popular currency pairs including EUR/USD, GBP/USD, USD/JPY, AUD/USD, USD/CAD, 
            NZD/USD, EUR/GBP, and many more major, minor, and exotic pairs.
          </p>
          <p className="mt-4 text-sm">
            <strong>Note:</strong> Full instrument list and specific leverage & spread details to be confirmed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MarketAccess() {
  const tabs = [
    { id: 'forex', label: 'Forex CFDs' },
    { id: 'metals', label: 'Metals' },
    { id: 'indices-cash', label: 'Indices (Cash)' },
    { id: 'indices-futures', label: 'Indices Futures' },
    { id: 'energies', label: 'Energies' },
    { id: 'crypto', label: 'Crypto' },
    { id: 'shares', label: 'Shares' }
  ];

  return (
    <main className="pt-20 bg-base min-h-screen">
      <PageHeader
        title="Market Access"
        description="Trade a comprehensive range of instruments across global markets with competitive conditions and professional execution."
        showCta={true}
        background="gradient"
      />
      
      <Section padding="lg">
        <SubNavTabs tabs={tabs} defaultTab="forex">
          {(activeTab) => {
            switch (activeTab) {
              case 'forex':
                return <ForexTab />;
              case 'metals':
                return <InstrumentTable instruments={instruments.metals} title="Precious Metals CFDs" />;
              case 'indices-cash':
                return <InstrumentTable instruments={instruments.indicesCash} title="Cash Indices" />;
              case 'indices-futures':
                return <InstrumentTable instruments={instruments.indicesFutures} title="Index Futures" />;
              case 'energies':
                return <InstrumentTable instruments={instruments.energies} title="Energy CFDs" />;
              case 'crypto':
                return <InstrumentTable instruments={instruments.crypto} title="Cryptocurrency CFDs" />;
              case 'shares':
                return (
                  <div className="space-y-8">
                    <InstrumentTable instruments={instruments.shares.us} title="US Shares" />
                    <InstrumentTable instruments={instruments.shares.eu} title="European Shares" />
                    <InstrumentTable instruments={instruments.shares.hk} title="Hong Kong Shares" />
                  </div>
                );
              default:
                return <ForexTab />;
            }
          }}
        </SubNavTabs>
      </Section>

      {/* Market Overview Cards */}
      <Section background="muted" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Why Trade with LTI?
          </h2>
          <p className="text-muted-foreground text-lg">
            Access global markets with institutional-grade technology and execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Competitive Spreads',
              description: 'Tight spreads across all major instruments with transparent pricing.'
            },
            {
              icon: Zap,
              title: 'Fast Execution',
              description: 'Lightning-fast order execution with minimal slippage and no requotes.'
            },
            {
              icon: Building2,
              title: 'Deep Liquidity',
              description: 'Access to tier-1 liquidity providers for optimal trading conditions.'
            },
            {
              icon: BarChart3,
              title: 'Advanced Tools',
              description: 'Professional trading platforms with advanced charting and analysis.'
            },
            {
              icon: DollarSign,
              title: 'Flexible Leverage',
              description: 'Leverage options up to 1:500 tailored to your risk appetite.'
            },
            {
              icon: Bitcoin,
              title: 'Diverse Assets',
              description: 'Trade forex, metals, indices, energies, crypto, and individual stocks.'
            }
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
      />
    </main>
  );
}