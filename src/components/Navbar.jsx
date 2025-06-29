import React, { useEffect, useState } from "react";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = ({ scrollHandlers }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = React.useRef();
  const menuIconRef = React.useRef();

  window.addEventListener("scroll", () => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
  });

  function toggleNavbar() {
    setIsNavOpen(!isNavOpen);
  }

  const handleClickOutside = (e) => {
    if (
      navRef.current &&
      menuIconRef.current &&
      !menuIconRef.current.contains(removeEventListener.target) &&
      !navRef.current.contains(e.target)
    ) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative ">
      <nav className=" w-[100%] flex  justify-between items-center p-4 max-[768px]:px-19 max-w-[1328px]">
        <i
          ref={menuIconRef}
          className="fa-solid fa-bars text-white text-[1.5rem] !hidden max-[768px]:!block cursor-pointer"
          onClick={toggleNavbar}
        ></i>
        <h1 className="text-[2rem] font-bold text-white max-[768px]:hidden">
          Laawi
        </h1>
        <ul className="navLink max-[768px]:hidden">
          <NavbarLinks screen="big" scrollHandlers={scrollHandlers} />
        </ul>
        <ul
          ref={navRef}
          className={`navLink fixed left-0 right-0 ${
            isNavOpen ? "top-[0]" : "top-[-100%]"
          } transition-[top] duration-[1s] ease-in-out  w-[100%] bg-[#2c1c2e] hidden max-[768px]:block border-none rounded-[0] pb-[2em] z-40`}
        >
          <NavbarLinks screen="small" scrollHandlers={scrollHandlers} />
          <div className="absolute bg-[#370f5f] w-[10%] flex justify-center items-center h-[2em] right-0 bottom-[-1.5em] rounded-b-[50%] ">
            <i
              className="fa-solid fa-chevron-down cursor-pointer"
              onClick={toggleNavbar}
            ></i>
          </div>
        </ul>
        <div onClick={ () => {
          scrollHandlers.contact()
        }} className="navLink w-[10%] contact max-[768px]:w-[40%] cursor-pointer">
          Contact
        </div>
      </nav>
    </header>
  );
};
