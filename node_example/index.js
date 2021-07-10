const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const arrayToCSV = (arr, delimiter = ',', rowdelimiter = '\n') => {
    let rows = arr.length // returns rows
    let str = "name,age\n"
    for (let i = 0; i < rows; i++) {
        str += arr[i].name
        str += delimiter

        // row delimiter after the last parameter only
        str += arr[i].age
        str += rowdelimiter
    }
    return str
}

fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
        results[0].name = "John Doe"
        results[0].age = "27"
        results.push({
            name: "Adam Linux",
            age: "20"
        })
        console.log(results);
        const csvstring = arrayToCSV(results, ",")
        console.log("csv String : " + csvstring)
        fs.writeFile('data.csv', csvstring, {
            encoding: 'utf8',
            flag: 'w'
        }, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });

    });

