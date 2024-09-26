const InputBox = document.getElementById("input_box");
const NewTask = document.getElementById("ul_tasks");


function add_task() {
    if(InputBox.value == "") {         
        alert("type a task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = InputBox.value;
        li.setAttribute("class","unchecked")
        NewTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
}


NewTask.addEventListener ("click", function(c)
    {        
    if(c.target.tagName === "LI"){
        c.target.classList.toggle("checked");
    }
    else if(c.target.tagName === "SPAN"){
        c.target.parentElement.remove();
    }
    
})

// to add new task by pressing Enter
InputBox.addEventListener ("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("button").click();
    }
}
)
