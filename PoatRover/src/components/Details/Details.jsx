import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
export default function Details(props) {
  const { icon, path, color, heading, paragraph } = props;
  return (
    <div className="details">
      <div className="icon">{icon}</div>
      <div>
        <Link to={path}>
          <h1 className="details_heading" style={{ color: color }}>
            {heading}
          </h1>
          <p className="details_paragraph" style={{ color: color }}>
            {paragraph}
          </p>
        </Link>
      </div>
    </div>
  );
}
