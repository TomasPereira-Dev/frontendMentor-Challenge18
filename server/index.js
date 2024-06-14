const http = require("node:http");

const selectedPort = process.env.POST ?? 3000;

const processRequest = (req, res) => {
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type" ,"text-plain");
        res.end("hello, I'm mister frog, I love you");
    }else{
        req.statusCode = 404;
    }
};

const server = http.createServer(processRequest);

server.listen(selectedPort, () => {
    console.log(`server is running on port http://localhost:${selectedPort}`)
})
