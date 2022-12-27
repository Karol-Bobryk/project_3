import React from "react";
import "./DarkButtonStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DarkButton(props){
    return(<button width="300px" onClick={props.clickfunc}><FontAwesomeIcon  icon={props.icstate}/></button>)
}
export default DarkButton;