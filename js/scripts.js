const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("p");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo", "button-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("remove-todo", "button-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(editBtn);

    const tarefas = document.getElementById("tarefas");

    if(tarefas.classList.contains("hide")){
        tarefas.classList.remove("hide")
    }

    todoList.appendChild(todo);

    todoInput.value = "";
}
   

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = todoInput.value;
    if(inputValue){
       saveTodo(inputValue);
    }
});

document.addEventListener("click", (event) => {
    const targetEl = event.target;
    const parentEl = targetEl.closest("div");

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }
    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }
});

// function handleCreateTodo(todo){
//     const node = document.createElement("p");
//     const textnode = document.createTextNode(todo);
//     node.appendChild(textnode);
//     document.getElementById("todo-list").appendChild(node);
//     console.log(todo);
// }

// function handleChecTodo{
    
// }
// function handleEditTodo{

// }
// function handleDeleTodo{

// }