import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.container}>
      <Link to="/home">
        <button>ENTRAR</button>
      </Link>
      <div className={style.logo}>
        <img src="" alt="Page logo" />
      </div>
    </div>
  );
}
