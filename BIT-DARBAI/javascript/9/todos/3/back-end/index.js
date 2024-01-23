//1. instaliuoti express biblioteka: npm install express (+node modules:holds all the dependencies (third-party libraries and modules) required by a Node.js project.) (+gitignore: kad nepushinti node_modules) (+package-lock.json: used to lock down the specific versions of dependencies installed. It ensures that everyone working on the project uses the same versions of the installed packages.)
//2.importuoti express biblioteka: plengvina serverio sukurima, darba su REST API (CRUD: budas kaip klientas bendrauja su serveriu)
const express = require ("express");
//11.instaliuoti express-sessions: sudo npm install express-sessions
//11.1.importuoti express-sessions:
const sessions = require ("express-session");
// 7. instaliuoti CORS biblioteka (npm install cors):  kad klinetas galetu kreiptis i express serveri. Cors nustatymai leidzia gauti "body" parametra
const cors = require ("cors"); //7.1 //kad gauti cors bibliotekos metodus


//3.sukuriamas serveris    
const server = express(); 


//server.use - nustato pacius nustatymus kiekvinam requestui
server.use(cors({ //kad serveris naudotu cors biblioteka (Middleware functions skirta headeriu nustatymams).  Middleware leidžia vykdyti kodą tarp įeinančių užklausų ir pagrindinės programos logikos, o tai apima ir manipuliavimą headeriais. 
origin: 'http://127.0.0.1:5500',//nustatymai rasome objekte  - cookies nustatymas tam kad backedn zinotu su kurias websites dirbame (register url)
credentials: true, 
}));
server.use(express.json()) // naudojamas dar vienas Middleware funkcija (express.json()) - konfiguruojami headears kad butu galima gauti JSON formato duomenys. (tuos kurie ateina is kliento " console.log(req.body)")
//11.2.naudoti express-sessions: su Middleware (importuojamas cia ir sukurtas kitu )
server.use(sessions({ //sesija turetu buti issaugojama kas karta kai uzsiregistruojame
    //nustatymai(parametrai) sesijoms(kaip saugomos)/koks serverio slaptasis raktas (visi sesijos raktai encodinami naudojant slaptaji rakta)
    secret: "Barcelona", //serveris encodins sesijas pasinaudojant siuo raktiniu zodizu
    resave: false, //kad is naujo NEirasyti sesijos rakta, kas karta kai ivykdomas request i serveri 
    saveUninitialized: true, //
    cookie: {  secure: false}, //is kiekvienos svetaines saugomas pc lokalei (cookie- serverio sugeneruotas raktas. Saugomas tiek serveryje tiek pas vartotoja pc. Pagal ji serveris atpazista kad tas pats vartotojas sugrizo i svetaine po atsijungimo)
    // + pridedamas "credentails" nustatymas script.js
}));


//6. su "post" metodu: kai vartotojas uzsiregistruoja, jo duomenys saugomi masyve (kovertuojami i objekta)//masyvas (sudarytas is objektu) 
const users = []; // gaudami duomeneys -> konvertuojami i objekta -> priskirti kiekvienam id (serveris priima duomenys ir pats priskiria Id(array.lenght+1) kai masyvas papushinamas i array)  
//10. sukuriamas masyvas - kad atlikti CRUD operacijas skirtas todos
const todos = [{id:1, todo: "sleep"}]; 


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//

//4.EndPoint (kad paleisti serveri) sukurimas: (nustatomas endpointas, kuris leidžia kreipiantis į adresą http://localhost:3000/ ir gauti atsakymą )
    // Metodai: get/post/delete/patch - get pagrindinis metodas informacojos gavimui
    // 1 Parametras (naudojamas endpoint) - "/"
    // 2 Parametras ((req, res) callback.f.) - kai gaunamas serverio iskvietimas - gauname 2 objektus: 
                //1-request obj - talpina info susijusia su paciu uzsakymu(request)  i serveri (is kur kreipiamasi/kokie duomenys yra petikiami is kliento puses/ gaunamas api endpoint ir kit parametrai). objektas skirtas request'o informacijai nusakyti. turi metodus (get, put...)
                //2-response obj - skirtas ataskymams. Atsakinejam klinetui. objektas, skirtas pateikti atsakymus iš serverio
    // res.send() - metodas, leidžiantis išsiūsti atsakymą kilentui. Jei jo nebus - bus loading icon ir atsakymas is serverio nebus gautas 

//-------------------------------------GET (main endpoint)-----------------------------------------------------------------------------------------------------------------------------//
server.get("/", (req, res) => {  //pagrindine direktorija serveryje
    //request objekto laukai: nesa duomenys apie pati requesta
    console.log("Method: " + req.method); //get 
    console.log("Url: " + req.originalUrl); // matomas url
    console.log("Body: " + req.body); //matoma tai ka atsiuncia vartotojas
    console.log( "Parameters: " + req.params.id); // stringify nes gaunamas objektas: JSON.stringify(req.params)) // parametrus(id) galima apsirasyti url pridedant "link/:id"  (ir jis gali keiestis)
    console.log("Query: " + JSON.stringify(req.query)); // stringify nes gaunamas objektas //tai yra uzklausa(requesto modifikavimas). Reikia prideti "?parameter1=Petras&parameter2=Jonas" prie url. Naudojama irgi kad nurodyti kaip request turetu grazinti atsakyma:"?sort=ascending"
    console.log("buvo kreipatsi i serveri");
    res.send("1 EndPoint: /");
})

//-------------------------------------POST(register) (i serveri talpinamos registracijos)----------------------------------------------------------------------------------------------//
//Is kliento puses atliekams post request i register endpoint/server
//kai register forma uzpildoma- duomenys siunciami i serveri ir sukuriamas vartotojo objektas (masyve "users")
server.post("/user/register", (req, res )=> { // /register endopinte gausime vartotojo registracijos parametrus. gausime req.body - objektas grazinamas kai siunciami is kliento duomeny serveriui

 //is klineto gaunami laukai: 
 console.log(req.body); //matoma tai ka atsiuncia vartotojas. Pareina JSON formatu ir bus konvertuotas i objekta pacaiame requeste

 //buna klaidu: jie bent vienas is duomeny neateina arba buna undefined tai iskrenta error ir jo toliau validuoti negalima(nes jo nera). Kad nuo to apsisaugoti naudojamas TRY/CHATCH. Cahtch sugauna error ir issiuncia zinute
 try {
const username = req.body.username;
const email = req.body.email;
const password = req.body.password; 
users.push({ //objektas pushinamas i array "users"
    id: users.length +1,
    username: username,
    email: email,
    password: password,
   }); 

   //nustatomas sesijos raktas kai siunciamas atsakymas is serverio. Parametrai: kitamieji kurie saugojami sesijos metu 
    req.session.username = username; 
    req.session.userId = users[users.length - 1].id;  //-1 nes norima gauti is "users" paskutini irasa

    res.send("Atsakymas is serverio!!"); //kadangi text, tai frontende irgi reikia naudoti .text (ne json)
} catch (err) {
    res.send("Netinkami duomenys");
    }
})
//--------------------------------GET (imama info is serverio (users array) apie regist.users)------------------------------------------------------------------------------------------//
//8. Kad pamatyti uzregistruotus vartotojus sukuriamas endpoint: 
server.get("/users", (req, res) => {  //kreipdamiesi i sita end point, norime grazinti users masyva
    res.send(users); //kai requesto atsakyma- siunciami vartotojai (patikrinti:http://localhost:3000/users)
})

//9. VALIDATION: Gauna vartotoja pagal id  - naujas endpoint
// Jei yra gaunami duomenys, juos reiketu validuoti ir taip klinetui bus nusakoma kas ne taip su jo duomenim
server.get("/users/:id", (req, res) => { //:id keiciasi,2,3,4,5... ir pagal skaiciu grazinamas tik tas objektas su id 2
    // console.log(1 === +req.params.id); tikrinimas

    if(isNaN(+req.params.id)) { //tikrinama ar sis skaicius(duomenu tipas/id) gali buti konvertuojamas i skaiciu (nes viskas pareina tekstu)
        res.send("ID turi buti skaicius") //jei gali buti konvertuojamas - tai grazins skaiciu , o jei ne tai zinute
    }
     const selectedUser = users.find(user => user.id === parseInt(req.params.id)); //(req.params.id) - ateina is parametru ir yra stringas tad reikia nadoti pareInt/+/== kad tekstas butu konvertuojamas i skaiciu.
     //jei user neegzistuoja - bus reiksme undefined
     if (!selectedUser) {
        res.send ("tokio vartotojo nera")
     } else {
        res.send (selectedUser)
     }
})
//-------------------------------------POST (login) (imama info is serverio/ users array)----------------------------------------------------------------------------------------------//
server.post("/user/login", (req, res) => {
    //1. Validuojama, ar req.body turi tokius laukus username, password (ar nera undefined as reiskia kad nebuvo net sukurti)
    const username = req.body.username, 
        password = req.body.password;
    if (!username) return res.status(400).json({message: "Iveskite tinkama username"})
    if (!password) return res.status(400).json({message: "Iveskite tinkama Slaptazodi"})
    //2. Patikrinti, ar vartotojas su tokiu username egzistuoja. 
            //Jei ne: tada siusti "vartotojas neegzistuija"
            //Jei taip: toliau daromas tikrinimas
        const selectedUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase()); //kiekvienojs iteracijoj turesim po vartotoja (user) ir ziuresim ar pateiktas (is imput) vartotojo vardas "username" egzistuoja bet viename vartotuje "user.username"
        if (!selectedUser) { //jei nera tokio vartotojo, tada reiksme tampa undefined
            res.status(404).json({messgae: "vartotojas neegzistuoja su tokiu username"})
           return
        } 
    //3.  toliau tikrinama ar slaptazodis atitinka. Jei taip: siu nciamas atsakymas is serverio "sekmingai prisijungiate"
        if (selectedUser.password === password) { 
            // res.send ("Sekmingai prisijungiate") 
            res.status(200).json({url: "http://127.0.0.1:5500/2024.01.16/front-end/todos.html" }); // po prisijungimo redirectina i kita page
        }
        // else res.send ("incorrect password") 
});


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\10. "Todos" CRUD OPERACIJOS /\/\/\/\/\/\/\/\/\/\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//

//-------------------------------------POST (prideti nauja "todo")----------------------------------------------------------------------------------------------------------------------//
server.post("/todos", (req, res) => { //kuriamas/pridedamas naujas todo i serveri
    const {username, todo, done} = req.body; //Paduodama info. Todo susidaro is 2 laukeliu: ateina is frontend + todoState (atlikta uzduotis (moved to right)/neatlikta uzduotis (moved to left))
    // { todo schema (kuriamas naujas todo irasas masyve):
    //     user: 'Justinas',
    //     todo: 'Work',
    //     done: false
    // }

    //validation
    if (!username) return res.status(400).json({message: "Blogai ivestas username"});
    if (!todo) return res.status(400).json({message: "Blogai ivestas todo"});
    
    const selectedUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase()); //kiekvienojs iteracijoj turesim po vartotoja (user) ir ziuresim ar pateiktas (is imput) vartotojo vardas "username" egzistuoja bet viename vartotuje "user.username"
    if (!selectedUser) return res.status(404).json({message: "Vartotojas nerastas/neegzistuoja "});

    const newTodo = {id:todos.length+1, username, todo, done: !!done }; //!!true=true/!!undefined=false tokiu budu done tures arba tik true/ arba tik false reiksme.// be !! reksme butu undefined
    console.log(newTodo); //ivedamas pats objektas
    todos.push (newTodo); //pridejimas todo (jei geras) prie bendro masyvo
    // vietoj (username: username, todo:todo)

    res.status(201).json({message: "naujas todo buvo sekmingai pridetas", newTodo}); //grazinti json objektas 
}) 

//-------------------------------------GET (gauti/perskaityti nauja "todo")--------------------------------------------------------------------------------------------------------------//
server.get("/todos", (req, res) => { 
    res.status(200).json(todos);  //grazinamas todo listas is "const todos = []; ")
})
//perskaityti/gauti tam tikra todo pagal id (paieska is saraso "todos = []" per visus elementus)
server.get("/todos/:id", (req, res) => { 
//Id gaunamas per req.params.id (tas patas id kuris nurodomas route)
const id = +req.params.id; //is parametru norima gauti id //id pareina string formatu tad pridedamas + kad paversti i skaiciu
if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"})  //patikrinti ar id skacius ir ar gali buti konvertuojamas i skaiciu 
//atlikti paieska pagal id. (ieskomas egzostuojantis todo elementas)
const existingTodo = todos.find((todo) => todo.id === id);

//jei NErandamas irasas:
if (!existingTodo) res.status(404).json({message: "irasas buvo nerastas"})
//jei randamas irasas:
else res.status(200).json(existingTodo); //atsakymas: existuojantis todo
})

//----------------------------------------PUT (update "todo")----------------------------------------------------------------------------------------------------------------------------//

//PUT: atnaujinti egzistuojancio iraso duomenys (reikia gauti id ir laukelius kuriuos norima redaguoti)
server.put ("/todos/:id", (req, res) => { 
    const id = +req.params.id; //is parametru norima gauti id //id pareina string formatu tad pridedamas + kad paversti i skaiciu
    if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"})  //patikrinti ar id skacius ir ar gali buti konvertuojamas i skaiciu 

const {username, todo, done} = req.body; //gaunami duomenys (tik su put yra body)

const existingUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase()); // jei keiciamas vartotojas, vel reikia isitikinti kad toks vartotojas egzistuoja
//jei egzsituoja toks vartotojas ji ir gausim , jei ne - undefined
if (!existingUser) return res.status(404).json({message: "Vartotojas nerastas/neegzistuoja"});

//keisti todo i atrasta todo. reikia keisti pati masyva
//atrasti todo pagal id: atrandamas jau egzistuojantis todo is bendro "toods" masyvo (ieskomas tam tikras irasas pagal id ir ziurima ar atiitnka to todo id)
const existingTodo = todos.findIndex((currentTodo) => currentTodo.id === id )   //paskutinis id (id is parametro is pirmoa eilutes :id)


//pagal id galima masyve pakiesti reiksme //is todo saraso pagal existingTodo keiciamas pats todo
// kad nereiketu paduoti pati tododo kas kart kai vyksta update "todo: todo || todos[existingTodo].todo, username, done}": jei paduodamas parametras "todo" (pareinantis is req.body) neegzistuoja (undefined) tada naudojama "todos[existingTodo].todo"
todos[existingTodo] = {...todos[existingTodo], todo: todo || todos[existingTodo].todo, username, done}; 
//{...todos[existingTodo],todo, username} : nurodomi seni objekto laukai ir su kitais laukeliasi nurodome ka norime pakeisti (pasikeis tik todo, username eilutes)
if (!existingTodo) res.status(404).json({message: "Todo irasas buvo nerastas"});
else res.status(201).json(todos[existingTodo]); // jei todo egzistuoja: siusti atsakyma egzistuojati todo
});

//------------------------------------------Delete "todo"-------------------------------------------------------------------------------------------------------------------------------//
server.delete("/todos/:id", (req, res) => {
    const id = +req.params.id; 
    if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"});
    const existingTodoIndex = todos.findIndex ((currentTodo) => currentTodo.id === id);// salinimas pagal id vyksta  tad findIndex. Paskutinis id yra tas pats kas is parametru
    if (existingTodoIndex === -1) return res.status(404).json({message: "salinamas irasas nerastas"});
    else {
        todos.splice(existingTodoIndex, 1);
       return res.status(200).json({message: "irasas sekmingai istrintas"});  //jei status 204 - tai nesimaot postman
    }
})

//-----------------------------------------Serverio pleidimas----------------------------------------------------------------------------------------------------------------------------//

//5. serverio pleidimas: callbeck funkcija nes pasako kas bus jei serveris sekmingai pasileis
//kad serveris butu paleidziamas ir matomas kitu app reikia nustatyti port 
//dazniausiai naudojamas 3000 bet jei yra uzimtas tada port gaunamas pasinaudojant (process.env.PORT) --> gauname jau nustatyta musu sistemoje porta kuri turetu naudoti express (linux? windows?)
//port: lizdas. vieta prie kurios gali prisijungti vartotojai
server.listen(3000, () => {
    console.log("Aplikacija pasileido. Adress: http://localhost:3000/"); //per adresa galima pasiekt serverio pradini endpoint "/"
}); 