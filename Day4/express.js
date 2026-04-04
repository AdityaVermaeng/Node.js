

const express=require('express');//require the express module
const app=express();//create an instance of express
// console.log(app);//we can see that app is an object which has various methods like get, post, put, delete etc. which we can use to create our API endpoints
app.get('/',(req,resp)=>{
	resp.send("Hello from home page");//we can use send method to send a response to the client
})
app.get('/about',(req,resp)=>{
	resp.send("Hello from about page");
})
app.get('/contact',(req,res)=>{
	res.send("Hello from contact page");
})

app.get('/data',(req,res)=>{
	res.json({"name":"Aditya","age":"22","city":"Delhi","country":"India"});//we can use json method to send a json response to the client
})

.listen(4000,()=>{
	console.log("Server is running on port 4000");
});//we can use listen method to start the server on a specific port and we can also pass a callback function which will be executed when the server starts successfully