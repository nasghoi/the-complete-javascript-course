// look the javascript for beginner repo for most of this chapter notes
const repoLink = "https://github.com/nasghoi/javascript-for-beginner"
console.log(repoLink)

true && false // this will return false

let quotes = {
    nas: 'is cool',
    nab: 'isn\'t cool, she\'s hot', // use backslash before the single quote to escape it
    number_of_our_child: 3,
    is_we_happily_married: true,
}

console.log(quotes.nab)
console.log(console) // this will print the console object

function addStrings(string1 = 'default1', string2 = 'default2') {
    let concatString = string1 + ' ' + string2
    console.log(concatString)
    return concatString
}

let newString = addStrings('hello')
console.log('The new string is: ', newString)

module.exports = {
    addStrings,
    quotes,
}