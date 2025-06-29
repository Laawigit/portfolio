import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export const Tools = () => {
  return (
      <ul className='relative flex items-center justify-around gap-[2em] text-gray-300 text-[1rem]  w-[100%] mt-[2em] border-t border-b border-gray-600 py-[1em] max-[768px]:flex-wrap max-[768px]:gap-[1em] max-[768px]:justify-center'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT</li>
        <li>TAILWINDCSS</li>
        <li>GIT</li>
        <li>GITHUB</li>
        <li>.NET</li>
        <li>SQL</li>
      </ul>
  );
}
