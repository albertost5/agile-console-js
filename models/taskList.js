const Task = require('./task');

class TaskList {
    #list = {};

    get getListArr() {
        let message = [];
			
        Object.keys(this.#list).forEach( key => {
            const task = this.#list[key];
            message.push( task );
        });

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
            const task = new Task(element.id, element.description, element.doneDate)
            this.#list[task.id] = task;
        });
    }

    /**
     * Return the #list formatted
     * @return  {string}
     */
    getTaskListFormatted() {
        let taskList = '';
        this.getListArr.forEach( ( task, index ) => {
            taskList += `${ index + 1 }. `.cyan + `${task} \n`
        })

        return taskList;
    }
}


module.exports = TaskList;