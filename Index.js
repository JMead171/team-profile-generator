const inquirer = require('inquirer');
const { writeFile } = require('./lib/generate-html.js');
const generateTeam = require('./dist/page-template.js');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");

const teamArray = [];

function addAnotherEmp() {
  inquirer.prompt([
    {
      type: 'confirm',
      message: 'Do you want to add another employee?',
      name: 'addAnother'
    }
  ])
  .then(function(answer){
    //console.log('answer', answer)
    if(answer.addAnother === true) {
      whichEmp()
    } else {
      let rawHTML = generateTeam(teamArray);
      let writeFileResponse = writeFile(rawHTML);
      writeFileResponse.then(data => {
        console.log(data.message);
      })
      writeFileResponse.catch(err => {
         console.log(err);
      })
    }
  })
}

function finalEmpQuestion(answer) {
  var teamRoleQ;
  if (answer.role === 'Engineer') {
    teamRoleQ = "What is your engineer's GitHub username";
  } else if (answer.role === 'Intern') {
    teamRoleQ = "Where did your intern go to school";
  } else if (answer.role === 'Manager') {
    teamRoleQ = "What is your office number";
  }

  inquirer.prompt({
    name: 'final',
    message: teamRoleQ,
    type: 'input'
  })
  .then(function(finalAnswer){
    //console.log('Time to push to array', finalAnswer, answer)
    if (answer.role === 'Engineer') {
      let newEngineer = new Engineer(answer.name, answer.id, answer.email, finalAnswer.final)
      teamArray.push(newEngineer)
    } else if (answer.role === 'Intern') {
      let newIntern = new Intern(answer.name, answer.id, answer.email, finalAnswer.final)
      teamArray.push(newIntern)
    } else if (answer.role === 'Manager') {
      let newManager = new Manager(answer.name, answer.id, answer.email, finalAnswer.final)
      teamArray.push(newManager)
    }
    addAnotherEmp()
  })
}

function whichEmp() {
  inquirer.prompt([
    // Menu to continue or finish
    {
      type: 'list',
      name: 'role',
      message: 'Which Employee would you like to make',
      choices: ['Manager', 'Engineer', 'Intern'],
    },
    // Employee name prompt
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your employee?'
    },
    // Employee id prompt
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee id'
    },
    // Employee email prompt
    {
      type: 'input',
      name: 'email',
      message: "What is your employee's email?"
    }])
    .then(function(answer) {
        finalEmpQuestion(answer)
    })
}

whichEmp();