//contact form
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const phone = document.getElementById('phno').value.trim();
    const message = document.getElementById('msz').value.trim();


    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain 10 digits only.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    alert('message sent successfully!');
    
});

//todolist
function addTask()
{
    const newTask = document.createElement('li');
    const tasklist = document.getElementById('tasklist');

    const taskValue = document.getElementById('inputTask').value.trim(); 
    if (taskValue === "") return; // 

    const taskSpan = document.createElement('span');  
    taskSpan.textContent = taskValue;
    newTask.appendChild(taskSpan); 

    document.getElementById('inputTask').value = ""; 

    deleteTask(newTask);
    tasklist.appendChild(newTask); 
}

function deleteTask(newTask)
{
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function() 
    {
        newTask.remove();
    }

    newTask.appendChild(deleteBtn);
}
