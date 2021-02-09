const inquirer = require("inquirer");
const fs = require("fs"); 
const util = require("util");

//generate markdown varaible requirement
const generateMarkdown = require('./util/generateMarkdown');

// TODO: Create an array of questions for user input
//question object/array for inquirer
const questions = [{
    type: "input",
    name: "Title",
    message: "Enter the title of your project.",
}, {
    type: "input",
    name: "Enter a description of your project.",
    title: "Description",
}, {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",
}, {
    type: "input",
    name: "Installation",
    message: "How would a user install this project?"
}, {
    type: "input",
    name: "Usage",
    message: "What is your project used for?",
}, {
    type: "checkbox",
    name: "License",
    choices: [
        "GNU_AGPLv3",
        "GNU_GPLv3",
        "Mozilla",
        "Apache",
        "MIT",
        "Boost",
        "The_unlicense"
    ],
    message: "Choose a license for your project (pick only one)."
}, {
    type: "input",
    name: "Contributors",
    message: "List all contributors in this project."
}, {
    type: "input",
    name: "Tests",
    message: "What tests were run to ensure functionality of project?",
}, {
    type: "input",
    name: "GitHub",
    message: "Please enter your GitHub username."
}, {
    type: "input",
    name: "Email",
    message: "Please enter the email associated with your GitHub account."
}

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
