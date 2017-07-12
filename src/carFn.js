// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Toyoda',
  model: 'Yaris',
  year: 2000,
  color: 'Red',
  seats: 5,
  previousOwners: [],
  owner: 'manufacturer',
  running: false,

  sell: function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },

  paint: function (newColor) {
    this.color = newColor
  }
}
Car.paint('Blue')
Car.sell('Shimei')
console.log(Car)

// Export the `Car` object
module.exports = Car
