const Task = require('./task');

class TaskList {
    #list = {};

    get getListArr() {
        let message;

        if( Object.keys(this.#list).length === 0 ) {
            message = 'There are not tasks to list yet'.red
        }else {
        
            message = [];
			
            Object.keys(this.#list).forEach( key => {
                const task = this.#list[key];
                message.push( task );
            });
        }

        return message;
    }

    constructor() {
        this.#list = {};
    }

    createTask( desc = '' ) {
        const task = new Task( desc );
        this.#list[task.id] = task;
    }

    loadTasks( objectsArr = [] ) {
        objectsArr.forEach(element => {
            this.#list[element.id] = element;
        });
    }
}


module.exports = TaskList;