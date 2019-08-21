var http = require('http');

http.createServer(function (req, res) {

  res.write('Node started'); 
  res.end(); 

}).listen(3000); 


