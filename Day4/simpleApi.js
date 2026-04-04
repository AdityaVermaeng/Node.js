const http = require('http');
const data = require('./data');//we first need to require the data from the data.js file and then we can use it in our server response
http.createServer((req, resp) => {
	resp.writeHead(200,{'Content-Type':'Application/json'});
	// resp.write(JSON.stringify({"name":"Aditya","age":"22"}));

	//  Another way to write the above code is as follows:
	resp.write(JSON.stringify(data));//data is an array of objects and we need to convert it into string format using JSON.stringify() method before sending it in the response
	resp.end();
}).listen(3000);


