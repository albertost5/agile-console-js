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
}

const getTaskDescription = async() => {
    const task = await inquirer.prompt( createTaskQuestion );
    return task._description;
}

const taskListToDeleteWithConfirmation = async( taskListArr = [] ) => {
    let choices = [];
    taskListArr.forEach( ( task, index ) => {
        let i = index + 1;
        choices.push({
            value: i,
            name: `${i}.`.green + ` ${ task }`
        });        
    });

    const { id_to_delete } = await inquirer.prompt({
        type: 'list',
        name: 'id_to_delete',
        message: 'Select one task to delete it: ',
        choices: choices
    });

    const idTaskToDelete = taskListArr[ id_to_delete - 1 ].id;

    const { answer_delete_id } = await inquirer.prompt({
        type: 'input',
        name: 'answer_delete_id',
        message: `Do you want to remove the task with id ${ idTaskToDelete } ? (y/n)`,
    });

    const answer = /y(?:es)?|1/i.test(answer_delete_id);

    const response = {
        id: idTaskToDelete,
        answer
    }

    return response;
}

module.exports = {
    showMenu,
    pause,
    getTaskDescription,
    taskListToDeleteWithConfirmation
}