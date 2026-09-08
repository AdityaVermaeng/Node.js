//Task Print currrent date and time for every request


const express=require('express');
const app=express();

app.listen(3000,()=>{
	console.log("Server is running on port 3000");
})

const timeLogger=(req,res,next)=>{
	console.log("Current Date and Time:", new Date().toLocaleString());
	next();
}
app.use(timeLogger);

app.get('/',(req,res)=>{
	res.send("Welcome to Home Page");
});

app.get('/about',(req,res)=>{
	res.send("Welcome to About Page");
});