const height = document.querySelector(".height"),
weight = document.querySelector(".weight"),
calculate =  document.querySelector(".btn"),
result =  document.querySelector(".result"),
reset =  document.querySelector(".reset")

calculate.addEventListener("click", calBMI);
 
function calBMI(e) {
e.preventDefault()
let heightValue = height.value
let weightValue = weight.value

 if(!heightValue || isNaN(heightValue)) {
    return result.innerHTML = "Provide a valid height"
 }
 else  if(!weightValue || isNaN(weightValue)) {
    return result.innerHTML = "Provide a valid weight"
 }
else {
    let  heightmeters = heightValue/100
   
    let bmi = (weightValue/Math.pow(heightmeters, 2)).toFixed(2);

if(bmi < 18.5){
showResult(`Underweight: <span>${bmi}</span>`, "orange")
}
if(bmi > 18.5 && bmi < 25){
    showResult(`Normal: <span>${bmi}</span>`, "green")
}
if(bmi > 25 && bmi < 30){
    showResult(`Overweight: <span>${bmi}</span>`, "blue")
}
if(bmi > 30){
    showResult(`Obese: <span>${bmi}</span>`, "red")
}
}
}

function showResult(value, color) {
    result.style.backgroundColor = color;
    return result.innerHTML = value;
}
reset.addEventListener("click", nullValues);
function nullValues() {
	height.value = "";
	weight.value = "";
	result.innerHTML = "";
}