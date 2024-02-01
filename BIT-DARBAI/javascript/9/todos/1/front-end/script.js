//cia(script) nurodoma kad visu imputu duomenys butu perduodami backend serveriui.  Sends a POST request to a server endpoint (http://localhost:3000/register) using the Fetch API. 
//register end point: ten klientas siuncia savo duomenys. (POST method/request)

//-------------------------------Signin---------------------------------------------
const usernameField = document.querySelector("#register-username");
const emailField = document.querySelector("#register-email");
const passwordField = document.querySelector("#reigster-password");
const registerButton = document.querySelector("#send-registration");
const loginButton = document.querySelector("#log-in");
const logPassword = document.querySelector("#log-password");
const logUsername = document.querySelector("#log-username");


//POST request: Isiusti request i serveri su fetch.  
//naudoti end point /register: nes i ji norime kreptis (requestas vyksta i ten)
async function register () {
    // 1 parametras - endpoint. 2 parametras - nustatymai objekte kad nusakyti koks metodas, duomenys ir issiusti tuos duomenys...
     const promise = await fetch ("http://localhost:3000/register", 
     { method: "POST", //nurodomas metodas, nes gali buti ir GET su tokiu paciu endpoint tad taip diferencijuojama
        headers: { 
             "Content-Type": "application/json" // nurodomas duomenu tipas, kuris yra issiunciamas i serveri
         },
         body: JSON.stringify({  // nurodoma kokiu duomenys norime perduoti serveriui. negalim naduoti objekto o tik string formato duomenys
             username: usernameField.value,
             email: emailField.value,
             password: passwordField.value,
         }),
    })
    // atsakymas:
    const response = await promise.text(); //backende response yra textas tad cia irgi.text (ne json)
    console.log(response);
}  
registerButton.onclick = register; //request siunciamas tik kai papaudziama ant mygtuko


//-------------------------------Login------------------------------------------
async function login () {
        fetch("http://localhost:3000/login", { //nereikia await nei promise
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: logUsername.value,
            password: logPassword.value,
        }),
    })
    //Hadlinami error
    .then((response) => response.json()) //kai request gauna atsakyma, handling su then + catch.  
    .then((response) => (window.location.href = response.url)) // kai response gaunamas -  ivyksta redirectinam i gauta url
    .catch((err) => console.log(err)); 

    // window.location.href = "http://127.0.0.1:5500/2024.01.10/front-end/todos.html";  //nerekomeduotinas/laikinas budas redirectintis i kita puslapi (res.redirect backende neveikia) - (ivede window.location i html code matome objekta ir jo laukus)
}
loginButton.onclick = login; 