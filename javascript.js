function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    if (taskText.trim() === "") return;

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.innerText = taskText;
    taskList.appendChild(newTask);

    taskInput.value = "";
}

function clearTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
