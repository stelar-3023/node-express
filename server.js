const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  // console.log(req.headers); handled by morgan
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an express server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
