const empty = "";
const uCase = "ABCDEFGHIJKLMNOPRSTUVWXYZ";
const lCase = "abcdefghijklmnoprstuvwxyz"
const number = "1234567890";
const symbols = "<,>./{}[]()*&^%$#@!-+_";

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const numbers = document.getElementById("p-numbers");
const symbol = document.getElementById("p-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copyBtn = document.getElementById("copy");

submit.addEventListener("click", ()=>{
    let initialPassword = empty;

    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    numbers.checked ? (initialPassword += number) : "";
    symbol.checked ? (initialPassword += symbols) : "";

    password.value = generatePassword(pLength.value, initialPassword)

});

function generatePassword(length, initialPassword){
    let pass = "";
    for(let i = 0; i < length; i++){
        pass += initialPassword.charAt(
            Math.floor(Math.random()* initialPassword.length)
        )
    }
    return pass
}

copyBtn.addEventListener("click", ()=>{
    // navigator.clipboard.writeText(password.value)
    // alert("Password Copied")
    if(password.value === "")
    Alert("Please enter your password")
    else{password.execCommand("copy")
    alert("Password copied")}
})