function zeroPadding(nr){
    if (nr>=0 && nr<=9) return "00"+nr;
    if (nr>=10 && nr<=99) return "0"+nr;
    return nr;
}

function deleteTask(event){
    const id = event.target.id;

    fetch('http://localhost:8080/task/delete/+id',{method:'DELETE'});
    location.reload();
}

function addRow(task){

    const row = document.createElement('tr');

    const idTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const priorityTd = document.createElement('td');
    const actionTd = document.createElement('td');

    idTd.innerHTML = "TASK" + zeroPadding(task.id);
    titleTd.innerHTML = task.title;
    priorityTd.innerHTML = task.priority;

    const editImg = document.createElement('img');
    editImg.src = "Img/edit.jpg";
    editImg.className = "imagineMica";
    editImg.id = task.id;
    actionTd.appendChild(editImg);

    const deleteImg = document.createElement('img');
    deleteImg.src = "Img/delete.jpg";
    deleteImg.className = "imagineMica";
    deleteImg.id = task.id;
    deleteImg.addEventListener('click',deleteTask);
    actionTd.appendChild(deleteImg);

    row.append(idTd, titleTd, priorityTd, actionTd);

    const tasksTable = document.getElementById('tasksTable');

    tasksTable.appendChild(row);
}

async function populateTasksTable() {
    const response = await fetch('http://localhost:8080/task/all');
    const taskList = await response.json();

    for(const task of taskList){
       addRow(task);
    }
}

window.onload = (event) =>{
    populateTasksTable();
}