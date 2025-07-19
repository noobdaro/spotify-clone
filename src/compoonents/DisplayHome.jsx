import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets/assets";
import AlbumData from "./AlbumData";
import SongsData from "./SongsData";
import {useNavigate} from "react-router-dom"

function DisplayHome() {

  const navigate = useNavigate()

  return <div>
    <NavBar/>
    <div className="font-bold my-5 text-2xl">
      <h1>Featured Charts</h1>
    <div className="flex my-5 overflow-auto">
      {albumsData.map( (items) => {return (<AlbumData key={items.id} {...items}/>)})}
    </div>
    <h1>Today's biggest hits</h1>
    <div className="flex overflow-auto my-5">
    {songsData.map((items) => { return (<SongsData key={items.id} {...items}/>)})}
    </div>
    </div>
  </div>
}
export default DisplayHome;