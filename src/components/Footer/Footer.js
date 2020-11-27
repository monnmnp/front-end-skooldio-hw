import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import downloadIcon from '../../assets/group-2.svg'; 


const Footer = (props) => {
  return (
    <div className="footer-container" >
        <div className="footer-content">
            <FontAwesomeIcon icon={faUser} className="user"/>
            <div>{props.user}</div>
            <div className="content-copy"> คนที่สนใจ</div>
        </div>
        <img src={downloadIcon} className="Group-2"></img>
    </div>
  );
};

export default Footer;
