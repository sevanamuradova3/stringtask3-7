
//const arr = [2, 4, 5, 9, 1];
//3. Bu massivin minimum elementini tapın: 
//string metodu ile;
const massiv = [2, 4, 5, 9, 1];
const minElement = Math.min(...massiv);

console.log("Minimum element:", minElement);
//4. Bu massivin maksimum elementini tapın


const maxElement = Math.max(...massiv);

console.log("Maksimum element:", maxElement);


//5. Bu massivin minimum elementinin indeksini tapın.
const minElementIndex = massiv.indexOf(minElement);

console.log("Minimum elementin indeksi:", minElementIndex);
//6. Bu massivin maksimum elementinin indeksini tapın.
const maxElementIndex= massiv.indexOf(maxElement);
console.log("Maksimum elementin indeksi:", maxElementIndex);
//7. Tək indeksli massiv elementlərinin cəmini hesablayın

let sum = 0;

for (let i = 0; i < massiv.length; i += 2) {
    sum += massiv[i];
}
console.log("Tək indeksli elementlərin cəmi:", sum);

//for of ile

let sum1 = 0;

for (const element of massiv) {
    const index = massiv.indexOf(element);
    if (index % 2 === 0) {
        sum1 += element;
    }
}

console.log("Tək indeksli elementlərin cəmi:", sum1);
