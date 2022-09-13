const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');

const fileName = 'data.xml';
const dirName = __dirname + '\\..\\';
let data;

async function downloadXML() {
    const fileURL = 'https://dev.tedooo.com/feed.xml';
    let file = fs.createWriteStream(
        dirName + fileName,
        {'flags': 'w'}
    );

    const request =  https.get(fileURL, (res) => {
        console.log(res)
        res.pipe(file);
        console.log(file)
        file.on('finish', () => {
            file.close();
            console.log('bla');
        })
    });
}

async function read(){
    const fileData = fs.readFileSync(dirName + fileName, 'utf8', 'r');
    const parser = new xml2js.Parser();

    let json;

    parser.parseString(
        fileData.substring(0, fileData.length),
        (err, result) => json = result
    ); 

    return json;
}

async function getXMLData() {
    // await downloadXML();
    const res = await read();
    console.log(res.result['Data']);
    return res.result['Data'];
}

module.exports = {
    getXMLData,
}