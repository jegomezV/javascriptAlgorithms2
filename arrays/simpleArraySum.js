// Given an array of integers, find the sum of its elements.

// For example, if the array ar = [1,2,3],1 + 2 + 3 = 6, so return 6.

let randomArr = [];
let sum = 0;

//Bucle to create an array with random nums
for (let i = 0; i <= 10; i++){
    randomArr.push(Math.floor(Math.random() * 100) + 1);
    sum += randomArr[i];
}

console.log("\nThe array is: " + randomArr + ".\n");
console.log("The sum of array is: " + sum + ".\n");
