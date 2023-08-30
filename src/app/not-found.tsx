import PageLayout from "@/components/PageLayout";
;
import NotFoundIllustration from "@/assets/img/404-illustration.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="flex min-h-[calc(100vh-80px-210px)] flex-col justify-center items-center">
        <Image
          src={NotFoundIllustration}
          width={300}
          height={300}
          alt="empty-illustration.png"
        />
        <div className="mt-4">
          <p className="text-lg text-center">Error 404 - Page Not Found</p>
          <p className="text-xs text-gray-400">
            This page you requested could not be found!
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
