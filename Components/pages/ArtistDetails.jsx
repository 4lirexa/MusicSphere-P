import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";


import { useGetArtistDetailsQuery } from "../redux/services/shazam";
import { setActiveSong,playPause } from "../redux/features/playerSlice";

const ArtistDetails = ({artistId}) => {

    const { activeSong, isPlaying } = useSelector(state=>state.player);
    const {data : artistData , isFetching: isFetchingArtistDetails , error} = useGetArtistDetailsQuery(artistId);

  
    
    if(isFetchingArtistDetails) return <Loader title={'Loading Artist Details...'} />
    if(error ) return <Error />

    const CustomData = Object.values(artistData?.resources?.songs);
    const dispatch = useDispatch();
    const handlePauseClick =()=>{
      console.log('Pause Clicked');
      dispatch(playPause(false));
    }
  
    const handlePlayClick = (song,i)=>{
      console.log('Play Clicked');
      dispatch(setActiveSong({song,data:CustomData,i}));
      dispatch(playPause(true));
    }


    

    

    


    return (
        <div className="flex flex-col" >
            <DetailsHeader artistId={artistId} artistData={artistData} />

            <RelatedSongs data={Object.values(artistData?.resources?.songs)} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} FromArtist={true}/>
        </div>
    )
};

export default ArtistDetails;
