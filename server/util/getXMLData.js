const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');

const fileName = 'data.xml';
const dirName = __dirname + '\\..\\';

async function downloadXML() {
    const fileURL = 'https://dev.tedooo.com/feed.xml';
    let file = fs.createWriteStream(
        dirName + fileName,
        {'flags': 'w'}
    );

    const request = https.get(fileURL, (res) => {
        res.pipe(file);
    });
}

async function read(){
    const fileData = fs.readFileSync(dirName + fileName, 'utf8', 'r');
    // const bla = fs.readFile(dirName + fileName, 'ascii', 'r')
    console.log(fileData)
    const parser = new xml2js.Parser();

    let json;

    parser.parseString(
        fileData.substring(0, fileData.length),
        (err, result) => json = result
    ); 

    return json;
}

const bla = async () => {
    //await downloadXML();
    const res = await read();
    console.log(res);
}

bla();