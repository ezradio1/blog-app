import { GRAY, PRIMARY } from "@/constants/colors";
import { noop } from "@/helpers/noop";
import clsx from "clsx";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ELLIPSIS } from "./index.constants";
import type { PaginationProps } from "./index.types";

const Pagination = (props: PaginationProps) => {
  const { isPrevDisabled, isNextDisabled, currentPage, onChangePagination } =
    props;

  let pageNumbers = Array.from({ length: currentPage }, (_, index) =>
    String(index + 1)
  );

  if (pageNumbers.length > 9) {
    const firstPart = pageNumbers.slice(0, 2);
    const middlePart = [
      ELLIPSIS,
      ...pageNumbers.slice(
        Math.max(0, currentPage / 2 - 1),
        Math.min(currentPage, currentPage / 2 + 1)
      ),
      ELLIPSIS,
    ];
    const lastPart = pageNumbers.slice(-2);
    pageNumbers = [];
    pageNumbers.push(...firstPart, ...middlePart, ...lastPart);
  }

  const actionClassName = (isDisabled: boolean, page = "") =>
    clsx(
      "rounded transition-all md:w-10 md:h-10 h-7 w-7 text-xs md:text-sm flex justify-center items-center",
      {
        "cursor-not-allowed": isDisabled,
        "cursor-pointer hover:border-primary border-gray-400": !isDisabled,
        border: page !== ELLIPSIS,
        "cursor-default": page === ELLIPSIS,
      }
    );

  return (
    <div className="flex gap-1 md:gap-2">
      <div
        className={actionClassName(isPrevDisabled)}
        onClick={isPrevDisabled ? noop : () => onChangePagination("-")}
      >
        <FiChevronLeft color={isPrevDisabled ? GRAY["300"] : PRIMARY} />
      </div>
      {pageNumbers.map((page, key) => (
        <div
          className={clsx(actionClassName(false, page), {
            "bg-primary text-white": currentPage === Number(page),
          })}
          onClick={
            isPrevDisabled || page === ELLIPSIS
              ? noop
              : () => onChangePagination(Number(page))
          }
          key={key}
        >
          <p>{page}</p>
        </div>
      ))}
      <div
        className={actionClassName(isNextDisabled)}
        onClick={isNextDisabled ? noop : () => onChangePagination("+")}
      >
        <FiChevronRight color={isNextDisabled ? GRAY["300"] : PRIMARY} />
      </div>
    </div>
  );
};

export default Pagination;
