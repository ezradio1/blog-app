import { useSearchParams } from "next/navigation";

const useGetAllQueryParams = () => {
  const queryParams = useSearchParams();
  const storedQueryParams: Record<string, string> = {};

  queryParams.forEach((value, key) => {
    storedQueryParams[key] = value || "";
  });

  return storedQueryParams;
};

export default useGetAllQueryParams;
