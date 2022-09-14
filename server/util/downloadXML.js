const fs = require('fs');
const https = require('https');

const fileName = 'data.xml';
const dirName = __dirname + '\\..\\';

async function downloadXML() {
    const fileURL = 'https://dev.tedooo.com/feed.xml';
    let file = fs.createWriteStream(
        dirName + fileName,
        {'flags': 'w'}
    );

    const request =  https.get(fileURL, (res) => {
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('file downloaded successfully');
        })
    });
}

module.exports = {
    downloadXML
}