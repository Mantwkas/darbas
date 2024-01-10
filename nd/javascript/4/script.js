function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Žvaigzdės užduotis');
//Nupieškite kvadratą iš “*”, kurio kraštines sudaro n=10 “*” simbolių. Pasinaudokite ciklais. Panaudokite css stilių, kad kvadratas ekrane atrodytų kvadratinis.
document.write("<br>1 užduotis:</br>");

    let i = "";
for(let i = 0; i < 100; i++) {
    jes = ". *  ";
    if ((i + 1) % 10 === 0) 
    jes += '<br>';
    document.write(jes);
  }
  //document.write(`<span style="color: red;">${jes[0]}</span>`);}


/*  Metam monetą. Monetos kritimo rezultatą imituojam rand() funkcija, kur 0 yra herbas, o 1 - skaičius. Monetos metimo rezultatus išvedame į ekraną atskiroje eilutėje: “S” jeigu iškrito skaičius ir “H” jeigu herbas. Suprogramuokite tris skirtingus scenarijus kai monetos metimą stabdome:
a.Iškritus herbui;
b.Tris kartus iškritus herbui;
c.Tris kartus iš eilės iškritus herbui;
*/

console.log('Monetos užduotis');

  while (true){
      let moneta = rand(0, 1);
      if (moneta === 1) {console.log('S');}
      else {console.log('H');
      break;}
    }

  console.log('Nauja sąlyga');

  let nulis = 0;
  while (true){
      let moneta = rand(0, 1);
      if (moneta === 1) {console.log('S');}
      else if(moneta === 0){nulis++;
        console.log('H');}
      if (nulis === 3){console.log('Tris kartus iškrito H')
        break;}     
    }

  console.log('Nauja sąlyga');
 
  let metimuSkaicius = 0;
  
  while (metimuSkaicius < 3) {
  let moneta = rand(0, 1);
  if (moneta === 0) {console.log("H");
    metimuSkaicius++}
  else {console.log("S");
 metimuSkaicius = 0;}
  } 
  console.log('Šaškių užduotis');
  /*Kazys ir Petras žaidžiai šaškėm. Petras surenka taškų kiekį nuo 10 iki 20, Kazys surenka taškų kiekį nuo 5 iki 25. Vienoje eilutėje išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartoti tol, kol kažkuris žaidėjas pirmas surenka 222 arba daugiau taškų.*/

  let petroSuma = 0;
  let kazioSuma = 0;
  while (true){
    let petroTaskai = rand(10, 20);
    let kazioTaskai = rand(5, 25);
    petroSuma += petroTaskai;
    kazioSuma += kazioTaskai;
    if (petroSuma >= 222) {console.log(`Laimėjo Petras; (Petro taškai: ${petroSuma}, Kazio taškai ${kazioSuma}).`) 
    break }
    else if (kazioSuma >= 222) {console.log(`Laimėjo Kazys; (Kazio taškai ${kazioSuma}, Petro taškai ${petroSuma}).`) 
    break }
  }
  /*Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinnies ilgis 8.5cm (pilnai sulenda į lentą).
“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
 “Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.*/
 console.log('Vinių užduotis A');
 function newrand(min, max) {
  return min + Math.random() * (max - min);
}
let smugiai = 0;
let kalimuSuma = 425;
 while (true) {
  let kalimas = newrand(5, 20).toFixed(2);
  kalimuSuma -= kalimas;
 if (kalimuSuma >= 0){smugiai++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai} smūgių 5 vinims įkalti.`);*/


let smugiai1 = 0;
let kalimuSuma1 = 85;
 while (true) {
  let kalimas1 = newrand(5, 20).toFixed(2);
  kalimuSuma1 -= kalimas1;
 if (kalimuSuma1 >= 0){smugiai1++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai1} smūgių 1 viniui įkalti.`);


let smugiai2 = 0;
let kalimuSuma2 = 85;
 while (true) {
  let kalimas2 = newrand(5, 20).toFixed(2);
  kalimuSuma2 -= kalimas2;
 if (kalimuSuma2 >= 0){smugiai2++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai2} smūgių 2 viniui įkalti.`);


let smugiai3 = 0;
let kalimuSuma3 = 85;
 while (true) {
  let kalimas3 = newrand(5, 20).toFixed(2);
  kalimuSuma3 -= kalimas3;
 if (kalimuSuma3 >= 0){smugiai3++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai3} smūgių 3 viniui įkalti.`);

let smugiai4 = 0;
let kalimuSuma4 = 85;
 while (true) {
  let kalimas4 = newrand(5, 20).toFixed(2);
  kalimuSuma4 -= kalimas4;
 if (kalimuSuma4 >= 0){smugiai4++}
 else {
  break
 }
}
console.log(`Reikėjo ${smugiai4} smūgių 4 viniui įkalti.`);

let smugiai5 = 0;
let kalimuSuma5 = 85;
 while (true) {
  let kalimas5 = newrand(5, 20).toFixed(2);
  kalimuSuma5 -= kalimas5;
 if (kalimuSuma5 >= 0){smugiai5++}
 else {
  break
 }
}
 console.log(`Reikėjo ${smugiai5} smūgių 5 viniui įkalti.`);
let all = smugiai1 + smugiai2 + smugiai3 + smugiai4 + smugiai5;
console.log(`5 vinims įkalti reikėjo: ${all}.`);


console.log('Vinių užduotis B');
let stiprusKalimai1 = 85;
let smugiuota1 = 0;
while (stiprusKalimai1 >= 0) {
  let smugis1 = rand(0, 1);
  let stiprusSmugis1 = newrand(20, 30).toFixed(2);
  if(smugis1 === 1) {stiprusKalimai1 -= stiprusSmugis1;
smugiuota1++
  }
  else {smugiuota1++
      }
}
console.log(`Pirmas vinis:${smugis1} ${smugiuota1} ${stiprusKalimai1.toFixed(2)}`);

let stiprusKalimai2 = 85;
let smugiuota2 = 0;
while (stiprusKalimai2 >= 0) {
  let smugis2 = rand(0, 1);
  let stiprusSmugis2 = newrand(20, 30).toFixed(2);
  if(smugis2 === 1) {stiprusKalimai2 -= stiprusSmugis2;
smugiuota2++
  }
  else {smugiuota2++
      }
  console.log(`Antras vinis:${smugis2} ${smugiuota2} ${stiprusKalimai2.toFixed(2)}`);
}
let stiprusKalimai3 = 85;
let smugiuota3 = 0;
while (stiprusKalimai3 >= 0) {
  let smugis3 = rand(0, 1);
  let stiprusSmugis3 = newrand(20, 30).toFixed(2);
  if(smugis3 === 1) {stiprusKalimai3 -= stiprusSmugis3;
smugiuota3++
  }
  else {smugiuota3++
      }
  console.log(`Trečias vinis:${smugis3} ${smugiuota3} ${stiprusKalimai3.toFixed(2)}`);
}

let stiprusKalimai4 = 85;
let smugiuota4 = 0;
while (stiprusKalimai4 >= 0) {
  let smugis4 = rand(0, 1);
  let stiprusSmugis4 = newrand(20, 30).toFixed(2);
  if(smugis4 === 1) {stiprusKalimai4 -= stiprusSmugis4;
smugiuota4++
  }
  else {smugiuota4++
      }
  console.log(`Ketvirtas vinis:${smugis4} ${smugiuota4} ${stiprusKalimai4.toFixed(2)}`);
}
let stiprusKalimai5 = 85;
let smugiuota5 = 0;
while (stiprusKalimai5 >= 0) {
  let smugis5 = rand(0, 1);
  let stiprusSmugis5 = newrand(20, 30).toFixed(2);
  if(smugis5 === 1) {stiprusKalimai5 -= stiprusSmugis5;
smugiuota5++
  }
  else {smugiuota5++;
      }
  console.log(`Penktas vinis:${smugis5} ${smugiuota5} ${stiprusKalimai5.toFixed(2)}`);
}
let allSmugiuota= smugiuota1 + smugiuota2 + smugiuota3 + smugiuota4 + smugiuota5;
console.log(`Penkiems vinims įkalti reikia: ${allSmugiuota} bandymų.`);