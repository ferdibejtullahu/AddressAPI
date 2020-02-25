const express = require('express');
const router  = express.Router();
const adressa = require('../models/crmModel');
    
router.use(express.json());

router.get('/', (req, res) =>{
    res.send(adressa);
});

router.get('/adress/:id', (req, res) =>{
    
    const adress = adressa.find(c => c.id === parseInt(req.params.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }
    res.send(adress);
});  

router.post('/adress' , (req, res) =>{
    const adres ={
        id: adressa.length + 1,
        name: req.body.name,
        city: req.body.name,
        country: req.body.name
    }
    adressa.push(adres);
    res.send(adres);
});

router.put('/adress/:id', (req, res) =>{
    const adress = adressa.find(c => c.id === parseInt(req.params.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }
    

    adress.name = req.body.name;
    adress.city = req.body.city;
    adress.country = req.body.country;

    res.send(adress);
});


module.exports = router;