import { SongBar } from ".";


const RelatedSongs = ({data,isPlaying,activeSong,handlePauseClick,handlePlayClick,artistId,FromArtist=false}) => (
  <div className="flex flex-col" >
    <h1 className="font-bold text-3xl text-white" >Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col" >
      {FromArtist == false ? data?.tracks?.map((song,i)=>(
        <SongBar key={`${song.key}-${i}-${artistId}`} song={song} i={i} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}  />
      )) :
      data?.map((song,i)=>(
        <SongBar key={`${song.key}-A-${i}-${artistId}`} song={song} i={i} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick}  />
      ))
      }
    </div>
  </div>
);

export default RelatedSongs;
