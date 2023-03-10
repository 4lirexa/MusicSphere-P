import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


import { Loader,Error,SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazam';


import React from 'react';

const AroundYou = () => {
    const [country,setCountry] = useState('');
    const [loading,setLoading] = useState(true);
    const {activeSong,isPlaying} = useSelector((state) => state.player);


    

    useEffect(()=>{
            axios.get('https://ipwho.is/').then(function (response) {
                setCountry(response?.data?.country_code);
            }).catch(function (error) {
                console.error(error);
            }).finally(()=>setLoading(false));
    },[country])
    
    const {data, isFetching , error} = useGetSongsByCountryQuery(country);

    if(isFetching && loading) return <Loader title="Loading songs around you"/>
    if(error && country) return <Error/>

    return (
        <div className='felx flex-col' >
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10' >Around You <span className='font-black'>{country}</span></h2>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8' >
                {data?.tracks?.map((song,i)=>(
                    <SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} data={data} i={i} />
                ))}
            </div>
        </div>
    )
};

export default AroundYou;
