import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { Header } from "../../components/header";
import "./styles.css";
import ReactLoading from 'react-loading';

export const Albums  = () => {

  interface Item {
    album: Album;
    
  }

  interface Album {
    id: number;
    title: string;
    cover_big: any;
  }
    const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    

    useEffect(() => {
      console.log('we are here right now')
      // Call the function when the component mounts
      const fetchData = async() => {
        console.log("whaaaaaaatttt")
        const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=oliver%20mtukudzi';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e6a1fa6563msh824d08510a0316dp1a8e00jsn034c951916ee',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
            }
        
    
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            //console.log(result)
            const uniqueData = removeDuplicateIds(result.data);
            setData(uniqueData);
            console.log(uniqueData)
            setIsLoading(false);
            //console.log("lets go")
            //console.log(result.data);
            
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
      } 
  
      fetchData();
    }, []);

    

    const removeDuplicateIds = (apiData: any[]) => {
      const uniqueIds = new Set();
      return apiData.filter(item => {
        if (!uniqueIds.has(item.album.id)) {
          //console.log(item.album.id);
          uniqueIds.add(item.album.id);
          return true;
        }
        return false;
      });
    };
     
  
    if (isLoading) {
      return <div className="load-albums">
        <ReactLoading type="bars" color="white" height={100} width={100} />
      </div>;
    }
    return (
      <div>
        <Header home={false} about={false} albums={true}/>
        {/* <div className="albums-cover"> 
          
        

        </div> */}
        <ul>
        {data.map((item) => (
            <li key={item.album.id}>
              <div className="album-card">
                <img src={item.album.cover_big}/>
                <div className="album-card-content">
                  <h3>{item.album.title}</h3>
                </div>
              </div>
            </li>
            // Customize the above line based on your data structure
          ))}
        </ul>
      </div>
      

    )
}