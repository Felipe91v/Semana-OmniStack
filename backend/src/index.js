const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//string de conexão mongoDB
mongoose.connect('mongodb+srv://felipebd:Seep1914@cluster0-lhblu.mongodb.net/felipebd?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);