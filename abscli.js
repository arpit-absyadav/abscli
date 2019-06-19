#!/usr/bin/env node

/*
 * @Author: Arpit.Yadav
 * @Date: 2019-02-20 21:15:26
 * @Last Modified by: Arpit.Yadav
 * @Last Modified time: 2019-03-02 13:23:20
 */

// const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
// const program = require('commander');
const { generateModule } = require('./singleConn/moduleGenerator');
const { generateServer } = require('./singleConn/serverGenerator');
const { multiConnModule } = require('./multiConn/moduleGenerator');
const { multiConnServer } = require('./multiConn/serverGenerator');
const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('abscli', {
        font: 'Bulbhead',
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  );
};
const help = async () => {
  console.log(chalk.red('WRONG INPUT: ') + ` Please pass valid command`);
  console.log(chalk.white('TO CREATE SERVER: ') + chalk.yellow('abscli --server  servername'));
  console.log(chalk.white('TO CREATE MODULE: ') + chalk.yellow('abscli --module  modulename'));
  console.log(
    chalk.white('TO CREATE MULTI DB CONN SERVER: ') + chalk.yellow('abscli --server  servername --multi-db-conn'),
  );
  console.log(
    chalk.white('TO CREATE MULTI DB CONN MODULE: ') + chalk.yellow('abscli --module  modulename --multi-db-conn'),
  );
};
const run = async () => {
  init();
  // eslint-disable-next-line no-undef
  let passedArgs = process.argv.slice(2);
  // console.log(passedArgs);

  if (passedArgs.length == 2) {
    if (passedArgs[0] == '--server') {
      generateServer(passedArgs[1]);
    } else if (passedArgs[0] == '--module') {
      generateModule(passedArgs[1]);
    } else {
      help();
    }
  } else if (passedArgs.length == 3) {
    if (passedArgs[0] == '--server' && passedArgs[2] == '--multi-db-conn') {
      multiConnServer(passedArgs[1]);
    } else if (passedArgs[0] == '--module' && passedArgs[2] == '--multi-db-conn') {
      multiConnModule(passedArgs[1]);
    } else {
      help();
    }
  } else {
    help();
  }
};

run();
