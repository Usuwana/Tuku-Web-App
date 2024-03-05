import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { Header } from "../../components/header";
import "./styles.css";
import ReactLoading from 'react-loading';
import { NavLink, Outlet, Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const navigateToNewPage = (param: any) => {
      // Redirect to the Details page with the specified parameter
      navigate(`/details/${param}`);
    };
    
    

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

    const handleItemClick = () => {
      // Handle click event here
      
      //navigation.navigate('Tracklist', {params: item});
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
        <ul className="album-card-list">
        {data.map((item) => (
            <li key={item.album.id}>
              <div className="album-card" onClick={() => navigateToNewPage(item.album.id)} style={{cursor: "pointer"}}>
                <img src={item.album.cover_big}/>
                <div className="album-card-content">
                  <h3 style={{color: "black", textDecoration: "none"}}>{item.album.title}</h3>
                </div>
              </div>
            </li>
            // Customize the above line based on your data structure
          ))}
        </ul>                                                                                                        
      </div>
      

    )
}