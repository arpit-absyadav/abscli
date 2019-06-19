const chalk = require('chalk');
const shell = require('shelljs');

exports.generateServer = async function(serverName) {
  console.log('Welcome to server Generator');
  await shell.exec(`git clone --depth=1  https://github.com/arpit-absyadav/flex-server-mongodb.git ${serverName}`);
  await shell.exec(` rm -rf .git`);
  await shell.exec(` rm -rf ${serverName}/.git`);

  console.log(chalk.green('CREATING ') + `[NPM] ` + chalk.blue('creating package.json '));
  console.log(chalk.green('CREATING ') + `[SERVER] ` + chalk.blue('creating server.js '));
  console.log(chalk.green('CREATING ') + `[EXPRESS] ` + chalk.blue('creating express.js '));
  console.log(chalk.green('CREATING ') + `[DOCKER] ` + chalk.blue('creating docker files.'));
  console.log(chalk.green('CREATING ') + `[JEST] ` + chalk.blue('creating jest configuration. '));
  console.log(chalk.green('CREATING ') + `[CONFIG] ` + chalk.blue('creating configuration (env).'));
  console.log(chalk.green('CREATING ') + `[MONGOOSE] ` + chalk.blue('creating configuration (database).'));
  console.log(chalk.green('CREATING ') + `[HANDLERS] ` + chalk.blue('creating handlers. '));
  console.log(chalk.green('CREATING ') + `[HELPERS] ` + chalk.blue('creating helpers. '));
  console.log(chalk.green('CREATING ') + `[PROVIDERS] ` + chalk.blue('creating providers. '));
  console.log(chalk.green('CREATING ') + `[MAILER] ` + chalk.blue('creating mail sender. '));

  console.log(chalk.green('CREATING ') + `[MODULE] ` + chalk.blue('creating user module. '));
  console.log(chalk.yellow('WAIT ') + `[NPM INSTALLING PACKAGES ....] `);
  shell.exec(`cd ${serverName} && npm i `);
  console.log(chalk.green('CONGRATULATIONS: ') + ` Your Server is ready. `);
};
// module.exports = generateServer;
