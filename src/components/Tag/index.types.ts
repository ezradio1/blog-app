import { ReactNode } from "react";

export interface TagProps {
  children: ReactNode;
  color?: "orange" | "blue" | "pink" | "default" | "green" | "red";
  icon?: ReactNode;
}
