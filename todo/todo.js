let todos = localStorage.getItem('todos')
let todosList = document.querySelector('#todos-list')

try {
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null
} catch(e) {
    todos = null
}

if (!todos) {
    todos = []
}

function createTodos(todos) {
    let todosList = document.querySelector('#todos-list')
    todosList.innerHTML = ''
    todos.forEach((todo, index) => {
        let li = document.createElement('li')
        li.className = "list-group-item"
        let content = document.createElement('span')
        content.textContent = todo.content
        content.style.textDecoration = !todo.status ? "initial" : 'line-through'
        let deleteBtn = document.createElement('img')
        deleteBtn.src = 'delete.png'
        deleteBtn.alt = 'delete icon'
        deleteBtn.className = 'float-right'
        deleteBtn.width = 20
        deleteBtn.height = 20
        li.append(content)
        li.append(deleteBtn)
        todosList.append(li)
        deleteBtn.addEventListener('click', e => {
            todos.splice(index, 1)
            createTodos(todos)
            localStorage.setItem('todos', JSON.stringify(todos))
        })
        content.addEventListener('click', e => {
            todos[index].status = !todos[index].status
            createTodos(todos)
            localStorage.setItem('todos', JSON.stringify(todos))
        })
    })
}

createTodos(todos)

let actions = document.querySelector('#actions')
let formWrapper = document.querySelector('#form-wrapper')

Array.from(actions.children).forEach(action => {
    if (action.dataset.action == 'add') {
        action.addEventListener('click', e => {
            formWrapper.innerHTML = `
                <form id="add">
                    <input type="text" class="form-control" name="add" placeholder="Add todo">
                </form>
            `
            createTodos(todos)
            let add = document.querySelector('#add')
            add.addEventListener('submit', e => {
                e.preventDefault()
                if (add.add.value) {
                    todos.push({content: add.add.value, status: false})
                    localStorage.setItem('todos', JSON.stringify(todos))
                    createTodos(todos)
                    add.add.value = ''
                }
            })
        })
    } else if (action.dataset.action == 'search') {
        action.addEventListener('click', e => {
            formWrapper.innerHTML = `
                <form id="search">
                    <input type="text" class="form-control" name="search" placeholder="Search todo">
                </form>
                `
                let search = document.querySelector('#search')
                search.addEventListener('keyup', e => {
                e.preventDefault()
                if (search.search.value) {
                    let filtered = todos.filter( todo => todo.content.toLowerCase().includes(search.search.value.toLowerCase()))
                    createTodos(filtered)
                } else {
                    createTodos(todos)
                }
            })
        })
    }
})