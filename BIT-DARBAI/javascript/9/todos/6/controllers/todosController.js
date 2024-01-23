// all todos endpoints  (CRUD operations)

const express = require("express"); //plengvina serverio sukurima?
const data = require("../data.json") //importuoti data.json (model). Duomenys su kuriais dirbs controller
const router = express.Router (); //rauter sukurimas
const { writeFile } = require("../utils/fileOperations"); // importuojama funkcija

//1. apsirasyti visus endpointus per router 2. grazinti i index.js faila 

//-------------------------------------POST (add new todo)----------------------------------------------------------------------------------------------------------------------//
router.post("/", (req, res) => { //kuriamas/pridedamas naujas todo i serveri
    const {todo, done} = req.body; //Paduodama info. Todo susidaro is 2 laukeliu: ateina is frontend + todoState (atlikta uzduotis (moved to right)/neatlikta uzduotis (moved to left))
    // { todo schema (kuriamas naujas todo irasas masyve):
    //     user: 'Justinas',
    //     todo: 'Work',
    //     done: false
    // }

    //kad nereiketu vesti vardo kaskart kai norima prideti nauja todo reikia padaryti kad tik prisijunge vartotojai galetu prideti todo
    const username = req.session.username

    //validation
    if (!username) return res.status(400).json({message: "Blogai ivestas username. Esate neprisijunge"});
    if (!todo) return res.status(400).json({message: "Blogai ivestas todo"});
    
    //validation: ar naujai prodedama todo egzoistuoja toks vartotojas
    const selectedUser = data.users.find((user) => user.username.toLowerCase() === username.toLowerCase());//slug //kiekvienojs iteracijoj turesim po vartotoja (user) ir ziuresim ar pateiktas (is imput) vartotojo vardas "username" egzistuoja bet viename vartotuje "user.username"
    // if (!selectedUser) return res.status(404). json({message: "Vartotojas nerastas/neegzistuoja "}); nereikalingas nes jei vartotojas prisijungi, jis egzostuoja

    const newTodo = {id: data.todosId, username, todo, done: !!done }; //!!true=true/!!undefined=false tokiu budu done tures arba tik true/ arba tik false reiksme.// be !! reksme butu undefined
    console.log(newTodo); //ivedamas pats objektas
    data.todos.push(newTodo); //pridejimas todo (jei ge ras) prie bendro masyvo
    // vietoj (username: username, todo:todo)
    data.todosId++; ////naujas pridetas todo tures vis didesni id

    writeFile(data); // kad atisnuajintu data failas poto kai prisideda naujas todo

    res.status(201).json({message: "naujas todo buvo sekmingai pridetas", newTodo}); //grazinti json objektas 
}) 
//-------------------------------------GET (get all todos)--------------------------------------------------------------------------------------------------------------// 
router.get("/", (req, res) => { 
    res.status(200).json(data.todos);  //grazinamas todo listas is "const todos = []; ")
})
//-------------------------------------GET (Get specific todo by id)--------------------------------------------------------------------------------------------------------------//
router.get("/:id", (req, res) => { 
//paieska is saraso "todos = []/data file" per visus elementus
//Id gaunamas per req.params.id (tas patas id kuris nurodomas route)
const id = +req.params.id; //is parametru norima gauti id //id pareina string formatu tad pridedamas + kad paversti i skaiciu
if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"})  //patikrinti ar id skacius ir ar gali buti konvertuojamas i skaiciu 
//atlikti paieska pagal id. (ieskomas egzostuojantis todo elementas)
const existingTodo = data.todos.find((todo) => todo.id === id);

//jei NErandamas irasas:
if (!existingTodo) res.status(404).json({message: "irasas buvo nerastas"})
//jei randamas irasas:
else res.status(200).json(existingTodo); //atsakymas: existuojantis todo
})
//-------------------------------------PUT (update todo)----------------------------------------------------------------------------------------------------------------------------//
router.put ("/:id", (req, res) => { 
    //atnaujinti egzistuojancio iraso duomenys (reikia gauti id ir laukelius kuriuos norima redaguoti
    const id = +req.params.id; //is parametru norima gauti id //id pareina string formatu tad pridedamas + kad paversti i skaiciu
    if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"})  //patikrinti ar id skacius ir ar gali buti konvertuojamas i skaiciu 

const {todo, done} = req.body; //gaunami duomenys (tik su put yra body)
const username = req.session.username;

const existingUser = data.users.find((user) => user.username.toLowerCase() === username.toLowerCase()); // jei keiciamas vartotojas, vel reikia isitikinti kad toks vartotojas egzistuoja
//jei egzsituoja toks vartotojas ji ir gausim , jei ne - undefined
if (!existingUser) return res.status(404).json({message: "Vartotojas nerastas/neegzistuoja"});

//keisti todo i atrasta todo. reikia keisti pati masyva
//atrasti todo pagal id: atrandamas jau egzistuojantis todo is bendro "toods" masyvo (ieskomas tam tikras irasas pagal id ir ziurima ar atiitnka to todo id)
const existingTodo = data.todos.findIndex((currentTodo) => currentTodo.id === id )   //paskutinis id (id is parametro is pirmoa eilutes :id)


//pagal id galima masyve pakiesti reiksme //is todo saraso pagal existingTodo keiciamas pats todo
// kad nereiketu paduoti pati tododo kas kart kai vyksta update "todo: todo || todos[existingTodo].todo, username, done}": jei paduodamas parametras "todo" (pareinantis is req.body) neegzistuoja (undefined) tada naudojama "todos[existingTodo].todo"
data.todos[existingTodo] = {...data.todos[existingTodo], todo: todo || data.todos[existingTodo].todo, done}; 
//{...todos[existingTodo],todo, username} : nurodomi seni objekto laukai ir su kitais laukeliasi nurodome ka norime pakeisti (pasikeis tik todo, username eilutes)

writeFile(data);

if (!existingTodo) res.status(404).json({message: "Todo irasas buvo nerastas"});
else res.status(201).json(data.todos[existingTodo]); // jei todo egzistuoja: siusti atsakyma egzistuojati todo
});
//-------------------------------------DELETE (delete todo by id)-------------------------------------------------------------------------------------------------------------------------------//
router.delete("/:id", (req, res) => {
    const id = +req.params.id; 
    if (isNaN(id)) return res.status(400).json({message: "Iveskite tinkama id: Irasas su ivestu id neegzistuoja"});
    const existingTodoIndex = data.todos.findIndex ((currentTodo) => currentTodo.id === id);// salinimas pagal id vyksta  tad findIndex. Paskutinis id yra tas pats kas is parametru
    if (existingTodoIndex === -1) return res.status(404).json({message: "salinamas irasas nerastas"});
    else {
        data.todos.splice(existingTodoIndex, 1);
        writeFile(data); // jei salinamas irasas yra atrastas, tada  atnaujinimas data faile
       return res.status(204).json({message: "irasas sekmingai istrintas"});  //jei status 204 - tai nesimaot postman
    }
})

//grazinimas
module.exports = router;