// middleware to block specific user
//block ther user if username=admin

const express = require('express');
const app = express();
app.listen(3000, () => {
		console.log("Server is running on port 3000");
})
const blockAdmin =(req,res,next)=>{
if(req.query.username==="admin"){
	res.send("You are blocked");
}
else{
	next();
}
}

app.use(blockAdmin);

app.get('/home',blockAdmin, (req, res) => {
	res.send("Welcome to user's Home Page");
});
