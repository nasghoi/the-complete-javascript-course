// const express = require('express')
import { Express } from "express"
// arrow function

const myFunction = (input) => {
  console.log("executed function");
};

// ternary operator ?
let friends = ['nasr', 'nab', 'fah']

// old if else
// if (friends.includes('nasr')) {
    //     isNabFriend = true
    // } else {
        //     isNabFriend = true
        // }
        
let isNabFriend = friends.includes('nasr') ? true : false

console.log(isNabFriend)

// optional chaining
const nasr = {
    hobbies: {
        skiing: {
            pairs_of_skis: 1
        }
    }
}

console.log(nasr?.hobbies?.yeke?.yeke)

// object destructuring
let person = {
    name: 'nasr',
    age: 25
}
// let name = person.name
// let age = person.age

const { name: person_name, age } = person

console.log(person_name, age)

// array destructuring
let oldArray = [4, 5]

// let value1 = oldArray[0]
// let value2 = oldArray[1]

let [value1, value2] = oldArray

console.log(value1)

// template literal string
let my_name = 'nasr'
// console.log('my name is ' + my_name + ' and i like the 3/8 is ' + 3/8)

console.log(`hello my name is ${my_name} and i like the 3/8 is ${3/8}`)

// short circuits && ||

// AND &&

let person_dict = { name: 'nas' }
let person_name_2 = person_dict.name && 'nab'
console.log(person_name_2)

// OR ||
let person_name_3 = person_dict.name || 'default name'
console.log(person_name_3)

// enhanced object literals
let breed = 'mazda'
let animal = 'car'

const animal_info = {
    breed,
    animal
}

console.log(animal_info)

// spread operator
let demo_array = [1, 2, 3, 4, 5]
let demo_array_2 = [...demo_array, 6, 7, 8]
console.log(demo_array_2)

let demo_object = {
    fav_color: 'blue'
}

let demo_object_2 = {
    ...demo_object,
    fav_food: 'oat'
}

console.log(demo_object_2)

let new_object = {
    ...demo_object
}

// array methods

let my_cool_array = [6, 9, 54, 74, 33, 76]

// for each

my_cool_array.forEach((value, index) => {
    console.log(`the current value is ${value} and the index is ${index}`)
})

// map

let my_new_array = my_cool_array.map((value, index) => {
    return `the value that multiply 2 is ${value * 2}`
})

console.log(my_new_array)

// filter
let filtered_array = my_cool_array.filter((value, index) => {
    let is_even = value % 2 === 0 
    return !is_even
})

console.log(filtered_array)

// reduce
let reduced_array = my_cool_array.reduce((accumulator, value, index) => {
    return accumulator + `, [${index}]${value}`
}, '')

console.log(reduced_array)