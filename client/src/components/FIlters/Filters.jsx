import { useDispatch } from "react-redux";
import {
  filterByOrigin,
  orderVideogamesByName,
  orderVideogamesByRating,
} from "../../redux/actions";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const handleSortByName = (event) => {
    dispatch(orderVideogamesByName(event.target.value));
  };

  const handleSortByRating = (event) => {
    dispatch(orderVideogamesByRating(event.target.value));
  };

  const handleFilterByOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };

  return (
    <div className={style.container}>
      <select onChange={(event) => handleSortByName(event)}>
        <option value="filter" disabled="disabled">
          Ordenar por:
        </option>
        <option value="A-Z">De A a Z</option>
        <option value="Z-A">De Z a A</option>
      </select>
      <select onChange={(event) => handleSortByRating(event)}>
        <option value="order" disabled="disabled">
          Ordenar rating por:
        </option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>

      <select onChange={(event) => handleFilterByOrigin(event)}>
        <option value="filter" disabled="disabled">
          Filtrar por origen:
        </option>
        <option value="All">Todos</option>
        <option value="DB">Base de datos</option>
        <option value="api">API</option>
      </select>
    </div>
  );
};

export default Filters;
