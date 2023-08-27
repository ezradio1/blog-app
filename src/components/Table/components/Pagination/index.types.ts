export interface PaginationProps {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onChangePagination: (key: "+" | "-" | number) => void;
  currentPage: number;
}
