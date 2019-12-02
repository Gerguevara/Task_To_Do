const fs = require('fs');

let listToDo = [];

// funtion set up a task and using savingData funtion
const saveOnDB = () => {
  let data = JSON.stringify(listToDo);
  savingData(data)
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.log(e));
}


// funtion tu add a task using a promiese
let savingData = (data) => {
  return new Promise((result, reject) => {
    if (data == ' ' || data == undefined) {
      reject('You cannot create a empty task')
    } else {
      fs.writeFile(`db/db.json`, data, (err) => {
        if (err) throw new Error('It was a problem during the saving')

      });
    }
  });
}

// list all registered task in the DB
const getList = () => {
  loadDB();
  return listToDo;
}


//thit funtion push the object in he array
const create = (description) => {
  let toDo = {
    description,
    completed: false
  };
  loadDB();
  listToDo.push(toDo);
  saveOnDB();
  return toDo;
}

// this funtion show all task
const loadDB = () => {
  try {
    listToDo = require('../db/db.json');
  } catch (err) {
    listToDo = [];
  }
}

//this funtion is used to update the task state
//funtion FindIndex recives a callback and
//  return the index that meets the condition if there no index return -1
const update = (description, completed = true) => {
  loadDB();
  let index = listToDo.findIndex(task => {
    return task.description === description
  });
  if (index >= 0) {
    listToDo[index].completed = completed;
    saveOnDB();
    return 'task was updated!!'
  } else {
    return 'Sorry it could not found that Task'
  }
}

// this funtion delete a task
// funtion filter brings us an array that meets one condition, in this case
// it is excluding a task that match with description and then te original
// array is overwritten

const deletet = (description) => {
  loadDB();

  let newlist = listToDo.filter(task => {
    return task.description != description
  })
  if (newlist.length == listToDo.length) {
    return 'Sorry there is not such task'
  } else {
    listToDo = newlist;
    saveOnDB();
    return "Task was deleted"
  }
}

// thisi funtion edits a saved newDescription by findIndex funtion
const edit = (description, new_Description) => {
  loadDB()

  let index = listToDo.findIndex(task => {
    return task.description == description
  });
  if (index >= 0) {
    listToDo[index].description = new_Description;
    saveOnDB();
    return 'task description was updated!!'
  } else {
    return 'Sorry it could not found that Task description'
  }



}

// exporting modules
module.exports = {
  create,
  getList,
  update,
  deletet,
  edit
}
