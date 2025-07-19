import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets/assets";
import { PlayerContext } from "../context/PlayerContext";

function Player() {

  const {seekBg,seekBar,playStatus,play,pause,track,time,prev,next,seekSong} = useContext(PlayerContext)

  return <div className="flex items-center justify-between bg-black p-4 ">
    <div className="flex gap-4 items-center ">
    <img className="w-12" src={track.image} alt="" />
    <div className="text-white">
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
    </div>
    </div>
    <div className="flex flex-col gap-1 items-center">
        <div className="flex gap-4 ">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
          <img onClick={prev} className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
          {playStatus ? <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="" /> : <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="" />}
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
        </div>
        <div className="flex gap-4 items-center text-white">
        <p>{time.currentTime.minute} : {time.currentTime.second}</p>
        <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
        <hr ref={seekBar}  className="h-1 bg-green-800 rounded-full  cursor-pointer border-none-0 w-0" />
        </div>
        <p>{time.totalTime.minute} : {time.totalTime.second}</p>
        </div>
    </div>
    <div className="flex gap-2 items-center opacity-75">
   <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
   <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
   <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
   <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
   <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
   <div className="w-20 bg-slate-50 rounded h-1"></div>
   <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="" />
   <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
    </div>
  </div>
}
export default Player;