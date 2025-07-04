const { readDb, writeDb } = require("./db-function");

// const dataObj = {
//     name: "Muhammad",
//     age: 25,
//     city: "Kuala Lumpur",
//     country: "Malaysia"
// }

// writeDb(dataObj);

console.log(readDb());

// const saveData = readDb()

// saveData['hobby'] = 'coding';

// writeDb(saveData);