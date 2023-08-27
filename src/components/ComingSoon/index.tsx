import React from "react";
import Button from "../Button";

const ComingSoon = () => {
  return (
    <div className="w-full flex-col h-[60vh] flex items-center justify-center gap-6">
      <p className="uppercase font-bold text-7xl tracking-widest text-center">
        Coming <br /> Soon
      </p>
      <p className=" text-gray-400">
        Exciting things are on the way! Stay tuned for updates.
      </p>
      <Button>Back to Blog</Button>
    </div>
  );
};

export default ComingSoon;
