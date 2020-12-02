const express = require('express');
const linksRouter = express.Router();
let folderData = require('./folder-data.js');
let FolderDB =  require('./db.js');


linksRouter.get('/', async(req,res)=>{
   const name = req.query.folder;
   const subName = req.query.subfolder;
   const result  = await FolderDB.findOne({name});

   let index = result['subfolders'].findIndex((val)=>{return val.name == subname});

   let linksArray = result['subfolders'][index].links;
   /*
   let index = folderData.findIndex((value)=>{return value["name"] == name});
   const subIndex = folderData[index]['subfolders'].findIndex((value)=>{return value["name"] == subName});
   let linksArray = folderData[index]["subfolders"][subIndex]["links"];
   */
   res.send({links:linksArray})

});


linksRouter.post('/',async(req,res)=>{
   const name = req.query.folder;
   const subName = req.query.subfolder;
   let url = req.body['url'];

   const result  = await FolderDB.findOne({name});
   let index = result['subfolders'].findIndex((val)=>{return val.name == subName});
   result['subfolders'][index].links.unshift(url);

   await result.save();

   console.log(url);
   res.send('ok');

});



module.exports = linksRouter;