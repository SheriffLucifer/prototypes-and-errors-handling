/**
 * Мультфильм.
 * @param {string} title - Name of the cartoon
 * @param {number} year - When it released (1990)
 * @param {boolean} forChildren - true/false
 * @param {string} beginning - Several words from the beginning of the cartoon
 */
function Cartoon(title, year, forChildren = true, beginning = 'Long, long ago...') {
  // Код тут.
}

Cartoon.prototype.getDescription = function () {
  // Код тут.
};

Cartoon.prototype.play = function () {
  // Код тут.
};

/**
 * Мульт студии Walt Disney.
 */
function DisneyCartoon(title, year, forChildren, beginning) {
  // Код тут.
}

/**
 * Мульт студии DreamWorks.
 */
function DreamWorksCartoon(title, year, forChildren, beginning) {
  // Код тут.
}

module.exports = { Cartoon, DisneyCartoon, DreamWorksCartoon };
