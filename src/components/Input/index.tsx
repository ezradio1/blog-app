;
import type { InputProps } from "./index.types";
import clsx from "clsx";

const Input = (props: InputProps) => {
  const {
    children = null,
    label,
    name,
    errorMsg = "",
    withError = true,
    icon = null,
    className = "",
  } = props;

  return (
    <div className={clsx("flex flex-col min-w-[220px]", className)}>
      {label ? (
        <label className="text-xs mb-1" htmlFor={name}>
          {label}
        </label>
      ) : null}

      <div className="relative">
        <input
          {...props}
          className={clsx(
            "rounded w-full py-[6px] h-10 px-[16px] text-sm  outline-primary border-gray-400 border font-medium",
            {
              "border-red-500": errorMsg !== "",
              "pl-8": icon,
            }
          )}
        >
          {children}
        </input>
        <div className="absolute top-1/2 -translate-y-1/2 transform left-3">
          {icon}
        </div>
      </div>

      {withError ? (
        <div className="h-4 leading-tight">
          <p
            className={clsx("text-xs mt-1 text-red-500 transition-all", {
              "-translate-y-2": errorMsg === "",
              "translate-y-0": errorMsg,
            })}
          >
            {errorMsg}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
