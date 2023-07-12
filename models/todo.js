const { v4: uuidv4 } = require('uuid');

class Todo {
    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
        this.createdIn = new Date().getTime();
        this.completedIn = null;
    }
}



module.exports = Todo;