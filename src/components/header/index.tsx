
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
    projects: boolean
    contact: boolean
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
    return (
      <div className="header">
        <img src={tuku} style={{minHeight: '25px', maxHeight: '50px' }}/>
        <Spacer w={20}/>
        <h5>HOME</h5>
        <Spacer w={20}/>
        <h5>ABOUT</h5>
        <Spacer w={20}/>
        <h5>ALBUMS</h5>
      </div>
      

    )
}