const express=require('express');
const app=express();
app.get('/',(req,res)=>{
	console.log("Sended from browser",req.query.name);
	res.send("<h1>Hello from, " + req.query.name + "! home page</h1>")
})
app.get('/about',(req,res)=>{
	res.send("<h1>Hello from, " + req.query.name + "! about page</h1>")
})
app.get('/contact',(req,res)=>{
	res.send("<h1>Hello from, " + req.query.name + "! contact page</h1>")
})
app.get('/help',(req,res)=>{
	res.send(`<form action="/submit" method="POST">
		<input type="text" name="name" placeholder="Enter your name"/>
		<button type="submit">SUBMIT</button>
	</form>`)//we can also send html code in the response and we can use template literals to send dynamic data in the response
})
app.use(express.urlencoded({ extended: true }));//we can use express.urlencoded() middleware to parse the incoming request body and we need to set the extended option to true to allow parsing of nested objects in the request body
app.post('/submit',(req,res)=>{ console.log(req.body);
	// console.log(req.body.username)
	res.send(`Hello ${req.body.name}`);//we can access the form data sent by the client in the request body using req.body and we can send a response back to the client using res.send() method
}
)
.listen(4000,()=>{
	console.log("Server is running on port 4000");
});