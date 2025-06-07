// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
let name = 'nasr'
let special_string = `my name is ${name}`
console.log(special_string)

// 2. Convert the following function into an arrow function syntax:
function add(a, b) {
    return a + b;
}

const add_arrow = (a, b) => { return a + b }
console.log(add_arrow(2, 3))

// 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.
const person = {
    name: 'nab',
    age: 23
}

const { name: person_name, age } = person
console.log(person_name, age)

// 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.
const colors = ['red', 'green', 'blue']
let [first, second, third] = colors
console.log(first, second, third)

// 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?
let arr1 = [0, 1, 2, 3]
let arr2 = [5, 6, 7, 8]
let combined = [...arr1, ...arr2]
console.log(combined)

// 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?
const obj1 = {
    name: 'nasr',
    age: 26
}
const obj2 = {
    name: 'nab',
    fav_color: 'green'
}

let combinedObject = {
    ...obj1,
    ...obj2
}
console.log(combinedObject)

// 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?
const user = { name: 'nasr' }

console.log(user?.address?.postcode)

// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".
const greet = (name, greeting = 'Hello') => {
    console.log(`${greeting}, my name is ${name}.`)
}

greet('nasr')

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.
let string_can_change = 'hi guys, im new'
string_can_change = 'hi guys, im broke'

const string_cant_be_changed = 'hi guys, im new'
// string_cant_be_changed = 'hi guys, im broke' // if uncomment, got error 'TypeError: Assignment to constant variable'

console.log(string_can_change, '\t>\t', string_cant_be_changed)

// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.
const array_num = [14, 23, 36, 40, 54, 76]

// array_num.forEach((value, index) => {
//     console.log(value)
// })

// for (let i = 0; i < array_num.length; i++) {
//     const current_value = array_num[i]
//     console.log(current_value)
// }

for (let current_value of array_num) {
    console.log(current_value)
}

// 11. Given an array of numbers, use the map method to create a new array with each number squared.
const new_array_map = array_num.map((value) => {
    return value ** 2
})

console.log(new_array_map)

// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?
let his_age = 17
let ageStatus = his_age >= 18 ? 'adult' : 'minor'  
console.log(ageStatus)

// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?
let isLoggedIn = false
const logMessage = () => { console.log('msuk') }
isLoggedIn && logMessage()

// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?
const people = {
    // name: 'nasr'
}

let username = people.name || 'guest'

console.log(username)



