console.log('Starting userInput.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes')

var command = process.argv[2];
console.log('Command:', command)

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Fetching note')
} else if (command === 'remove') {
    console.log('Removing note')
} else {
    console.log('Command not recognized');
}
