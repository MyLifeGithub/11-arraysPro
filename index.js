let arr = [
    1,2,2,3,3,4
]

// arr.splice(2,4,x)  from 2 index slice 4 elements nd instead of them put X
// ADD
// arr.unshift() - add to the start
// arr.push() - add to the end

// DELETE
// arr.pop() - delete from the end and returns it
// arr.shift() - delete from the start

// .map, .forEach, .filter, .find
// arr.map((item) => {
//     if (item > 100) {
//         console.log(item);
//     }
// })
const nums = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
    70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100
];
nums.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('fizzbuzz : ' + num);
    }
    else if (num % 3 === 0) {
        console.log('fizz : ' + num);
    }
    else if (num % 5 === 0) {
        console.log('buzz : ' + num);
    }
    else {
        console.log('num does not divides on 3 or 5');
    }
})