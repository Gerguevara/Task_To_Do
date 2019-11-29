const fs = require('fs');

let listToDo = [];

const create = (description) => {
  let toDo = {
    description,
    completed: false;
  };

listToDo.push(toDo);

return toDo;
}

module.exports = { create }
