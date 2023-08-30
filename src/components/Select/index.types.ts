import type { InputHTMLAttributes } from "react";

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options: {
    label: string | number;
    value: string | number;
  }[];
  additionalValueText?: string;
  clearIcon?: boolean;
  errorMsg?: string;
  withError?: boolean;
}
