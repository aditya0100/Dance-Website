const { urlencoded } = require("express");
const express= require("express");

const path=require("path");
const app=express();
const port=8000;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));  // For serving static files
app.use(urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine','pug');  // Set the template engine as pug
app.set("views",path.join(__dirname,'views'));  // Set the view directory

app.get('/',(req,res)=>{
    const params={"title":"Dance Website"}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params={"title":"Dance Website"}
    res.status(200).render('contact.pug',params)
})
app.post('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})
//START THE SERVER
app.listen(port,()=>{
    console.log(`The application successfully started on port ${port}`)
});