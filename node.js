var http = require('http');
var url  = require('url');
var fs   = require('fs');

	
	
	http.createServer(function (req, res) {

	  var query = require('url').parse(req.url,true).query;
	  
	  if(query.page)
	   {
	    
		fs.readFile('html_file/'+query.page,function(err,html)
		{
			  
	     if(err) {
		 
		  throw err;
		 }
		 else
		 {
	      res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(html);
		  res.end();
		 
		 }
		});
	   
	   }

    }).listen(1337, "127.0.0.1");
	

    console.log('Server running at http://127.0.0.1:1337/');