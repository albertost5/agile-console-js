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
        await pause();
    } while (optSelected != 0);

   

};


main();