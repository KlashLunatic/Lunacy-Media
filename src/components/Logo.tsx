import type { FC } from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width = '80px', height = '100px', className = '' }) => {
  return (
    <img
      src="/favicon.svg"
      alt="Lunacy Media Logo"
      style={{ width, height }}
      className={className}
    />
  );
};

export default Logo;
