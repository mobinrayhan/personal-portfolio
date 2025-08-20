import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({ 
  children, 
  className, 
  containerSize = 'lg',
  padding = 'lg' 
}: SectionProps) {
  const paddingClasses = {
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-24',
    xl: 'py-20 lg:py-32',
  };

  return (
    <section className={cn(paddingClasses[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}