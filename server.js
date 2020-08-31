const http = require('http');

const server = http.createServer((req, res) => {
 console.log('request made');  
 console.log(req.url, req.method);  



//set header content type
res.write(<>)
res.setHeader('content-Type', 'text/html')
res.write('<p>text goes here, put location objects here</p>')
res.end()


});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
});