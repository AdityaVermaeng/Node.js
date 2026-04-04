const express=require('express');
const app=express();
app.get('/',(req,resp)=>{
	console.log(req.query);
	console.log("Data sent by Browser=>>>>",req.query.name,req.query.age,req.query.city);//we can use req.query to get the query parameters sent by the client in the URL and we can access them using the name of the parameter
	resp.send("Hii , this is Home page of "+req.query.name+" and your age is "+req.query.age+" and you are from "+req.query.city);
})
app.get('/about',(req,resp)=>{
	resp.send("Hii , this is about page of "+req.query.name);
})
app.get('/contact',(req,res)=>{
	res.send("Hii , this is contact page of "+req.query.name);
})
.listen(4000,()=>{
	console.log("Server is running on port 4000");
});