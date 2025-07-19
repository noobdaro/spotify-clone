import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets/assets";
import NavBar from "./NavBar";
import { PlayerContext } from "../context/PlayerContext";

function AlbumsDetailPage() {
    const {id} = useParams()
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext)
  return <div >
    <NavBar/>
    <div className={`mt-10 gap-8 flex items-center `} >
    
        <img className="w-48 rounded" src={albumData.image} alt="" />
    <div className="flex flex-col my-5">
        <p>Album</p>
        <h1 className="text-6xl font-bold">{albumData.name}</h1>
        <p className="mt-5">{albumData.desc}</p>
        <div className="flex gap-2 my-5">
            <p>2013</p>
            <p>12 songs,</p>
            <p>54 min 41 sec</p>
        </div>
    </div>
    </div>
    <div className="grid grid-cols-2 mt-10 mb-4 pl-2 text-gray-400">
        <p className="mr-4"># Title</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
    </div>
        <hr className="text-slate-500" />
        <div>
            {songsData.map( (items,index) => { return (<>
            <div onClick={() => playWithId(items.id)} className="grid grid-cols-2 my-4 pl-2 text-slate-300 hover:bg-[#ffffff26] rounded">
                <div className="flex items-center gap-4">
                <p>{index+1}</p>
                <div className="flex flex-col">
                <h1 className="text-white font-semibold">{items.name}</h1>
                <p className="text-gray-400">{items.desc}</p>
                </div>
                </div>
                <p className="m-auto text-gray-400">{items.duration}</p>
            </div>
            </>
            )
            } )}
        </div>
  </div>
}
export default AlbumsDetailPage;