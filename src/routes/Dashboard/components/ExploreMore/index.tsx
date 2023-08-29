"use client"
import Button from "@/components/Button";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";

const ExploreMore = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center my-4">
      <Button onClick={() => router.push(ROUTES.BLOG)}>Explore More Information</Button>
    </div>
  );
};

export default ExploreMore;
