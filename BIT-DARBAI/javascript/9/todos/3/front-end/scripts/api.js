//funkcijos skirtos kreipimuisi i serveri kad paimti is ten 

//funkcija kuri prideda nauja todo kai papaudziamas "add" button
async function postNewTodo (todo) { //priima pati todo objekta kuris siunciamas su fetch
    try {
        const promise = await fetch ("http://localhost:3000/todos", {  //siunciamas request i serveri 
          //naujo todo pridejimas 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json" // nurodomas duomenu tipas, kuris yra issiunciamas i serveri
             },
            body: JSON.stringify(todo)  // nurodoma kokiu duomenys norime perduoti serveriui. negalim naduoti objekto o tik string formato duomenys
        });
        const result = await promise.json(); //fetch result
        // console.log(result); 

        return result;
    } catch (error) {}
}

//panaudojma "todoDialogActions.js"


//funkcija kuri gaus visus todo (kad po refrsh jie vis dar liktu) (panaudojama todoDialogActions.js function showAlltodos)
async function getAllTodos() {
    try {
        const promise = await fetch ("http://localhost:3000/todos") //nereikia nustatymu nes cia naudojam GET ir jis yra by default
        const result = await promise.json();
        console.log(result);
        showAllTodos(result.filter((todo) => !todo.done)); //todo.done === false ->pridedama i todo lentele
        showAllDones (result.filter((todo) => todo.done)); //todo.done === true ->pridedama i done lentele
        return result; //masyvas 
    } catch (error) {
             }
}