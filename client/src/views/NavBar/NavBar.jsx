import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={style.container}>
      <Link to="/home">
        <button>HOME</button>
      </Link>
      <Link to="/form">
        <button>CREAR JUEGO</button>
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
