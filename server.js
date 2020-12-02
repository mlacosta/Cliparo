const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler =  require('errorhandler');
const morgan = require('morgan');
const folderRouter = require('./api/folders');
const subfolderRouter = require('./api/subfolders');
const linkRouter = require('./api/links');
const PORT = process.env.PORT || 4000;


mongoose.connect('mongodb://localhost:27017/acmedb', {
  useNewUrlParser: true}).then(()=>{

    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
    
    app.use('/folders',folderRouter);
    app.use('/subfolders',subfolderRouter);
    app.use('/link',linkRouter);
    app.use(errorHandler());
    
    app.listen(PORT,()=>{
        console.log(`Listening HERE:${PORT}`)
    })

  });


