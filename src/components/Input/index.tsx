import React from "react";
import { InputProps } from "./index.types";
import clsx from "clsx";

const Input = (props: InputProps) => {
  const { children = null } = props;

  return (
    <input
      {...props}
      className={clsx(
        "rounded w-full py-[6px] px-[16px] text-sm  outline-primary border-gray-400 border font-medium"
      )}
    >
      {children}
    </input>
  );
};

export default Input;
