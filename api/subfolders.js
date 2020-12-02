let folderData = [
    {name:'Fullstack',
    subfolders:[{name:'Node JS', 
                 links:['https://mochajs.org',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js',
                        'https://www.mongodb.com/',
                        'https://www.restapitutorial.com/httpstatuscodes.html'
                       ]
                },
                {name:'React JS', 
                 links:['https://redux.js.org/',
                        'https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://reactjs.org/docs/getting-started.html',
                        'https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/',
                        'https://nextjs.org/',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                },
                {name:'MERN Stack', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                }
               ]
    },
    {name:'Big Data',
    subfolders:[{name:'Node JS', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                },
                {name:'React JS', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                },
                {name:'MERN Stack', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                }
               ]
    },
    {name:'Music Production',
    subfolders:[{name:'Node JS', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                },
                {name:'React JS', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                },
                {name:'MERN Stack', 
                 links:['https://redux.js.org/','https://www.freecodecamp.org/news/async-await-javascript-tutorial/',
                        'https://www.npmjs.com/package/react-tiny-link',
                        'https://github.com',
                        'https://coolors.co',
                        'https://www.freecodecamp.org/news/designing-a-website-ui-with-prototyping/'
                       ]
                }
               ]
    }

]
const express = require('express');
const subfolderRouter = express.Router();

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

});

module.exports = subfolderRouter;