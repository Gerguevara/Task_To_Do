const argv = require('yargs')
  .command('create', 'this command create a new task', {
    description: {
      demand: true,
      alias: 'd'
    }
  })
  .command('update', 'thist command update a task state', {
    description: {
      demand: true,
      alias: 'd'
    },
    completed: {
      alias: 'c',
      default: true
    }
  })
  .help()
  .argv;

module.exports = { argv }
