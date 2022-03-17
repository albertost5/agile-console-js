require('colors');
const inquirer = require('inquirer');
const { menuQuestion, pauseQuestion } = require('./questions')


const showMenu = async() => {

    console.clear();
    console.log('=================='.cyan);
    console.log('Select one option: '.cyan);
    console.log('================== \n'.cyan);

    const { option } = await inquirer.prompt( menuQuestion );
    
    return option;
};

const pause = async() => {
    await inquirer.prompt( pauseQuestion ); 
}


module.exports = {
    showMenu,
    pause
}