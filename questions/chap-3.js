// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filterEvenNumbers = (num) => {
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
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

// ------------------james answer ------------------
let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrayFilter(arr) {
    let new_array = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            continue
        }
        new_array.push(arr[i])
    }

    return new_array
}

let filtered_array = arrayFilter(integers)
console.log(filtered_array)

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

// ------------------james answer ------------------
const names_and_ages = [
    { name: 'james', age: 27 },
    { name: 'lucy', age: 31 },
    { name: 'juan', age: 102 }
]

function findOldestPerson(arr) {
    let oldest_person = arr[0]

    for (let i = 1; i < arr.length; i++) {
        let new_person = arr[i]
        if (new_person['age'] > oldest_person.age) {
            oldest_person = new_person
        }
    }
    return oldest_person
}

let found_oldest_person = findOldestPerson(names_and_ages)
console.log(found_oldest_person)

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
const number_but_in_strings = [ '1', '2', '4', '8', '16', '32' ]
const real_numbers = number_but_in_strings.map(Number)

console.log(real_numbers)

// ------------------james answer ------------------
let array_of_strings = ['4', '8', '2', '10', '5']
let new_array_of_numbers = []

for (let i = 0; i < array_of_strings.length; i++) {
    let converted_string_value = parseInt(array_of_strings[i])
    new_array_of_numbers.push(converted_string_value)
}

console.log(new_array_of_numbers)


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

// ------------------james answer ------------------
let array_of_objects = [
    { price: 4.2 },
    { price: 8.3 },
    { price: 2.2 }

]

array_of_objects.sort(function (a, b) {
    return a.price - b.price
})

console.log(array_of_objects)

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
const language = ['Java', 'Python', 'JavaScript', 'PHP', '.Net', 'C#']

function removeFirstLast(array) {
    array.pop()
    array.shift()
    return array
}

console.log(removeFirstLast(language))

// ------------------james answer ------------------ 🏆🏆🏆
let demo_array = [0, 1, 2, 3, 4, 5]
function trimArray(arr) {
    let array_length = arr.length
    const trimmed_array = arr.slice(1, array_length - 1)
    return trimmed_array
}

console.log(trimArray(demo_array))

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

// ------------------james answer ------------------
let shopping_cart = {
    'cheese': {
        quantity: 4,
        price: 8
    },
    milk: {
        quantity: 10,
        price: 4
    }
}

function sumProducts(obj) {
    let object_keys = Object.keys(obj)
    let sum = 0

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        const key_data = shopping_cart[current_key]
        let product_total = key_data.price * key_data.quantity
        sum = sum + product_total
    }

    return sum
}

console.log(sumProducts(shopping_cart))

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.

// idk???

// ------------------james answer ------------------
let friend = {
    'rupert': {
        hobbies: ['gym', 'reading', 'mathematics']
    }
}

function deepClone(obj) {
    let new_object = {}

    let object_keys = Object.keys(obj)

    for (let i = 0; i < object_keys.length; i++) {
        let current_key = object_keys[i]
        new_object[current_key] = obj[current_key]
    }

    return new_object
}

let new_friends = deepClone(friend)

friend.james = {
    hobbies: ['sleep']
}
console.log(new_friends)

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
const studentGrades = {
    'Mathematics': 88,
    'Science': 92,
    'English': 75,
    'History': 80,
    'Computer Science': 95,
    'Physical Education': 85
};

let count = 0
let total = 0
let avg = 0
for (const each_subject in studentGrades) {
    if (studentGrades.hasOwnProperty(each_subject)) {
        // console.log(studentGrades[each_subject])
        const grade = studentGrades[each_subject]
        total += grade
        count++
    }
}

avg = (total / count).toFixed(2)
console.log(avg)

// ------------------james answer ------------------
let student = {
    chemistry: {
        grade: 9
    },
    physics: {
        grade: 7
    },
    maths: {
        grade: 1
    }
}

function findAverageGrade(obj) {
    let sum = 0
    let number_of_subjects = 0

    let list_of_subjects = Object.keys(obj)

    for (let i = 0; i < list_of_subjects.length; i++) {
        let current_key = list_of_subjects[i]
        let subject_grade = student[current_key].grade

        sum = sum + subject_grade
        number_of_subjects++
    }

    let average_grade = sum / number_of_subjects
    return average_grade
}


console.log(findAverageGrade(student))

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.
function counter() {
    let count = 0
    return function inner() {
        count++
        console.log(count)
    }
}

let increment = counter()
increment()
increment()
increment()

// ------------------james answer ------------------
function inception() {
    let number_of_invocations = 0

    return function () {
        number_of_invocations++
        console.log(number_of_invocations)
    }
}

const incrementer = inception()

incrementer()
incrementer()
incrementer()
incrementer()
incrementer()

// 10. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'date') in descending order.
const birthday = [
    { name: "Zikr", date: "2007/03/12" },
    { name: "Nasr", date: "1997/01/18" },
    { name: "Hab", date: "1999/04/28" },
    { name: "Fakhr", date: "2004/09/27" },
    { name: "Saf", date: "1990/01/25" },
]

const sort_by_birthdate = (details) => {
    // console.log(details)
    const desc_birth_date = [...details].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
    })
    console.log(desc_birth_date)
}

sort_by_birthdate(birthday)

// ------------------james answer ------------------
let grades_array = [
    { subject: 'maths', grade: 10 },
    { subject: 'spanish', grade: 2 },
    { subject: 'literature', grade: 6 }
]

function sortByGrade(arr) {
    let sorted_array = grades_array.sort(function (a, b) {
        return b.grade - a.grade
    })

    return sorted_array
}

console.log(sortByGrade(grades_array))

// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.
const strings = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "jackfruit"
];

// 1
// let fruit_array = []
// for (const string in strings) {
//     const fruit = strings[string]
//     // console.log(fruit)
//     if (fruit.length > 4) {
//         fruit_array.push(fruit)
//     }
// }

// 2 -> this is better for its readability, maintainability, and alignment with modern JavaScript best practices
const fruit_array = strings.filter((word) => {
    return word.length > 5
})

console.log(fruit_array)

// ------------------james answer ------------------
let array_of_short_strings = ['hello', 'world', 'my', 'name', 'juan lopez', 'long word']

function filterShortStrings(arr) {
    let new_array_of_long_strings = []

    for (let i = 0; i < arr.length; i++) {
        let current_string = arr[i]
        if (current_string.length > 5) {
            new_array_of_long_strings.push(current_string)
        }
    }

    return new_array_of_long_strings
}

console.log(filterShortStrings(array_of_short_strings))

// 12. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
const words = 'Interoperability'

function alphaCount(word) {
    const charCounts = {}
    let lower_case = word.toLowerCase()
    const characters = lower_case.replaceAll(',', '').split('')

    // 1 
    // console.log(characters)
    // characters.forEach((char) => {
    //     // console.log(charCounts)
    //     if (charCounts[char]) {
    //         charCounts[char]++
    //     } else {
    //         charCounts[char] = 1
    //     }
    // })

    // 2 - the best modern choice (just because we dont need an index)
    for (const char of characters) { // 'char' directly gets the character
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }
    console.log(charCounts)
}

alphaCount(words)

// salah faham soalan - ini jawapan genie
function wordCount(sentence) {
    const counts = {};
    // Split the sentence into words, ignoring punctuation and converting to lowercase
    // This regex matches one or more non-word characters (like spaces, punctuation)
    const wordsArray = sentence.toLowerCase().split(/\W+/).filter(Boolean); // .filter(Boolean) removes empty strings from split

    wordsArray.forEach(word => {
        if (counts[word]) {
            counts[word]++;
        } else {
            counts[word] = 1;
        }
    });
    
    return counts;
}

const sentences = 'The quick brown, fox /jumps over the lazy dog. Fox jumps.';
const wordOccurrences = wordCount(sentences);
console.log('\nWord counts for the sentence:');
console.log(wordOccurrences);

// ------------------james answer ------------------
let sentence = 'hello world my name is hello, is is , what a grade world, my, banana, james, cool'

function wordCounter(str) {
    let counter_dict = {}

    let string_to_array = str.replaceAll(',', '').split(' ')

    for (let i = 0; i < string_to_array.length; i++) {
        let current_word = string_to_array[i]

        if (current_word in counter_dict) {
            counter_dict[current_word] = counter_dict[current_word] + 1
        } else {
            counter_dict[current_word] = 1
        }
    }
    return counter_dict
}

console.log(wordCounter(sentence))