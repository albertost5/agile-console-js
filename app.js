require('colors');
const { showMenu, pause, getTaskDescription } = require('./helpers/inquirer');
const TaskList = require('./models/taskList');

const main = async() => {
    
    let optSelected;
    const taskList = new TaskList();
    do {

        try {
            optSelected = await showMenu();
            
            switch (optSelected) {
                case 1:
                    const taskDesc = await getTaskDescription();
                    taskList.createTask( taskDesc );
                    break;
                case 2:
                    console.log( new Intl.ListFormat( 'en', { type: 'conjunction' }).format( taskList.getListFormatted ));
                    break;
                case 3:
                
                    break;
                case 4:

                    break;
                case 5:
                
                    break;
                case 6:

                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }

        if(optSelected !== 0) await pause();

    } while (optSelected != 0);

};


main();