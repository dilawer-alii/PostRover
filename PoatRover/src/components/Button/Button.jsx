import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";


export default function Button(props) {
  const { color, background, path, type, icon, text } = props;
  const buttonStyles = {
    color: color,
    backgroundColor: background,
  };
  const navigate = useNavigate();
const handleClick = (path)=>{
navigate(path)
}
  return (
      <button onClick={()=>handleClick(path)} style={buttonStyles} className="btn buttonstyle" type={type}>
        <span>{icon} </span>
        <p className="btn_text">{text}</p>
      </button>
  );
}
