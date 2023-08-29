import { ReactNode } from "react";
import { PaginationParams } from "./components/Pagination/index.types";

export interface TableColumn<T> {
  key: string;
  header: string;
  render?: (data: T) => ReactNode;
  align?: "center" | "left" | "right";
  width?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  loading: boolean;
  onChangePagination: (key: PaginationParams) => void;
  currentPage: number;
}
