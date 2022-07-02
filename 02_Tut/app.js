const http = require("http");
const fs = require("fs");

//createServer takes requestListener as the argument.
//requestListner function executes for every incoming request
const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body`
    );
    return res.write("<html>");
    // return res.end();
    //return keyword is needed here
    //because if you don't use return, the following lines will be executed and will result in an error
    //Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
  }
  if (url === "/message" && method == "POST") {
    //data event will be fired whenever a new chunk is ready to be read
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    //end will be fired only when all the chunks are done reading
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.writeHead(302, { Location: "/" });
    return res.end();
    // res.statusCode = 302;
    // res.setHeader("Location", "/");
    // return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello World</hello></body");
  res.write("<html>");
  res.end();
});
server.listen(3000);
