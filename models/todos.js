
/**
 *  _list
 * {'345270b8-52fe-438a': { id: '1', desc: 'Todo 1', createdIn: '16889124', completedIn: null }}
 * 
 */

const Todo = require('./todo');

class Todos {
    
    constructor() {
        this._list = {};
    }

    get getTodos() {
        const list = [];

        Object.keys(this._list).forEach( key => list.push(this._list[key]) )

        return list;
    }

    createTodo(desc = '') {
        const todo = new Todo( desc );
        this._list[todo.id] = todo;
    }

    loadTodos(todos = []) {
        todos.forEach(todo => {
            this._list[todo.id] = todo;
        })
    }

    showTodoList = (todoList) => {        
        const todos =  todoList ?? this.getTodos;
        
        todos.forEach((todo, index) => {
            const dateSting = new Date(todo.completedIn).getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds()

            const status = (todo.completedIn) ? 'Completed'.green : 'Pending'.red;
            console.log(`${++index}.`.green,`${todo.desc} ::`, `${status}`, `${dateSting}`.green);
        })
    }

    getTodosByStatus = (isCompleted) => {
        
        if (isCompleted === true) {
            return this.getTodos.filter(t => t.completedIn !== null);
        }

        return this.getTodos.filter(t => t.completedIn === null);
    }

    deleteTodo = (id = '') => {
        if(this._list[id]) delete this._list[id];
    } 

    toggleCompleted = (ids = []) => {

        ids.forEach((id) => {
            if (!this._list[id].completedIn) {
                this._list[id].completedIn = new Date().getTime();
            }
        })   


        this.getTodos.forEach(({id}) => {
            if(!ids.includes(id)) {
                this._list[id].completedIn = null;
            }
        })
    }
}

module.exports = Todos;