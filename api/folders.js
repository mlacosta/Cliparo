const express = require('express');
const folderRouter = express.Router();

let folderData = require('./folder-data.js');

let folders = folderData.map(value=>{return value.name});

folderRouter.get('/',(req,res)=>{
    folders = folderData.map(value=>{return value.name});
    res.json({folders})
});

folderRouter.post('/',(req,res)=>{
    let newFolder = {
        name:req.body["value"],
        subfolders:[{name:'',links:[]}]
    }
    folderData.push(newFolder)
    
    res.send('created')
});

module.exports = folderRouter;