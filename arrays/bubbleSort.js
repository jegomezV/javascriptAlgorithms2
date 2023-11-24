//Bubblesort challenge

let randomArr = [];
let aux = [];

//Bucle to create an array with random nums
for (let i = 0; i <= 15; i++){
    randomArr.push(Math.floor(Math.random() * 99) + 1);
}
console.log(randomArr);

for (let i = 0; i < randomArr.length; i++){
    for (let j = 0; j < randomArr.length; j++){

        if (randomArr[j] > randomArr[j + 1]){
        aux = randomArr[j];
        randomArr[j] = randomArr[j + 1];
        randomArr[j + 1] = aux;
        }

    }

}
console.log(randomArr);

