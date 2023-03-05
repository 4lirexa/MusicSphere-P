import Link from "next/link";

const ArtistCard = ({track}) => {
  
  return (
    <Link href={track.artists ? `/artists/${track?.artists[0]?.adamid}` : '/top-artists'} >
      <div className="flex flex-col w-250 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer" >
        <img src={track?.images?.coverart} alt="artist" className="w-full h-56 rounded-lg" />
        <p className="mt-4 font-semibold text-lg text-white truncate" >{track?.subtitle}</p>
      </div>
    </Link>
  )

};

export default ArtistCard;
