const fs = require('fs');

const path = './db/todos.json';

const saveTodo = ( data ) => {
    fs.writeFileSync(path, JSON.stringify(data));
}

const getTodos = () => {
    
    if (!fs.existsSync(path)) return null;

    const data = fs.readFileSync(path, { encoding: 'utf-8' });

    return JSON.parse(data);
}



module.exports = { saveTodo, getTodos }