const express = require ('express');
const router = express.Router();

const createUser = require('./functions/createUser');
 
router.post('/register', userController),

router.post('/login', async(request, response)=>{ 
    
    response.send("login")
   
}),
module.exports = app => app.use(router)