require('colors');


const main = async() => {
    console.clear();
    
    let optSelected;

    do {

        try {
            // optSelected = await showMenu();
        } catch (error) {
            console.log(error);
        }
        // if(optSelected !== 0) await pause();

    } while (optSelected != 0);

};


main();