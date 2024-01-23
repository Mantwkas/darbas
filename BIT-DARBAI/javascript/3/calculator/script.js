function calculate(operation) {

    let selector = document.querySelector('#select').value;
    
    const x = parseFloat(document.querySelector('#x').value);
    const y = parseFloat(document.querySelector('#y').value);


    let result;
    if(selector === 'add') result = x + y;
    else if(selector === 'substract') result = x - y;
    else if(selector === 'multiply') result = x * y;
    else if(selector === 'divide' && y === 0) result = 'Dalyba iš nulio negalima';
    else if(selector === 'divide') result = x / y;
    else if(selector === 'power') result = x ** y;
    else result = '';
    
    document.querySelector('#result').innerText = `Atsakymas: ${result}`;
}