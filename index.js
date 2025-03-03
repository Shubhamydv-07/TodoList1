// document.querySelector("form").addEventListener("submit",myTodo);
// function myTodo(e){
//     e.preventDefault();
//     let taskName = document.querySelector("#task").value;
//     let taskPriority = document.querySelector("#priority").value;
    
//     displayTable(taskName,taskPriority);
// }
// function displayTable(taskName , taskPriority){
//     let row = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.innerText = taskName;
//     let td2 = document.createElement("td");
//     td2.innerText = taskPriority;
//     if(taskPriority == "High")td2.style.backgroundColor = "red";
//     else td2.style.backgroundColor = "yellow";
//     let td3 = document.createElement("td");
//     td3.innerText = "Add to Fav ";
//     row.append(td1,td2,td3);
//     document.querySelector("tbody").append(row);
// }

// document.querySelector("form").addEventListener("submit",myTodo);
// function myTodo(e){
//     e.preventDefault();
//     let taskName = document.querySelector("#task").value;
//     let taskPriority = document.querySelector("#priority").value;
    
//     let taskobj =  {taskName  , taskPriority};
//     console.log(taskobj);
//     // displayTable(taskName,taskPriority);
//     displayTable(taskobj);
// }
// function displayTable(taskobj){
//     let row = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.innerText = taskobj.taskName;
//     let td2 = document.createElement("td");
//     td2.innerText = taskobj.taskPriority;
//     if(taskobj.taskPriority == "High")td2.style.backgroundColor = "red";
//     else td2.style.backgroundColor = "yellow";
//     let td3 = document.createElement("td");
//     td3.innerText = "Add to Fav ";
//     row.append(td1,td2,td3);
//     document.querySelector("tbody").append(row);
// }

// displayTable(todoArr);

document.querySelector("form").addEventListener("submit",myTodo);
let todoArr = JSON.parse(localStorage.getItem("todo")) || [];
let favArr = JSON.parse(localStorage.getItem("favArr")) || [];

displayTable(todoArr);

function myTodo(e){
    e.preventDefault();
    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;
    
    let taskobj =  {taskName  , taskPriority};
    console.log(taskobj);
    todoArr.push(taskobj);
    localStorage.setItem("todo",JSON.stringify(todoArr));
    // displayTable(taskName,taskPriority);                                                                  
    displayTable(todoArr);
}
function displayTable(todoArr){
    document.querySelector("tbody").innerText = "";
    todoArr.forEach((el) => {                                                                                                                                       
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = el.taskName;
        let td2 = document.createElement("td");
        td2.innerText = el.taskPriority;
        if(el.taskPriority == "High")td2.style.backgroundColor = "red";
        else td2.style.backgroundColor = "yellow";
        let td3 = document.createElement("button");
        td3.innerText = "Add";
        td3.style.cursor = "pointer";
        td3.addEventListener("click",function(){
            favArr.push(el);
            localStorage.setItem("favArr",JSON.stringify(favArr));
        })
        row.append(td1,td2,td3);
        document.querySelector("tbody").append(row);
    });
}