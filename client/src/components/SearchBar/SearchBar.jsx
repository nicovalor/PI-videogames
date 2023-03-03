import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchBar(value);
    dispatch(getVideogamesByName(searchBar));
  };

  const handleClick = () => {
    console.log(searchBar);

    dispatch(getVideogamesByName(searchBar));
    setSearchBar("");
  };
  return (
    <div className={style.container}>
      <input
        autoComplete="off"
        className={style.bar}
        type="text"
        onChange={(event) => handleChange(event)}
        name="SearchBar"
      ></input>
      <button className={style.button} onClick={() => handleClick()}>
        BUSCAR
      </button>
    </div>
  );
};

export default SearchBar;
