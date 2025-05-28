const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="remove-btn">Remove</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  // toggle Button
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove Button
  li.querySelector(".remove-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });
});
