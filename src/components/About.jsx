import { forwardRef } from "react";

export const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative flex w-[100%]  max-[768px]:justify-center min-[768px]:pl-30 gap-[2em] mt-[5em] mb-50"
    >
      <div className="flex flex-col  gap-[2em] w-[80%] max-[768px]:w-[80%] ">
        <h1 className="section-title max-[768px]:text-center">about me</h1>
        <div className="flex flex-col gap-[1em] max-[768px]:items-center">
          <p className="text-white w-[100%] max-[768px]:text-center">
            I’m Abdulhakim, a creative web developer with a strong academic record
            and a passion for building smart, user-friendly projects. I’ve
            developed several side projects that showcase both my technical
            skills and innovative thinking. With clear communication and a
            problem-solving mindset, I bring ideas to life through code. Always
            learning, always building — that’s my motto.
          </p>
          <div className="flex w-[100%] items-center justify-start gap-[20%] max-[768px]:gap-[5%]">
            <div className="max-[768px]:ml-[3em]">
              <h1 className="text-gray-300 text-[1.2rem] max-[768px]:text-[1rem] mb-[.5em]">
                Education
              </h1>
              <div className="flex items-center gap-[1em] text-white">
                <i className="fa-light fa-circle text-[#FF3C00]"></i>
                <p>Bachelor in computer Science</p>
              </div>
            </div>
            {/* --------------- */}
            <div>
              <h1 className="text-gray-300 text-[1.2rem] max-[768px]:text-[1rem] mb-[.5em]">
                Skills
              </h1>
              <div className="flex items-center gap-[1em] text-white">
                <i className="fa-light fa-circle text-[#FF3C00]"></i>
                <p>built more then 5 projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})
