#!/usr/bin/env node

/*
 * @Author: Arpit.Yadav
 * @Date: 2019-02-20 21:15:26
 * @Last Modified by: Arpit.Yadav
 * @Last Modified time: 2019-02-23 00:59:11
 */

// const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
// const program = require('commander');
const shell = require('shelljs');
const _ = require('lodash');
const { generateModule } = require('./moduleGenerator');
const { generateServer } = require('./serverGenerator');
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
};
const run = async () => {
  init();
  // eslint-disable-next-line no-undef
  let passedArgs = process.argv.slice(2);
  console.log(passedArgs);
  if (passedArgs.length == 2) {
    if (passedArgs[0] == '--server') {
      generateServer(passedArgs[1]);
    } else if (passedArgs[0] == '--module') {
      generateModule(passedArgs[1]);
    } else {
      help();
    }
  } else {
    help();
  }
};

run();
