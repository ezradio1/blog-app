import { UserData } from "@/redux/reducers/user/index.types";
import { ReactNode } from "react";

export interface TableColumnType {
  [key: string]: string | number | ReactNode;
}
