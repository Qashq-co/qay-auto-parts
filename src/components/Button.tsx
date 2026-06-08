import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "px-6 py-3 font-semibold rounded-md transition-all duration-300 transform active:scale-95";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-opacity-90 shadow-md shadow-orange-500/20",
    secondary: "bg-brand-navy text-white hover:bg-opacity-90",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};