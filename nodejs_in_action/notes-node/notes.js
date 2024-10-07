console.log("Starting notes.js")

// module.exports.age = 22;

var addNote = (title, body) => {
    console.log('Adding note', title, body);
}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title)
}

var removeNote = (title) => {
    console.log('Removing Note', title)
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}