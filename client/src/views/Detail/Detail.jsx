import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const [videogame, setVideogame] = useState({});
  const id = useLocation().pathname.split("/").at(-1);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((response) => response.data)
      .then((result) => setVideogame(result))
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h1>{videogame?.name}</h1>
        <span className={style.id}>ID: {videogame?.id}</span>
        <img src={videogame?.image} alt="Foto del juego" />
        <ul>
          {videogame.platforms &&
            videogame.platforms.map((platform) => <li>{platform}</li>)}
        </ul>
        <p>
          {videogame.description &&
            videogame?.description.split(/<[^>]+>/).join("")}
        </p>
        <span>Release date: {videogame?.launchDate}</span>
        <h4>Rating: {videogame?.rating}</h4>
        <ul>
          {videogame.genre && videogame?.genre.map((genre) => <li>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
