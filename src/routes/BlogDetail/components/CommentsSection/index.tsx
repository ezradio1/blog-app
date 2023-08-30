import DummyPhoto from "@/assets/img/dummy-photo.png";
import EmptyState from "@/components/EmptyState";
import { fetchDataForSSR } from "@/helpers/fetchDataForSSR";
import Image from "next/image";
import type { CommentsData, CommentsSectionProps } from "./index.types";

const getUserComments = async (blogId: string) => {
  const res = await fetchDataForSSR<CommentsData[]>(`posts/${blogId}/comments`);
  return res;
};

const CommentsSection = async (props: CommentsSectionProps) => {
  const { blogId } = props;
  const { data, error } = await getUserComments(blogId);

  if (!data) return <EmptyState />;
  if (error) return <div>Error</div>;

  return (
    <div>
      {data ? (
        <div className="mt-4">
          <p className="text-sm font-medium">
            {data.length === 0 ? "No" : data.length} Comments
          </p>
          <div className="flex flex-col gap-4 mt-2">
            {data.map((comment, key) => (
              <div key={key} className="flex gap-2">
                <div className="w-[38px]">
                  <div className="w-9 h-9 bg-gray-300 rounded-full relative mt-1">
                    <Image
                      src={DummyPhoto}
                      fill
                      alt="dummy-photo.png"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-3">
                    <p className="font-medium text-primary">{comment.name}</p>
                    <p className="text-xs text-gray-400">
                      {comment.email}
                    </p>
                  </div>
                  <p className="md:text-sm text-xs mt-1 md:mt-0">
                    {comment.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CommentsSection;
