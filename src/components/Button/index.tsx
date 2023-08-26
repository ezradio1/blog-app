import React from "react";
import { ButtonProps } from "./index.types";
import clsx from "clsx";

const Button = (props: ButtonProps) => {
  const { variant = "primary", children = null } = props;

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return clsx(
          "bg-primary text-white hover:bg-white hover:text-primary border border-primary"
        );
    }
  };

  return (
    <button
      {...props}
      className={clsx(
        "rounded py-[6px] px-[16px] text-sm shadow-md transition-all font-medium",
        getButtonStyle()
      )}
    >
      {children}
    </button>
  );
};

export default Button;
