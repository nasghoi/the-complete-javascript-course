// 1. Unique Characters in a String
// Question: Write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

let string_1 = 'helloworldmynameisjamesandilikeicecream'
let string_2 = 'thequickbrownfoxjumpsoverthelazydog'
let string_3 = 'abcdefghijk'

const checkUniqueChar = (string) => {
    let count_dict = {}

    for (let i = 0; i < string.length; i++) {
        let current_char = string[i]
        if (current_char in count_dict) {
            return false
        }
        count_dict[current_char] = 1
    }
    return true
}

console.log(checkUniqueChar(string_3))

// 2. Merge Sorted Arrays
// Question: Given two sorted arrays nums1 and nums2, write a function to merge them into a single, sorted array.

let nums1 = [2, 4, 6]
let nums2 = [1, 3, 5]

const mergeSort =  (arr1, arr2) => {
    let merge_arrays = [...arr1, ...arr2].sort()
    // merge_arrays.sort((a, b) => a - b) // ascending
    // merge_arrays.sort((a, b) => b - a) // descending
    console.log(merge_arrays)
} 

mergeSort(nums1, nums2)

// 3. Find All Duplicates in an Array
// Question: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of the array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity.

let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5, 6]

const isTwice = (nums) => {
    let twice = []
    let count_num = {}
    for (let current_num of nums) {
        // console.log(current_num)
        if (current_num in count_num) {
            twice.push(current_num)
        } else {
            count_num[current_num] = 1
        }
    }
    console.log(twice)
}

isTwice(dummy_arr)

// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 

let start_array = [1, 2, 3, 4, 5, 6]
let k = 3

// correct but, not the best optimise way
function rotateArray(nums, k) {
    let end_values = nums.slice(k)
    let start_values = nums.slice(0, k)

    let new_array = [...end_values, ...start_values]
    return new_array
}

console.log(rotateArray(start_array, k))

// optimal way
function rotateRightOptimal(arr, k) {
    const n = arr.length;
    // Handle edge cases: empty array or no rotation needed
    if (n === 0 || k === 0) {
        return arr;
    }

    // Ensure k is within array bounds (e.g., rotating by 7 on array of length 7 is same as 0 rotations)
    k = k % n;
    if (k === 0) { // After modulo, if k is 0, no rotation needed
        return arr;
    }

    // Helper function to reverse a portion of the array in-place
    function reverse(array, start, end) {
        while (start < end) {
            // Swap elements
            [array[start], array[end]] = [array[end], array[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(arr, 0, n - 1);
    // For [1, 2, 3, 4, 5, 6], k=3 -> [6, 5, 4, 3, 2, 1]

    // Step 2: Reverse the first k elements
    reverse(arr, 0, k - 1);
    // For [6, 5, 4, 3, 2, 1], k=3 -> [4, 5, 6, 3, 2, 1] (reversing [6, 5, 4])

    // Step 3: Reverse the remaining n-k elements
    reverse(arr, k, n - 1);
    // For [4, 5, 6, 3, 2, 1] -> [4, 5, 6, 1, 2, 3] (reversing [3, 2, 1])

    return arr; // The array is modified in-place
}
rotateRightOptimal(start_array, k);
console.log(start_array);

// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let s = "())[]{}"
let s_2 = "([])[]]{}{]}"

function validParenthesis(str) {
    const combos = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    let stack = []

    for (let current_bracket of str) {
        if (stack.length === 0) {
            stack.push(current_bracket)
        } else if (current_bracket in combos) {
            stack.push(current_bracket)
        } else {
            let last_value_on_stack = stack[stack.length - 1]
            if (!(last_value_on_stack in combos)) {
                stack.push(current_bracket)
            } else {
                if (combos[last_value_on_stack] === current_bracket) {
                    stack.pop()
                }
            }
        }

    }

    return stack.length === 0
}

console.log(validParenthesis(s_2))


// gemini
function isValid(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (bracketMap[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }

            const lastOpenBracket = stack.pop();

            if (bracketMap[lastOpenBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases:
console.log(")( :", isValid(")("));