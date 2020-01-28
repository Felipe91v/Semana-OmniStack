const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request, response ) => {
    console.log(request.body);
    return response.json({ message: 'Hello palmeiras'});
});

app.listen(3333);