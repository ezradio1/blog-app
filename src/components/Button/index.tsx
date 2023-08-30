import type { ButtonProps } from "./index.types";
import clsx from "clsx";
import Loader from "@/assets/SVG/Loader";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    children = null,
    loading = false,
    disabled,
    className,
  } = props;
  const customDisabled = disabled || loading;

  const getButtonStyle = () => {
    switch (variant) {
      case "primary":
        return clsx("bg-primary text-white border border-primary", {
          "hover:bg-white hover:text-primary": !customDisabled,
        });
    }
  };

  return (
    <button
      disabled={customDisabled}
      {...props}
      className={clsx(
        "rounded py-[6px] px-[16px] min-w-[120px] text-sm shadow-md transition-all font-medium h-10",
        getButtonStyle(),
        className,
        { "opacity-60 cursor-not-allowed": customDisabled }
      )}
    >
      {loading ? <Loader color="white" size="20px" /> : children}
    </button>
  );
};

export default Button;
