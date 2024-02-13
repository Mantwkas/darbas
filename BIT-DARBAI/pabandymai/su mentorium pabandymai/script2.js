const word = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', countVowe1);

function countVowe1() {
    let vowe1Count = 0;
    let wordValue = word.value.toLowerCase();
for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    
    if (letter.match(/([a,e,o,u,i])/)) {
        vowe1Count++
    }
    
   result.innerHTML = `${word.value.toUpperCase()} has ${vowe1Count}vowels`
            
    
}

}