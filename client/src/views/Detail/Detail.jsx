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
      <h1>{videogame?.name}</h1>
      <span>{videogame?.id}</span>
      <img src={videogame?.image} alt="Foto del juego" />
      {/* <ul>
        {videogame?.platforms.map((platform) => (
          <li>{platform.name}</li>
        ))}
      </ul> */}
      <p>{videogame?.description}</p>
      <span>{videogame?.launchDate}</span>
      <h4>{videogame?.rating}</h4>
      {/* <ul>
        {videogame?.genres.map((genre) => (
          <li>{genre.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Detail;
