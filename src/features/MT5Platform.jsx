import { motion } from 'framer-motion';
import { Download, Smartphone, Globe, Monitor, Zap, BarChart3, Shield, Cog, PiggyBank, BookOpen, ShieldIcon, ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAStrip } from '@/components/ui/cta-strip';
import mt5Asset from "@/assets/images/MT5-asset.png";
import AppStore4x from "../assets/images/4x-Images/AppStore4x.png";
import playstoreApk4x from "../assets/images/4x-Images/playstoreApk4x.png";
import TabletMobileImg from "../assets/images/android.png";
import Pc from "../assets/images/pc.png"
import mac from "../assets/images/mac.png"



const downloadButtons = [
  {
    title: 'Cut your costs with low spreads',
    icon: PiggyBank,
    href: '#',
    variant: 'primary'
  },
  {
    title: 'Seamlessly use Expert Advisors on MT5',
    icon: Monitor,
    href: '#',
    variant: 'primary'
  },
  {
    title: 'Access help guides for the MQL5 language',
    icon: BookOpen,
    href: '#',
    variant: 'outline'
  },
  {
    title: 'Rely on full data back up and security',
    icon: ShieldIcon,
    href: '#',
    variant: 'outline'
  }
];

const devicePlatforms = [
  {
    title: "MT5 for Tablet and Mobile",
    link: "#",
    image: TabletMobileImg,
    storeButtons: [
      { src: AppStore4x, alt: "App Store" },
      { src: playstoreApk4x, alt: "Android App" }
    ]
  },
  {
    title: "MT5 for PC",
    action: "Download",
    link: "#",
    image: Pc,
  },
  {
    title: "MT5 WebTrader",
    action: "Access in Web",
    link: "#",
  },
  {
    title: "MT5 for Mac",
    action: "Download",
    link: "#",
    image: mac,
  },
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


export default function MT5Platform() {
  return (
    <main className=" bg-base min-h-screen">
      <PageHeader
        title="Download LTI MT5"
        description="Experience professional trading with MetaTrader 5 - the world's leading multi-asset platform offering superior execution, advanced analysis, and automated trading capabilities."
        showCta={true}
        showPlatforms={true}
        background="gradient"
      />




      {/* Download Buttons */}
      <Section padding="md" className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-10xl mx-auto "
        >
          {downloadButtons.map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center justify-center h-64 border rounded-2xl p-6 shadow-md hover:shadow-lg bg-white"
            >
              {/* Icon box */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-white mb-5">
                <button.icon className="w-8 h-8" />
              </div>

              {/* Texts */}
              <div className="mt-4 text-center px-2">
                <h3 className="font-semibold text-md text-gray-900">{button.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{button.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Device Platforms */}
      <Section padding='md' className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pick Your Device</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get MT5 on the platform that fits best for you and your needs. Whether you’re on desktop or smartphone, MT5 is just a few clicks away.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">

          {/* MT5 for Tablet and Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-shrink-0 flex-grow-0 flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden row-span-2 min-w-[300px] max-w-[350px]"
            style={{
              background: "hsla(10, 69%, 47%, 0.10)",
              boxShadow: "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
            }}
          >
            <div className="p-6 flex flex-col items-center justify-start text-center">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">MT5 for Tablet and Mobile</h3>
              <div className="flex items-center gap-3 mt-4 flex-wrap justify-center">
                <img src={AppStore4x} alt="App Store" className="h-9 sm:h-10 w-auto max-w-[130px] object-contain" />
                <img src={playstoreApk4x} alt="Android App" className="h-9 sm:h-10 w-auto max-w-[130px] object-contain" />
              </div>
            </div>
            <div className=" p-4 flex-grow">
              <img src={TabletMobileImg} alt="MT5 for Tablet and Mobile" className="object-cover w-full h-full transition-all duration-300" />
            </div>
          </motion.div>

          {/* MT5 for PC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-shrink-0 flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden row-span-2 min-w-[300px] max-w-[350px]"
            style={{
              background: "hsla(10, 69%, 47%, 0.10)",
              boxShadow: "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
            }}
          >
            <div className="p-6 flex flex-col items-center justify-start text-center">
              <h3 className="font-semibold text-xl text-gray-900 mb-2">MT5 for PC</h3>

              <a href="#" className="text-primary flex items-center gap-1">
                Download <ExternalLink className="w-4 h-4 text-primary" />
              </a>
            </div>
            <div className="p-4 flex-grow">
              <img src={Pc} alt="MT5 for PC" className="object-cover w-full h-full transition-all duration-300" />
            </div>
          </motion.div>

          <div className=' flex-shrink-0 min-w-[350px] max-w-[300px]'>

            {/* MT5 WebTrader */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden row-span-1 mb-5"
              style={{
                background: "hsla(10, 69%, 47%, 0.10)",
                boxShadow: "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
              }}
            >
              <div className="p-6 flex flex-col items-center justify-start text-center flex-none">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">MT5 WebTrader</h3>

                <a href="#" className="text-primary flex items-center gap-1">
                  Access in Web <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              </div>
            </motion.div>

            {/* MT5 for Mac */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden row-span-2"
              style={{
                background: "hsla(10, 69%, 47%, 0.10)",
                boxShadow: "0px 4px 3px 0px rgba(183, 183, 183, 0.25)",
              }}
            >
              <div className="p-6 flex flex-col items-center justify-start text-center">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">MT5 for Mac</h3>

                <a href="#" className="text-primary flex items-center gap-1">
                  Download<ExternalLink className="w-4 h-4 text-primary" />
                </a>
              </div>
              <div className="flex-grow p-4">
                <img src={mac} alt="MT5 for Mac" className="object-cover w-full h-full transition-all duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

    </main>
  );
}






