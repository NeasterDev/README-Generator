// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const gm = require('./utils/generateMarkdown.js');
const { file } = require('tmp');

// TODO: Create an array of questions for user input
const questions = ['Project title:', 'Description:', 'Installation', 'Usage:', 'Contributing:', 'Tests:', 'License:', 'Github Username:', 'Email:'];
const readMe = './testreadme.md';

const licenses = ['Apache License 2.0', 'BSD 3', 'BSD-2', 'GNU GPL', 'GNU LGPL', 'MIT']


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Created new file.");
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'question1',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'question2',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'question3',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'question4',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'question5',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'question6',
            message: questions[5]
        },
        {
            type: 'checkbox',
            choices: licenses,
            name: 'question7',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'question8',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'question9',
            message: questions[8]
        },

    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers.question1);
        writeToFile(readMe, gm.generateMarkdown(answers));
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
  });

}

// Function call to initialize app
init();
