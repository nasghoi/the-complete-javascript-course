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