import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Container } from './Container';

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
  ctaText = 'Open Live Account',
  ctaHref = '/accounts',
  background = 'default'
}) {
  return (
    <section className={`py-16 md:py-24 ${background === 'gradient' ? 'bg-gradient-to-br from-brand/5 to-brand/10' : 'bg-base'}`}>
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
                <a href={ctaHref}>{ctaText}</a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}