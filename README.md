# Professional README Generator
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)  
## Description
The goal of this assignment was to create an application that uses the Inquirer package to dynamically generate a README.md file from a user’s command-line inputs. Happily, I was able to get it up and running quite quickly, and am even using it to generate this very README file!

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
First, I installed the Inquirer package by running “npm i inquirer” in my terminal. Next, I included the packages needed to run the application in my JS file using require. Then, I created a sample README file based on the acceptance criteria of the assignment to help me structure the prompts and template literals needed for this application. With the structure defined, I began creating the inquirer prompts. Once the prompts were complete, I created a template literal that mirrored the structure of the sample README and used the correct formatting for an md file. I stored this to a variable called writeFile. I then used fs to create the new MD file, add the content from my template literal, and console log a message upon execution. 

## Usage
[Here](https://github.com/go-yasi/readme-md-generator) is a link to the application's GitHub repository.  
[Here](https://www.loom.com/share/21d3aca02b3543a7b00f6ac2412da78e) is a link to a video walkthrough demonstrating the application's functionality. 

## License
This application is covered under the MIT license.  

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Tests
I tested this application by running node index.js in my terminal and answering each prompt to ensure that it correctly generated the new file with the correct content.

## Questions
For more information, please visit my [GitHub Profile](https://github.com/go-yasi/).  
For additional questions, please email me at yasi.moshtael@gmail.com.