import { useContext } from "react";
import SideBar from "./compoonents/SideBar";
import Player from "./compoonents/Player";
import Display from "./compoonents/Display";
import { PlayerContext } from "./context/PlayerContext";

function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return <div className="bg-black h-screen p-2 w-full">
    <div className="h-[90%] flex">
    <SideBar/>
    <Display/>
    </div>
    <div className="h-[10%]">
      <Player/>
      <audio ref={audioRef} preload="auto" src={track.file}></audio>
    </div>
  </div>
}
export default App;