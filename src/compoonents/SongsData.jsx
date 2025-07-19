import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";


function SongsData({name,id,image,desc}) {

  const {playWithId} = useContext(PlayerContext)

  return <div onClick={() => playWithId(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
    <img className="rounded" src={image} alt="" />
    <p className="font-bold mt-2">{name}</p>
    <p className="mt-1 text-slate-200 text-sm">{desc}</p>
  </div>
}
export default SongsData;