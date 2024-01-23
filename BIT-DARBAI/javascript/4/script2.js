function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//   Programiškai “suskaldykite” žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 
document.write("<br>Kita užduotis:</br>");
let i = "";
for(i = 0; i < 400; i++) {
    let jes = "*";
    if ((i + 1) % 50 === 0) 
    jes += '<br>';
    document.write(jes);
}

//Naudokite funkcija rand(). Sugeneruokite atsitiktinį skaičių nuo 1 iki 6 ir jį atspausdinkite atitinkame h tage. Pvz skaičius 3- rezultatas: <h3>3</h3>

let skaicius = rand(1,6);
 document.querySelector("#rezultas").innerText = `Atsakymas: ${skaicius}`;

//Naudokite funkcija rand(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti žali, 0 - raudonas, didesni už 0 mėlyni.
document.write("<br>Kita užduotis:</br>");
let number = "";

for (i = 0; i < 3; i++) {
    number = Math.floor(Math.random() * 21) - 10;
    if (number < 0) document.write(`<h3 style="color: green;">${number}</h3>`)
    if (number === 0) document.write(`<h3 style="color: red;">${number}</h3>`)
    if (number > 0) document.write(`<h3 style="color: blue;">${number}</h3>`)
}

 /*Sukurkite kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.*/

 let kintamieji = ["An American in Paris",
                    "Breakfast at Tiffany's",
                    "2001: A Space Odyssey",
                    "It's a Wonderful Life"];

    for(let i = 0; i < kintamieji.length; i++) {
        let rezult = kintamieji[i].replace(/[aeiou]/gi, '');
        document.querySelector("#rezu").innerText = rezult;
    }

 /*Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos.*/
 document.write("<br>Kita užduotis:</br>");
 let atsitiktiniaiSkaiciai = [];

 for (let i = 0; i < 300; i++) {
     let randomSkaicius = rand(0, 300);
     atsitiktiniaiSkaiciai.push(randomSkaicius);
     if(atsitiktiniaiSkaiciai[i] > 275){
        document.write(`<span style="color: red">${atsitiktiniaiSkaiciai[i]}</span> `);
    } else {
        document.write(`<span style="color: black">${atsitiktiniaiSkaiciai[i]}</span> `);
    }
 }
 let biger = 0;
for (let i = 0; i < atsitiktiniaiSkaiciai.length; i++) {
	if (atsitiktiniaiSkaiciai[i] > 150) biger++;
}
document.write("<br>Didesni: " + biger            );

document.write("<br>Kita užduotis:</br>");

/*Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, kad visi rezultatai matytųsi ekrane.*/
let rezas = "";
 for(let index = 1; index < 3000; index++) {
    if (3000 - 1 === index) rezas += index + " ";
    else if (index % 77 === 0)
    rezas += index + ", ";
   
}
document.querySelector("#rezas").innerText = rezas;

/*Duotas vardų masyvas, kuriame visi vardai prasideda mažąja raide. Reikia sukurti algoritmą, kuris visus vardus konvertuoja į iš didžiosios raidės prasidedančius vardus:*/
let namesArray = [
    'alice', 'bob', 'charlie', 'david', 'emily',
    'frank', 'grace', 'harry', 'isabella', 'jack',
    'kate', 'liam', 'molly', 'nathan', 'olivia',
    'peter', 'quinn', 'rachel', 'steve', 'tina'
];

for (let i = 0; i < namesArray.length; i++) {
    let word = namesArray[i].charAt(0).toUpperCase() + namesArray[i].slice(1);   
    document.write(word + ", ");
    if (namesArray.length - 1 === i) document.write(word + ". ");
}