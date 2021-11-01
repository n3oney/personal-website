import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className={twMerge(
      'font-bold text-pink-1 transition border-2 border-pink-1 bg-black hover:bg-pink-1 hover:text-black rounded-md px-3 py-2 text-sm flex items-center justify-center',
      props.className
    )}
  >
    {children}
  </button>
);

export default Button;
