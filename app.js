require('colors');
const { showMenu, pause, getTaskDescription } = require('./helpers/inquirer');
const { saveTasks, readTasks } = require('./helpers/save');
const TaskList = require('./models/taskList');

const main = async() => {
    
    let optSelected;
    const taskList = new TaskList();
    const tasksListToImport = readTasks();
   
    // If there is data in the DB, we create the tasklist
    if( tasksListToImport ) {
        taskList.loadTasks( tasksListToImport ); 
    }

    do {
        try {
            optSelected = await showMenu();
            
            switch (optSelected) {
                case 1:
                    const taskDesc = await getTaskDescription();
                   taskList.createTask( taskDesc );
                    break;
                case 2:
                    console.log( taskList.getListArr );
                    // console.log( new Intl.ListFormat( 'en', { type: 'conjunction' }).format( taskList.getListArr ));
                    break;
                case 3:
                
                    break;
                case 4:

                    break;
                case 5:
                
                    break;
                case 6:

                    break;
            }
        } catch (error) {
            console.log('ERR: ', error);
            return;
        }

        saveTasks( taskList.getListArr );

        if(optSelected !== 7) await pause();

    } while (optSelected != 7);

};


main();