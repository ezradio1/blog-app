import BlogCard from "@/components/BlogCard";
import { fetchData } from "@/helpers/fetchData";
import { generateRandomImage } from "@/helpers/generateRandomImage";
import ExploreMore from "./components/ExploreMore";
import Headline from "./components/Headline";
import type { BlogData } from "./index.types";
import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";

const getBlogList = async () => {
  const res = await fetchData<BlogData[]>(`posts?per_page=4&page=1`);
  return res;
};

const Dashboard = async () => {
  const { data, error } = await getBlogList();

  if (error) return <ErrorState />;
  if (!data) return <EmptyState />;

  const firstData = data.slice(0, 1)?.[0];

  return (
    <div>
      <h2 className="font-semibold uppercase text-2xl mb-2 text-black">
        Headline
      </h2>
      <div className="flex gap-2 w-full">
        <div className="basis-full lg:basis-2/5 w-full">
          <Headline {...firstData} image={generateRandomImage()} />
        </div>
        {data &&
          data.map((el, key) => (
            <div key={key} className="basis-64 hidden lg:block">
              <BlogCard {...el} image={generateRandomImage(key)} />
            </div>
          ))}
      </div>

      <h2 className="font-semibold uppercase text-2xl mb-2 mt-12 text-black">
        Recomended
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {data.map((el, key) => (
          <div key={key} className="basis-60 hidden lg:block">
            <BlogCard {...el} image={generateRandomImage(key * 2)} />
          </div>
        ))}
      </div>

      <ExploreMore />
    </div>
  );
};

export default Dashboard;
