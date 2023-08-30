import clsx from "clsx";
import type { TagProps } from "./index.types";

const Tag = (props: TagProps) => {
  const { children, color = "default", icon = null } = props;

  const getTagColor = {
    default: clsx("border border-gray-500 bg-gray-100 text-gray-500"),
    blue: clsx("border border-blue-500 bg-blue-100 text-blue-500"),
    pink: clsx("border border-pink-500 bg-pink-100 text-pink-500"),
    orange: clsx("border border-orange-500 bg-orange-100 text-orange-500"),
    green: clsx("border border-green-500 bg-green-100 text-green-500"),
    red: clsx("border border-red-500 bg-red-100 text-red-500"),
  };

  return (
    <p
      className={clsx(
        "font-bold flex gap-1 items-center border uppercase px-2 py-1 text-center w-fit rounded",
        getTagColor[color]
      )}
    >
      {icon}
      {children}
    </p>
  );
};

export default Tag;
