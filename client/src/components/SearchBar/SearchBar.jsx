import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogamesByName } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchBar, setSearchBar] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;

    setSearchBar(value);
  };

  const handleClick = () => {
    dispatch(getVideogamesByName(searchBar));
    setSearchBar("");
  };
  return (
    <div className={style.container}>
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        name="SearchBar"
      ></input>
      <button onClick={(event) => handleClick(event)}>BUSCAR</button>
    </div>
  );
};

export default SearchBar;
