import type { FC } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width = 48, height = 64, className = '' }) => {
  return (
    <img
      src="/manus-storage/Logo_7bef1327.svg"
      alt="Lunacy Media Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
