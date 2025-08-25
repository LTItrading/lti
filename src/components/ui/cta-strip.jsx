import { motion } from 'framer-motion';
import { Button } from './button';
import { Container } from '../layout/Container';


const variantClasses = {
  default: 'bg-base border-t border-border',
  brand: 'bg-brand text-brand-foreground',
  muted: 'bg-muted'
};

const sizeClasses = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16'
};

export function CTAStrip({
  title,
  description,
  ctaText = 'Open an Account',
  ctaHref = '/accounts',
  variant = 'default',
  size = 'md'
}) {
  return (
    <section className={`${variantClasses[variant]} ${sizeClasses[size]}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
            variant === 'brand' ? 'text-brand-foreground' : 'text-ink'
          }`}>
            {title}
          </h2>
          
          {description && (
            <p className={`text-lg mb-6 ${
              variant === 'brand' ? 'text-brand-foreground/90' : 'text-muted-foreground'
            }`}>
              {description}
            </p>
          )}
          
          <Button
            size="lg"
            className={`font-semibold px-8 py-3 rounded-xl ${
              variant === 'brand'
                ? 'bg-white text-brand hover:bg-white/90'
                : 'bg-brand hover:bg-brand/90 text-brand-foreground'
            }`}
            asChild
          >
            <a href={ctaHref}>{ctaText}</a>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}