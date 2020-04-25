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
mongoose.connect('mongodb+srv://felipebd:Seep1914@cluster0-lhblu.mongodb.net/felipebd?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);