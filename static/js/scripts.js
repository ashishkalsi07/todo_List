document.addEventListener('DOMContentLoaded', (event) => {
    fetchTodos();
});

function fetchTodos() {
    fetch('/todos')
        .then(response => response.json())
        .then(data => {
            const todoList = document.getElementById('todo-list');
            todoList.innerHTML = '';
            data.forEach(todo => {
                const li = document.createElement('li');
                li.textContent = todo;
                todoList.appendChild(li);
            });
        });
}

function addTodo() {
    const input = document.getElementById('todo-input');
    const todo = input.value;

    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: todo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            fetchTodos();
            input.value = '';
        }
    });
}
