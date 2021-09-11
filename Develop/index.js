// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions and examples for use.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How may others contribute to this project?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "How to test your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select what license you\'re using.',
        choices: ['Apache 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'N/A'],

    },
    {
        type: 'input',
        name: 'gituser',
        message: 'Please enter your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("File written successfully"));
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(
            `${answers.project_name}_README.md`,
            generateMarkdown.generateMarkdown(answers)
        );
    });
}
// Function call to initialize app
init();
