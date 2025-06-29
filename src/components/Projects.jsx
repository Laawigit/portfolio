import React, { forwardRef } from "react";
import { data } from "../assets/data";
import { Item } from "./Item";

export const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative flex flex-col gap-10 mb-40 min-[768px]:pl-30">
      <h1 className="section-title max-[768px]:text-center max-[768px]:bg-[length:100%]">
        My Work
      </h1>

      <div className="flex gap-4 max-[768px]:flex-col min-[768px]:pr-30 max-[768px]:px-10">
        {data.map((project, index) => {
          return <Item project={project} key={index} />;
        })}
      </div>
    </div>
  );
})
