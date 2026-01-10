/*
const speedWarning = (speedLimit,actuaLSpeed) => {
    if(actuaLSpeed>speedLimit) 
    return`you are over speeding! `
    else
        return `you are witin the speed limit`
}
console.log(speedWarning(30,49))


const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => {
  return Math.round(distance * 1.6)
})

console.log(distanceTraveledKm)

Challenge
1. Refactor this .map method so the inline function is
   an arrow function.
2. Write the least amount of code possible.
*/

import { itemsBoughtArr } from '.itsBoughArr.js'

function calculateTotalCost(itemsBoughtArr) {
  /*
  Challenge:
  1. Use the reduce method to calculate the total
     cost of items which have been bought.
  */

  const total = itemsBoughtArr.reduce((a, x,) => a+x.priceUSD,0)
}
console.log(calculateTotalCost(itemsBoughtArr))

