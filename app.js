const argv = require('./config/yargs.js').argv;

let command = argv._[0]

switch (command) {

  case 'create':
    console.log('you are creating a task ');
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
