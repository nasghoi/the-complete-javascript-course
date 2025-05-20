// data manipulation
let example_sentence = 'this is string'
let string_length = example_sentence.length

// string concatenation
let combined_string = 'the third letter in the string above is ' + example_sentence[2]
console.log('Value at the end of the string = ', example_sentence[string_length - 1])

// indexOf
const contains = example_sentence.indexOf('h');
console.log(contains)

// split
const split_sentence = example_sentence.split('i')
console.log(split_sentence)

// includes
const includes = example_sentence.includes('i')
console.log(includes)

// replace all
let example_u_sentence = 'this_is_a_string'
const replace = example_u_sentence.replaceAll('_', ' ')
console.log(replace)

// slice
const slice = example_u_sentence.slice(4, 9)
console.log(slice)

// regex
function validatePassword(password) {
    // Strong password have min 8 chars, upper, lower, number, special
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    return regex.test(password);
}

const password = "StrongPass1!";
if (validatePassword(password)) {
    console.log("✅ Password is valid");
} else {
    console.log("❌ Password is invalid");
}

// array
let simple_array = ['nasr', 'is', 'cool']
console.log(simple_array[3])

// by index location
simple_array[3] = 'right?'
console.log(simple_array)

// push
simple_array.push('and')
console.log(simple_array)

// pop
simple_array.pop()
console.log(simple_array)

// join
let joined_string = simple_array.join('_')
console.log(joined_string)

// reverse
let reversed_array = simple_array.reverse()
console.log(reversed_array)

// sort
let dimension_array = [[[3], []], [[], []], [[]]]
dimension_array[0][0][0] = 'hello world'
console.log(dimension_array)

let sorted_array = dimension_array.sort() 
console.log(sorted_array)

// let number_array = [[1, 2], [3, 4]]

// for (let i = 0; i < number_array.length; i++) {
//     let subArray = number_array[i];
//     for (let j = 0; j < subArray.length; j++) {
//         console.log(i, j, number_array[i][j])
//     }
// }

let number_array = [1, 2, 3, 4, 5]

// find the index location of 3
let number_to_remove = number_array.indexOf(1)

// ini sumpah gempak, nak cari nombor tu astu buang dari array tu
let start_array = number_array.slice(0, number_to_remove)
let end_array = number_array.slice(number_to_remove + 1)

let new_number_array = start_array.concat(end_array)
console.log(start_array, end_array, new_number_array)

// dictionaries or objects
const bio = {
    name: 'nasr',
    age: 25,
    hobbies: ['coding', 'gaming', 'gym'],
    friends: {
        'nab': {
            description: 'pretty',
        }
    }
}

let name_key = 'name'
bio[name_key] = 'nasrul'
let name = bio[name_key]

bio['number_of_friends'] = 0

if ('age' in bio) {
    console.log('age exists')
} else {
    bio['age'] = null
    console.log('age does not exist')
}
console.log(bio)

// update using dot notation or bracket notation
bio.age = 26
console.log(bio['hobbies'][0], '/', bio.hobbies[1])

delete bio['age']
console.log(bio)
console.log(bio.friends.nab.description, bio.friends['nab'].description, bio['friends']['nab']['description'])

// access keys and values
const keys_in_object = Object.keys(bio)
console.log(keys_in_object)
const values_in_object = Object.values(bio)
console.log(values_in_object)

// entries
const entries_in_object = Object.entries(bio)
console.log(entries_in_object)

// non-exist key/value
console.log(bio.joke, 'joke' in bio)