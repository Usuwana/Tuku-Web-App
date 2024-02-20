import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

export const Home  = () => {
    const size: Size = useWindowSize();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
      <div className="home">
        <Header home={true} projects={false} contact={false}/>
        <Main/>
      </div>
      

    )
}