
import { NavLink, Outlet, Link } from "react-router-dom";
import "./styles.css";


import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";




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
    return size.width >= 900 ? (
    <>
      <nav id="main">
      {props.home ? (
          <>
            <NavLink to="/"><h3 style= {headingStyle} className="home-active">HOME</h3></NavLink>
            <NavLink to="/projects"><h3 style= {headingStyle} className="projects">PROJECTS</h3></NavLink>
            <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
        </>
            ) : props.projects ? (
              <>
            <NavLink to="/"><h3 style= {headingStyle} className="home">HOME</h3></NavLink>
            <NavLink to="/projects"><h3 style= {headingStyle} className="projects-active">PROJECTS</h3></NavLink>
            <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
        </>
            ) : props.contact ? (
              <>
              <NavLink to="/"><h3 style= {headingStyle} className="home">HOME</h3></NavLink>
              <NavLink to="/projects"><h3 style= {headingStyle} className="projects">PROJECTS</h3></NavLink>
              <NavLink to="/contact"><h3 className="contact-active">CONTACT</h3></NavLink>
          </>
            ) : (
              <>
              <NavLink to="/"><h3 style= {headingStyle} className="home">HOME</h3></NavLink>
              <NavLink to="/projects"><h3 style= {headingStyle} className="projects">PROJECTS</h3></NavLink>
              <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
              </>
            )};
      </nav>

      <Outlet />
    </>
    ) : (

      // <Button className="menu" onClick={showDrawer}>
      //       <img className="menu-img" src={menu}  alt="menu" />
      // </Button>

<>
<nav id="main">
{props.home ? (
 <div>
   <>
      <NavLink to="/"><h3 className="home-active">HOME</h3></NavLink>
      <NavLink to="/projects"><h3 className="projects">PROJECTS</h3></NavLink>
      <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
  </>
 </div>
      ) : props.projects ? (
      <div>
          <>
      <NavLink to="/"><h3 className="home">HOME</h3></NavLink>
      <NavLink to="/projects"><h3 className="projects-active">PROJECTS</h3></NavLink>
      <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
  </>
      </div>
      ) : props.contact ? (
       <div>
         <>
        <NavLink to="/"><h3 className="home">HOME</h3></NavLink>
        <NavLink to="/projects"><h3 className="projects">PROJECTS</h3></NavLink>
        <NavLink to="/contact"><h3 className="contact-active">CONTACT</h3></NavLink>
    </>
       </div>
      ) : (
        <div>
          <>
        <NavLink to="/"><h3 className="home">HOME</h3></NavLink>
        <NavLink to="/projects"><h3 className="projects">PROJECTS</h3></NavLink>
        <NavLink to="/contact"><h3 className="contact">CONTACT</h3></NavLink>
        </>
        </div>
      )};
</nav>

<Outlet />
</>
      

    )
}