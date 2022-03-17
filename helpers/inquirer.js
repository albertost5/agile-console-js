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
    const taskDescription = await inquirer.prompt( createTaskQuestion );

    return taskDescription;
}

module.exports = {
    showMenu,
    pause,
    getTaskDescription
}