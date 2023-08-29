import ErrorIllustration from "@/assets/img/error-illustration.png";
import Image from "next/image";
import type { ErrorStateProps } from "./index.types";

const ErrorState = (props: ErrorStateProps) => {
  const { size = 400 } = props;

  return (
    <div className="w-full flex-col flex items-center justify-center gap-6">
      <Image
        src={ErrorIllustration}
        width={size}
        height={size}
        alt="empty-illustration.png"
      />
      <div>
        <p className="text-lg text-center">A server error occurred!</p>
        <p className="text-xs text-gray-400">
          Please contact admin or try again later!
        </p>
      </div>
    </div>
  );
};

export default ErrorState;
