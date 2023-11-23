// Alice and Bob each created one problem for HackerRank.
// A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories:
// problem clarity, originality, and difficulty.

// The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]),
// and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

// The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

let aliceArr = [];
let bobArr = [];
let alice = 0;
let bob = 0;

//Bucle to create an array with random nums
for (let i = 0; i <= 2; i++){
    aliceArr.push(Math.floor(Math.random() * 99) + 1);
}

//Bucle to create an array with random nums
for (let i = 0; i <= 2; i++){
    bobArr.push(Math.floor(Math.random() * 99) + 1);
}

for (let i = 0; i < aliceArr.length; i++){

    if (aliceArr[i] > bobArr[i]){
        alice += 1;
    }

    else if (aliceArr[i] < bobArr[i]){
        bob += 1;
    }

}

console.log("\n[" + aliceArr + "]\n[" + bobArr + "]");
console.log("\n[" + alice + ", " + bob + "]\n");
