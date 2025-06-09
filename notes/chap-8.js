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

let dummy_arr = [1, 2, 3, 5, 6, 2345, 43, 12, 412, 341, 234, 1, 2, 3, 4, 5]



// 4. Rotate Array
// Question: Rotate an array to the right by k steps, where k is non-negative. 

let start_array = [1, 2, 3, 4, 5, 6]
let k = 3
let finish_array = [4, 5, 6, 1, 2, 3]


// 5. Valid Parentheses
// Question: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

let s = "()[]{}"
let s_2 = "([])[]]{}{]}"
