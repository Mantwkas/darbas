function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// iš f masyvo ištrinkite elementus kurie:
// Yra lyginiai;
// Nelyginiai;
// Dalinasi iš 3;
// Yra lygūs savo indeksui;
// Yra mažesni nei 5 arba didesni nei 8;
// Yra  nuo 2 iki 5;
// kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
// kurių suma su sekančiu elementu masyve yra lyginė
	
// Po kiekvienos filtracijos naujai sugeneruokite masyvą f

//DRY - dont repeat yourself

function getNextElement(array, index) {
    let nextElement;
    if(array.length - 1 === index) return array[0];
    else return array[index + 1];
}


function generateArrayOfRandomNumebers(min, max, countOfElements) {
    let array = [];
    for (let i = 0; i < countOfElements; i++) {
        array.push(rand(min, max));
    }
    return array;
}

console.log('masyvas');
let arr = generateArrayOfRandomNumebers(0, 10, 20);

for (let i = 0; i < 20; i++) {
    arr.push(rand(0,10));
 }

console.log(arr);

console.log('a) Išfiltruoti lyginiai skaiciai');

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        arr.splice(i, 1);
        i--;
    }
}
console.log(arr);
//-----------------------------------------------------------------------

console.log('b) Išfiltruoti nelyginiai skaiciai');

let arr1 = generateArrayOfRandomNumebers(0, 10, 20);

 for (let i = 0; i < 20; i++) {
     arr1.push(rand(0,10));
 }

console.log(arr1);
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] % 2 === 1) {
        arr1.splice(i, 1);
        i--;
    }
}
console.log(arr1);
//-----------------------------------------------------------------------


console.log('c) Išfiltruotas skaičiai, kuris dalijasi iš 3');

let arr2 = generateArrayOfRandomNumebers(0, 10, 20);

 for (let i = 0; i < 20; i++) {
     arr2.push(rand(0,10));
 }

console.log(arr2);
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] % 3 === 0) {
        arr2.splice(i, 1);
        i--;
    }
}
console.log(arr2);


//-----------------------------------------------------------------------
console.log('d) Išfiltruotas skaiciai lygus indeksui');

let arr3 = generateArrayOfRandomNumebers(0, 10, 20);

for (let i = 0; i < 20; i++) {    
    arr3.push(rand(0,10));
}

console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
    if(i === arr3[i]) {
        arr3.splice(i, 1);
        i--;
    }
}
console.log(arr3);
//-----------------------------------------------------------------------
console.log('e) Išfiltruoti skaičiai mažesni nei 5 arba didesni nei 8');

let arr4 = generateArrayOfRandomNumebers(0, 10, 20);

for (let i = 0; i < 20; i++) {
   arr4.push(rand(0,10));
}

console.log(arr4);
for (let i = 0; i < arr4.length; i++) {
    if( arr4[i] < 5 || arr4[i] > 8) {
        arr4.splice(i, 1);
        i--;
    }
}
console.log(arr4);

//-----------------------------------------------------------------------
console.log('f) Išfiltruoti skaičiai, kurie yra nuo 2 iki 5;');

let arr5 = generateArrayOfRandomNumebers(0, 10, 20);

 for (let i = 0; i < 20; i++) {
    arr5.push(rand(0,10));
}

console.log(arr5);
for (let i = 0; i < arr5.length; i++) {
    if( arr5[i] >= 2 && arr5[i] <= 5) {
        arr5.splice(i, 1);
        i--;
    }
}
console.log(arr5);

//-----------------------------------------------------------------------
console.log('g) Išfiltruoti skaičiai, kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)');

let arr6 = generateArrayOfRandomNumebers(0, 10, 20);

 for (let i = 0; i < 20; i++) {
    arr6.push(rand(0,10));
 }

console.log(arr6);
for (let i = 0; i < arr6.length; i++) {
    //patikriname ar elementas yra paskutinis, jei taip - kitas el. imamas pirmas masyvo elementas, jei ne - sekantis [i + 1]

    let nextElement = getNextElement(arr6, i);
     let nextElement;
    if(arr6.length - 1 === i) {
        nextElement = arr6[0];
    }
    else{
        nextElement = arr6[i + 1];
    }

    if( (arr6[i] + nextElement) >= 10) {
        arr6.splice(i, 1);
        i--;
    }
}
console.log(arr6);

//-----------------------------------------------------------------------
console.log('h) Išfiltruoti skaičiai, kurių suma su sekančiu elementu masyve yra lyginė;');

let arr7 = generateArrayOfRandomNumebers(0, 10, 20);

for (let i = 0; i < 20; i++) {
    arr7.push(rand(0,10));
}

console.log(arr7);
for (let i = 0; i < arr7.length; i++) {
    //patikriname ar elementas yra paskutinis, jei taip - kitas el. imamas pirmas masyvo elementas, jei ne - sekantis [i + 1]

    let nextElement = getNextElement(arr7, i);
     let nextElement;
     if(arr7.length - 1 === i) {
         nextElement = arr7[0];
    }
    else{
    
    linextElement = arr7[i + 1];
     }

    if( (arr7[i] + nextElement) % 2 === 0) {
        arr7.splice(i, 1);
        i--;
    }
}
console.log(arr7);