const chalk = require('chalk');
const shell = require('shelljs');
const _ = require('lodash');

exports.generateModule = async function(moduleName) {
  await shell.exec(`git clone --depth=1  https://github.com/arpit-absyadav/____server-module.git ${moduleName}`);
  await shell.exec(` rm -rf ${moduleName}/.git`);
  await shell.exec(` rm -rf .git`);
  // remaming Files

  // Model Creating
  console.log(chalk.green('CREATING ') + `[Schema]  ./${moduleName}/${moduleName}.model.js`);
  await shell.exec(`mv ./${moduleName}/school.model.js ./${moduleName}/${moduleName}.model.js`);

  // Routes creating
  console.log(chalk.green('CREATING ') + `[Route]  ./${moduleName}/${moduleName}.routes.js`);
  await shell.exec(`mv ./${moduleName}/school.routes.js ./${moduleName}/${moduleName}.routes.js`);

  // Controller creating
  console.log(chalk.green('CREATING ') + `[Controller]  ./${moduleName}/${moduleName}.controller.js`);
  await shell.exec(`mv ./${moduleName}/school.controller.js ./${moduleName}/${moduleName}.controller.js`);

  // Service creating
  console.log(chalk.green('CREATING ') + `[Service]  ./${moduleName}/${moduleName}.service.js`);
  await shell.exec(`mv ./${moduleName}/school.service.js ./${moduleName}/${moduleName}.service.js`);

  // Validator creating
  console.log(chalk.green('CREATING ') + `[Validator]  ./${moduleName}/${moduleName}.validator.js`);
  await shell.exec(`mv ./${moduleName}/school.validator.js ./${moduleName}/${moduleName}.validator.js`);
  console.log(chalk.green('CREATING ') + `[Validator]  ./${moduleName}/validators/registration.validator.js`);
  console.log(chalk.green('CREATING ') + `[Validator]  ./${moduleName}/validators/login.validator.js`);

  // Changing Some texts in files
  // Model
  let moduleStartcase = _.startCase(moduleName);
  await shell.exec(`sed -i 's/SchoolSchema/${moduleName}Schema/g' ./${moduleName}/${moduleName}.model.js `);
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/${moduleName}.model.js `);
  //   // Routes
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/${moduleName}.routes.js `);
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/${moduleName}.routes.js `);
  await shell.exec(`sed -i 's/_schoolValidator/_${moduleName}Validator/g' ./${moduleName}/${moduleName}.routes.js `);

  // Service
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/${moduleName}.service.js `);
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/${moduleName}.service.js `);

  // Controller
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/${moduleName}.controller.js `);
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/${moduleName}.controller.js `);

  // Validator
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/${moduleName}.validator.js `);
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/${moduleName}.validator.js `);
  // Validator folder
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/validators/registration.validator.js `);
  await shell.exec(`sed -i 's/school/${moduleName}/g' ./${moduleName}/validators/other.validator.js 
  `);
  await shell.exec(`sed -i 's/School/${moduleStartcase}/g' ./${moduleName}/validators/other.validator.js 
  `);

  // upateing Express.js
  console.log(chalk.yellow('UPDATING ') + `[Express Config]  ../../config/express.js`);
  await shell.exec(
    `sed -i '/aboveroutes/i require("./../app/modules/${moduleName}/${moduleName}.routes")(app)'  ../../config/express.js  `,
  );

  // upateing Mongoose.js
  console.log(chalk.yellow('UPDATING ') + `[Mongoose Config]  ../../config/database/mongoose.js`);
  await shell.exec(
    `sed -i '/schemas/i require("./../../app/modules/${moduleName}/${moduleName}.model")'  ../../config/database/mongoose.js`,
  );
};
