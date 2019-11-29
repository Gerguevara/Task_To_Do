const fs = require('fs');

let listToDo = [];

// funtion to set a task
const saveOnDB = () =>{
  let data =  JSON.stringify(listToDo);
  savingData(data)
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.log(e));
}


// funtin tu add a task
let savingData= (data) => {
  return new Promise((result, reject)=>{
  if(data==' '|| data == undefined) {
    reject ('You cannot create a empty task')
  }
  else {
    fs.writeFile(`db/db.json`, data , (err) => {
      if(err) throw new Error('It was a problem during the saving')

  });
  }
}
);
}





const create = (description) => {
  let toDo = {
    description,
    completed: false
  };

listToDo.push(toDo);
saveOnDB();
return toDo;
}

module.exports = { create }
