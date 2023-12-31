import useGetAllQueryParams from "@/hooks/useGetAllQueryParams";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const useIndex = () => {
  const router = useRouter();
  const pathname = usePathname();

  const allQueryParams = useGetAllQueryParams();
  const { search: searchQueryParams } = allQueryParams;

  const [search, setSearch] = useState(searchQueryParams);

  const handleClickEnter = (key: string) => {
    if (key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const searchQueryParams = search
      ? `?${new URLSearchParams({ search })}`
      : ""; 
    window.location.replace(`${pathname}${searchQueryParams}`);
  };

  return { search, setSearch, handleSearch, handleClickEnter };
};

export default useIndex;
