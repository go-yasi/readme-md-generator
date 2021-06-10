// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");



//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn"t be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",        
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project:",   
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",   
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the link to the project's GitHub repository: ",   
        },
        {
            type: "input",
            name: "contribution",
            message: "List your collaborators, if any, with links to their GitHub profiles: ",   
        },
        {
            type: "input",
            name: "test",
            message: "Please provide a link to a video walkthrough demonstrating the application's functionality: ",   
        },
        {
            type: "input",
            name: "license",
            message: "Choose a license for your application from the following list of options: ",   
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",   
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",   
        },
    ])
};

console.log(questions);

// fs.writeFile("README.md", (error, data) =>
//     error ? console.error(error) : console.log(data)
// );

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
