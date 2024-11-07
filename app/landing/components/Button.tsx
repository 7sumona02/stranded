import React from "react";

type ButtonProps = {
  children: React.ReactNode; // Button content
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100`}
    >
      {children}
    </button>
  );
};

export default Button;