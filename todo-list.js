const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "Wash",
    dueDate: "22/12/22",
    time: "23:33",
  },
  {
    name: "Drink",
    dueDate: "22/2/22",
    time: "23:33",
  },
];

renderToDoList();

function renderToDoList() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate, time } = todoObject;
    const html = `
    <div>
    ${name}
    </div>
    <div>
    ${dueDate}
    </div>
    <div>
    ${time}
    </div>
    <button onClick="
      todoList.splice(${i},1);
      renderToDoList();
    " 
    class="delete-todo-button">
    Delete
    </button>
    `;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
};
function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  const timeInputElement = document.querySelector(".js-time-input");
  const time = timeInputElement.value;

  todoList.push({ name, dueDate, time });
  inputElement.value = "";
  dateInputElement.value = "";
  timeInputElement.value = "";
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderToDoList();
};
function handlekeydown(event) {
  if (event.key === "Enter") {
    addToDo();
  }
};
