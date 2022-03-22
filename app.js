require('colors');
const fs = require('fs');
const { showMenu, pause, getTaskDescription, taskListToDeleteWithConfirmation, taskListToComplete} = require('./helpers/inquirer');
const { saveTasks, readTasks } = require('./helpers/save');
const TaskList = require('./models/taskList');

const dbPath = './db';

const main = async() => {
    
    // Create the directory if it doesn't exist and the file to save the tasks.
    if( !fs.existsSync( dbPath ) ) {
        fs.mkdirSync(dbPath)
        fs.writeFileSync(`${ dbPath }/tasks.json`, '');
    }

    let optSelected;
    const taskList = new TaskList();
    const tasksListToImport = readTasks();

    // Fill the tasklist.#list with the data from the file
    if( tasksListToImport ) {
        taskList.loadTasks(tasksListToImport); 
    }

    do {
        try {
            optSelected = await showMenu();
            
            switch (optSelected) {
                // CREATE TASK
                case 1:
                    const taskDesc = await getTaskDescription();
                    taskList.createTask('', taskDesc, '');
                    break;
                // LIST TASKS
                case 2:
                    console.log( taskList.getTaskListFormatted() );
                    // console.log( new Intl.ListFormat( 'en', { type: 'conjunction' }).format( taskList.getListArr ));
                    break;
                // LIST COMPLETED TASKS
                case 3:
                    console.log( taskList.getTaskListCompletedOrPendingFormatted(true) );
                    break;
                // LIST PENDING TASKS
                case 4:
                    console.log( taskList.getTaskListCompletedOrPendingFormatted(false) );
                    break;
                // TOGGLE TASKS
                case 5:
                    const tasksIds = await taskListToComplete( taskList.getListArr );
                    taskList.completeTasks( tasksIds );
                    break;
                // DELETE TASK
                case 6:
                    const response = await taskListToDeleteWithConfirmation(taskList.getListArr);
                    taskList.deteleTask(response.id, response.answer);
                    break;
            }
        } catch (error) {
            console.log('ERR: ', error);
            return;
        }
        
        saveTasks(taskList.getListArr);

        if(optSelected !== 7) await pause();

    } while (optSelected != 7);

};


main();