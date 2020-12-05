const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler =  require('errorhandler');
const morgan = require('morgan');
const folderRouter = require('./api/folders');
const subfolderRouter = require('./api/subfolders');
const linkRouter = require('./api/links');
const authRouter =  require('./api/auth');

const PORT = process.env.PORT || 4000;

const PASSWORD = "imperialiOS5andx";

mongoose.connect( `mongodb+srv://mlacosta003:${PASSWORD}@cluster0.njyli.mongodb.net/Cliparo?retryWrites=true&w=majority`, {useNewUrlParser: true})
  .then(()=>{

    console.log('Connected to MongoDB Cloud')

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
    app.use('/auth',authRouter);
    app.use(errorHandler());
    

    if (process.env.NODE_ENV === 'production'){
      app.use(express.static('./build'));
      console.log(`Using production version`);
    }

    app.listen(PORT,()=>{
        console.log(`Listening HERE:${PORT}`);
    })

  })
  

