// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { log } = require('console');
const prompt = inquirer.createPromptModule();


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Name of your Project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project'
    },

    // {
    //     type: 'input',
    //     name: 'table',
    //     message: 'Please enter your Table of Contents'
    // },

    {
        type: 'input',
        name: 'install',
        message: 'What are the Installation instructions?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage?'
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?'
    },

    {
        type: 'list',
        name: 'license',
        message: 'What license was used?',
        choices: ['Apache 2.0', 'MIT', 'GNU General Public License', 'None']
    },

    {
        type: 'input',
        name: 'test',
        message: 'What are the testing instructions?'
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];


// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then(({title, description, table, install, usage, contribution, license, test, github, email}) => {
    
        // assign a variable to the answrs and add # to indent
        // this is the basic, im gonna also do a more cleaner one with help form chatgpt and google

        // const content = `
        // #Project Title: ${title}
        // ###Description: ${description}
        // ##Table of Contents: ${table}
        // ##Installation Instructions: ${install}
        // ##Usage: ${usage}
        // ##Contributing: ${contribution}
        // ##License Type: ${license}
        // ##Testing Instructions: ${test}
        // ##GitHub Profile : ${github}
        // ##Email Address: ${email}`;

        // was not sure how to add the badge icon so i googled it adn couldnt figure out how to get it to generate all the license but just for the avialable choices
        let licenseBadge = '';
      if (license === 'Apache 2.0') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      } else if (license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      } else if (license === 'GNU General Public License') {
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      } else if (license === 'None') {
        licenseBadge = '![License: None](https://img.shields.io/badge/License-None-lightgrey.svg)';
      }


    //    test the syntax with stackededit. io and it seems to work, even the links, but i cant get it to work with https://codebeautify.org/markdown-viewer 

    const content= `
        # **#${title}**
        ${licenseBadge}

        ## Description
        ${description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

        ## Installation
        ${install}

        ## Usage
        ${usage}

        ## License
        Your application is covered with the ${license} license.

        ## Contributing
        ${contribution}

        ## Tests
        ${test}

        ## Questions
        If you have any questions about my Project, reach me here -
        - GitHub: [${github}](https://github.com/${github})
        - Email: ${email} 
            `;


        fs.writeFile('./README.MD', content.trim(), (err)=> {
            if (err) throw err;
            console.log('Readme File Created!!!');
        })
 });
}
// Function call to initialize app
init();
