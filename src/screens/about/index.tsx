import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import portrait from './/tuku.jpg'
import spotify from './/spotify.png';
import youtube from './/yt.png';
import ytmusic from './ytmusic.png';
import apple from './/apple.png';
import "./styles.css";
import { Header } from "../../components/header";
import Spacer from "react-styled-spacer";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';


export const About  = () => {
    const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
      <div className="about-main">
         <Header home={false} about={true} albums={false}/>
      <div className="about-Tuku">
        {/* <img src={portrait} style={{height: '100vh'}}/> */}
        <div>
          {/* <h2 style={{color: 'aliceblue'}}>About Oliver Mtukudzi</h2> */}
          <div className="cover-tuku">
            <Fade cascade damping={0.05}>
            <h1 style={{color: 'aliceblue'}}>ABOUT OLIVER MTUKUDZI</h1>
            </Fade>
          </div>
          
        <Fade cascade damping={0.05}>
          <p style={{color: 'aliceblue'}}>Mtukudzi's journey in music began at an early age, and he quickly mastered various instruments, including the guitar, which would become his signature instrument. His exceptional talent and dedication to his craft soon gained recognition, and by the 1970s, he had established himself as a prominent artist in the Zimbabwean music scene.</p>
          <p style={{color: 'aliceblue'}}>Beyond the realm of music, Mtukudzi became a cultural icon and a source of inspiration for many Zimbabweans. His music, characterized by profound lyrics and a fusion of traditional rhythms with modern influences, resonated deeply with the people. He addressed social issues, love, and the complexities of life in Zimbabwe, earning him a special place in the hearts of his fellow countrymen. </p>
          <p style={{color: 'aliceblue'}}>Oliver Mtukudzi's significance goes beyond his musical prowess; he became a unifying force in Zimbabwe, fostering a sense of national identity and pride through his compositions. His songs often carried messages of hope, resilience, and the celebration of cultural heritage.</p>
          <p style={{color: 'aliceblue'}}>Internationally, Mtukudzi transcended the boundaries of Zimbabwean music, captivating audiences worldwide with his unique sound. He collaborated with artists from diverse backgrounds, contributing to the global appreciation of African music. His influence extended beyond the music industry, making him a respected ambassador for Zimbabwean culture on the international stage.</p>
          <p style={{color: 'aliceblue'}}>Oliver Mtukudzi's legacy endures not only through his extensive discography but also through the countless lives he touched with his music. He passed away on January 23, 2019, leaving behind a profound impact on the world of music and a lasting imprint on the hearts of Zimbabweans, who continue to celebrate his contributions to their cultural heritage.</p>
          </Fade>
          <Fade cascade damping={0.5}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://music.apple.com/us/artist/oliver-mtukudzi/485646791" target="_blank"><img src={apple} style={{width: '40px'}} className="apple"/></a>
            <Spacer w={20}/>
            <a href="https://open.spotify.com/artist/0HC2dfJHpORLT21AxEiTXJ" target="_blank"><img src={spotify} style={{width: '40px'}} className="spotify"/></a>
            <Spacer w={20}/>
            <a href="https://music.youtube.com/channel/UCVoeijjk8ewIn3CZag6MCiQ" target="_blank"><img src={ytmusic} style={{width: '40px'}} className="ytmusic"/></a>
            <Spacer w={20}/>
            <a href="https://www.youtube.com/channel/UC-K797_lLK1QjhkXsWzMXNQ" target="_blank"><img src={youtube} style={{width: '40px'}} className="youtube"/></a>
          </div>
         </Fade> 
        
        </div>
        
        
      </div>
      </div>
      

    )
}