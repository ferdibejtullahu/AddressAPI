const express = require('express');
const router  = express.Router();
const adressa = require('../models/crmModel');
    
router.use(express.json());
//i merr te gjitha adressat 
router.get('/', (req, res) =>{
    res.send(adressa);
});
//I merr vetem adressat me id perkatese
router.get('/adress/:id', (req, res) =>{
    
    const adress = adressa.find(c => c.id === parseInt(req.params.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }
    res.send(adress);
});  
//E krijon nje adress te re 
router.post('/adress' , (req, res) =>{
    const adres ={
        id: adressa.length + 1,
        name: req.body.name,
        city: req.body.city,
        country: req.body.country
    }
    adressa.push(adres);
    res.send(adres);
});
// E Kemi bo update routin tu e shtu ka 1 adress 
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
//E Kemi bo delete adressen prej ID-s
router.delete('/adress/:id', (req, res) =>{
    const adress = adressa.find(c => c.id === parseInt(req.params.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }

    const index = adressa.indexOf(adress);

    adressa.splice(index, 1);

    res.send(adress);

});


module.exports = router;