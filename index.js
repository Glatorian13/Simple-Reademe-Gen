const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

//generate markdown varaible requirement
const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
//question object/array for inquirer
const questions = [{
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
}, {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
}, {
    type: "input",
    name: "toc",
    message: "Table of Content, hit ENTER to generate",
}, {
    type: "input",
    name: "installation",
    message: "How would a user install this project?"
}, {
    type: "input",
    name: "usage",
    message: "What is your project used for?",
}, {
    type: "list",
    name: "license",
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
    name: "contributors",
    message: "List all contributors in this project."
}, {
    type: "input",
    name: "tests",
    message: "What tests were run to ensure functionality of project?",
}, {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
}, {
    type: "input",
    name: "email",
    message: "Please enter the email associated with your GitHub account."
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("SUCCESS")
        }
    })
};

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
};

// Function call to initialize app
init();