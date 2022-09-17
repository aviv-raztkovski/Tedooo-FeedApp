const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {downloadXML} = require('./util/downloadXML');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}

app.use(cors(corsOptions));

const port = process.env.SERVER_PORT || 5000;

app.listen(port, async () => {
    await downloadXML();
    console.log(`server open at http://localhost:${port}`);
});