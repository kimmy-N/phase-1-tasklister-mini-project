document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskText = event.target.elements["new-task-description"].value;
    const data = { task: taskText };
    if (data.task.trim() !== "") {
      buildToDo(data.task);
      event.target.elements["new-task-description"].value = "";
    }
  });

  function buildToDo(task) {
    const taskList = document.getElementById("tasks");
    const newTask = document.createElement("li");
    newTask.textContent = task;
    taskList.appendChild(newTask);
  }
});
