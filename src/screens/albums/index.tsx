import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Size } from "../../types";

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
      <div className="header">
        <h5>Home</h5>
        <h5>About</h5>
        <h5>Albums</h5>
      </div>
      

    )
}