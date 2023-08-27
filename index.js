var express = require('express');
var productService = require("./product-service")
var app = express();
app.use(express.json()) 

app.get('/produtos', function(req, res) {
    res.send(productService.getProducts())
});

app.get('/produtos/:id', function(req, res) {
    var productId = Number(req.params.id)
    res.send(productService.getProductById(productId))
});

app.post('/produtos', function(req, res) {
    res.send(productService.addProduct(req.body))
});

app.put('/produtos/:id', function(req, res) {
    var productId = Number(req.params.id)
    res.send(productService.updateProduct(productId, req.body))
});

app.delete('/produtos/:id', function(req, res) {
    var productId = Number(req.params.id)
    res.send(productService.deleteProduct(productId))
});


app.listen(3000, () => 
    console.log('Servidor iniciado na porta 300')
);