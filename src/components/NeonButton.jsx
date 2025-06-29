import React from "react";

export const NeonButton = ({ scrollHandlers ,children}) => {
  return (
    <button
      onClick={ ( e ) => {
        e.preventDefault();
        scrollHandlers.contact();
      } }
      className="relative w-[40%] border flex items-center justify-center py-4 rounded-full cursor-pointer text-white font-bold text-[1.2rem] bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-pink-500/50">
      <div className="opacity-25 blur-md w-[60%] h-[150%] absolute top-[-15%] left-[-5%] rounded-full z-0 bg-gradient-to-r from-cyan-400 to-cyan-100"></div>
      <span className="text-[1.2rem] sticky z-[1]">{children}</span>
      <div className="opacity-25 blur-md w-[60%] h-[150%] absolute top-[-15%] right-[-5%] rounded-full z-0 bg-gradient-to-r from-cyan-300 to-pink-500"></div>
    </button>
  );
};
