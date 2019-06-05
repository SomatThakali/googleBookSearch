import React from "react";
import { Input, FormBtn } from "../Form";
import "./style.css";
import logo from "../../google.png";
const Jumbotron = () => {
  return (
    <div
      style={{
        height: 400,
        clear: "both",
        textAlign: "center",
        background: "white",
        borderTop: "1px solid #EBEBEB",
        borderBottom: "1px solid #EBEBEB",
        boxShadow: "2px 2px #EBEBEB",
        color: "#777",
        fontFamily: "arial,sans-serif",
        width: "100%"
      }}
      className="jumbotron"
    >
      <img className="img img-fluid " src={logo} />

      <h6 className="mt-4 mb-5 pb-4">Search and save Books of the internet</h6>
      <form>
        <Input name="title" placeholder="Books" />

        <FormBtn>Search</FormBtn>
      </form>
    </div>
  );
};

export default Jumbotron;
