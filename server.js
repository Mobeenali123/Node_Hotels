

/*function add(a,b){   //traditional method of the functions

    return (a+b)
}
var result=add(14,12);

var add=(a,b)=>{          // Arrow function
    return (a*b)
    }               
var result=add(10,4)
console.log(result);

                       //immidiate function auto run without call
var add=(function (c,d){
    var ans=(c+d);
    console.log(ans)
    return ans;
  
}(10.15,12))
console.log(add)


// callback function: a function call with in the other function is called
 callback function 
    

function callback(){
    console.log("hello")
}
var add=function(a,b,callback){
    let res=a+b;
    console.log(res)
    callback();
};
add(10,5,callback)




function callback(){
    console.log("hello")
}


var add=(a,b,callback)=>{
    var ans=a+b;
    console.log(ans);
    callback();
}
         //inlline simple functions 
//add(10,14, function(){
console.log("congratulations")})
        //inline arrow functions
//add(10,12 ,()=>(console.log("congratulations")))


const prompt = require('prompt-sync')();  //input from user
var fs=require('fs')    // for file read & write
var os=require('os');     //for user information
var user=os.userInfo();
console.log(user.username);

fs.appendFile('myfile.txt',"helo mr chips this is our 1st programe" +'!\n',
    ()=>(console.log("file created")))

  
    fs.appendFile('myfile.txt',"helo mr chips this is our 1st programe my name is "
         +'!\n',
        ()=>(console.log("file created")))

        console.log("access data from file")
        fs.readFile('myfile.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('File content:', data);
        })

const  notes=require('./notes.js')    // for import another file in main file
const prompt=require('prompt-sync')()  //for take input
notes.age=prompt("enter your age = "); //age variable & notes file afre imported
notes.check(notes.age);

//var _ =require('loadsh');        //array work filter unique and many other
//var data=['ali',1,'mobeen', 1,'khan','khan',35, 40,'mobeen' ,'ali']
//var filter=_.uniq(data)

const jsonstring='{"Name":"mobeen","id":"123","age":"23","father":"Riasat"}'
// convert JSONstring to object
const object=JSON.parse(jsonstring);
console.log(object.id)
console.log(typeof object);

const myobj={
  name:"MObeen khan",
  id:12422422,
  age:19,
  dob:"22-july-2001"
};
const json=JSON.stringify(myobj)      //convert OBJ to JSONstring
console.log(json);
console.log(typeof json);
*/

const express = require('express');
const app = express();
const db = require('./db');  // Import the file

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const personroutes=require('./routes/personroutes');
app.use('/person',personroutes);

const menuroutes=require('./routes/menuroutes');
app.use('/menu',  menuroutes);


app.listen(5000, () => {
    console.log("Server is working");
});
//jdcjhckjshchskcsdkch