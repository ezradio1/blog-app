import React from "react";
import { InputProps } from "./index.types";
import clsx from "clsx";

const Input = (props: InputProps) => {
  const {
    children = null,
    label,
    name,
    errorMsg = "",
    withError = true,
  } = props;

  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-xs mb-1" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <input
        {...props}
        className={clsx(
          "rounded min-w-[220px] py-[6px] h-10 px-[16px] text-sm  outline-primary border-gray-400 border font-medium",
          {
            "border-red-500": errorMsg !== "",
          }
        )}
      >
        {children}
      </input>

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
