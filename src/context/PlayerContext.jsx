import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets/assets";

export const PlayerContext = createContext()


function PlayerContextProvider(props) {

    const audioRef = useRef(null)
    const seekBg = useRef()
    const seekBar = useRef()

    const [track,setTrack] = useState(songsData[0])
    const [playStatus,setPlayStatus] = useState(false)
    const [time,setTime] = useState({
        currentTime:{
            minute:0,
            second:0,
        },
        totalTime:{
            minute:0,
            second:0,
        }
    })

    useEffect(() => {
    setTimeout(() => {
        audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/ audioRef.current.duration*100)) + "%"
            setTime({
        currentTime:{
            minute:Math.floor(audioRef.current.currentTime / 60),
            second:Math.floor(audioRef.current.currentTime % 60),
        },
        totalTime:{
            minute:Math.floor(audioRef.current.duration / 60),
            second:Math.floor(audioRef.current.duration % 60),
        }})
        }
    }, 1000);
    },[audioRef])

     const playWithId =  (id) => {
  const selectedTrack = songsData[id];
  setTrack(selectedTrack); 

  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.src = selectedTrack.file; 
    audioRef.current.load();                   
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => setPlayStatus(true))
        .catch((err) => console.error("Play error:", err));
    }
  }
};
     
    const play = () =>{
     audioRef.current.play();
     setPlayStatus(true)
    }
    const pause = () =>{
     audioRef.current.pause();
     setPlayStatus(false)
    }
    const prev = () => {
        if (track.id>0){
            setTrack(songsData[track.id - 1]);
            audioRef.current.play();
            setPlayStatus(true);
        }
        }
    const next = () => {
        if (track.id<songsData.length-1){
            setTrack(songsData[track.id + 1]);
            audioRef.current.play();
            setPlayStatus(true);
        }
        }
        const seekSong = (e) => {
         audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)
        }
   const value = {
   audioRef,
   seekBg,
   seekBar,
   track,setTrack,
   playStatus,setPlayStatus,
   time,setTime,
   play,pause,
   playWithId,
   prev,next,
   seekSong
   }


  return <PlayerContext.Provider value={value}>
    {props.children}
  </PlayerContext.Provider>
}
export default PlayerContextProvider;


const login = (inputComponent) => {
    return (porps) => {
        console.log("props");
        return <inputComponent {...props}></inputComponent>
    }
}