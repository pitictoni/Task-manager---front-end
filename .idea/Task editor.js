async function populateTextBoxes(id) {
    const titleTextbox = document.getElementById('title');
    const priorityTextbox = document.getElementById('priority');

    const response = await fetch('http://localhost:8080/task/' + id);
    const task = await response.json();

    titleTextbox.value = task.title;
    priorityTextbox.value = task.priority;
}

window.onload = (event) =>{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const id = params.get('id');

    if (id!=0) // s-a intrat de pe Edit, deci trebuie sa punem vechile valori in textboxuri
        populateTextBoxes(id);
}