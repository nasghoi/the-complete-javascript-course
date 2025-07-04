const fs = require("fs");

function readDb(dbName = "db.json") {
    // read JSON object from file
    const data = fs.readFileSync(dbName, "utf-8");

    // parse JSON (JSON -> Object) and return it
    const convertedData = JSON.parse(data);
    return convertedData;
}

function writeDb(obj, dbName = "db.json") {
    // check that user pass in an object
    if (!obj) {
        return;
    }

    try {
        // convert object to JSON (Object -> JSON)
        let convertedData = JSON.stringify(obj)
        fs.writeFileSync(dbName, convertedData)
        console.log('Save successfully!');
        // save JSON to database file
    } catch (err) {
        console.error("Error writing to database:", err.message);
    }
}

module.exports = {
    readDb,
    writeDb
}
