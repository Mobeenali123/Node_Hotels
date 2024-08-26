const express = require('express');
const Router=express.Router();
const menu = require('./../modles/menu'); 
// Route to add a new menu item
Router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new menu(data);
        const response = await newItem.save();
        console.log("Data successfully saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error occurred' });
    }
});
Router.get('/', async (req, res) => {
    try {
        
        const Item = await menu.find();
        console.log("Data successfully access");
        res.status(200).json(Item);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error occurred' });
    }
});
Router.get('/:tastetype', async (req, res) => {
    try {
        const tastetype=req.params.tastetype;

        if(tastetype=='sweet'||tastetype=='sour'||tastetype=='good'){
        const Item = await menu.find({taste:tastetype});
        console.log("Data successfully access");
        res.status(200).json(Item);
        }
        else{
           res.send("invalid taste enter");    
            }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error occurred' });
    }
});
module.exports=Router;
