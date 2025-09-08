import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from './Container';
import { ExternalLink } from 'lucide-react';
import WaveForFooter from "@/assets/images/4x-Images/WaveForFooter.png";
import {  Smartphone, Monitor, Globe } from 'lucide-react';

// interface PageHeaderProps {
//   title: string;
//   subtitle?: string;
//   description?: string;
//   showCta?: boolean;
//   ctaText?: string;
//   ctaHref?: string;
//   background?: 'default' | 'gradient';
// }

export function PageHeader({
  title,
  subtitle,
  description,
  showCta = false,
  showPlatforms = false,
  ctaText = 'Open Live Account',
  ctaHref = '/accounts',
  background = 'default',
  bgType = "forex",
  isMac = false
}) {
  return (
    <section
      className={`py-16 md:py-24 ${
        background === "gradient"
          ? isMac ? `bg-gradient-to-br from-brand/5 to-brand/10 header-${bgType}` : 'bg-gradient-to-br from-brand/5 to-brand/10 header-bg'
          : "bg-base"
      }`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-brand font-semibold text-sm md:text-base mb-4 tracking-wide uppercase"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

                    {/* Platforms Section (App / PC / WebTrader) */}
          {showPlatforms && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-center mt-6"
            >
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100 font-semibold px-6 py-6 rounded-md flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  App
                </Button>

                <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100 font-semibold px-6 py-6 rounded-md flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  PC
                </Button>

                <Button className="bg-white text-black border border-gray-300 hover:bg-gray-100 font-semibold px-6 py-6 rounded-md flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  WebTrader
                </Button>
              </div>
            </motion.div>
          )}

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-brand hover:bg-brand/90 text-brand-foreground font-semibold px-8 py-3 rounded-xl"
                asChild
              >
                <a href={ctaHref}>
                  {ctaText} <ExternalLink />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}