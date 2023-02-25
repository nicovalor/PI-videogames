import SearchBar from "../../components/SearchBar/SearchBar";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.container}>
      <SearchBar />
    </div>
  );
}
