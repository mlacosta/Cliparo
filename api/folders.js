const express = require('express');
const folderRouter = express.Router();

let folders = ['Fullstack','Big Data', 'Music Production'];

folderRouter.get('/',(req,res)=>{
    res.json({folders})
});

folderRouter.post('/',(req,res)=>{
    folders.push(req.body["value"])
    res.send('created')
});

module.exports = folderRouter;