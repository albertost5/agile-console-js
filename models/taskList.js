const Task = require('./task');

class TaskList {
    _list = {};

    get list() {
        let message;
        
        Object.keys(this._list).length === 0 ?
            message = 'There are not tasks to list yet'.red :  
            message = this._list;

        return message;
    }

    constructor() {
        this._list = {};
    }

    createTask( desc ) {
        const task = new Task( desc );
        this._list[task.id] = task;
    }
}


module.exports = TaskList;