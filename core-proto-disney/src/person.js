/**
 * Человек.
 * @param {string} name
 */

function Person(name) {
  this.name = name;
  watchedMovies = [];
}

Person.prototype.watchMovie = function (movie) {
  if (this.watchedMovies.includes(movie)) {
    return `${this.name} has already watched ${movie.title}.`;
  } else {
    movie.play();
    this.watchedMovies.push(movie);
    return `${this.name} is now watching ${movie.title}.`;
  }
};

module.exports = { Person };
