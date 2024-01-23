// all users endpoints 

const express = require("express"); //plengvina serverio sukurima?
const data = require("../data.json") //importuoti data.json (model). Duomenys su kuriais dirbs controller
const router = express.Router (); //rauter sukurimas
const { writeFile } = require("../utils/fileOperations"); // importuojama funkcija

//1. apsirasyti visus endpointus per router 2. grazinti i index.js faila 

//-------------------------------------POST (new user register)----------------------------------------------------------------------------------------------//
//Is kliento puses atliekamas post request i register endpoint/server. I serveri talpinamos registracijos kai register forma uzpildoma  ir sukuriamas vartotojo objektas (masyve "users")
router.post("/register", async (req, res )=> { // /register endopinte gausime vartotojo registracijos parametrus. gausime req.body - objektas grazinamas kai siunciami is kliento duomeny serveriui 

    //is klineto gaunami laukai: 
    console.log(req.body); //matoma tai ka atsiuncia vartotojas. Pareina JSON formatu ir bus konvertuotas i objekta pacaiame requeste

    //buna klaidu: jie bent vienas is duomeny neateina arba buna undefined tai iskrenta error ir jo toliau validuoti negalima(nes jo nera). Kad nuo to apsisaugoti naudojamas TRY/CHATCH. Cahtch sugauna error ir issiuncia zinute
    try {
const username = req.body.username;
const email = req.body.email;
const password = req.body.password; 
data.users.push({ //objektas pushinamas array "users" (users.push) i faila 
    id: data.userId, // vietoj "id: users.length +1," id imamas is data.json failo
    username: username,
    email: email,
    password: password,
    }); 
    data.userId++;  //naujas uzsiregistraves user ture vis didesni id
    await writeFile(data); // kad atisnuajintu failas kur saugojami users poto kai ivyksta registracija

    //sesijos kintamieji. nustatomas sesijos raktas kai siunciamas atsakymas is serverio. Parametrai: kitamieji kurie saugojami sesijos metu 
    // kas karta kai vartototojas kreipiasi i requesta sie objekto laukai turetu islikti ir saugojami atmintyje (veliau faile) tol kol yra pati sesija. 
    req.session.loggedIn = true;
    req.session.username = username; 
    req.session.userId = data.users[data.users.length - 1].id;  //-1 nes norima gauti is "users" paskutini irasa

    res.send("Registracija sekminga!!"); //kadangi text, tai frontende irgi reikia naudoti .text (ne json)
} catch (err) {
    res.send("Netinkami duomenys");
    }
})

//--------------------------------------GET (get all users in database)------------------------------------------------------------------------------------------//
//Imama info is serverio (users array/data file) apie regist.usersKad pamatyti uzregistruotus vartotojus sukuriamas endpoint: 
router.get("/", (req, res) => {  //kreipdamiesi i sita end point, norime grazinti users masyva
    res.send(data.users); //kai requesto atsakyma- siunciami vartotojai (patikrinti:http://localhost:3000/users)
})

//---------------------------------------GET (Get specific user data by id)--------------------------------------------------------------------------------------//
// Jei yra gaunami duomenys, juos reiketu validuoti ir taip klinetui bus nusakoma kas ne taip su jo duomenim
router.get("/:id", (req, res) => { //:id keiciasi,2,3,4,5... ir pagal skaiciu grazinamas tik tas objektas su id 2
    // console.log(1 === +req.params.id); tikrinimas

    if(isNaN(+req.params.id)) { //tikrinama ar sis skaicius(duomenu tipas/id) gali buti konvertuojamas i skaiciu (nes viskas pareina tekstu)
        return res.send("ID turi buti skaicius") //jei gali buti konvertuojamas - tai grazins skaiciu , o jei ne tai zinute
    }
    const selectedUser = data.users.find((user) => user.id === parseInt(req.params.id)); //(req.params.id) - ateina is parametru ir yra stringas tad reikia nadoti pareInt/+/== kad tekstas butu konvertuojamas i skaiciu.
    //jei user neegzistuoja - bus reiksme undefined
    if (!selectedUser) { 
        return res.send ("tokio vartotojo nera")
    } else {
        return res.send (selectedUser)
    }
})
//-------------------------------------POST (Existing user login endpoint)---------------------------------------------------------------------------------------//
//imama info is serverio/ users array/data file
router.post("/login", (req, res) => {
    //1. Validuojama, ar req.body turi tokius laukus username, password (ar nera undefined as reiskia kad nebuvo net sukurti)
    const username = req.body.username, 
        password = req.body.password;
    if (!username) return res.status(400).json({message: "Iveskite tinkama username"})
    if (!password) return res.status(400).json({message: "Iveskite tinkama Slaptazodi"})
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja. 
            //Jei ne: tada siusti "vartotojas neegzistuija"
            //Jei taip: toliau daromas tikrinimas
        const selectedUser = data.users.find((user) => user.username.toLowerCase() === username.toLowerCase()); //kiekvienojs iteracijoj turesim po vartotoja (user) ir ziuresim ar pateiktas (is imput) vartotojo vardas "username" egzistuoja bet viename vartotuje "user.username". Seleted user yra ieskomas per data.user masyva 
        if (!selectedUser)  //jei nera tokio vartotojo, tada reiksme tampa undefined 
        return res.status(404).json({messgae: "vartotojas neegzistuoja su tokiu username"})
        
    //3.  toliau tikrinama ar slaptazodis atitinka. Jei taip: siu nciamas atsakymas is serverio "sekmingai prisijungiate"
        if (selectedUser.password === password) { 
            // res.send ("Sekmingai prisijungiate") 
            // kai user sekmingai prisijungia, tada nustatome cookies: 
            req.session.loggedIn = true;
            req.session.username = selectedUser.username; 
            req.session.userId = selectedUser.id; 

            res.status(200).json({url: "http://localhost/todos.html"}); 
            // res.status(200).json({url: "http://localhost/january/2024-01-19/front-end/todos.html"}); // po prisijungimo redirectina i kita page

        }
        // else res.send ("incorrect password") 
});

//------------------------------------------Session check EndPoint----------------------------------------------------------------------------------------------//
//Session check: kad vartotojai galetu matyti todo page tik kai yra prisijunge. O jei nera prisijunge matytu register page
router.get("/session-check", (req, res)=> { 
    //tikrinama ar vartotojas tuo metu yra prisijunges:
    if (req.session.loggedIn) //jei vartotojas prisijunges
    return res.status(200).json({message: "valid session", sessionValid: true}); //
    else { //jei neprisijunges
        return res.status(400).json({message: "invalid session", sessionValid: false}); 
    }
        //updated script.js
})

//grazinimas
module.exports = router;