import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button {...props} className={`text-pink-1 transition border-2 border-pink-1 bg-black hover:bg-pink-1 hover:text-black rounded-md px-3 py-2 text-sm shadow-light flex items-center justify-center ${props.className}`}>
      {children}
  </button>
);

export default Button;