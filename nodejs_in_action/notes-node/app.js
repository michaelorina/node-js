console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes')

// var res = notes.addNote();
// console.log(res)

var res = notes.add(7, 3);
console.log(res)

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old. `, (err) => {
//     if (err) {
//         console.log('Unable to write on file')
//     } else {
//         console.log('Writing on file...')
//         console.log('Closing app')
//     }
// });
