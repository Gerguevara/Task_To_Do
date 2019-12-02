const description = {
  demand: true,
  alias: 'd'
}

const  completed= {
  alias: 'c',
  default: true
}

const new_Description={
  alias: 'nd',
  demand: 'true'
}

const argv = require('yargs')
  .command('create', 'this command create a new task', {
    description
  })
  .command('update', 'thist command update a task state', {
    description,completed

  })
  .command('delete', 'thist command deletes a  saved task', {
    description
  })
  .command('edit', 'thist command edits a saved task', {
    description,new_Description
  })

  .help()
  .argv;



module.exports = { argv }
