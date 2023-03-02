import { useEffect, useState } from "react";
import style from "./Form.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";
import {
  validate,
  validateGenres,
  validatePlatforms,
} from "../../utils/validations";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres);

  const [form, setForm] = useState({
    name: "",
    genres: [],
    image: "",
    description: "",
    platforms: [],
    launchDate: "",
    rating: "",
    genreId: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });

    setErrors(validate({ ...form, [property]: value }));
  };

  const handleChangeGenre = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    const idGenre = genres.find((genre) => genre.name === value).id;

    if (!form[property].includes(idGenre)) {
      const newGenres = [...form[property]];
      newGenres.push(idGenre);

      setForm({ ...form, [property]: newGenres });

      setErrors(validateGenres({ ...form, [property]: newGenres }));
    } else {
      const actualGenres = [...form[property]];
      const index = actualGenres.indexOf(idGenre);
      actualGenres.splice(index, 1);
      setForm({
        ...form,
        [property]: actualGenres,
      });

      setErrors(validateGenres({ ...form, [property]: actualGenres }));
    }
  };

  const handleChangePlatforms = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    const platforms = value.split(",");

    setForm({ ...form, [property]: platforms });

    setErrors(validatePlatforms({ ...form, [property]: platforms }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      axios.post("http://localhost:3001/videogames", form);
    }
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.row}>
          <div className={style.column}>
            <label>Nombre del videojuego</label>
          </div>
          <div className={style.column}>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className={style.column}>
            {errors.name && <span>{errors.name}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Géneros</label>
          </div>
          <div className={style.column}>
            <select
              name="genres"
              value={form.genres}
              multiple="true"
              onChange={handleChangeGenre}
            >
              {genres &&
                genres?.map((genre) => (
                  <option value={genre.name}>{genre.name}</option>
                ))}
            </select>
          </div>
          <div className={style.column}>
            {errors.genres && <span>{errors.genres}</span>}
            <ul>
              {form.genres.map((id) => (
                <li>
                  {genres && genres.find((genre) => genre.id === id).name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Link de la imagen</label>
          </div>
          <div className={style.column}>
            <input
              autoComplete="off"
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>
          <div className={style.column}>
            {errors.image && <span>{errors.image}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Descripción</label>
          </div>
          <div className={style.column}>
            <textarea
              autoComplete="off"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div className={style.column}>
            {errors.description && <span>{errors.description}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Plataformas</label>
          </div>
          <div className={style.column}>
            <input
              autoComplete="off"
              type="text"
              name="platforms"
              value={form.platforms}
              onChange={handleChangePlatforms}
            />
          </div>
          <div className={style.column}>
            {errors.platforms && <span>{errors.platforms}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Fecha de lanzamiento</label>
          </div>
          <div className={style.column}>
            <input
              autoComplete="off"
              type="text"
              name="launchDate"
              value={form.launchDate}
              onChange={handleChange}
            />
          </div>
          <div className={style.column}>
            {errors.launchDate && <span>{errors.launchDate}</span>}
          </div>
        </div>
        <div className={style.row}>
          <div className={style.column}>
            <label>Rating</label>
          </div>
          <div className={style.column}>
            <input
              autoComplete="off"
              type="text"
              name="rating"
              value={form.rating}
              onChange={handleChange}
            />
          </div>
          <div className={style.column}>
            {errors.rating && <span>{errors.rating}</span>}
          </div>
        </div>

        {Object.keys(errors).length ? (
          <button className={style.disabledButton} disabled type="submit">
            CREAR JUEGO
          </button>
        ) : (
          <button className={style.button} type="submit">
            CREAR JUEGO
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
