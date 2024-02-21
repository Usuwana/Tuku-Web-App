import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";
import { Header } from "../../components/header";

export const Albums  = () => {
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
        <Header home={false} about={false} albums={true}/>
      </div>
      

    )
}