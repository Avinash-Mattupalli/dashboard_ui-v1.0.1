import React from "react";

const sizes = {
  xl: "text-7xl font-bold md:text-5xl",
  s: "text-lg font-bold",
  md: "text-2xl font-bold md:text-[22px]",
  xs: "text-sm font-bold",
  lg: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-montserrat ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
