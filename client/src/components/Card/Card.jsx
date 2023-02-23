import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.container}>
      <h3>{props.name}</h3>
    </div>
  );
};

export default Card;
