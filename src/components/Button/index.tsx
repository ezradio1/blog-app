import React from "react";
import { ButtonProps } from "./index.types";
import clsx from "clsx";
import Loader from "@/assets/SVG/Loader";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    children = null,
    loading = false,
    disabled,
  } = props;
  const customDisabled = disabled || loading;

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return clsx("bg-primary text-white  border border-primary", {
          "hover:bg-white hover:text-primary": !loading,
        });
    }
  };

  return (
    <button
      disabled={customDisabled}
      {...props}
      className={clsx(
        "rounded py-[6px] px-[16px] text-sm shadow-md transition-all font-medium h-10",
        getButtonStyle(),
        { "opacity-60 cursor-not-allowed": customDisabled }
      )}
    >
      {loading ? <Loader color="white" size="20px" /> : children}
    </button>
  );
};

export default Button;
