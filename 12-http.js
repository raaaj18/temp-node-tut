const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome! to our home page')
    }
    if(req.ulr === '/about'){
        res.end('here is out short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't fidnt he page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);