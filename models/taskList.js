require('colors');
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
            const status = task.doneDate ? `:: Completed`.green : `:: Pending`.yellow;
            taskList += `${ index + 1 }. `.cyan + `${ task } ${ status } \n`
        })

        return taskList;
    }
/**
     * Return the #list formatted with the un/completed tasks.
     * @return  {string}
     */
    getTaskListCompletedOrPending( flag = false) {
        let taskList = '';
        let taskListFlag = flag 
                            ? this.getListArr.filter( task => task.doneDate != null )
                            : this.getListArr.filter( task => task.doneDate == null );
        
        taskListFlag.forEach( (task, index) => {
            const status = flag ? `:: ${ task.doneDate }`.green : `:: Pending`.yellow;
            taskList += `${ index + 1 }. `.cyan + `${ task } ${ status } \n`
        })
        return taskList;
    }
}


module.exports = TaskList;