function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let sk = rand(0, 99);
  
  if (sk >= 0 && sk <= 10) {
    let rez = sk ** 2;
    console.log(`1 kategorija: ${sk}.  skaicius: ${rez}.`);
  }
  else if (sk >= 11 && sk <= 19) {
    console.log(`2 kategorijos skaicius: ${sk}.`);
  }
  
  else if (sk >= 20 && sk <= 49 && sk % 2 === 0) {
    let desimtis = +sk.toString()[0];
    let rez1 = sk - desimtys;
    console.log(`3 kategorija: ${sk}.  skaicius: ${rez1}.`);
  }
  
  else if (sk >= 20 && sk <= 49 && sk % 2 !== 0) {
    let vienetai = sk % 10;
    let rez2 = (vienetai + sk) / 2;
    console.log(`4 kategorija: ${sk}. skaicius: ${rez2}.`);
  }
  
  else if (sk >= 50 && sk % 3 === 0) {
    let sk1 = rand(97, 122), sk2 = rand(97, 122), sk3 = rand(97, 122), sk4 = rand(97, 122);
    let string = String.fromCharCode(sk1) + String.fromCharCode(sk2) + String.fromCharCode(sk3) + String.fromCharCode(sk4);
    console.log(`5 kategorija: ${sk}. raides: ${string}.`);
  } 