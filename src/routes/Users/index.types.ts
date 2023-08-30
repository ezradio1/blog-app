import { ReactNode } from "react";

export interface TableColumnType {
  [key: string]: string | number | ReactNode;
}
