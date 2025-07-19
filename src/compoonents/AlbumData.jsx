import React from "react";
import {useNavigate} from "react-router-dom"

function AlbumData({name,id,image,desc}) {
   const navigate = useNavigate()
  return <div onClick={() => navigate(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
    <img className="rounded" src={image} alt="" />
    <p className="font-bold mt-2">{name}</p>
    <p className="mt-1 text-slate-200 text-sm">{desc}</p>
  </div>
}
export default AlbumData;