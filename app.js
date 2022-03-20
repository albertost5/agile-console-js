require('colors');
const { showMenu, pause, getTaskDescription, taskListToDeleteWithConfirmation} = require('./helpers/inquirer');
const { saveTasks, readTasks } = require('./helpers/save');
const TaskList = require('./models/taskList');

const main = async() => {
    
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
                case 1:
                    // create Task
                    const taskDesc = await getTaskDescription();
                    taskList.createTask('', taskDesc, '');
                    break;
                case 2:
                    // list Tasks
                    console.log( taskList.getTaskListFormatted() );
                    // console.log( new Intl.ListFormat( 'en', { type: 'conjunction' }).format( taskList.getListArr ));
                    break;
                case 3:
                    // list completed Tasks
                    console.log( taskList.getTaskListCompletedOrPending(true) );
                    break;
                case 4:
                    // list pending Tasks
                    console.log( taskList.getTaskListCompletedOrPending(false) );
                    break;
                case 5:
                    // complete Task(s)
                
                    break;
                case 6:
                    // delete Task
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