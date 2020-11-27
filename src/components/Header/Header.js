import React from "react";
import "./Header.css";
import logo from '../../assets/engi.svg'; 

const Header = (props) => {
  return (
    <div className="header-container" >
        <div className="logo">
            <img clasName="engi" src={logo} alt="Logo" />;
        </div>
        <div className="content">
            <div className="header1">{props.faculty.name}</div>
            <div className="header2">{props.faculty.department}</div>
            <div className="header3">{props.faculty.university}</div>
        </div>
    </div>
  );
};

export default Header;
