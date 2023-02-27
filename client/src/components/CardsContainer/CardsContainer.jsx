import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import style from "./CardsContainer.module.css";
import {
  orderVideogamesByName,
  orderVideogamesByRating,
  filterByOrigin,
  getVideogames,
} from "../../redux/actions";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginations from "../Pagination/Paginations";

const CardsContainer = () => {
  const dispatch = useDispatch();

  const videogames = useSelector((state) => state.videogames);

  useEffect(() => {}, [videogames]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const videogamesCopy = videogames?.map((videogame) => videogame);

  const currentPosts = videogamesCopy?.slice(firstPostIndex, lastPostIndex);

  const [order, setOrder] = useState("");
  const handleFilteredCreated = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };

  //order by name
  const handleSortByName = (event) => {
    dispatch(orderVideogamesByName(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`);
  };

  //order by rating
  const handleRating = (event) => {
    dispatch(orderVideogamesByRating(event.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${event.target.value}`);
  };

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <select onChange={(e) => handleSortByName(e)}>
          <option>Ordenar por nombre</option>
          <option value="A-Z">From A to Z</option>
          <option value="Z-A">From Z to A</option>
        </select>
        <select onChange={(e) => handleRating(e)}>
          <option>Ordenar por rating</option>
          <option value="Ascendente">Lower rating</option>
          <option value="Descendente">Higher rating</option>
        </select>
        <select
          onChange={(e) => {
            handleFilteredCreated(e);
          }}
        >
          <option value="All">All</option>
          <option value="DB">Created</option>
          <option value="api">Api</option>
        </select>
      </div>

      {currentPosts?.map((game, index) => {
        return <Card key={index} name={game.name} />;
      })}

      <Paginations
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        totalPosts={videogames?.length}
      />
    </div>
  );
};

export default CardsContainer;
