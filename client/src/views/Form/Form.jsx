import { useState } from "react";
import style from "./Form.module.css";

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

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };
  return (
    <div>
      <h1>Esta es la vista del Form</h1>
      <form className={style.form}>
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
          <input type="text" name="name" onChange={handleChange} />

          <input type="text" name="genres" onChange={handleChange} />

          <input type="text" name="image" onChange={handleChange} />

          <textarea type="text" name="description" onChange={handleChange} />

          <input type="text" name="platforms" onChange={handleChange} />

          <input type="text" name="launchDate" onChange={handleChange} />

          <input type="text" name="rating" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default Form;
