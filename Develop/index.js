// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please give installation instructions for your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please give the usage for your project.',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select a license.',
    choices: ['MIT', 'Apache', 'GNU'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please give contribution credits for your project.',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please give tests for your project.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github URL?',
  },

  {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err)
      throw err;
      console.log('It worked! Data transferred to ReadMe file.')
  });  
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userData) {
    console.log(userData)
    writeToFile("README.md", generateMarkdown(userData));
  });
};

// Function call to initialize app
init();
