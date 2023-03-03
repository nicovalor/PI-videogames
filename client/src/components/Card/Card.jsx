import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link className={style.link} to={`/videogame/${props.id}`}>
      <div className={style.container}>
        <h3 className={style.title}>{props.name}</h3>
        <img className={style.image} src={props.image} alt="" />
        <div className={style.genres}>
          {props.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
