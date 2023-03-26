import preloader from "../../../image/Spinner-2.gif";
import React from "react";


let Preloader = (props) => {
    return <div style={{backgroundColor: 'red'}}>
        <img src={preloader} />
    </div>
}

export default Preloader;

