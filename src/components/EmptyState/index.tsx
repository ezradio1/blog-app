import EmptyIllustration from "@/assets/img/empty-illustration.png";
import Image from "next/image";
import type { EmptyStateProps } from "./index.types";

const EmptyState = (props: EmptyStateProps) => {
  const { size = 200 } = props;

  return (
    <div className="w-full flex-col flex items-center justify-center gap-6">
      <Image
        src={EmptyIllustration}
        width={size}
        height={size}
        alt="empty-illustration.png"
      />
      <div>
        <p className="text-lg text-center">No Result Found</p>
        <p className="text-xs text-gray-400">
          Try adjusting your search or filter to find what you&apos;re looking
          for
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
