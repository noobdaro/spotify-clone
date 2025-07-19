import React from "react";
import {assets} from '../assets/assets/assets'
import { useNavigate } from "react-router-dom";




function SideBar() {

   const navigate = useNavigate()

    return <>
        <div className="w-[25%] p-2 text-white h-full flex flex-col">
            <div className="h-[15%] bg-[#121212] font-bold flex flex-col justify-around rounded  ">
                <div onClick={() => navigate("/")} className="flex items-center pl-8  gap-3 cursor-pointer">
                    <img  className="w-6" src={assets.home_icon} alt="home" />
                    <p >Home</p>
                </div>
                <div className="flex items-center pl-8  py-2 gap-3 cursor-pointer">
                    <img className="w-6" src={assets.search_icon} alt="search" />
                    <p>Search</p>
                </div>
            </div>
        <div className="bg-[#121212] h-[85%] font-bold mt-2 rounded ">
            <div className="flex justify-between items-center p-4">
            <div className="flex items-center  gap-2">
            <img className="w-10" src={assets.stack_icon} alt="stack" />
            <p>Your Library</p>
            </div>
            <div className="flex gap-3 items-center">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="arrow_right" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="plus_icon" />
            </div>
            </div>
        <div className="bg-[#242424] p-4 rounded m-2 font-semibold flex flex-col items-start gap-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we'll help you</p>
          <button className="rounded-full text-black bg-white py-1.5 px-4 mt-4 text-[15px] cursor-pointer">Create Playlist</button>
        </div>
        <div className="bg-[#242424] p-4 rounded m-2 font-semibold flex flex-col items-start mt-4 gap-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">we'll keep you updated on new episodes</p>
          <button className="rounded-full text-black bg-white py-1.5 px-4 mt-4 text-[15px] cursor-pointer">Browse Podcasts</button>
        </div>
        </div >
        </div>
    </>
}
export default SideBar;