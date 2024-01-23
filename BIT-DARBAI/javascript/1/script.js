function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// pirma uzduotis

let aktoriausVardas = "Ryan";
let aktoriausPavarde = "Gosling";

if(aktoriausVardas.length < aktoriausPavarde.length)
{
    console.log(aktoriausVardas);
}

// pirma uzduotis su lygiu variantu

let aktoriusVardas = "Ramunas";
let aktoriusPavarde = "Rudokas";

if(aktoriusVardas.length < aktoriusPavarde.length)
{
    console.log(aktoriusVardas);
}
else if(aktoriusVardas.length === aktoriusPavarde.length)
{
    console.log(aktoriusVardas +" "+ aktoriusPavarde);
}
else {
    console.log(aktoriusVardas)
}

// antras uzduotis

let manoVardas = "Mantas", manoPavarde = "Stalionis", manoMetai = "1990", dabar = "2023";
let amzius = dabar - manoMetai;

console.log("Aš esu " + manoVardas + " " + manoPavarde + "." + " Man yra " + amzius + " metai.");

// trecia uzduotis

let asmensVardas = "Mantas";
let asmensPavarde = "Mantauskas";
let asmensInicialai = asmensVardas[0] + " " + asmensPavarde[0];

console.log(asmensInicialai);

// ketvirta uzduotis

let kintamasis = aktoriausVardas.slice(1, 4) + aktoriausPavarde.slice(4, 7);
    console.log (kintamasis)

let a = aktoriausVardas.length;
let b = aktoriausPavarde.length;
let c = aktoriausVardas[a-3] + aktoriausVardas[a-2] + aktoriausVardas[a-1] + aktoriausPavarde[b-3] + aktoriausPavarde[b-2] + aktoriausPavarde[b-1];

console.log(c)

// penkta uzduotis

let naujaData= "11-28-2023";
let menuo = naujaData.slice(0,2);
console.log(menuo)

if(menuo == "01"){console.log("January")};
if(menuo == "02"){console.log("February")};
if(menuo == "03"){console.log("March")};
if(menuo == "04"){console.log("April")};
if(menuo == "05"){console.log("May")};
if(menuo == "06"){console.log("June")};
if(menuo == "07"){console.log("July")};
if(menuo == "08"){console.log("August")};
if(menuo == "09"){console.log("September")};
if(menuo == "10"){console.log("October")};
if(menuo == "11"){console.log("NOVEM-BER")};
if(menuo == "12"){console.log("December")};

// sesta uzduotis

let pavadinimas = 'Once upon a time in hollywood';
let pavadinimasMazosiomis = pavadinimas.toLowerCase();
let done = pavadinimasMazosiomis.replaceAll('o','*');

console.log(done);
    
// septinta uzduotis 

let pirmasNumeris = rand(0, 2), 
    antrasNumeris = rand(0, 2), 
    treciasNumeris = rand(0, 2), 
    ketvirtasNumeris = rand(0, 2);

console.log(pirmasNumeris, antrasNumeris, treciasNumeris, ketvirtasNumeris);

let countZero = 0.
    countOne = 0,
    countTwo = 0;

if(pirmasNumeris === 0) {countZero++;}
else if(pirmasNumeris === 1) {countOne++}
else if(pirmasNumeris === 2) {countTwo++};

if(antrasNumeris === 0) {countZero++;}
else if(antrasNumeris === 1) {countOne++}
else if(antrasNumeris === 2) {countTwo++};

if(treciasNumeris === 0) {countZero++;}
else if(treciasNumeris === 1) {countOne++}
else if(treciasNumeris === 2) {countTwo++};

if(ketvirtasNumeris === 0) {countZero++;}
else if(ketvirtasNumeris === 1) {countOne++}
else if(ketvirtasNumeris === 2) {countTwo++};

console.log("Nulis:", countZero);
console.log("Vienas:", countOne);
console.log("Du:", countTwo);

// astunta uzduotis

let pirma = rand(0,4);
let antra = rand(0,4);

console.log(pirma, antra);

if(pirma >= antra) {result = pirma / antra}
else if(pirma <= antra) {result = antra / pirma};

console.log(result.toFixed(2))

// devinta uzduotis

let one = rand(0,25), 
    two = rand(0,25), 
    three= rand(0,25);

console.log(one, two, three);

if(one < two && one > three )
{
    console.log("vidurinis skaičius yra: " + one)
}
else if(one > two && one < three)
{
    console.log("vidurinis skaičius yra: " + one)
}
if(two < one && two > three)
{
    console.log("vidurinis skaičius yra: " + two)
}
else if(two > one && two < three)
{
    console.log("vidurinis skaičius yra: " + two)
}
if(three < one && three > two)
{
    console.log("vidurinis skaičius yra: " + three)
}
else if(three > one && three < two)
{
    console.log("vidurinis skaičius yra: " + three)
}

// desimta uzduotis

let nama = "Mantas";
let surname = "Mantauskas";

        
let nextWord = nama[0] + surname[0];
let word = nama.slice(0, 3)+ surname.slice(0, 3);

console.log(word)
console.log(nextWord)

// vienuolikta uzduotis

let numer1 = rand(97, 122)
let numer2 = rand(97, 122)
let numer3 = rand(97, 122)

console.log(String.fromCharCode(numer1) + String.fromCharCode(numer2) + String.fromCharCode(numer3))

