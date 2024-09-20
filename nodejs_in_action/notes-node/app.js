console.log('Starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}`, (err) => {
    if (err) {
        console.log('Unable to write on file')
    } else {
        console.log('Writing on file...')
        console.log('Closing app')
    }
});
