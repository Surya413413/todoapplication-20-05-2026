// getting the elements from the DOM and assigning them to variables
let todoinput = document.getElementById("todoinput");
let addtodo = document.getElementById("addtodo");
let unorderlisttodo = document.getElementById("unorderlisttodo");
let savetodo = document.getElementById("savetodo");
let emptytodomsg = document.getElementById("emptytodomsg");

// todolist is an default arrays using for testing purpose
// let todoList = [
//   {
//     id: 1,
//     title: "HTML",
//   },
//   {
//     id: 2,
//     title: "CSS",
//   },
//   {
//     id: 3,
//     title: "Javascript",
//   },
//   {
//     id: 4,
//     title: "react",
//   },
// ];

// function to get the todo list from local storage and parse it into an array of objects
function getTodoListfromLocalstorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

// get the todo list from local storage and assign it to the todoList variable
let todoList = getTodoListfromLocalstorage();
let todoscount = todoList.length;

// function to save the todo list to local storage when the save button is clicked
savetodo.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// function to add a new todo item to the todo list and display it on the page
function addtoddoitems() {
  let userinput = document.getElementById("todoinput");
  let useriputvalue = userinput.value;
  if (useriputvalue === "") {
    alert("please enter a valid todo");
    return;
  }

  todoscount = todoscount + 1;

  let newTodo = {
    uniqueNo: todoscount,
    title: useriputvalue,
    isChecked: false,
  };
  todoList.push(newTodo);
  createandAppendtodo(newTodo);

  userinput.value = "";
}

// function to delete a todo item from the todo list and remove it from the page
function deleteTodoItem(todoId) {
  let tododeleteId = document.getElementById(todoId);
  unorderlisttodo.removeChild(tododeleteId);
  let deletetodoIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });
  todoList.splice(deletetodoIndex, 1);
}

// function to change the status of a todo item when the checkbox is clicked and update the local storage
function stautschange(checkboxId, labelId, todoId) {
  let checkbox = document.getElementById(checkboxId);
  let label = document.getElementById(labelId);

  label.classList.toggle("checked");

  let todoIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;

    return eachTodoId === todoId;
  });

  let todoobject = todoList[todoIndex];

  todoobject.isChecked = checkbox.checked;

  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// check if the todo list is empty and display a message if it is, otherwise display the todo items
if (todoList.length === 0) {
  emptytodomsg.textContent = "No todos to display";
} else {
  emptytodomsg.textContent = "";
}

// function to create and append a todo item to the page
function createandAppendtodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.id = todoId;
  unorderlisttodo.appendChild(listItem);

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = checkboxId;
  checkbox.classList.add("checkboxcss");
  checkbox.checked = todo.isChecked;
  checkbox.onclick = function () {
    stautschange(checkboxId, labelId, todoId);
  };
  listItem.appendChild(checkbox);

  let divconatiner = document.createElement("div");
  divconatiner.classList.add("todo-divconatiner", "todo-divconatiner2");
  listItem.appendChild(divconatiner);

  let label = document.createElement("label");

  label.textContent = todo.title;
  label.setAttribute("for", checkboxId);
  label.id = labelId;
  label.classList.add("labelcss");
  if (todo.isChecked === true) {
    label.classList.add("checked");
  }
  divconatiner.appendChild(label);

  let deleteconatiner = document.createElement("div");
  deleteconatiner.classList.add("delete-conatiner");
  divconatiner.appendChild(deleteconatiner);

  let detelebutton = document.createElement("button");
  detelebutton.classList.add("delete-button");
  detelebutton.textContent = "Delete";

  detelebutton.onclick = function () {
    deleteTodoItem(todoId);
  };
  deleteconatiner.appendChild(detelebutton);
}

// loop through the todo list and create and append each todo item to the page
for (let todo of todoList) {
  createandAppendtodo(todo);
}

// add an event listener to the add button to call the addtoddoitems function when it is clicked and add an event listener to the save button to call the savetodo function when it is clicked
addtodo.onclick = function () {
  addtoddoitems();
};
