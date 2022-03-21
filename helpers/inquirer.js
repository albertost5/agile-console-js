require('colors');
const inquirer = require('inquirer');
const { menuQuestion, pauseQuestion, createTaskQuestion } = require('./questions')


const showMenu = async() => {

    console.clear();
    console.log('=================='.cyan);
    console.log('Select one option: '.white);
    console.log('================== \n'.cyan);

    const { option } = await inquirer.prompt( menuQuestion );
    
    return option;
};

const pause = async() => {
    await inquirer.prompt( pauseQuestion ); 
};

const getTaskDescription = async() => {
    const task = await inquirer.prompt( createTaskQuestion );
    return task._description;
};

const taskListToDeleteWithConfirmation = async( taskListArr = [] ) => {
    let choices = [];
    
    taskListArr.forEach( ( task, index ) => {
        let i = index + 1;
        choices.push({
            value: i,
            name: `${i}.`.green + ` ${ task }`
        });        
    });

    choices.unshift({
        value: 0,
        name: `${ '0.'.green } Cancel`
    })

    const { id_to_delete } = await inquirer.prompt({
        type: 'list',
        name: 'id_to_delete',
        message: 'Select one task to delete it: ',
        choices: choices
    });

    const idTaskToDelete = taskListArr[ id_to_delete - 1 ]?.id;
    let response;

    if( idTaskToDelete ) {
        const { answer_delete_id } = await inquirer.prompt({
            type: 'input',
            name: 'answer_delete_id',
            message: `Do you want to remove the task with id ${ idTaskToDelete } ? (y/n)`,
        });
    
        const answer = /y(?:es)?|1/i.test(answer_delete_id);
    
        response = {
            id: idTaskToDelete,
            answer
        }
    }else {
        response = {
            id: null,
            answer: null
        }
    }

    return response;
};

const taskListToComplete = async( taskListArr = [] ) => {
    let choices = [];

    taskListArr.forEach( ( task, index ) => {
        let i = index + 1;
        const checked = task.doneDate ? true : false;

        choices.push({
            value: task.id,
            name: `${i}.`.green + ` ${ task }`,
            checked: checked
        })     
    });
    
    const { ids } = await inquirer.prompt({
        type: 'checkbox',
        name: 'ids',
        message: 'Select task(s) to be completed or uncompleted: ',
        choices: choices
    });

    return ids;
};

module.exports = {
    showMenu,
    pause,
    getTaskDescription,
    taskListToDeleteWithConfirmation,
    taskListToComplete
}