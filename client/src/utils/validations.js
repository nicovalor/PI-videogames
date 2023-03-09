export function validate(form) {
  const errors = {};
  const urlRegex = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (form.name.trim() === "") {
    errors.name = "Please enter a name for the game.";
  } else if (form.name.length > 30) {
    errors.name = "The name of tthe game must be under 30 characters";
  }

  if (form.genres.length === 0) {
    errors.genres = "Please select at least one genre for the game.";
  }

  if (form.platforms.length === 0) {
    errors.platforms = "Please enter a platform for the game.";
  }

  if (form.description === "") {
    errors.description = "Please enter a description";
  }

  if (form.image.trim() === "") {
    errors.image = "Please enter an image for the game";
  } else if (urlRegex.test(form.image.trim("")) === false) {
    errors.image = "The image must be a url";
  }

  if (form.launchDate.trim() === "") {
    errors.launchDate = "Please enter a release date for the game.";
  }

  if (form.rating === "") {
    errors.rating = "Please enter a rating";
  } else if (/\d/.test(form.rating) === false) {
    errors.rating = "Rating must be a digit";
  } else if (form.raing < 0 || form.rating > 5) {
    errors.rating = "Rating must be between 0 and 5";
  }

  return errors;
}

export const validateGenres = (form) => {
  const errors = {};
  if (!form.genres.length) errors.genres = "Debe elegir al menos un género";
  return errors;
};

// export const validatePlatforms = (form) => {
//   const errors = {};
//   if (form.platforms.length === "")
//     errors.platforms = "Debe escribir al menos una plataforma";
//   return errors;
// };
