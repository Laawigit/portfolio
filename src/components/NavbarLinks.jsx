import React from "react";

export const NavbarLinks = ({ screen, scrollHandlers }) => {
  return (
    <>
      <li className={screen === "small" ? "navLink w-[100%]" : ""}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollHandlers.home();
          }}
        >
          Home
        </a>
      </li>
      <li className={screen === "small" ? "navLink w-[100%]" : ""}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollHandlers.projects();
          }}
        >
          Projects
        </a>
      </li>
      <li className={screen === "small" ? "navLink w-[100%]" : ""}>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            scrollHandlers.about();
          }}
        >
          About Me
        </a>
      </li>
    </>
  );
};
