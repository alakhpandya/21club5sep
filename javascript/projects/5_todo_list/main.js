let input_task = document.querySelector('input')
let add_btn = document.getElementById('add_btn')
let task_container = document.querySelector('.task-container')
let new_task

add_btn.addEventListener('click', () => {
    new_task = document.createElement('div')
    new_task.classList.add('no-class')
    new_task_text = input_task.value;
    new_task.innerHTML = `<p>${new_task_text}</p>
    <div class="task-control">
        <span class="check"><i class="fa-solid fa-check"></i></span>
        <span class="trash"><i class="fa-solid fa-trash"></i></span>
    </div>`;
    task_container.appendChild(new_task);
    input_task.value = "";
})