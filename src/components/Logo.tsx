import type { FC } from 'react';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width = '80px', height = '100px', className = '' }) => {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032200270/lVeZNtlDodoCBAGY.svg"
      alt="Lunacy Media Logo"
      style={{ width, height }}
      className={className}
    />
  );
};

export default Logo;
