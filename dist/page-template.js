const generateTeam = teamArray => {
  return `
      
      ${teamArray
        .map(({ name, id, email, offLnkSch, role }) => {
          return `
          <div>
            <h2>${name}</h3>
            <h3>Employee ID: ${id}</h3>
            <a href="${email}">Email: ${email}</a>
            <a href="${link}">GitHub: ${link}</a>
          </div>
        `;
        })}      
  `;
};

module.exports = teamArray => {
  const { name, id, email, offLnkSch, role } = teamArray;

  return `
  <!DOCTYPE html>
  <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
      <header>
        <div>
          <h1>My Team</h1>
        </div>
      </header>

      <main class="container my-team>
        <section class="my-team" id="team">
         ${generateTeam(team)}
        </section>
      </main>

      <footer class="container text-center py-3">
        <h3>&copy; ${new Date().getFullYear()} by Jeff Mead</h3>
      </footer>


    </body>
  </html>
  `;
};