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


module.exports = {
  create,
  getList
}
