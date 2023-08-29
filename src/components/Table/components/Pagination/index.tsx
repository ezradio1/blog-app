import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PaginationProps } from "./index.types";
import clsx from "clsx";
import { GRAY, PRIMARY } from "@/constants/colors";
import { noop } from "@/helpers/noop";

const Pagination = (props: PaginationProps) => {
  const { isPrevDisabled, isNextDisabled, currentPage, onChangePagination } =
    props;

  const pageNumbers = Array.from(
    { length: currentPage },
    (_, index) => index + 1
  );

  const actionClassName = (isDisabled: boolean) =>
    clsx(
      "border p-2 rounded transition-all w-10 h-10 flex justify-center items-center",
      {
        "cursor-not-allowed": isDisabled,
        "cursor-pointer hover:border-primary border-gray-400": !isDisabled,
      }
    );

  return (
    <div className="flex mt-4 gap-2">
      <div
        className={actionClassName(isPrevDisabled)}
        onClick={isPrevDisabled ? noop : () => onChangePagination("-")}
      >
        <FiChevronLeft color={isPrevDisabled ? GRAY["300"] : PRIMARY} />
      </div>
      {pageNumbers.map((page, key) => (
        <div
          className={clsx(actionClassName(false), {
            "bg-primary text-white": currentPage === page,
          })}
          onClick={isPrevDisabled ? noop : () => onChangePagination(page)}
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
