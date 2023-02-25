export const validate = (form) => {
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

export const validateGenres = (form) => {
  const errors = {};
  if (!form.genres.length) errors.genres = "Debe elegir al menos un género";
  return errors;
};

export const validatePlatforms = (form) => {
  const errors = {};
  if (!form.platforms.length)
    errors.platforms = "Debe escribir al menos una plataforma";
  return errors;
};
