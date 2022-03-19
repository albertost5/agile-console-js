const {v4: uuidv4 } = require('uuid')

class Task {
    id = '';
    description = '';
    doneDate = null;

    constructor(id, desc, date) {
        this.id = id ?? uuidv4();
        this.description = desc ?? this.description;
        this.doneDate = date ?? this.doneDate;
    }
    
    /**
     * Return the task's description.
     * @return  {string}
     */
    toString() {
        return this.description;
    }
}

module.exports = Task;