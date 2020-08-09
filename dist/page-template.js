const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern.js");

const generateTeam = teamArray => {
  let i;
  let myHtml = "";
  for (i = 0; i < teamArray.length; i++) {
      if (teamArray[i] instanceof Manager) {
        myHtml += `
        <div>
          <h2>${teamArray[i].name}</h2>
          <h2>Manager</h2>
          <h3>Employee ID: ${teamArray[i].id}</h3>
          <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
          <h3>Office #: ${teamArray[i].officeNumber}</h3>
        </div>
      `;
      } else if (teamArray[i] instanceof Engineer) {
        myHtml += `
        <div>
          <h2>${teamArray[i].name}</h2>
          <h2>Engineer</h2>
          <h3>Employee ID: ${teamArray[i].id}</h3>
          <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
          <h3>GitHub: <a href="https://github.com/${teamArray[i].github}" target="_blank">${teamArray[i].github}</a></h3>
        </div>
        `;
      } else if (teamArray[i] instanceof Intern) {
        myHtml +=  `
          <div>
            <h2>${teamArray[i].name}</h2>
            <h2>Intern</h2>
            <h3>Employee ID: ${teamArray[i].id}</h3>
            <p>Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></p>
            <h3>School: ${teamArray[i].school}</h3>
          </div>
        `;
      }
  } 
  return myHtml;
};

module.exports = readTeam => {

  return `
  <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
    </head>

    <body>
      <header>
        <div>
          <h1>My Team</h1>
        </div>
      </header>

      <main class="container my-team">
        <section class="my-team" id="team">
          ${generateTeam(readTeam)}
        </section>
      </main>

      <footer class="container text-center py-3">
        <h3>&copy; ${new Date().getFullYear()} by Jeff Mead</h3>
      </footer>


    </body>
  </html>
  `;
};