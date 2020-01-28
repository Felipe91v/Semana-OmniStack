const express = require('express');
const mongoose = require('mongoose');

const app = express();

//string de conexão mongoDB
mongoose.connect('mongodb+srv://felipebd:Seep1914@cluster0-lhblu.mongodb.net/felipebd?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.post('/users', (request, response ) => {
    console.log(request.body);
    return response.json({ message: 'Hello palmeiras'});
});

app.listen(3333);