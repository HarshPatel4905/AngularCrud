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

app.use(express.static('./dist/angular-crud'));


//PATH LOCATION STARTEGY

app.get('/*', (req, res) =>
res.sendFile('index.html', {root: 'dist/ANGULARCRUD'}),
);


app.listen(process.env.PORT || 8080);
