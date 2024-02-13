function add(a, b) {
    return a+b
}
console.log(add(5, 6))


function isEven(number){
    return number % 2 === 0
}

function greet(name)
{
    console.log(`Labas ${name}`)
}

greet("Mantas");


function factorial(number) {
    if(number === 0 || number === 1) return 1
    else 
    return number * factorial(number - 1)
}

const factorial12 = factorial(5);
console.log(factorial12);

function prasuktiCikla(kartai){
    if(kartai > 0) console.log("Veiksmas nr." + kartai);
    prasuktiCikla(kartai-1)

}
prasuktiCikla();

function celsiusToFarenheit(celsius){
    return (celsius * 9/5)+32
}
 celsiusToFarenheit(25);

 function getMaxNumber(array){
    return Math.max(...array)
 }
console.log(getMaxNumber([5, 15, 120, 100, 14, 2]));

function getRandNumber(min, max){
    return Math.floor(Math.random() * (max + min + 1))+min;
}
consolse.log(getRandNumber(0, 10));
// ... išskaido masyvą po vieną elementą.
function getQueValue(arr){
return [...new Set(arr)]

}

function squereValue(arr){
    return arr.map(number=> number *number)
}
const squered = squereValue([1, 2, 3, 4, 5]);

function sumazintiMasyva(arr, start, end){
    return arr.slice(start, end)
}
const sliced = sumazintiMasyva([1, 5, 5, 3, 4, 6, 6, 7, 8], 2, 4);
console.log(sliced);

function sumArr(arr){
    let sum = 0;
    for(let i = 0; i <  arr.length; i++){
        sum += arr[i]}
    return sum;
}
console.log(sumArr([1, 2, 3 ]))