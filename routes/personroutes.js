const  express=require('express');
const Router=express.Router();
const Person=require('./../modles/person')
// Router to fetch all persons
Router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("Data fetched");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Router to add a new person
Router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal error' });
    }
});

 //get specific persons data
Router.get('/:nametype',async (req,res)=>{

    try{
     const name=req.params.nametype;
     if(name=="ahmad"||name=="Alice"||name=="Bob"||name=="David"){
         const response=await Person.find({name:name});
         console.log("data access successfully")
         res.status(200).json(response);
 
     }
     else{
         res.send("invalid type")
     }
 
    } 
    catch(err){
     console.log(err);
     res.status(500).json({ error: 'Internal error occurred' });
 
 
    }
     
 });

Router.put('/:id',async(req,res)=>{
   try{
    const personid=req.params.id;
    const updatedata=req.body;
    const response= await Person.findByIdAndUpdate(personid,updatedata, {
        new:true,
        runValidators:true
     })
    if(!response){
        return res.status(404).json({error:"person not found on this id"})
    }
    console.log("Data updated successfully")
    res.status(200).json(response);

}
   catch(err){
    console.log(err);
    res.status(500).json({ error: 'Internal error occurred' });

   }
   })

Router.delete('/:id', async(req, res)=>{
   
try{
    const personid=req.params.id;
    const response=await Person.findByIdAndDelete(personid);
    if(!response){
        res.status(404).json({error:"id not found"})
    }
    console.log("data have been delete successful");
    res.status(200).json({Message:"Delete your data "});

}
catch(err){

    console.log(err);
    res.status(500).json({error:"internal error have been occur"})

}

})

 module.exports=Router;