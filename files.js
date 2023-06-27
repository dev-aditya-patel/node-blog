
//read file

const fs = require('fs');
// fs.readFile('./docs/test1.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

//Write File
// fs.writeFile('./docs/test1.txt','Hello New test',(err) =>{
//     if(err) throw err;
//     console.log("file written");
// });

//Dir

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err) throw err;
        console.log("Directory created");
    });
}else{
fs.rmdir('./assets',(err)=>{
    if(err) throw err;
    console.log("Directory deleted");
});

}

//Delete file