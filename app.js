// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const multiByTwo = nums.map((num) => {
    return num * 2
})

// console.log(multiByTwo)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// Element match on their Position
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [toppingOne, toppingTwo] = pizzaToppings
console.log(toppingOne)
console.log(toppingTwo)

// Elements are match on their name

