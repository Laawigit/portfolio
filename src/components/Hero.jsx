import heroImg from "../assets/hero-img.jpg";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import js from "../assets/js-file.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { NeonButton } from "./NeonButton";
import { useEffect, useState, forwardRef } from "react";
import { Typewriter } from "react-simple-typewriter";

export const Hero = forwardRef(({ scrollHandlers }, ref) => {
  const [slideImgIn, setSlideImgIn] = useState(false);
  const [slideGreetingIn, setSlideGreetingIn] = useState(false);

  const downloadResume = () => {
    console.log("Downloading resume...");
    const link = document.createElement("a");
    link.href = "Abdulhakim_resume.pdf";
    link.setAttribute("download", "Abdulhakim_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const imgTimeout = setTimeout(() => setSlideImgIn(true), 500);
    const greetingTimeOut = setTimeout(() => setSlideGreetingIn(true), 700);
    return () => {
      clearTimeout(imgTimeout);
      clearTimeout(greetingTimeOut);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex max-[768px]:flex-col relative z-0 text-white text-[3.3rem] py-[1em] w-[100%] justify-between items-center gap-[1em] max-[768px]:gap-[3em]"
    >
      <div className="ml-[2em] w-[50%] flex flex-col  max-[768px]:w-[100%] max-[768px]:px-[.5em] max-[768px]:ml-[0]  max-[768px]:text-center">
        <h1
          className={`transition-transform duration-2000 ease-in-out ${
            slideGreetingIn
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          Hello
        </h1>
        <div className="">
          <div className="flex justify-start items-center relative max-[768px]:justify-center">
            <h2 className="m-[0] text-[1.5rem] text-gray-300 ">
              I'm Abdulhakim
            </h2>
          </div>
          <h1 className="font-bold ">
            <Typewriter
              words={["Web Developer", "Front-End Developer", "Web Designer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={3000}
            />
          </h1>
          <ul className="flex justify-start items-center h-[1em] gap-[.5em] mt-[.5em]">
            <li className="w-[100%]">
              <img src={html} className="w-[100%] h-[1em] object-scale-down" />
            </li>
            <li className="w-[100%]">
              <img
                src={css}
                className="w-[100%] h-[1.05em] object-scale-down"
              />
            </li>
            <li className="w-[100%]">
              <img src={js} className="w-[100%] h-[1em] object-scale-down" />
            </li>
            <li className="w-[100%]">
              <img src={react} className="w-[100%] h-[1em] object-scale-down" />
            </li>
            <li className="w-[100%]">
              <img
                src={tailwind}
                className="w-[80%] h-[1em] object-scale-down"
              />
            </li>
          </ul>

          <div className="flex justify-evenly items-center gap-[5px] mt-[1em]  h-[1em] max-[768px]:flex-col max-[768px]:gap-[10px]">
            <NeonButton scrollHandlers={scrollHandlers}> Hire me </NeonButton>
            <button
              onClick={downloadResume}
              className=" w-[40%] h-[100%] rounded-full py-[1.5em] text-[1.2rem] flex justify-center items-center gap-4 border  max-[768px]:w-[50%] max-[768px]:text-[1.2rem] cursor-pointer"
            >
              <span>My Resume</span>{" "}
              <i className="fa-solid fa-arrow-right mt-[.3em] "></i>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[10em] flex  items-center max-[768px]:w-[100%]  rounded-full  overflow-hidden">
        <img
          src={heroImg}
          className={`w-full h-full object-contain transition-transform duration-2000 ease-in-out ${
            slideImgIn
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          alt="Hero"
        />
      </div>
    </div>
  );
});
