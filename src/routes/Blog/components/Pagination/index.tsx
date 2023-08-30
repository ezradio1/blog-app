"use client";
import Pagination from "@/components/Pagination";
;
import useIndex from "./index.hook";
import type { PagintaionBlogProps } from "./index.types";

const PaginationBlog = (props: PagintaionBlogProps) => {
  const { isDataEmpty } = props;
  const { handleChangePagination, currentPage } = useIndex();
  return (
    <div className="flex justify-end mt-2 items-center gap-2">
      <Pagination
        isPrevDisabled={currentPage === 1}
        isNextDisabled={isDataEmpty}
        onChangePagination={handleChangePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default PaginationBlog;
