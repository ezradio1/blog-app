import { fetchData } from "@/helpers/fetchData";
import { generateRandomImage } from "@/helpers/generateRandomImage";
import BlogCard from "./components/BlogCard";
import Headline from "./components/Headline";
import { BlogData } from "./index.types";

const getBlogList = async () => {
  const res = await fetchData<BlogData[]>("posts?per_page=8");
  return res;
};

const Blog = async () => {
  const { data, error } = await getBlogList();
  if (!data || error) return <div>{error}</div>;
  const firstData = data.slice(0, 1)?.[0];
  const firstThreeData = data.slice(1, 4);

  return (
    <div>
      <h2 className="font-semibold uppercase text-2xl mb-2 text-black">
        Headline
      </h2>
      <div className="flex gap-2 w-full">
        <div className="basis-full lg:basis-2/5 w-full">
          <Headline {...firstData} image={generateRandomImage()} />
        </div>
        {firstThreeData &&
          firstThreeData.map((el, key) => (
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
    </div>
  );
};

export default Blog;
