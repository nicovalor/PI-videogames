import { useState } from "react";
import style from "./Form.module.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    genres: "",
    image: "",
    description: "",
    platforms: "",
    launchDate: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (form) => {
    if (form.name === "") setErrors({ ...errors, name: "Nombre vacío" });
    if (form.genres === "") setErrors({ ...errors, genres: "Elige un género" });
    if (form.image === "") setErrors({ ...errors, image: "Imágen vacía" });
    if (form.description === "")
      setErrors({ ...errors, description: "Escriba una desripción" });
    if (form.platforms === "")
      setErrors({
        ...errors,
        platforms: "Escriba las plataformas separadas por un espacio",
      });
    if (form.lauchDate === "")
      setErrors({ ...errors, lauchDate: "Fecha de lanzamiento vacía" });
    if (form.rating === "") setErrors({ ...errors, rating: "Rating vacío" });
    else if (/\d{1}/.test(form.rating))
      setErrors({ ...errors, rating: "El rating debe un número entre 0 y 5" });
    else if (Number(form.rating) < 1 || Number(form.rating > 5))
      setErrors({ ...errors, rating: "El rating debe ser entre 1 y 5" });

    return form;
  };

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post();
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

          <input
            type="text"
            name="genres"
            value={form.genres}
            onChange={handleChange}
          />

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
            onChange={handleChange}
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
        <div className={style.errors}>
          {errors.name && <span>{errors.name}</span>}
          {errors.genres && <span>{errors.genres}</span>}
          {errors.image && <span>{errors.image}</span>}
          {errors.description && <span>{errors.description}</span>}
          {errors.platforms && <span>{errors.platforms}</span>}
          {errors.lauchDate && <span>{errors.launchDate}</span>}
          {errors.rating && <span>{errors.rating}</span>}
        </div>
      </form>
    </div>
  );
};

export default Form;
