
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
render();

function check1(event)
{
    if(event.key=='Enter' && !event.shiftkey)
    {
        event.preventDefault();
        checkform();
    }
}

function check2(event)
{
    if(event.key=='Enter' && !event.shiftkey)
    {
        event.preventDefault();
        add();
    }
}

function checkform()
{
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var msg  = document.getElementById("Message").value;
    
    if(name=="" || email=="" || msg=="")
    {
        console.warn("Input is empty");
        return;
    }

    var cntofemail =0;
    var cntofdot = 0;
    var posofa = -1;
    var posofdot = -1;
    for(var i =0;i<email.length;i++)
    {
        if(email[i]=='@' && cntofemail==0)
        {
            posofa = i+1; 
            cntofemail++;
        }

        if(email[i]=="." && cntofdot==0)
        {
            posofdot = i+1;
            cntofdot++; 
        }

        if(cntofdot==1 && cntofemail==1)
        {
            break;
        }
    }

    if(posofa<0 || posofdot<0 )
    {
        alert("Not a valid email");
        return;
    }

    if(posofa>=posofdot)
    {
        alert("Not a valid email");
        return;
    }

    if(msg=="")
    {
        alert("Message should not be empty");
        return;
    }
    alert("Message Sent!");
}


function add()
{
    var task = document.getElementById("task").value;
    if(task=="")
    {
        alert("Task sholudnt be empty");
        return;
    }
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    render();
    document.getElementById("task").value = "";
    document.getElementById("task").focus();
}

function render()
{
    const ul = document.getElementById("tasks");
    ul.innerHTML = "";
    tasks.forEach((t,i) => {
        ul.innerHTML += `<li>${t}<button onclick="deleteTask(${i})">Delete this</button></li>`
    })
}

function deleteTask(i)
{
    tasks.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    render();
}
