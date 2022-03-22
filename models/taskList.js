require('colors');
const Task = require('./task');

class TaskList {
    #list = {};


    /**
     * Return the task list.
     * @return { Task[] }
     */
    get getListArr() {
        let listArr = [];
			
        Object.keys(this.#list).forEach( key => {
            const task = this.#list[key];
            listArr.push( task );
        });

        return listArr;
    }

    constructor() {
        this.#list = {};
    }

    /**
     * Create a task based on the id, desc and date passed.
     * @param { string, string, string }
     */
    createTask(id = '', desc = '',  date = '') {
        const task = new Task(id , desc, date);
        this.#list[task.id] = task;
        console.log('Created task with description' + ` ${ task.description }`.cyan);
    }

    /**
     * Load tasks read from a .json file (type Object).
     * @param { Object[] }
     */
    loadTasks( objectsArr = [] ) {
        objectsArr.forEach(element => {
            const task = new Task(element.id, element.description, element.doneDate)
            this.#list[task.id] = task;
        });
    }

    /**
     * Return the #list formatted
     * @return { string }
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
     * @param { boolean }
     * @return  { string }
     */
    getTaskListCompletedOrPendingFormatted( flag = false) {
        let taskList = '';

        let taskListFlag = flag 
                            ? this.getListArr.filter( task => task.doneDate != null )
                            : this.getListArr.filter( task => task.doneDate == null );
        
        taskListFlag.forEach( (task, index) => {
            const status = flag ? `:: ${ task.doneDate }`.green : `:: Pending`.yellow;
            taskList += `${ index + 1 }. `.cyan + `${ task } ${ status } \n`
        });

        return taskList;
    }

    /**
     * Delete the task by the id and confirmation passed.
     * @param { string, boolean }
     */
    deteleTask(id = '', confirmation = false) {
        if( id ) {
            if( this.#list[id] && confirmation ){
                delete this.#list[id];
                console.log(`The task with id ${ id } has been removed.`.red);
            }else{
                console.log('Task not deleted');
            }
        }
    }

    /**
     * Complete the task of the ids passed and uncompleted the not present.
     * @param { String[] }
     */
    completeTasks( ids = [] ) {
        ids.forEach( id => {
            const task = this.#list[id]
            if ( !task.doneDate ) {
                task.doneDate = new Date().toISOString();
            } 
        });

        this.getListArr.forEach( task => {
            if ( !ids.includes(task.id) ) {
                this.#list[task.id].doneDate = null;
            }
        })
    }
}


module.exports = TaskList;