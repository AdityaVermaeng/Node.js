const express = require('express');
const path=require('path');
const app=express();
const publicPath=path.join(__dirname,"public");

app.get("/",(req,res)=>{
	res.sendFile(`${publicPath}/index.html`);//this show only just a name of info not the real info of file which is served by node
});
app.get("/about",(req,res)=>{
	res.sendFile(`${publicPath}/about.html`);
});app.get("/contact",(req,res)=>{
	res.sendFile(`${publicPath}/contact.html`);
}).listen(5000,()=>{
	console.log("Server is running on port 5000");
});