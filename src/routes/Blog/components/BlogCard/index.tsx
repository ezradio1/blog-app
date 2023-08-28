import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogCardProps } from "./index.types";

const BlogCard = (props: BlogCardProps) => {
  const data = {
    image: "https://picsum.photos/200",
    author: "2",
    title: "Demulceo sortitus audax est unus architecto dolorem sint absorbeo.",
    body: "Cupressus claro aut. Desipio teneo comis. Cunabula surgo bonus. Degusto theatrum illo. Sed defleo pel. Cenaculum cultellus amoveo. Temperantia acervus usus. Et alter eos. Culpa reprehenderit pecus. Surculus dolore vito. Vitium tenus cenaculum. Caput sufficio viriliter. Cenaculum curia repellat. Uter curso degenero. Vitiosus abeo tero.",
  };
  const { id, title, body, image } = props;
  return (
    <div className="group h-96 relative cursor-pointer transition-all duration-500 ease-out">
      <div className="h-[65%] relative rounded">
        <Image
          src={image}
          alt="blog-image"
          fill
          objectFit="cover"
          className="rounded"
        />
      </div>

      <div className="p-2 mt-2 flex flex-col gap-2">
        <p className="leading-tight font-medium line-clamp-2 text-primary">
          {title}
        </p>
        <p className="leading-tight text-[10px] text-gray-400 line-clamp-4">
          {body}
        </p>
      </div>

      <Link href="/blog/:id">
        <div className="h-96 absolute transition-all flex justify-center items-center bg-black bg-opacity-10 w-full top-0 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 -translate-y-4">
          <p className="text-white text-xs">Read Article</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
