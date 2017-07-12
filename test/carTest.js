// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// //// TEST PHASE III /////////////////////////////////////////
// load the Car object for
var Car = require('../src/Car')
// update the car instantiation below according to the test given
var acura = new Car('Acura', 'Integra', 1999, 'Red', 4)
// var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 4)

// starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(acura.make, 'Acura', 'Constructor did not set make.')
assert.strictEqual(acura.model, 'Integra', 'Constructor did not set model.')
assert.strictEqual(acura.year, 1999, 'Constructor did not set year.')
assert.strictEqual(acura.color, 'Red', 'Constructor did not set color.')
assert.strictEqual(acura.seats, 4, 'Constructor did not set seats.')
assert.strictEqual(acura.owner, 'manufacturer', 'Owner should be \'manufacturer\'')
assert.strictEqual(acura.running, false, 'Running should be false')

// run the success function once you're done with a set of tests
success()

// normal case: test sell
console.log('Testing selling a car')
acura.sell('Lenny')
assert.deepEqual(acura.previousOwners, ['manufacturer'], 'Acura should be updated after selling')
assert.strictEqual(acura.owner, 'Lenny', 'Acure owner should be updated after selling')
success()

// normal case: test paint
console.log('Testing painting a car')
acura.paint('Blue')
assert.strictEqual(acura.color, 'Blue', 'Acura should be updated after painting')
success()

// error case: test sell to non-string arguement
console.log('Testing selling a car to non-string')
acura.sell('0123')
assert.strictEqual(acura.owner, 'Lenny', 'Owner should stay if newOwner is non-string like')
success()

// normal case: test sell second owner
console.log('Testing selling a car to another owner')
acura.sell('Shimei')
assert.strictEqual(acura.previousOwners[acura.previousOwners.length - 1], 'Lenny', 'Acura previous owners should be updated after selling')
assert.strictEqual(acura.owner, 'Shimei', 'Acure owner should be updated after selling')
success()

// test car start
console.log('Testing start car')
acura.start()
assert.strictEqual(acura.running, true, 'Car running value should be true')
success()

// test off
console.log('Testing off car')
acura.off()
assert.strictEqual(acura.running, false, 'Car should be off')
success()

// test driving
// normal case: car.driveTo('Iceland') === true
console.log('Testing driving to destination')
assert.strictEqual(acura.driveTo('Iceland'), false, 'Car allow to drive when off')
acura.start()
assert.ok(acura.driveTo('Iceland'), 'Should return true if driving')
success()

// error case: if car.running === false, return false

// test parked
console.log('Testing parked')
acura.off()
assert.strictEqual(acura.park(), true, 'Should return true if parked')
success()

// test pick up
console.log('Testing pick up')
assert.strictEqual(acura.pickUp('Shimei'), false, 'Should not allow pick up when car not running')
acura.start()
assert.ok(acura.pickUp('Shimei'), 'Should return true if pick up possible')
assert.strictEqual(acura.passengers.length, 1, 'Passengers array should be updated to include new passenger')
assert.strictEqual(acura.passengers[acura.passengers.length - 1], 'Shimei', 'New passenger should be updated to end of array')
acura.passengers = ['Shimei', 'Prima', 'Iskandar']
assert.strictEqual(acura.pickUp('Elaine'), false, 'Car allowed pickup even though all seats are filled')
assert.deepEqual(acura.passengers, ['Shimei', 'Prima', 'Iskandar'], 'Passengers array updated even if car does not allow pickup')
success()

// test drop off
console.log('Testing drop off')
assert.strictEqual(acura.dropOff('Shimei'), true, 'Should return true if drop off possible')
assert.deepEqual(acura.passengers, ['Prima', 'Iskandar'], 'Passenger should be removed from array')
acura.dropOff('Elaine')
assert.deepEqual(acura.passengers, ['Prima', 'Iskandar'], 'No such passenger')
acura.off()
acura.passengers = ['Shimei', 'Prima', 'Iskandar']
assert.strictEqual(acura.dropOff('Shimei'), false, 'Car should be on to drop off')
success()

// test passengers count
console.log('Testing passenger count')
assert.strictEqual(acura.passengersCount(), 2, 'Passenger should be 2')
success()
