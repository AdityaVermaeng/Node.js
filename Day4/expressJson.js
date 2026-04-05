const express=require("express");
const app=express();

app.get("/",( req,res)=>{
	console.log("Data sent from browser",req.query.name);
	res.send("Data received successfully data is "+req.query.name);
})
app.get("/json",(req,res)=>{
	res.send([{"name":"John","age":"30"},{"name":"Jane","age":"25"}]);
})
.listen(3000,()=>{
	console.log("Server is running on port 3000");
});