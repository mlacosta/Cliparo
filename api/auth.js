const express = require('express');
const authRouter = express.Router();

const CLIENT = "113065533499752978433";

authRouter.get('/',(req,res)=>{
    const id = req.query.id;

    console.log(id)

    if (id === CLIENT){
        res.json({authorized:true});
    }else{
        res.json({authorized:false});
    }
});


module.exports = authRouter;