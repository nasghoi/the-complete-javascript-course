// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.
let name = "Nas";
name = "Nasrul";
console.log(name);

// 2. How would you compare two variables, a and b, to check equality?
const results = (a, b) => {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(results(1, 2));

// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".
const age = (age) => {
    if (age > 18) {
        return "Adult";
    }
    return "Minor";
}
console.log(age(10));

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.
const array_num = (type) => {
    if (type === "odd") {
        for (let x = 0; x <= 10; x++) {
            if (x % 2 !== 0) {
                console.log(x);
            }
        }
    } else if (type === "even") {
        for (let x = 0; x <= 10; x++) {
            if (x % 2 === 0) {
                console.log(x);
            }
        }
    }
}
array_num("odd");

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
const numbers = [10, 20, 30, 40, 50, 60];
let sum = 0;
let i = 0;

while (sum < 100) {
    sum = sum + numbers[i];
    i++;
}
console.log(sum);

// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. (width * height)
const rect_area = (w, h) => {
    if (w > h) {
        return "Width is greater than height";
    }
    return w * h;
}

const area_result = rect_area(5, 10) + ' ' + 'cm';
console.log(area_result);