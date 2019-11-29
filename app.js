// requires
const argv = require('./config/yargs.js').argv;
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
      console.log('you are listing a task ');
    break;
    case 'update':
        console.log('you are updating a task ');
      break;

  default:
      console.log(' unknowed command');
}
