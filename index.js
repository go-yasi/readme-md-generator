// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const writeFile = (answers) => 
    `# ${answers.title}
## Description
${answers.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
[Here](${answers.usage}) is a link to the application's GitHub repository.  

## License
This file uses the [${answers.license}](https://choosealicense.com/).

## Contributing
This application was developed by ${answers.contributer}.

## Tests
[Here](${answers.test}) is a link to a video walkthrough demonstrating the application's functionality. 

## Questions
For more information, please visit my [GitHub Profile](https://github.com/${answers.github}/).  
For additional questions, you can email me at ${answers.email}.`


inquirer
    .prompt([
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
            name: "contributer",
            message: "What is your name? ",   
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
    .then((answers) => {
        const readMeContent = writeFile(answers);

        fs.writeFile("README.md", readMeContent, (err) =>
        err ? console.log(err) : console.log("Congratulations! Your professional README has been generated!")
        );
    });


