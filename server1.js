const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   //console.log(req)
    res.setHeader('Content-Type', "text/html");
    //res.write(JSON.stringify(req))
    let path = './view/';
    switch(req.url){
        case '/':
            path += 'home.html';
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html';
            res.statusCode = 200; 

            break;
        default:
            path+= '404.html';
            res.statusCode = 401;
            break;        
    }
    fs.readFile(path,(err,data) => {
         if(err) console.log(err);
        res.end(data);
    });
    
});
server.listen(8080, 'localhost',()=>{
    console.log('Server start lkisting on port 8080');
}) 