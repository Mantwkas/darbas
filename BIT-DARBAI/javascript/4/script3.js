function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let fibonacci = [0, 1];

fibonacci[2]= fibonacci[1]+fibonacci[0];
//fibonacci.puch(fibonacci[1]+fibonacci[0]);

for (let i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
// fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}

console.log (fibonacci);

let atsitiktiniaiskaiciai = [];

for (let i = 0; i < 10; i++) {
let randomskaicius = rand(0, 10);
atsitiktiniaiskaiciai.push(randomskaicius);
//atsitiktiniaiskaiciai[i] = randomskaicius;
}
console.log(atsitiktiniaiskaiciai);


for (let i = 0; i < atsitiktiniaiskaiciai.length; i++) {
    if(atsitiktiniaiskaiciai[i] % 2 !== 0){
    console.log(atsitiktiniaiskaiciai[i]);}
}

/*1 užduotis. Sukurkite masyvą iš 20 elementų:
Kurių reikšmės a: 0, 1, 2 …, 18 ,19;
Kurių reikšmės b: 1,2 3, … ,19, 20
Kurių reikšmės c: 19, 18 … 2, 1, 0
Kurių reikšmės d: 20, 21, 22…. 38, 39..
Kurių reikšmės e: 49, 48, 47…. 21, 20
Su atsitiktinėmis reikšmėmis f nuo 0 iki 10*/
console.log("1 užduotis");
console.log("a");

let newa = [];
for(let i = 0; i < 20; i++) {
     newa.push(i);
}
console.log(newa);
console.log("b");
let newb = [];

for(let i = 1; i < 21; i++) {
    newb.push(i);
}
console.log(newb);
console.log("c");
let newc = [];

for(let i = 0; i < 20; i++) {
    newc.push(i);
}
console.log(newc.reverse());
console.log("d");
let skaiciaid = 20;
let newd = [];
for(let i = 0; i < 20; i++) {
    newd.push(skaiciaid++);  
}
console.log(newd);
console.log("e");
let newe = [];
let skaiciaie = 49;
for(let i = 0; i < 20; i++) {
    newe.push(skaiciaie--);
}
console.log(newe);

console.log("f");
let skaiciaif = [];

for(let i = 0; i < 20; i++) {
   let newf = rand(0, 10);
    skaiciaif.push(newf);
}
console.log(skaiciaif);

/*2 užduotis. Pasinaudokite join funkcija ir atspausdinkite vieno iš ankščiau sukurtų masyvų reikšmes tokia tvarka (pvz masyvas a) 0 -> 1 -> 2…. -> 18 -> 19;
*/
console.log("2 užduotis");
let skaiciai2 = [];

for(let i = 0; i < 20; i++) {
   let new2 = rand(0, 10);
    skaiciai2.push(new2);
}
console.log(skaiciai2);
console.log(skaiciai2.join("->"));
/*3 užduotis. Iš f masyvo ištrinkite elementus kurie:
Yra lyginiai;
Nelyginiai;
Dalinasi iš 3;
Yra lygūs savo indeksui;
Yra mažesni nei 5 arba didesni nei 8;
Yra  nuo 2 iki 5;
kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
kurių suma su sekančiu elementu masyve yra lyginė
console.log("3 užduotis");*/
console.log("3 užduotis");
//Sukuriama funkcija su pavadinimu generateArrayOfRandomNumbers
//Skliausteliuose nurodomi naudotini funkcijos parametrai.
function generateArrayOfRandomNumbers(min, max, countOfElements) {
	let array = [];
	for (let i = 0; i < countOfElements; i++) {
		array.push(rand(min, max));
	}
	//gražinama reikšmė
	return array;
}

function getNextElement(array, index) {
	if (array.length - 1 === index) return array[0];
	else return array[index + 1];
}

//Vykdomos filtracijos iš 20 elementu masyvo su reikšmėmis nuo 0 iki 10 pagal užduoties sąlygą.
//prieš kiekvieną filtraciją, iš naujo susigeneruoti masyvą
let arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

//a. Yra lyginis

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//B salyga: yra nelyginis

arr = generateArrayOfRandomNumbers(0, 10, 20);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 !== 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//c. Dalinasi iš 3;

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 3 === 0) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//d. Yra lygus savo indeksui;

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (i === arr[i]) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);

//e. Yra mažesnis nei 5 arba didesnis nei 8;

arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] < 5 || arr[i] > 8) {
		arr.splice(i, 1);
		i--;
	}
}
console.log(arr);
//f. Yra  nuo 2 iki 5;
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= 2 && arr[i] <= 5) {
		arr.splice(i, 1);
		i--;
	}
}

console.log(arr);

//g. kurių suma su sekančiu elementu masyve yra dviženklė (jei reikšmė paskutinė masyve, sekančiu elementu laikykite pirmąjį masyvo elementą)
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	//1. patikriname ar elementas yra paskutinis
	//jei taip kaip sekanti elementa imame pirmaji masyvo elementa arr[0]
	//jei ne kaip sekanti elementa imam sekanti arr[i + 1]
	let nextElement = getNextElement(arr, i);

	if (arr[i] + nextElement >= 10) {
		arr.splice(i, 1);
		i--;
	}
}
//DRY - Dont repeat yourself
console.log(arr);

//h kurių suma su sekančiu elementu masyve yra lyginė
arr = generateArrayOfRandomNumbers(0, 10, 20);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
	//1. patikriname ar elementas yra paskutinis
	//jei taip kaip sekanti elementa imame pirmaji masyvo elementa arr[0]
	//jei ne kaip sekanti elementa imam sekanti arr[i + 1]
	let nextElement = getNextElement(arr, i);
	if ((arr[i] + nextElement) % 2 === 0) {
		arr.splice(i, 1);
		i--;
	}
}

console.log(arr);
//Sukurkite atsitiktinio stringo generavimo algoritmą. Pasinaudokite String.fromCharCode(skaicius) funkcija, kad sugeneruoti atsitiktinę raidę. 

console.log('4 užduotis');
for (let i = 0; i < 15; i++) {
	let kintamasPirmas = rand(97,122);
	console.log(String.fromCharCode(kintamasPirmas)); 
	}
	

//Sukurti masyvą iš 100 atsitiktinių skaičių. Prieš pridėdami elementą prie masyvo patikrinkite  ar skaičius yra nuo 40 iki 60. Jei taip, jo nepridėkite prie masyvo. Galiausiai masyvas turi turėti 100 elementų
console.log('5 užduotis');
let masyvas = [];

for(let i= 0; i < 100; i++){
	let kintamasis = rand(0, 100);
	if(kintamasis >= 40 && kintamasis <= 60)
		masyvas.push(kintamasis)
	else i--;
}

console.log(masyvas);	
		
//Pasinaudojant document.write() funkcija išveskite lyginius 5 uždavinio masyvo skaičius su spalva - žalia, o nelyginius su spalva - raudona;
console.log('6 užduotis');

for(i = 0; i < masyvas.length; i++){
if (masyvas[i] % 2 === 0){
 document.write(`<red>${masyvas[i]} </red>`);}
else document.write(`<green>${masyvas[i]}</green>`);
}

//Sugeneruokite 80 atsitiktinių skaičių nuo 8 iki 32. Apskaičiuokite visų šiu skaičių vidurkį.
console.log('7 užduotis');
let atsitiktiniai = [];
let vidurkis = 0;
for(let i= 0; i < 80; i++){
	let betkokie = rand(8, 32);
	atsitiktiniai.push(betkokie);
	for(i = 0; i < atsitiktiniai.length; i++){
	vidurkis += atsitiktiniai[i];
	}
}
let result= vidurkis / atsitiktiniai.length;

console.log(result);