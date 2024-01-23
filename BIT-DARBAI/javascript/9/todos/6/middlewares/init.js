//"initialization" of middlewares

// importuoti express biblioteka: plengvina serverio sukurima, darba su REST API (CRUD: budas kaip klientas bendrauja su serveriu)
const express = require ("express");
// importuoti express-sessions:
const sessions = require ("express-session");
// instaliuoti CORS biblioteka (npm install cors):  kad klinetas galetu kreiptis i express serveri. Cors nustatymai leidzia gauti "body" parametra
const cors = require ("cors"); //7.1 //kad gauti cors bibliotekos metodus
// sesijos irasymas i failus galimas su moduliu filestore (npm i session-file-store)
const FileStore = require("session-file-store")(sessions) //nurodoma kad bus saugojamos "(sessions)" ir dar pridedamas Middleware "store"

function initialize (server) {

//server.use - nustato pacius nustatymus kiekvinam requestui
server.use(cors({ //kad serveris naudotu cors biblioteka (Middleware functions skirta headeriu nustatymams).  Middleware leidžia vykdyti kodą tarp įeinančių užklausų ir pagrindinės programos logikos, o tai apima ir manipuliavimą headeriais. 
    origin: 'http://127.0.0.1:5500',//nustatymai rasome objekte  - cookies nustatymas tam kad backedn zinotu su kurias websites dirbame (register url)
    credentials: true, 
    }));

server.use(express.json()) // naudojamas dar vienas Middleware funkcija (express.json()) - konfiguruojami headears kad butu galima gauti JSON formato duomenys. (tuos kurie ateina is kliento " console.log(req.body)")
//11.2.naudoti express-sessions: su Middleware (importuojamas cia ir sukurtas kitu )

server.use(sessions({ //Sessions Middleware: sesija turetu buti issaugojama kas karta kai uzsiregistruojame
//nustatymai(parametrai) sesijoms(kaip saugomos)/koks serverio slaptasis raktas (visi sesijos raktai encodinami naudojant slaptaji rakta)
secret: "Klaipeda", //serveris encodins sesijas pasinaudojant siuo raktiniu zodizu
store: new FileStore({ //nusako kur sesijos yra saugojamos. Kas karta kai pasileis app, ji patikrins ar egzistuoja folderi "sessions" ir jei taip, jis bus naudojamas o jei ne bus sukuriamas toks folderis. Kas karta kai nustatoma nauja sesija tos sesijos failas turetu buti issaugojamas "sessions" folderyje
    path: "./sessions",
    retries: 3, //jei cookie is kliento nera atpazinstamas, kiek kartu galima bandyti ta pati suasaini atrasti tarp sesiju
    ttl: 3600, //kiek sec galioja pati sesija. (keik laiko bus laikomas pats failas sukurtas sesiju folderyje) PVZ, kai vartotoas uzsiregistruoja, susikuria cookies, kuris sugeneruoja faila sesiju folderyje. Po valandos kai ta sesija nebegalios, tas failas bus automatiskai istrintas ir seisja bus sugeneruojama is naujo.
}),
resave: false, //kad is naujo NEirasyti sesijos rakta, kas karta kai ivykdomas request i serveri 
saveUninitialized: true, // be sio nustatymo cookie negaletu buti issaugojamas jei jis nera inicializuotas
cookie: { secure: false, expires: 360000 }, //is kiekvienos svetaines saugomas pc lokalei (cookie- serverio sugeneruotas raktas. Saugomas tiek serveryje tiek pas vartotoja pc. Pagal ji serveris atpazista kad tas pats vartotojas sugrizo i svetaine po atsijungimo). Expires nustato cookie galiojima milisekundemis kas reiskia kad pati sesija galioj 1 valanda
// + pridedamas "credentials" nustatymas script.js
        })  
    );
}

//kad funkcija exportuoti:
    module.exports = initialize