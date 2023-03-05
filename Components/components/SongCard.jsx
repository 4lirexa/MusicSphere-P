import Link from "next/link";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause,setActiveSong } from "../redux/features/playerSlice";
import Image from "next/image";


const SongCard = ({song,i,activeSong,isPlaying,data}) => {

  const dispatch = useDispatch();

  const handlePauseClick =()=>{
    console.log('Pause Clicked');
    dispatch(playPause(false));
  }

  const handlePlayClick = ()=>{
    console.log('Play Clicked');
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
  }


  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" >
        <div className="reletive w-full h-56 group">
          <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden' }`} >
            <PlayPause song={song} handlePause={handlePauseClick} isPlaying={isPlaying} activeSong={activeSong} handlePlay={handlePlayClick} />
          </div>
          <img  alt="song_img" src={song.images?.coverart} />
        </div>
        <div className="mt-4 flex flex-col" >
          <p className="font-semibold text-lg text-white truncate">
            <Link href={`/song/${song?.key}`} >{song.title}</Link>
          </p>
          <p className="text-sm truncate text-gray-300 mt-1">
            <Link href={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song.subtitle}</Link>
          </p>
        </div>
    </div>
  )
};

export default SongCard;
