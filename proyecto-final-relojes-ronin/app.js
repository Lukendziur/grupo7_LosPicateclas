const express = require('express');

const app = express();

const path = require('path');

const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/Carrito-compras', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});

app.get('/Detalle-de-producto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
});

app.get('/Facturacion', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/billing.html'))
});

app.get('/Login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/Registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/FAQ', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/FAQ.html'))
});

app.listen(port || 3000, () => {
    console.log('Servidor corriendo en el puerto ' + port)
});