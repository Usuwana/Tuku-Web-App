
import { NavLink, Outlet, Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import Spacer from "react-styled-spacer";
import tuku from './/tuku.jpg';




const headingStyle = {
    
    marginRight: 50,
    
    // Add more styles as needed
  };

  type NavProps = {
    home: boolean
    about: boolean
    albums: boolean
}

export const Header  = (props: NavProps) => {
    const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return size.width >= 900 ?(
      <>
      <nav className="header">
        <img src={tuku} style={{minHeight: '25px', maxHeight: '50px' }}/>
        <Spacer w={20}/>
        {props.home ? (
        <>
            <NavLink to="/"><h4 className="home-active">HOME</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/about"><h4 className="about">ABOUT</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/albums"><h4 className="albums">ALBUMS</h4></NavLink>
        </>
        ) : props.about ? (
          <>
            <NavLink to="/"><h4 className="home">HOME</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/about"><h4 className="about-active">ABOUT</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/albums"><h4 className="albums">ALBUMS</h4></NavLink>
        </>
        ) : props.albums ?
        (
          <>
            <NavLink to="/"><h4 className="home">HOME</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/about"><h4 className="about">ABOUT</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/albums"><h4 className="albums-active">ALBUMS</h4></NavLink>
        </>
        ) : (
          <>
            <NavLink to="/"><h4 className="home">HOME</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/about"><h4 className="about">ABOUT</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/albums"><h4 className="albums">ALBUMS</h4></NavLink>
        </>
        )
        } 
      </nav>
      
      <Outlet />
      </>
    ) : (
      <>
      <nav className="header">
        <img src={tuku} style={{minHeight: '25px', maxHeight: '50px' }}/>
        <Spacer w={20}/>
        <>
            <NavLink to="/"><h4 className="home-active">HOME</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/about"><h4 className="about">ABOUT</h4></NavLink>
            <Spacer w={20}/>
            <NavLink to="/albums"><h4 className="albums">ALBUMS</h4></NavLink>
        </>
        
      </nav>
      <Outlet />
</>

    )
}