const colors = require('colors');
const menuOptionsArr = require('./menuOptions');
const readline = require('readline');


const showMenu = () => {

    return new Promise( ( resolve, reject ) => {

        console.clear();
        console.log('=================='.cyan);
        console.log('Select one option: '.cyan);
        console.log('================== \n'.cyan);
    
        let index = 0;
        menuOptionsArr.forEach((menuOpt, index) => {
            console.log(`${ index }.`.cyan + ` ${ menuOpt }`);
            index++;
        });
    
        const rl = readline.createInterface( process.stdin, process.stdout );
    
        rl.question('Select one option: '.green, opt => {
            rl.close();

            let optToInt = Number.parseInt(opt);

            if(( opt && optToInt >= 0 && optToInt < menuOptionsArr.length && Number.isInteger(optToInt) )) {
                resolve(optToInt);
            }else {
                if( !Number.isInteger( optToInt ) ) {
                    reject('The input should be a number.'.red);
                }else {
                    reject(`The number selected should be between ${ 0 }-${ menuOptionsArr.length - 1 }.`.red);
                }
            }
        });

    });
}

const pause = () => {
    return new Promise( resolve => {
        const rl = readline.createInterface( process.stdin, process.stdout );
    
        rl.question(`Press ${ 'ENTER'.green } to continue.`, () => {
            rl.close();
            resolve();
        });
    })
}

module.exports = { 
    showMenu,
    pause
};
