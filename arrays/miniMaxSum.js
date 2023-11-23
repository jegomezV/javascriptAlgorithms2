// Given five positive integers,
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

let randomArr = [];
let minNum = Infinity;
let maxNum = 0;
let sum = 0;

//Bucle to create an array with random nums
for (let i = 0; i <= 4; i++){
    randomArr.push(Math.floor(Math.random() * 9) + 1);
}


for (let i = 0; i < randomArr.length; i++){

    sum += randomArr[i];

    if (minNum > randomArr[i]){
        minNum = randomArr[i];
    }

    if (maxNum < randomArr[i]){
        maxNum = randomArr[i];
    }
}

finalOperation = (sum - maxNum) + " " + (sum - minNum);

console.log("\nThe array is: " + randomArr + ".\n")
console.log("\nThe final op is: " + finalOperation + ".\n")
