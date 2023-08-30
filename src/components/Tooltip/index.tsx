"use client";
import React, { useRef, useState } from "react";
import type { TooltipProps } from "./index.types";

const Tooltip = (props: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { position = "bottom", children, content } = props;
  const myElementRef = useRef<HTMLDivElement>(null);
  const stylePosition = position === "bottom" ? "top" : "bottom";
  return (
    <div
      className="relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={myElementRef}>{children}</div>
      {isHovered && (
        <div
          className="absolute z-10 p-2 mt-1 mb-1 bg-gray-500 rounded"
          style={{
            [stylePosition]: myElementRef.current?.getBoundingClientRect()
              .height
              ? myElementRef.current?.getBoundingClientRect().height + 2
              : 0,
          }}
        >
          <div
            style={{ [stylePosition]: 0 }}
            className="w-4 h-4 bg-gray-500 z-0 absolute left-1/2 transform -translate-x-1/2  -rotate-45"
          />
          <div className="text-white text-[10px] z-10 relative min-w-[200px]">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
