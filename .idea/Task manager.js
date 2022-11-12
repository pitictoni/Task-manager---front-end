function addRow(){
    console.log("Adaug un rand in tabel");

    const row = document.createElement('tr');

    const idTd = document.createElement('td');
    const titleTd = document.createElement('td');
    const priorityTd = document.createElement('td');
    const actionTd = document.createElement('td');

    idTd.innerHTML = "55";
    titleTd.innerHTML = "Linie adaugata din JS";
    priorityTd.innerHTML = "8";

    const editImg = document.createElement('img');
    editImg.src = "Img/edit.jpg";
    editImg.className = "imagineMica";
    actionTd.appendChild(editImg);

    const deleteImg = document.createElement('img');
    deleteImg.src = "Img/delete.jpg";
    deleteImg.className = "imagineMica";
    actionTd.appendChild(deleteImg);

    row.append(idTd, titleTd, priorityTd, actionTd);

    const tasksTable = document.getElementById('tasksTable');

    tasksTable.appendChild(row);
}

function deleteTask(){
    console.log("Aici sterg un rand");
}
window.onload = (event) =>{
    //addRows();
}