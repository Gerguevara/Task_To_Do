// requires
const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const ToDo = require('./to_do/to_do.js');


// logic
let command = argv._[0]

switch (command) {

  case 'create':
    let task = ToDo.create(argv.description);
    console.log(task);
    console.log('you has created a task ');
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
    console.log('you are updating a task ');
    break;

  default:
    console.log(' unknowed command');
}
