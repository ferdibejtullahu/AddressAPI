const express = require('express');
const router  = express.Router();
const adressa = require('../models/crmModel');
    


router.get('/', (req, res) =>{
    res.send(adressa);
});

router.get('/:id', (req, res) =>{
    
    const adress = adressa.find(c => c.id === parseInt(req.params.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }
    res.send(adress);
});  


module.exports = router;