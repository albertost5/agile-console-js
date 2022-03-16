const colors = require('colors');
const { showMenu, pause } = require('./helpers/messages');

console.clear();

const main = async() => {
    
    let optSelected;

    do {

        try {
            optSelected = await showMenu();
        } catch (error) {
            console.log(error);
        }
        if(optSelected !== 0) await pause();

    } while (optSelected != 0);

   

};


main();