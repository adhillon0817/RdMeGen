// TODO: Include packages needed for this application

const { fstat } = require("fs");
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What would you like to title your ReadMe?",
    },
    {
        type: 'input',
        name: "description",
        message: "How would you describe your work??",
    },
    {
        type: 'list',
        name: "license",
        message: "What kind of license would you like to use?",
        choices: ["MIT", "APACHE", "GPL"]
    },
    {
        type: 'input',
        name: 'installation',
        message: "What installations did you have to go through?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "How do you use the application?",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "What are the contributions?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What test did you run in order to get this ourcome?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "What is your GitHub username?",
    },

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
];

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("./output/README.md", generateMarkdown(response))
    })}

// Function call to initialize app
init();
