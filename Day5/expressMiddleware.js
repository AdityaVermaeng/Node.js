//application level middleware applyed for whole application

const express=require('express');
const app=express();

//middleware
const reqFilter=((req,res,next)=>{
		if(!req.query.age){
				res.send("Please provide age");
		}
		else if(req.query.age<18){
				res.send("You are underage");
		}
		else{
				next();
		}});

app.use(reqFilter);//we are just using the middleware for all the routes but we can also use it for specific routes like below  and we just write it before the route
app.get('/',(req,res)=>{
		res.send("Welcome to home page");
});

app.get('/users',(req,res)=>{
		res.send("Welcome to users page");
})
.listen(5000,()=>{
		console.log("Server is running at port 5000");
});