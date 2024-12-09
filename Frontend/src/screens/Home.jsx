
import React from 'react';
import Herosection from '../components/Herosection.jsx'
import Latestproduct from "../components/Latestproduct.jsx"
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import usePreviousPath from '../components/usePreviousPath.jsx';
const Home = () => {
  const prevLocation = usePreviousPath();
  return (
    <>
      <div className="h-auto">
        <Herosection />
        <Latestproduct />
        <h1 className="text-center text-lg w-full pb-6 pt-4 text-slate-600 ">
          You've viewed 10 out of 10
        </h1>
        <div className="mx-auto w-8/12 h-px bg-black border rounded-xl"></div>
        <button className="font-bold pl-2 flex items-center mb-5 mt-5 py-[2px] mx-auto border-b-[1px] border-slate-700 w-fit">
          Load More
          <IoIosArrowRoundDown className="text-3xl text-slate-800 pl-1" />
        </button>
        <div tabIndex={0} className="collapse collapse-plus bg-[#e6e6e6] rounded-none duration-300 mb-7">
          <input type="checkbox" className="peer" />
          <div className="collapse-title font-bold">Get in touch</div>
          <div className="collapse-content">
            <div className="flex gap-3 opacity-60">
              <FaFacebookF className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaYoutube className="text-xl" />
            </div>
          </div>
        </div>
        <div className="text-sm px-10 text-center text-slate-500 line-clamp-2 pb-2">
          Copyright © 2024 <span className="text-sky-500">Meewan</span> all rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Home;