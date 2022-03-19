const menuOptions = ['Create task', 'List tasks', 'List completed tasks', 'List pending tasks', 'Complete task(s)', 'Delete task', 'Cancel'];


const menuQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'Select one option: ',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green} ${ menuOptions[0] }`
            },
            {
                value: 2,
                name: `${ '2.'.green} ${ menuOptions[1] }`
            },
            {
                value: 3,
                name: `${ '3.'.green} ${ menuOptions[2] }`
            },
            {
                value: 4,
                name: `${ '4.'.green} ${ menuOptions[3] }`
            },
            {
                value: 5,
                name: `${ '5.'.green} ${ menuOptions[4] }`
            },
            {
                value: 6,
                name: `${ '6.'.green} ${ menuOptions[5] }`
            },
            {
                value: 7,
                name: `${ '7.'.green } ${ menuOptions[6] }`
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

const createTaskQuestion = [
    {
        type: 'input',
        name: '_description',
        message: 'Insert task description: ',
        validate( val ) {
            if( val.length === 0 ) {
                return 'The description cant be empty.'.red;
            }
            return true;
        }
    }
];


module.exports = {
    menuQuestion,
    pauseQuestion,
    createTaskQuestion
};