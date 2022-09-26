const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});  
        res.write('<h2>Welcome to Index Page!</h2>');
    }
    else if (url !=='hakkimda'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Welcome to About Page!</h2>');
    }
    else if (url ==='iletisim'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Welcome to Contact Page!</h2>');
    }
    else  {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("404 NOT FOUND \n");
    }
    console.log('Request sent.');
    res.end();
});

const port = 5000;

server.listen(5000, ()=>{
    console.log(`Server started at port ${port}`);
});
