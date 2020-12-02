const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler =  require('errorhandler');
const morgan = require('morgan');
const folderRouter = require('./api/folders');
const subfolderRouter = require('./api/subfolders');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/folders',folderRouter);
app.use('/subfolders',subfolderRouter);
app.use(errorHandler());

app.listen(PORT,()=>{
    console.log(`Listening HERE:${PORT}`)
})