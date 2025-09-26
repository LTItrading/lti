import { cn } from '@/lib/utils';
import { Container } from './Container';

const backgroundClasses = {
  none:"",
  default: 'bg-base',
  muted: 'bg-muted',
  accent: 'bg-accent'
};

const paddingClasses = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-28'
};

export function Section({ 
  children, 
  className, 
  containerSize = 'lg',
  background = 'default',
  padding = 'lg'
}) {
  return (
    <section className={cn(
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}