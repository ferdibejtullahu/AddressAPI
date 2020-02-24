const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const adressa = require('./src/models/crmModel.js');


app.get('/', (req, res) =>{
    res.send('Hello WOrld');
});

app.get('/api/adress', (req, res) =>{
    res.send(adressa);
});

app.get('/api/adress/:id', (req, res) =>{
    
    const adress = adressa.find(c => c.id === parseInt(req.param.id)); 
    if(!adress) 
    {
        res.status(404).send('Nuk eshte gjetur adressa me ID e dhene');
    }
    res.send(adress);
});  



app.listen(port, () => console.log(`Listening on port ${port}`));