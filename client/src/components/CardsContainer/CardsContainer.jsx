import { useState } from "react";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginations from "../Pagination/Paginations";

const CardsContainer = () => {
  const videogames = useSelector((state) => state.videogames);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsperPage] = useState(15);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const videogamesCopy = videogames?.map((videogame) => videogame);

  const currentPosts = videogamesCopy?.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={style.container}>
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
