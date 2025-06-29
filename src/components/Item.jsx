import React, { useState } from "react";

export const Item = ({ project }) => {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <a
      onMouseOver={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      className="w-[85%] max-[768px]:w-[100%] relative overflow-hidden border border-white rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300 h-[15em]"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={project.snapshot}
        className="w-[100%] h-[100%] object-content rounded-2xl"
      />
      <div
        className={` ${
          mouseOn ? "top-0" : "top-[100%]"
        } absolute transition-all duration-400 bottom-0 left-0 right-0 bg-cyan-500 opacity-75 text-white flex flex-col items-center justify-center  rounded-2xl max-[768px]:hidden`}
      >
        <span>{project.name}</span>
        <span>Click here</span>
      </div>
    </a>
  );
};
