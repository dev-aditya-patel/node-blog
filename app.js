'use strict';
const express = require('express');
const app = express();
const port = 8080;

/**
 *@added third party middleware: morgan 
 */
const morgan = require('morgan');

const path = require("path");
const fs = require('fs');
const blogsRoute = require('./routes/blogsRoute');


/**
 * @add parse JSON data to get the form data
 */
app.use(express.urlencoded({extended:true}))
const mongoose = require('mongoose');
let dbUrl = "mongodb+srv://test_node-2:test@cluster0.dyczkxr.mongodb.net/node_practice?retryWrites=true&w=majority"
    mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((data)=>{
        app.listen(port);
    })
    .catch((err)=>{
        console.log(err)
    }) 


//register view engine
app.set("view engine", "ejs"); 

/**
 * @allow directory to access in front ends withoud routes, default node prevent all file and folder to access in web page without proper set routes
 */
app.use(express.static(__dirname + '/public'));

/*
@middleware using next()
* => app.use() is used as middleware
  => @param next: next is used as 3rd parameter to pass to next operation that means it go to next request
*/
/*
app.use((req,res, next)=>{
    console.log("new requred created");
    console.log(req.hostname);
    console.log(req.method);
    console.log(req.path)
    next();
});
*/

/**
 * @we an create custom token on requirement basis
*/
     morgan.token("host",(req,res)=>{
        return req.hostname;
     })
/**
 * @third party middleware: morgan
 */
//custom token: app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms', {stream: fs.createWriteStream(path.join(__dirname, 'access.log')),flags:'a+'}));


app.get('/',(req,res)=>{
    res.render('index',{ title: "Home"});
   // res.sendFile('./view/home.html',{root: __dirname});
});

app.get("/about", (req,res)=>{
   res.render('about',{ title: "About"});
    // res.sendFile('./view/about.html',{ root: __dirname});
});
 

app.use('/blog',blogsRoute) ;


app.use((req,res)=>{
    res.status(404).render('404',{ title: "404"});
})
