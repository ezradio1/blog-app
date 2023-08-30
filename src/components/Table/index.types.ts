import { ReactNode } from "react";
import type { PaginationParams } from "../Pagination/index.types";

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
  rowsPerPage?: number;
  onChangeRowPerPage?: (value: number) => void;
}
