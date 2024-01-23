//--------------------Move Element---------------------//

const texts = {
    moveElementText: {
        todo: "Done",
        done: "Undone"
    }
}

const todoMoveButtons = document.querySelectorAll(".todomove");
const todoDeleteButtons = document.querySelectorAll(".tododelete");
const todoUpdateButtons = document.querySelectorAll(".todoupdate");

const doneListElement = document.querySelector(".done-list");
const todoListElement = document.querySelector(".all-todos");



function moveFromTodoToDone (event) { //perkelimas i done
    const targetId = event.target.attributes.todomove.value //identifikuojamas atributas (skaicius)
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    doneListElement.appendChild(moveTarget)//prideti move target kaip vaika i done list
    event.target.innerText = texts.moveElementText.done; // keiciamas button reiksme ir nurodoma kuri reiksme
    event.target.onclick = moveFromDoneToTodo;
}
for (const todoMoveButton of todoMoveButtons){
    todoMoveButton.onclick = moveFromTodoToDone
}

function moveFromDoneToTodo (event) { //perkelimas atgal i undone 
    const targetId = event.target.attributes.todomove.value //identifikuojamas atributas (skaicius)
    const moveTarget = document.querySelector(`[todo-id="${targetId}"]`);
    todoListElement.appendChild(moveTarget)//prideti move target kaip vaika atgal i undone list
    event.target.innerText = texts.moveElementText.todo;  
    event.target.onclick = moveFromTodoToDone;
} 


//--------------------Delete Element---------------------//

for (const deleteButton of todoDeleteButtons) {
	deleteButton.onclick = (event) => {
		const targetId = event.target.attributes.tododelete.value;
		const deleteTarget = document.querySelector(`[todo-id="${targetId}"]`);
		deleteTarget.remove();
	};
}

//--------------------Update Element (text in input)---------------------//


const updateButtons = document.querySelectorAll(".todoupdate");
const input = document.querySelector(".input");
const button = document.querySelector(".addButton");
const updateInput = document.querySelector(".updateInput");
const updateButton = document.querySelector(".updateButton");


// Function to update the task and hide the update input field/button
function updateTask(targetId, currentValue) { //targetId represents the ID of the task to be updated/ currentValue represents the current text content of the task.
    const updateTarget = document.querySelector(`[todo-id="${targetId}"] span`); //selects HTML element based on id //span :  to change the text content inside this span element
    updateInput.value = currentValue; 

    updateInput.style.display = "inline-block";
    updateButton.style.display = "inline-block";
    input.style.display = "none";
    button.style.display = "none";

    updateButton.onclick = () => {
        updateTarget.innerText = updateInput.value;
        input.style.display = "inline-block";
        button.style.display = "inline-block";
        updateInput.style.display = "none";
        updateButton.style.display = "none";
        updateInput.value = ""; 
        input.value = ""; 
    };
}
// Attach click events to update buttons
for (const updateButton of updateButtons) {
    updateButton.onclick = (event) => {
        event.stopPropagation(); // Prevent event propagation
        const targetId = event.target.attributes.todoupdate.value;
        const currentValue = document.querySelector(`[todo-id="${targetId}"] span`).innerText;
        updateTask(targetId, currentValue);
    };
}