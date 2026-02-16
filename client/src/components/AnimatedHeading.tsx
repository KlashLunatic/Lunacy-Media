import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  delay?: number;
  type?: 'fade' | 'scale' | 'slideUp' | 'slideDown' | 'combined';
}

export function AnimatedHeading({
  children,
  level = 'h2',
  className = '',
  delay = 0,
  type = 'combined',
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { style } = useScrollReveal(ref, {
    type,
    duration: 800,
    delay,
    threshold: 0.3,
  });

  const Heading = level;

  return (
    <Heading ref={ref} className={className} style={style}>
      {children}
    </Heading>
  );
}
