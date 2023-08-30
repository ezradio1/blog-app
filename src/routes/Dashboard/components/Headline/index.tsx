"use client"
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { HeadlineProps } from "./index.types";

const Headline = (props: HeadlineProps) => {
  const { id, image, title, body } = props;
  const router = useRouter();

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => router.push(`${ROUTES.BLOG_DETAIL}/${id}`)}
    >
      <div className="group border relative w-full h-96">
        <Image src={image} alt="blog-image" fill objectFit="cover" />
        <div className="h-full z-0 w-full absolute bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-1 px-4 py-3 transition-all duration-500 ease-out group-hover:translate-y-1 translate-y-14">
          <p className="text-white font-semibold text-3xl z-10 line-clamp-2">
            {title}
          </p>
          <p className="text-gray-200 text-justify mt-2 text-xs group-hover:opacity-100 opacity-0 transition-all z-10 line-clamp-3">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headline;
