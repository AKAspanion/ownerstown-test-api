import React from "react";
import "./Button.css";

function Button({
  style,
  icon,
  value,
  center,
  binding,
  className,
  valueClass,
}) {
  return (
    <div
      style={style}
      className={`keypad__key ${
        center ? "keypad__key--center" : ""
      } ${className}`}
      tabIndex="0"
    >
      {icon}
      {value && (
        <div className={`keypad__key-value ${valueClass || ""}`}>{value}</div>
      )}
      {binding && <div className="keypad__key-binding">{binding}</div>}
      {center && <div className="keypad__key-large"></div>}
    </div>
  );
}

export default Button;
