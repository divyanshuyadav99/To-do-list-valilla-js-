// script.js
// const div2 = document.getElementByClass("todo-container")
// const span2 = document.createElement('span');
// span2.textContent = 0;
// div2.appendChild(span2);    
let span2 = document.createElement('span');
document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('todo-list');
        const taskItem = document.createElement('li');

        const taskTextSpan = document.createElement('span');
        let radioBtnDiv = document.createElement('div');
        const radioBtn = document.createElement('input')
        radioBtn.type = 'radio'
        radioBtn.name = 'task-radio'
        radioBtn.addEventListener('change', () => {
            if(radioBtn.checked){
                moveTaskToCompleted(taskItem)
            }
        })
        radioBtnDiv.appendChild(radioBtn);
        taskItem.appendChild(radioBtnDiv);
        taskTextSpan.textContent = taskText;
        taskItem.appendChild(taskTextSpan);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            updateDiv();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        updateDiv();
    }
}

//This function is used in order to update the number of task left
function updateDiv(){
    const ulelem = document.getElementById("todo-list")
    const licount = ulelem.children.length
    console.log(licount)
    // let span2 = document.createElement('span');
    span2.textContent = licount + " task left";
    let div2 = document.getElementsByClassName("todo-container")
    div2 = div2[0]
    div2.appendChild(span2);    
}

//This div is used to move the task to completed list
function moveTaskToCompleted(taskItem){
    console.log("HI")
    const taskTextSpan = taskItem.querySelector('.task-text');
    taskTextSpan?.classList?.add('checked-task');
     radioBtnDiv = taskItem.querySelector('div:first-child');
     console.log(radioBtnDiv)
    taskItem.removeChild(radioBtnDiv);

    // Move the task item to the completed list
    completedList.appendChild(taskItem);

    updateDiv();
}

