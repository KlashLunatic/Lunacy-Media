import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade' | 'scale' | 'slideUp' | 'slideDown' | 'combined';
  as?: 'p' | 'span' | 'div';
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  type = 'fade',
  as: Element = 'p',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const { style } = useScrollReveal(ref, {
    type,
    duration: 1000,
    delay,
    threshold: 0.3,
  });

  return (
    <Element ref={ref as any} className={className} style={style}>
      {children}
    </Element>
  );
}
