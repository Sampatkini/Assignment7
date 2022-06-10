// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
let fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {type:'input',
    name: 'title',
     message:'please enter the name of your project',
    },
  {
    type: 'input',
    name: 'name',
    message: 'my name is Sampat? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
       
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'sampatkini(Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
    when: ({ confirmAbout }) => confirmAbout
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  
  {
    type: 'input',
    name: 'feature',
    message: 'list the feature this project',
    
  },
{
    type:'input',
    name:'test',
    message:'enter test instructions'
},
{
    type:'input',
    name:'email',
    message:'enter your email',
}
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,`${data}`,error => error ? console.error(error) : console.log('Success') )
}
// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}
// Function call to initialize app
init().then(data => writeToFile(data.title, generatePage(data)));

















