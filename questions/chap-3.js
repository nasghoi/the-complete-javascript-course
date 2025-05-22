// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filterEvenNumbers = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            let num_to_remove = num.indexOf(num[i])
            let start = num.slice(0, num_to_remove)
            let end = num.slice(num_to_remove + 1)
            num = [...start, ...end]
        }
        // console.log(i, num)
    }
    console.log(num)
}

filterEvenNumbers(numbers)

//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
const people = [
    { name: 'Nasr', age: 24 },
    { name: 'Fakhr', age: 26 },
    { name: 'Zikr', age: 22 },
    { name: 'Habib', age: 20 },
    { name: 'Syaf', age: 17 },
    { name: 'Nab', age: 28 },
]

const findHighestAge = (people) => {
    // console.log(people)
    let highest = 0
    let the_name = ''
    people.forEach((person) => {
        if (person.age > highest) {
            highest = person.age
            the_name = person.name
        }
    })
    console.log(the_name, highest)
} 

findHighestAge(people)

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
const number_but_in_strings = [ '1', '2', '4', '8', '16', '32' ]
const real_numbers = number_but_in_strings.map(Number)

console.log(real_numbers)


// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
const foods = [
    { name: 'Rice', price: 12.60 },
    { name: 'Noodles', price: 8.50 },
    { name: 'Mamee', price: 40.00 },
    { name: 'Vegetable Soup', price: 7.20 },
    { name: 'Chicken Curry', price: 15.00 },
    { name: 'Tiramisu', price: 3.00 },
]

const ordered_foods_by_price = (foods) => {
    const asc_order = [...foods].sort((a, b) => a.price - b.price)
    console.log(asc_order)
}

ordered_foods_by_price(foods)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
const language = ['Java', 'Python', 'JavaScript', 'PHP', '.Net', 'C#']

function removeFirstLast(array) {
    array.pop()
    array.shift()
    return array
}

console.log(removeFirstLast(language))

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
const shoppingCart = {
    Laptop: {
        quantity: 1,
        price: 1200.00
    },
    Mouse: {
        quantity: 2,
        price: 25.50
    },
    Keyboard: {
        quantity: 3,
        price: 75.00
    },
    Monitor: {
        quantity: 2,
        price: 300.00
    },
    Webcam: {
        quantity: 3,
        price: 60.00
    },
};

function calcItems(items) {
    console.log(Object.values(items))
    let total = 0
    for (each_item in items) {
        if (items.hasOwnProperty(each_item)) {
            const details = items[each_item]
            total += details.quantity * details.price
        }        
    }
    // Object.values(shoppingCart).forEach((items) => {
    //     total += items.quantity * items.price
    // })
    return total
}

console.log('RM', calcItems(shoppingCart));

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.


// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.


// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.


// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.


// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.


// 12. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
