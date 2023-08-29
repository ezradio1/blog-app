import { PaginationParams } from "@/components/Table/components/Pagination/index.types";
import useGetAllQueryParams from "@/hooks/useGetAllQueryParams";
import { usePathname, useRouter } from "next/navigation";

const useIndex = () => {
  const router = useRouter();
  const pathname = usePathname();

  const allQueryParams = useGetAllQueryParams();
  const currentPage = Number(allQueryParams.page || 1);

  const handleChangePagination = (key: PaginationParams) => {
    const page =
      typeof key === "number" ? String(key) : eval(`${currentPage} ${key} 1`);

    router.push(
      `${pathname}?${new URLSearchParams({ ...allQueryParams, page })}`
    );
  };

  return { handleChangePagination, currentPage };
};

export default useIndex;
