import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import portrait from './/tuku.jpg'
import "./styles.css";
import { Header } from "../../components/header";

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
      <div>
        <Header home={true} projects={false} contact={false}/>
      <div className="about">
        <img src={portrait} style={{height: '100vh'}}/>
        <p style={{color: 'blue'}}>bhuu</p>
      </div>
      </div>
      

    )
}