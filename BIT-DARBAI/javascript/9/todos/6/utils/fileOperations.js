//Visos operacijos susijusios su failais.
// Pagalbines funkcijos: fauilu irasymui, duomenu gavimui...

const fs = require('fs');//failu sistemos modulis


//irasyma i faila: kai ivyksta registracija si funkcija irasys i data faila (tam reikalingas modulis file system)

async function writeFile(obj) {
    await fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
        if (err) console.error(err);
    });
}

//kad funkcija exportuoti:
module.exports = {writeFile} 