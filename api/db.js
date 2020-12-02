const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubFolders = new Schema({
    name: String,
    links: [String]
  });

const Folders = new Schema({
  name: String,
  subfolders: [SubFolders]
});


let FolderDB = mongoose.model('FolderDB',Folders);

module.exports = FolderDB;
