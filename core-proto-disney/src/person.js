/**
 * Человек.
 * @param {string} name
 */

function Person(name, initialWatchedMovies = []) {
  this.name = name;
  this.watchedMovies = initialWatchedMovies;
}

Person.prototype.watchMovie = function (movie) {
  try {
    if (this.watchedMovies.some(({ title }) => title === movie.title)) {
      return movie.play();
    } else {
      this.watchedMovies.push(movie);
      return `${this.name} is now watching ${movie.title}. ${movie.play()}`;
    }
  } catch (error) {
    return `${this.name} encountered an error while watching ${movie.title}.`;
  }
};

module.exports = { Person };
