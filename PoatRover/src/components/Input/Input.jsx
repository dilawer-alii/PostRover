import React from "react";
import "../style.css";
export default function Input(props) {
  const { lable, placeholder, name, id, value, onChange, onBlur,type } = props;
  return (
    <>
      <div className="lable-input">
        <label className="lable">{lable}</label>
        <div className="input">
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      </div>
    </>
  );
}
