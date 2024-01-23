function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function categoryOne(sk) {
    let rez = sk * 3;
    return rez;
}

function categoryTwo(sk) {
    let rez = (sk - 4) ** 2;
    return rez;
}

function categoryThree(sk) {
    let rez = sk + 10;
    return rez;
}

function categoryFour(sk) {
    let rez = 100 - sk;
    return rez;
}
function categoryFive(sk) {
    let rez = sk / 4;
    return rez;
}


let sk = rand(0, 99);

if(sk <= 5) {
    console.log(`Skaicius: ${sk}\t 1 Kategorija \t Rezultatas: ${categoryOne(sk)}`);
}
else if(sk >= 6 && sk <= 15) {
    console.log(`Skaicius: ${sk}\t 2 Kategorija \t Rezultatas: ${categoryTwo(sk)}`);
}
else if(sk >= 16 && sk <= 30 && sk % 5 === 0) {
    console.log(`Skaicius: ${sk}\t 3 Kategorija \t Rezultatas: ${categoryThree(sk)}`);
}
else if(sk >= 31 && sk <= 45 && sk % 2 !== 0) {
    console.log(`Skaicius: ${sk}\t 4 Kategorija \t Rezultatas: ${categoryFour(sk)}`);
}
else if(sk >= 46 && sk <= 99 && + sk.toString()[1] === 6 || + sk.toString()[1] === 7 ) {
    console.log(`Skaicius: ${sk}\t 5 Kategorija \t Rezultatas: ${categoryFive(sk)}`);
}