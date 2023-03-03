import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className={style.container}>
      <Link className={style.button} to="/home">
        <div>HOME</div>
      </Link>
      <Link className={style.button} to="/form">
        <div>CREATE NEW GAME</div>
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
