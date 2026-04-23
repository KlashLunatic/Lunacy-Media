import type { FC } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width = 48, height = 64, className = '' }) => {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032200270/lVeZNtlDodoCBAGY.svg"
      alt="Lunacy Media Logo"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;
