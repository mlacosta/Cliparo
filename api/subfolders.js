
const express = require('express');
let FolderDB =  require('./db.js');
const subfolderRouter = express.Router();

const findFolders = async (name)=>{
    const result  = await FolderDB.findOne({name});
    return result["subfolders"]

}

subfolderRouter.get('/:foldername', async(req,res)=>{
   let name = req.params.foldername;
   let send = await findFolders(name)
   console.log(send);
   res.json({subfolders: send})
});

subfolderRouter.post('/:foldername',async (req,res)=>{
        let name = req.body["name"];
        let subName = req.body.subName;
        console.log(name);
        const result  = await FolderDB.findOne({name});

        result.subfolders.push({name:subName,links:[]})
        
        await result.save();
        console.log(result);
        res.send('ok');
});

module.exports = subfolderRouter;