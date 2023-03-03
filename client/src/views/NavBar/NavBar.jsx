import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

export default function NavBar() {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <Link className={style.button} to="/home">
        <div>HOME</div>
      </Link>
      <Link className={style.button} to="/form">
        <div>CREAR JUEGO</div>
      </Link>

      {location.pathname === "/home" ? (
        <div>
          <SearchBar />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
