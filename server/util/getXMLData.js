const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');

const fileName = 'data.xml';
const dirName = __dirname + '\\..\\';
let data;

async function read(){
    const fileData = fs.readFileSync(dirName + fileName, 'utf8', 'r');
    const parser = new xml2js.Parser();

    let json;

    parser.parseString(
        fileData.substring(0, fileData.length),
        (err, result) => json = result
    ); 

    return json.result['Data'];
}

async function getXMLData() {
    const res = await read();
    return res.result['Data'];
}

module.exports = {
    getXMLData,
    read
}