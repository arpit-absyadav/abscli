#!/usr/bin/env node

/*
 * @Author: Arpit.Yadav
 * @Date: 2019-02-20 21:15:26
 * @Last Modified by: Arpit.Yadav
 * @Last Modified time: 2019-02-20 21:15:58
 */

const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync('abscli', {
        font: 'Bulbhead',
        horizontalLayout: 'default',
        verticalLayout: 'default'
      })
    )
  );
};
const run = async () => {
  init();
  await shell.exec(
    `git clone --depth=1  https://github.com/arpit-absyadav/____server-module.git .`
  );
  await shell.exec(` rm -rf .git`);
};

run();
