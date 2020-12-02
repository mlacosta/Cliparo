const express = require('express');
const linksRouter = express.Router();
let folderData = require('./folder-data.js');


linksRouter.get('/',(req,res)=>{
   const name = req.query.folder;
   const subName = req.query.subfolder;


   let index = folderData.findIndex((value)=>{return value["name"] == name});
   const subIndex = folderData[index]['subfolders'].findIndex((value)=>{return value["name"] == subName});
   let linksArray = folderData[index]["subfolders"][subIndex]["links"];

   res.send({links:linksArray})

});


linksRouter.post('/',(req,res)=>{
   const name = req.query.folder;
   const subName = req.query.subfolder;
   let url = req.body['url'];

   let index = folderData.findIndex((value)=>{return value["name"] == name});
   const subIndex = folderData[index]['subfolders'].findIndex((value)=>{return value["name"] == subName});
   folderData[index]["subfolders"][subIndex]["links"].unshift(url);
   console.log(url);

});



module.exports = linksRouter;