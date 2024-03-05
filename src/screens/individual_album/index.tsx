import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';
import "./styles.css";
import { Header } from '../../components/header';

export const IndividualAlbums  = () => {
    const { param } = useParams();
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    let cover_big;
    

    useEffect(() => {
            const fetchTracks = async() => {
                const base = 'https://deezerdevs-deezer.p.rapidapi.com/album/';
                const routee = param;
                const url = `${base}${routee}`;
        
        
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e6a1fa6563msh824d08510a0316dp1a8e00jsn034c951916ee',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
            }
        
            fetchTracks();
        
        return () => {
            // Your cleanup code (if needed)
            console.log('Screen will unmount or lose focus');
            setData([]); // Reset your state to the initial value
            setIsLoading(true);
          };
        
      }, [param]);

      if (isLoading) {
        return <div className="load-albums">
          <ReactLoading type="bars" color="white" height={100} width={100} />
        </div>;
      }

    return (
        <div className='individual-album'>
            <Header home={false} about={false} albums={true}/>
            <div className='individual-cover'>
                <img src={data.cover_big} style={{width: '300px' }}/>
                <h1>{data.title}</h1>
            </div>

        </div>
    )
}