import BlogCard from "@/components/BlogCard";
import { fetchData } from "@/helpers/fetchData";
import { generateRandomImage } from "@/helpers/generateRandomImage";
import type { SearchParamsType } from "@/types/layoutProps";
import Pagination from "./components/Pagination";
import type { BlogData } from "./index.types";
import SearchInput from "./components/SearchInput";
import EmptyState from "@/components/EmptyState";

const getBlogList = async ({ searchParams }: SearchParamsType) => {
  const page = searchParams?.["page"] || "1";
  const search = searchParams?.["search"] || "";
  const res = await fetchData<BlogData[]>(
    `posts?per_page=8&page=${page}&title=${search}`
  );
  return res;
};

const Blog = async (props: SearchParamsType) => {
  const searchParams = props.searchParams || {};
  const { search, page } = searchParams;

  const { data, error } = await getBlogList(props);
  if (!data || error) return <div>{error}</div>;

  const isEmpty = data.length === 0;

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-2">
        <h2 className="font-semibold uppercase text-2xl text-black">
          Blog List
        </h2>
        <div className="basis-1/2">
          <SearchInput />
        </div>
      </div>

      <div className="my-4">
        {search ? (
          <p>
            Search results for{" "}
            <span className="italic font-semibold">`{search}`</span>{" "}
          </p>
        ) : null}
      </div>

      {isEmpty ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-3">
          {data.map((el, key) => (
            <div key={key} className="">
              <BlogCard {...el} image={generateRandomImage(key * 2)} />
            </div>
          ))}
        </div>
      )}
      {!isEmpty || page !== "1" ? <Pagination isDataEmpty={isEmpty} /> : null}
    </div>
  );
};

export default Blog;
