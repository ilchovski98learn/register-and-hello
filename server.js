//External
const express = require('express');

//Local
const mongoConnect = require('./database').mongoConnect;

const app = express();

app.get('/customer', (req, res) => {
    const customer = 'Nikola';

    res.json(customer);
})

const port = 5000;


mongoConnect(() => {
    app.listen(port, () => console.log(`Listening to port ${port}`));
})