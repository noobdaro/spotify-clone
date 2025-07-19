import React from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const navigate = useNavigate()
  return <>
  <div className="w-full font-semibold flex  gap-4 items-center justify-between">
    <div className="flex items-center gap-2">
     <img onClick={()=> navigate(-1)} className="w-6 cursor-pointer" src={assets.arrow_left} alt="" />
     <img onClick={()=> navigate(1)} className="w-6 cursor-pointer" src={assets.arrow_right} alt="" />
    </div>
    <div className="flex gap-4">
    <button className="bg-white rounded-full py-1 px-4 text-black cursor-pointer ">Explore Premium</button>
    <button className="bg-black rounded-full py-1 px-3 cursor-pointer">Install app</button>
    <p className="rounded-full w-7 h-7 flex items-center justify-center bg-violet-400 text-black cursor-pointer">H</p>
    </div>
  </div>
  <div className="flex gap-2 mt-4 items-center">
    <p className="bg-white text-black py-1 px-4 rounded-full  cursor-pointer">All</p>
    <p className="bg-black py-1 px-4 rounded-full cursor-pointer">Music</p>
    <p className="bg-black py-1 px-4 rounded-full cursor-pointer">Podcasts</p>
  </div>
  </> 
}
export default NavBar;