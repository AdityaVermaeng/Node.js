const express = require('express');
const path=require("path");
const app=express();
console.log(__dirname);
const publicPath=path.join(__dirname,"public");
console.log("PublicPath=>>>",publicPath);
app.use(express.static(publicPath));//we can use express.static() middleware to serve static files from a directory and we need to pass the path of the directory as an argument to the express.static() middleware and we can use path.join() method to join the current directory with the public directory to get the absolute path of the public directory
app.listen(5000,()=>{
	console.log("Server is running on port 5000");

});


//disadvantage of using express.static() middleware is that it will serve all the files in the public directory and we cannot restrict the access to any file in the public directory and if we want to restrict the access to any file in the public directory then we need to use express.static() middleware for each file separately and we need to specify the path of each file in the express.static() middleware and this can be a tedious task if we have a lot of files in the public directory.