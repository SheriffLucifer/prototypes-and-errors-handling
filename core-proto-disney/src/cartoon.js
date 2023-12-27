/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */

function Cartoon(title, year, forChildren = true, beginning) {
  this.title = title;
  this.year = year;
  this.forChildren = forChildren;
  this.beginning = beginning;
  this.studio = "";
  this.studioLogo = "";
}

Cartoon.prototype.getDescription = function () {
  return `Description of cartoon: ${this.title}\n${this.year}\n${this.forChildren}\n${this.beginning}`;
};

Cartoon.prototype.play = function () {
  return `${this.studioLogo} ${this.studio} presents: ${this.title} ${this.beginning}`;
};

/**
 * Мульт студии Walt Disney.
 */

function DisneyCartoon(
  title,
  year,
  beginning = "Long, long ago in a faraway land..."
) {
  Cartoon.call(this, title, year, true);
  this.studio = "Walt Disney";
  this.studioLogo = "🏰🌠";
  this.beginning = "Naaaaaaaaants ingonyaaaaaaama bagithi Baba...";
  if (beginning === "Long, long ago in a faraway land...") {
    this.beginning = beginning;
  }
}

DisneyCartoon.prototype = Object.create(Cartoon.prototype);
DisneyCartoon.prototype.constructor = DisneyCartoon;

/**
 * Мульт студии DreamWorks.
 */

function DreamWorksCartoon(title, year, beginning) {
  Cartoon.call(this, title, year, true);
  this.studio = "DreamWorks";
  this.studioLogo = "🌙";
  this.beginning =
    "Legend tells of a legendary warrior whose Kung Fu skills were the stuff of legend..." ||
    beginning;
}

DreamWorksCartoon.prototype = Object.create(Cartoon.prototype);
DreamWorksCartoon.prototype.constructor = DreamWorksCartoon;

module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
