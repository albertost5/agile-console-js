const fs = require('fs')
require('dotenv').config();

const path = process.DB_FILE_PATH;

const saveTasks = ( data ) => {
   
    try {
        fs.writeFileSync( path, JSON.stringify(data) );
        //file written successfully as String
    } catch (err) {
        console.error('ERR: ', err);
        return;
    }

}

const readTasks = () => {
    if ( !fs.existsSync( path ) ) {
        console.log('File path doesnt exist.');
        return;
    }

    let fileContentArrTasks;

    try {
        fileContentArrTasks = fs.readFileSync(path, { encoding: 'utf-8' });
        fileContentArrTasks = JSON.parse(fileContentArrTasks);
    } catch (error) {
        console.log('ERR: ', error);
        return;
    }
    
    // return the data as Object
    return fileContentArrTasks;
}


module.exports = {
    saveTasks,
    readTasks
}