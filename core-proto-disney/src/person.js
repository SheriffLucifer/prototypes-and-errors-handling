/**
 * Человек.
 * @param {string} name
 */

function Person(name, initialWatchedMovies = []) {
  this.name = name;
  this.watchedMovies = Array.isArray(initialWatchedMovies)
    ? initialWatchedMovies
    : [initialWatchedMovies];
}

Person.prototype.watchMovie = function (movie) {
  try {
    if (this.watchedMovies.includes(movie)) {
      return `${this.name} has already watched ${movie.title}.`;
    } else {
      movie.play();
      this.watchedMovies.push(movie);
      return `${this.name} is now watching ${movie.title}.`;
    }
  } catch (error) {
    return `${this.name} encountered an error while watching ${movie.title}.`;
  }
};

module.exports = { Person };
