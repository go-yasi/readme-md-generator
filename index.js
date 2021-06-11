// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const writeFile = (answers) => 
    `# ${answers.title}
![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)  
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
[Here](${answers.video}) is a link to a video walkthrough demonstrating the application's functionality. 

## License
This application is covered under the ${answers.license} license.  

## Contributing
${answers.contributing}

## Tests
${answers.test}

## Questions
For more information, please visit my [GitHub Profile](https://github.com/${answers.github}/).  
For additional questions, please email me at ${answers.email}.`


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
            name: "video",
            message: "Please provide a link to a video walkthrough demonstrating the application's functionality: ",   
        },
        {
            type: "input",
            name: "contributing",
            message: "What guidelines would you like to offer for future contributions?",   
        },
        {
            type: "input",
            name: "test",
            message: "How did you test this application?",   
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your application from the following list of options: ", 
            choices: ["MIT", "GNU GPLv3", "ISC"],  
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
        err ? console.log(err) : console.log("Congratulations! Your professional README file has been generated!")
        );
    });


