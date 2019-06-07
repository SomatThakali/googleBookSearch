import React from "react";
import "./style.css";
export const Input = props => {
  return (
    <div className="form-group">
      <input className="form-control " {...props} />
    </div>
  );
};

export const FormBtn = props => {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn button">
      {props.children}
    </button>
  );
};
