const express = require('express');
require('dotenv').config();
const cors = require('cors')
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors());

const port = process.env.SERVER_PORT || 3000;

app.listen(port, async () => {
    console.log(`server open at http://localhost:${port}`);
});