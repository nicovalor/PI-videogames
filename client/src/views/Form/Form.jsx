import { useEffect, useState } from "react";
import style from "./Form.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/actions";

const validate = (form) => {
  const errors = {};
  if (!form.name) errors.name = "Es necesario escribir un nombre";
  if (!form.description)
    errors.description = "Es necesario escribir un descripción";

  if (!form.launchDate)
    errors.launchDate = "Es necesario ingresar una fecha de lanzamiento";

  if (!/\d/.test(form.rating)) errors.rating = "El rating debe ser un número";
  if (form.rating > 5 || form.rating < 0)
    errors.rating = "El rating debe ser un número entre 1 y 5";
  if (!form.rating) errors.rating = "Es necesario ingresar un rating";
  return errors;
};

const validateGenres = (form) => {
  const errors = {};
  if (!form.genres.length) errors.genres = "Debe elegir al menos un género";
  return errors;
};

const validatePlatforms = (form) => {
  const errors = {};
  if (!form.platforms.length)
    errors.platforms = "Debe escribir al menos una plataforma";
  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const genres = useSelector((state) => state.genres);

  const [form, setForm] = useState({
    id: "",
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

    if (!form[property].includes(value)) {
      const newGenres = [...form[property]];
      newGenres.push(value);

      setForm({ ...form, [property]: newGenres });

      setErrors(validateGenres({ ...form, [property]: newGenres }));
    } else {
      const actualGenres = [...form[property]];
      const index = actualGenres.indexOf(value);
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

    //if (!Object.keys(errors).length) {
    //axios.post("http://localhost:3001/videogames", form);
    //}
  };
  return (
    <div>
      <h1>Esta es la vista del Form</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.labels}>
          <label>Nombre del videojuego</label>
          <label>Géneros</label>
          <label>Link de la imagen</label>
          <label>Descripción</label>
          <label>Plataformas</label>
          <label>Fecha de lanzamiento</label>
          <label>Rating</label>
        </div>
        <div className={style.inputs}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <select
            name="genres"
            value={form.genres}
            multiple="true"
            required="true"
            onChange={handleChangeGenre}
          >
            {genres?.map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </select>

          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
          />

          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <input
            type="text"
            name="platforms"
            value={form.platforms}
            onChange={handleChangePlatforms}
          />

          <input
            type="text"
            name="launchDate"
            value={form.launchDate}
            onChange={handleChange}
          />

          <input
            type="text"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
          <button type="submit">CREAR JUEGO</button>
        </div>
      </form>
      <div className={style.errors}>
        {errors.name && <span>{errors.name}</span>}
        {errors.genres && <span>{errors.genres}</span>}
        {errors.image && <span>{errors.image}</span>}
        {errors.description && <span>{errors.description}</span>}
        {errors.platforms && <span>{errors.platforms}</span>}
        {errors.lauchDate && <span>{errors.launchDate}</span>}
        {errors.rating && <span>{errors.rating}</span>}
      </div>
    </div>
  );
};

export default Form;
