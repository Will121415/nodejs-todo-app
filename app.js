require('colors');

const {inquirerMenu, pause, readInput, todoListToDelete, todoListToCheck, confirm } = require('./helpers/inquirer');
const { getTodos, saveTodo } = require('./helpers/methods');
const Todos = require('./models/todos');

const main = async() => {
    const todos = new Todos();
    let opt = '' ;

    const todosFile = getTodos();

    if (todosFile) {
        todos.loadTodos(todosFile);
    }

    do {
        opt = await inquirerMenu();
        console.log();

        switch(opt) {
            case '1': {
                const value = await readInput('Descripción: ');
                todos.createTodo( value );
            }
            break;
            case '2': {
                todos.showTodoList();
            }
            break;
            case '3': {
                const todoList = todos.getTodosByStatus(true);
                todos.showTodoList(todoList);
            }
            break;
            case '4': {
                const todoList = todos.getTodosByStatus(false);
                todos.showTodoList(todoList);
            }
            break;
            case '5': {
                const ids = await todoListToCheck(todos.getTodos);
                todos.toggleCompleted(ids);
            }
            break;
            case '6': {
                const id = await todoListToDelete(todos.getTodos);
                
                
                if (id === '0') break;
                
                const ok =  await confirm('¿Está Seguro?');
                if(ok) {
                    todos.deleteTodo(id);
                    console.log('Tarea borrada!'.bgBlue);
                }
            }
            break;
        }
        console.log();
        saveTodo(todos.getTodos);
        if (opt !== '0') await pause();

    } while(opt !== '0')

    
}

main();