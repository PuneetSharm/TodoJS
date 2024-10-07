window.addEventListener("load", () => {
    const form = document.getElementById('Todo-Form');
    const input = document.getElementById('Todo-input');
    const listElement = document.getElementById('tasks');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = input.value;
        if(!task){
            alert("Please add a task");
            return;
        }

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const contentElement = document.createElement('div');
        contentElement.classList.add('content');

        taskElement.appendChild(contentElement);

        const taskInputElement = document.createElement('input');
        taskInputElement.classList.add('text');
        taskInputElement.type = "text";
        taskInputElement.value = task;
        taskInputElement.setAttribute("readonly", "readonly");

        contentElement.appendChild(taskInputElement);

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('actions');

        taskElement.appendChild(buttonDiv);

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = "Edit";
        
        buttonDiv.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = "Delete";

        buttonDiv.appendChild(deleteButton);

        listElement.appendChild(taskElement);

        input.value = "";

        editButton.addEventListener('click', () => {
            if(editButton.innerText.toLowerCase() == 'edit'){
                taskInputElement.removeAttribute('readonly');
                taskInputElement.focus();
                editButton.innerText = "Save";
            }
            else{
                taskInputElement.setAttribute('readonly', 'readonly');
                editButton.innerText  = "Edit";
            }
        });

        deleteButton.addEventListener('click', () => {
            listElement.removeChild(taskElement);
        })
    })
})