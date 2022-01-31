class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskTest) {

        // clona template
        const template = document.querySelector('.task').cloneNode(true)

        //remove class hide
        template.classList.remove('hide')

        //manipular texto
        const templateText = template.querySelector('.task-title')
        templateText.textContent = taskTest

        const list = document.querySelector('#tasks-container')

        // inserir na lista
        list.appendChild(template)

        // adiciona evento nas tasks
        this.addEvents()

        this.checkTasks('add')
    }

    removeTask(task) {
        // achar o elemento
        const parentEl = task.parentElement
    
        // remover da lista
        parentEl.remove()

        this.checkTasks('remove')
    }

    completeTask(task) {

        // adiciona a classe done
        task.classList.add('done')

    }

    addEvents() {

        const removeButtons = document.querySelectorAll('.fa-trash')
        const removeButton = removeButtons[removeButtons.length - 1];
        const doneButtons = document.querySelectorAll('.fa-check')
        const doneButton = doneButtons[doneButtons.length - 1];

        // adicionar evento de remover 
        removeButton.addEventListener('click', function() {
            todo.removeTask(this)
        })

        // adicionar evento de completar tarefa
        doneButton.addEventListener('click', function() {
            todo.completeTask(this)
        })
    }
    
    checkTasks(command) {
        
        const msg = document.querySelector('#empty-tasks')

        // logica de add ou remover tasks
        if(command === 'add') {
            this.totalTasks +=1
        } else if(command === 'remove') {
            this.totalTasks -= 1
        }

        // checa se tem mais de uma task e add ou remove a classe

        if(this.totalTasks == 1) {
            msg.classList.remove('hide')
        } else {
            msg.classList.add('hide')
        }
    }
}

const todo = new Todo()

// events 

const addButton = document.querySelector('#add')

addButton.addEventListener('click', function(e) {
    e.preventDefault()

    const taskText = document.querySelector('#task')

    if(taskText.value != '') {
        todo.addTask(taskText.value)
    } else {
        alert('Insira algum texto!')
    }

    // limpa campo de texto
    taskText.value = ''
})