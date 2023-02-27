// import style from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getVideogames } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = () => {
  const dispatch = useDispatch();

  //Cuando la Home se monta
  useEffect(() => {
    dispatch(getVideogames()); //trae todos los videogames
    dispatch(getGenres()); //trae todos los generos
  }, [dispatch]);

  return (
    <div>
      <h1>Esto es la Home</h1>
      <CardsContainer />
    </div>
  );
};

export default Home;
