"use client";

import Button from "../Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <div className="w-full flex-col h-[60vh] flex items-center justify-center gap-6">
      <p className="uppercase font-bold text-7xl tracking-widest text-center">
        Coming <br /> Soon
      </p>
      <p className=" text-gray-400 text-center">
        Exciting things are on the way! Stay tuned for updates.
      </p>
      <Button onClick={() => router.push(ROUTES.DASHBOARD)}>
        Back to Dashboard
      </Button>
    </div>
  );
};

export default ComingSoon;
