import EmptyState from "@/components/EmptyState";
import ErrorState from "@/components/ErrorState";
import { fetchData } from "@/helpers/fetchData";
import { generateRandomImage } from "@/helpers/generateRandomImage";
import { BlogDetailProps } from "@/types/layoutProps";
import Image from "next/image";
import CommentsSection from "./components/CommentsSection";
import type { BlogDetailData, UserDetailData } from "./index.types";

const getBlogById = async (blogId: string) => {
  const res = await fetchData<BlogDetailData>(`posts/${blogId}`);
  return res;
};

const getUserById = async (userId: number) => {
  const res = await fetchData<UserDetailData>(`users/${userId}`);
  return res;
};

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const blogId = params.blog_id;
  const { data, error } = await getBlogById(blogId);

  if (!data) return <EmptyState />;
  if (error) return <ErrorState />;

  const { data: userData } = await getUserById(data.user_id);
  const { title, body } = data;

  return (
    <div className="flex flex-col gap-3 mb-4">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xl leading-tight md:text-3xl font-semibold">
            {title}
          </p>
          <p className="text-xs text-gray-500 md:mt-0 mt-2">
            Authors:
            <span className="font-medium ml-1">
              {userData?.name || "Unknown"}
            </span>
            <span className="ml-1">
              {userData?.email ? `• ${userData?.email}` : null}
            </span>
          </p>
        </div>
        <div className="w-full h-[70vh] bg-gray-500 relative">
          <Image
            src={generateRandomImage()}
            fill
            alt="dummy-photo.png"
            objectFit="cover"
          />
        </div>
        <p className="text-justify">{body}</p>
      </div>
      <CommentsSection blogId={blogId} />
    </div>
  );
};

export default BlogDetail;
