
const express = require('express');
const subfolderRouter = express.Router();
let folderData =require('./folder-data.js');

let folders = ['Fullstack','Big Data', 'Music Production'];

const findFolders = (name)=>{
    let index = folderData.findIndex((value)=>{return value["name"] == name})
    return folderData[index]["subfolders"]
}

subfolderRouter.get('/:foldername',(req,res)=>{
   let name = req.params.foldername;
   console.log({subfolders: findFolders(name)});
   res.json({subfolders: findFolders(name)})
});

subfolderRouter.post('/:foldername',(req,res)=>{
        let name = req.body["name"];
        let subName = req.body.subName;
        console.log(name);
		const index = folderData.findIndex((value)=>{return value["name"] == name});
        folderData[index]["subfolders"].push({name:subName,links:[]});
        console.log(folderData[index]["subfolders"]);
        res.send('ok');
});

module.exports = subfolderRouter;