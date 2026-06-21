document.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let message =
        document.getElementById("message").value.trim();

    let error =
        document.getElementById("errorMsg");

    error.innerHTML = "";

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        error.innerHTML =
            "Name absent";
        return;
    }

    if(email === ""){
        error.innerHTML =
            "Email is mandatory";
        return;
    }

    if(!emailPattern.test(email)){
        error.innerHTML =
            "invalid email";
        return;
    }

    if(message === ""){
        error.innerHTML =
            "Message is required";
        return;
    }

    alert("Form Submitted Successfully!");

    document.getElementById("contactForm")
    .reset();
});

function addTask(){

    let taskInput =
        document.getElementById("taskInput");

    let task =
        taskInput.value.trim();

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li =
        document.createElement("li");

    li.innerHTML = `
        ${task}
        <button class="delete-btn"
        onclick="removeTask(this)">
        Delete
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}

