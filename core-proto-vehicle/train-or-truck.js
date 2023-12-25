// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
function Vehicle(driver) {
  // Код тут.
}
function Train(driver) {
  // Код тут.
  this.drive = function (kmh) {
    // Код тут.
  };
  this.stop = function () {
    // Код тут.
  };
}

function Truck(driver) {
  // Код тут.
  this.drive = function (kmh) {
    // Код тут.
  };
  this.stop = function () {
    // Код тут.
  };
  this.loadCargo = function (cargo) {
    // Код тут.
  };
}

Truck.prototype.unloadCargo = function () {
  // Код тут.
};
// экспорт Vehicle, Train, Truc в файл с тестами
module.exports = { Vehicle, Train, Truck };

// Функции-конструкторы Train и Truck имеют схожие свойства и поведение.
// Перепишите их так, чтобы избавиться от дублирования одинаковых свойств и методов.
