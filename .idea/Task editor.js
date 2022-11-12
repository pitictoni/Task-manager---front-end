async function populateTextBoxes(id) {
    const titleTextbox = document.getElementById('title');
    const priorityTextbox = document.getElementById('priority');

    const response = await fetch('http://localhost:8080/task/' + id);
    const task = await response.json();

    titleTextbox.value = task.title;
    priorityTextbox.value = task.priority;
}

function updateOrAddTask(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    if (id==0){
        addTask();
    }
    else{
        updateTask(id);
    }
}

async function updateTask(id) {
    const title = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;

    const response = await fetch('http://localhost:8080/task/update?id=' + id + "&title" + title + "&priority" + priority, {method: 'PUT'});
    goToTaskList();
}

function goToTaskList(){
    window.location.href = "Task manager.html";
}

window.onload = (event) =>{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    if (id!=0) // s-a intrat de pe Edit, deci trebuie sa punem vechile valori in textboxuri
        populateTextBoxes(id);
}