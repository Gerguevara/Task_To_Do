// requires
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const ToDo = require('./to_do/to_do.js');



let command = argv._[0]


// menu options
switch (command) {

  case 'create':
    let task = ToDo.create(argv.description);
    console.log(task);
    console.log('you has created a task'.cyan);
    break;

  case 'list':
    let list = ToDo.getList();
    for (let task of list) {
      console.log('=======Task to do====='.green);
      console.log(task.description.cyan);
      console.log(`Stage: ${task.completed}`.cyan);
      console.log('=======================');
    }
    break;

  case 'update':
    let updated = ToDo.update(argv.description, argv.completed)
    // also it could be like ToDo.update(argv.d, argv.c)
    console.log(updated.cyan);
    break;

  case 'delete':
    let deletet = ToDo.deletet(argv.description);
    console.log(deletet.green);
    break;

  case 'edit':
    let edit = ToDo.edit(argv.description, argv.new_Description);
    console.log(edit.green);
    break;

  default:
    console.log(' unknowed command');
}
