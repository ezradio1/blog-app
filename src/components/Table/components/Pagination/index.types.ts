export interface PaginationProps {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onChangePagination: (key: PaginationParams) => void;
  currentPage: number;
}

export type PaginationParams = "+" | "-" | number;
