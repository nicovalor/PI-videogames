import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Videogames</h1>
        <h3 className={style.subtitle}>Proyecto individual - Nicolás Valor</h3>
      </div>
      <Link to="/home">
        <button className={style.button}>ENTRAR</button>
      </Link>
    </div>
  );
}
