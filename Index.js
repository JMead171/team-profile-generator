const inquirer = require('inquirer');
const { writeFile } = require('./lib/generate-html.js');
const generateTeam = require('./dist/page-template.js');

const Manager = require("./Manager.js");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern.js");

const teamArray = [];



const promptManager = () => {
  return inquirer.prompt([
    // Manager's name prompt  
    {
      type: 'input',
      name: 'name',
      message: "What is your team manager's name?"
    },
    // Manager's employee id prompt  
    {
      type: 'input',
      name: 'id',
      message: 'Enter your employee ID'
    },
    // Manager's email prompt  
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address'
    },
    // Manager's office # prompt  
    {
      type: 'input',
      name: 'office',
      message: 'Enter office number'
    }
  ])
  console.log(promtpmanager);
  let newMember = new Manager(name, id, email, office, role);
  teamArray.push(newMember);
};

const promptTeam = teamData => {
  return inquirer.prompt([
    // Menu to continue or finish
    {
      type: 'checkbox',
      name: 'role',
      message: 'Please add another team member or finish (Select one)',
      choices: ['Engineer', 'Intern', 'finish'],
      validate: menuInput => {
        if (menuInput === 'finish') {
          return;
        }
      }
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

    .then(function ({ role, name, id, email }) {
      let teamRole = "";
      if (role === 'Engineer') {
        teamRole = "What is your engineer's GitHub username";
      } else if (role === 'Intern') {
        teamRole = "What did your inter's go to school";
      };

      return inquirer.prompt([
        {
          type: 'input',
          name: 'linkSchool',
          message: '${teamRole}'
        }])

      let newMember = new Enginner(name, id, email, linkSchool, role);
      teamArray.push(newMember);
    }
};



promptManager();
promptTeam()
  .then(teamArray => {
    return generateTeam(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err => {
    console.log(err);
  });