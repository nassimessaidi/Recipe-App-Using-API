import React from "react";
import "./styles.css";

const Recipe = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div className="mycard">
        <h5>{props.title}</h5>
        <p>Calories: {props.calories.toFixed(2)}</p>
        <div className="img-frame im1">
          <img src={props.image} alt="" />
        </div>
      </div>
    </a>
  );
};

export default Recipe;
