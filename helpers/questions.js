const menuOptions = ['Cancel', 'Create task', 'List tasks', 'List completed tasks', 'List pending tasks', 'Complete task(s)', 'Delete task'];


const menuQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'Select one option: ',
        choices: [
            {
                value: 0,
                name: `0. ${ menuOptions[0] }`
            },
            {
                value: 1,
                name: `1. ${ menuOptions[1] }`
            },
            {
                value: 2,
                name: `2. ${ menuOptions[2] }`
            },
            {
                value: 3,
                name: `3. ${ menuOptions[3] }`
            },
            {
                value: 4,
                name: `4. ${ menuOptions[4] }`
            },
            {
                value: 5,
                name: `5. ${ menuOptions[5] }`
            },
            {
                value: 6,
                name: `6. ${ menuOptions[6] }`
            }
        ]
    }
];

const pauseQuestion = [
    {
        type: 'input',
        name: 'pause',
        message: `Press ${ 'ENTER'.green } to continue.` 
    }
];



module.exports = {
    menuQuestion,
    pauseQuestion
};