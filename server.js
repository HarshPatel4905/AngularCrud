// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json'); // <== Will be created later
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000; // <== You can change the port

// server.use(middlewares);
// server.use(router);

// server.listen(port);


const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/angular-crud'));


//PATH LOCATION STARTEGY

app.get('/*', function (req, res) {
const fullPath = path.join(__dirname + '/dist/angular-crud/');
res.sendFile(fullPath);
})


app.listen(process.env.PORT || 8080);
