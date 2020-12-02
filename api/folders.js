const express = require('express');
const folderRouter = express.Router();
let FolderDB =  require('./db.js');

let folders = [];

folderRouter.get('/', async(req,res)=>{

    await FolderDB.find().then(
        (doc)=>{
            folders = doc.map((value)=>{return value.name});
        }
    );
    
    
    res.json({folders});
});

folderRouter.post('/', async (req,res)=>{

    let newFolder = {
            name:req.body["value"],
            subfolders:[{name:'',links:[]}]
    }

    let data = new FolderDB(newFolder);
    await data.save();
    
    console.log(FolderDB);
    
    res.send('created')
});

module.exports = folderRouter;