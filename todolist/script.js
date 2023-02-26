

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded",getLocalTodos);
todoButton.addEventListener("click",addToDo);
todoList.addEventListener("click",toDoClick);
filterOption.addEventListener("change", filterTodo);


function toDoClick(event){
    const item  = event.target;
    if(item.classList[0]=== "trash-btn"){
        deleteToDo(event);
    }
    else if(item.classList[0]  === 'complete-btn' ||item.classList[0]  === 'incomplete-btn' ){
        ToggleToDo(event);
    }
}


function ToggleToDo(event){
   const item = event.target ;
   if(item.classList[0] === 'complete-btn'){
       
       item.classList.replace('complete-btn','incomplete-btn');
       item.innerHTML = 'Incomplete';
   }
   else if(item.classList[0] === 'incomplete-btn'){
        item.classList.toggle('incomplete-btn', 'complete-btn',);
        item.innerHTML ='Completed';
   }
}

// this is not yet complete

function filterTodo(event) {
   
  const action = event.target.value;
   console.log("action  is   ",action);
   const toDos = todoList.childNodes;
   console.log("toDos  ",toDos);
   toDos.forEach((item)=>{
      switch(action){
        case "incomplete":
            if(item.classList && item.classList[0] === 'complete-btn'){
                item.style.display ='none';
            }
            break;
      }

   })
   
    
}



function getLocalTodos(){

  let todos ;
  if(localStorage.getItem("todos") === null){
    todos =[];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  
  todos.forEach((item)=>{
     
     const toDoDiv = document.createElement("div");
     toDoDiv.classList.add("todo");
     const toDoItem = document.createElement("li");
     toDoItem.classList.add("todo-item");
     toDoItem.innerHTML = item;
     toDoDiv.appendChild(toDoItem);
     // adding cross bar 
     const completedButton = document.createElement("button");
     completedButton.innerHTML = 'Completed';
     completedButton.classList.add("complete-btn");
     toDoDiv.appendChild(completedButton);
     // adding icon
     const trashButton = document.createElement("button");
     trashButton.innerHTML = 'Delete';
     trashButton.classList.add("trash-btn");
     toDoDiv.appendChild(trashButton)
;
     
     todoList.append(toDoDiv);

  })

}
function deleteToDo(event){
   alert('fired2');
   const item  = event.target;

   if(item.classList[0] == "trash-btn"){
     const todo = item.parentElement;
     removeLocalTodos(todo);
     todo.remove();
    
   }

}

function removeLocalTodos(toDo){
    let toDos ;
    if(localStorage.getItem('todos') === null){
        toDos =[];
    }
    else{
        toDos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = toDo.children[0].innerText;
    toDos.splice(toDos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(toDos));

}


function addToDo(event){
    event.preventDefault();
    if(todoInput.value ===''){
        return ;
    }
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    const newToDo = document.createElement("li");
    newToDo.innerHTML = todoInput.value ;
    newToDo.classList.add("todo-item");
    toDoDiv.appendChild(newToDo);
    saveLocalTodos(todoInput.value);
    
    const completedButton = document.createElement("button");
    completedButton.innerHTML = 'Completed';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
  
    const trashButton = document.createElement("button");
    trashButton.innerHTML = 'Delete';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);
    
    todoList.appendChild(toDoDiv);
    todoInput.value = "";

}

function saveLocalTodos(newToDo){
    let toDos;
    if(localStorage.getItem("todos") === null){
          toDos = [];
    }
    else{
        toDos = JSON.parse(localStorage.getItem("todos"));
    }
    toDos.push(newToDo);
    localStorage.setItem("todos", JSON.stringify(toDos));    
}


