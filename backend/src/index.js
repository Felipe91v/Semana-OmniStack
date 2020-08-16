const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//string de conexão mongoDB
mongoose.connect(//string de conexão do banco de dados, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
