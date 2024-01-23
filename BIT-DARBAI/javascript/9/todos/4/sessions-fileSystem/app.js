//----------------------------------------File System----------------------------------------------------------------------------------------------------------------------------//
//File System - issaugoti duomenys ilgalaikeje atminityje(diske/data.json faile) (ne ram)
//File System - integruotas i node.js

//Importuoti/gauti moduli
const fileSystem = require("fs");  
//importuoti pati json faila
const data = require('./data.json');
//importuoti express bibliotekać
const express = require('express');
// kad veiktu sesijos/cookies
const session = require('express-session');

const app = express(); // sukuria nauja serveri su duotu portu

//nustatymai: Middleware panaudojamas
app.use(session({
    secret: 'barcelona',
    saveUninitialized: true,
    resave: false,
    cookie: {httpOnly: true},
})
);


// console.log(data); //matome duomenys : objekta kuriuo galima manipuliuoti (vietoj "read")
// data.countOfVisitors++; //manipulacija 
// console.log(data); // data pasikeite bet tik cia o ne data.json faile 

//--------------- READ: A - sinchroniniu budu. failo "data.jason" duomenu gavimas (senas budas)-----------------------------------

//asinchronine funkcija: reiki laiko kad info suvaiksciotu tad async. Ten kur reikia pristabdyti koda kad is pirmo gauti info + await
async function readFile () {
    // kad perskaityti duomenu baze "data.json". Grazina failo turini kaip "fileData"
        // 1 patametras: kelias iki paties failo (relativus pagr.direktoriajai app.js)
        // 2 patametras(nera butinas): callback f. kas bus kai iskris error
         
        const fileData = await fileSystem.promises.readFile('./data.json', (err)=>{
                if (err) console.log(err)
            });
        // Kai "failData" buna perskaitoma galima juo naudotis 
        console.log(JSON.parse(fileData)); // JSON.parse - gali teksta paversti i javascript objekta
        //  fileDtata yra stringas, o kad juo naudotis reikia isiparsinti kaip JSON
}
readFile(); 

//  *lengvesnis budas importuotis "data" kintamaji ir poto juo naudotis: const data = require('./data.json'); 

// sinchroninis buda: viena operacija vienu metu (reiketu vengti)
// asinchroninis buda: 3 oepracijos (lygegreciai) vienu metu. Sutrumpeja ivykdymo laikas

//---------------------------------------- WRITE: A - sinchronine Funkcija----------------------------------------------------------------------------------------------------------------------------//

//Irasymo "asinchronine" funkcija 
async function writeFile(obj) { //i parametru paduodamas duomenys/objektas kurias norima irasyti i data base ("data.json")
   await fileSystem.writeFile ('./data.json', JSON.stringify(obj), "utf-8", (err) => { // utf-8: pagrindinis encodinimas naudojamas musu failu sistemoje 
        // console.log(err)}); 
       if (err) console.log(err); // bus matomas tik tada jei jis egzostuoja
})
}

// writeFile(data); // nodemon nesustoja

// sinchroninis buda: viena operacija vienu metu (reiketu vengti)
// asinchroninis buda: 3 oepracijos (lygegreciai) vienu metu. Sutrumpeja ivykdymo laikas



//--------------- READ: sinchroniniu budu. failo "data.jason" duomenu gavimas (senas budas)-----------------------------------

// async function readFile () {
//         const fileData = fileSystem.readFileSync('./data.json', "utf-8");
//         console.log(JSON.parse(fileData)); // JSON.parse - gali teksta paversti i javascript objekta
// }       //fileDtata yra stringas, o kad juo naudotis reikia isiparsinti kaip JSON
// readFile(); 

// console.log(data);


//------------------------------------------WRITE: Sinchronine Funkcija----------------------------------------------------------------------------------------------------------------------------//

// // Irasymo "sinchronine" funkcija - reikalinga tam kad pasikeistu data.json faile  
// async function writeFile(obj) { //i parametrus paduodami duomenys/objektas kurios norima irasyti i data base ("data.json")
//     fileSystem.writeFileSync ('./data.json', JSON.stringify(obj)); //writeFileSync nereikalauja callback f. //faile randasi duomeny text formatu tad reikia pasiversti i string
// }
// writeFile(data);

//------------------------------------------- 1 Endpoints (main) ----------------------------------------------------------------------------------------------------------------------------//
//siame endpointe nustatomas nustatomas sesijos vartotojo id

app.get("/", async(req,res) =>{ //jei norima laukti ankstesnes async funkcijas jas reikia ir kviesti is async funkciju tad cia callback keiciamas i  async funkcija
    data.countOfVisitors++; //modifikacija
    await writeFile(data); //modifikuotas duomenys atsiranda data.jason faile
    req.session.userId = 1 //sesijos kintamasis: nustatomas sesijos vartotojo id
    res.status(200).json ({
        message: `Hello, you are a ${data.countOfVisitors} visitor`,
    });
});


//------------------------------------------- 2 Endpoints (get user id) ----------------------------------------------------------------------------------------------------------------------------//
app.get("/whats-my-id", (req, res) => {
    // console.log(req.session.userId); //req.session - yra objektas, skirtas saugoti vartotojo kintamiesiems
    if (req.session.userId) {
        console.log(req.session.userId)
        return res.status(200).json({userId: req.session.userId}); 
    } else {
        req.session.userId = 1;
        return res.status(200).json({userId: req.session.userId}); 
    }
    return res.send("very good");
});

//------------------------------------------- 3 Endpoints (get users ) ----------------------------------------------------------------------------------------------------------------------------//
//tie patys id gali buti gaunami ir kituose endpointuose
app.get("/users", (req, res) => {
    console.log(req.session.userId); 
    res.status(200).json({message: "zinute"}); 
})


//--------------------------------------------------Serveris ----------------------------------------------------------------------------------------------------------------------------//

app.listen (3000, () =>{
    console.log("Serveris pasileido (3000): http://localhost:3000/");
})

//suinstaliavus nginx (kad domenai butu tokie patys):
//rodo result ant http://localhost:3000/ ir http://localhost/server/  nes tas pats serveris paleistas 
//http://localhost/ - rodo 502 Bad Gateway nes jis yra 