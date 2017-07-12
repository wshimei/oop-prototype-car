// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    // TODO: add color, seats here
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    this.passengers = passengers || []
  }

  // add the sell function
  sell (newOwner) {
    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }

  // add the paint function
  paint (newColor) {
    this.color = newColor
  }

  start () {
    this.running = true
  }

  off () {
    this.running = false
  }

  driveTo (destination) {
    if (this.running === true) {
      console.log('driving to ' + destination)
      return true
    } else {
      return false
    }
  }

  park () {
    if (this.running === false) {
      console.log('parked!!')
      return true
    } else {
      return false
    }
  }

  pickUp (name) {
    if (this.running === true && this.passengers.length < this.seats - 1) {
      this.passengers.push(name)

      console.log('Driving to pick up ' + name)
      return true
    } else {
      return false
    }
  }

  dropOff (name) {
    if (this.running === true && this.passengers.includes(name)) {
      var passengerIndex = this.passengers.indexOf(name)
      this.passengers.splice(passengerIndex, 1)
      console.log('Driving to drop off ' + name)
      return true
    } else {
      return false
    }
  }

  passengersCount () {
    console.log('Current number of passengers: ' + (this.passengers.length - 1))
    return this.passengers.length - 1
  }
}

// export the Car class //
// this is required for the carTest.js to load this //
module.exports = Car
