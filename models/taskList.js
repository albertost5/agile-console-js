const { saveInfo } = require('../helpers/save');
const Task = require('./task');

class TaskList {
    _list = {};

    get getListFormatted() {
        let message;

        if( Object.keys(this._list).length === 0 ) {
            message = 'There are not tasks to list yet'.red
        }else {
        
            message = [];
			
            Object.values(this._list).forEach(t => {
                message.push( t.description );
            });
        }

        return message;
    }

    constructor() {
        this._list = {};
    }

    createTask( desc ) {
        const task = new Task( desc );
        console.log("createtask =>", task);
        this._list[task.id] = task;
    }
}


module.exports = TaskList;