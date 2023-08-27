var product_list = []

function alreadyExists(productId) {
    if (findByID(productId)) return true 
    else return false
}

function findByID(productId) {
    var product = product_list.find(function(element) { 
        return element.id == productId
    })

    return product;
}

function updateProduct(productId, newProduct) {
    var idx_product = product_list.findIndex((element) => element.id == productId);
    
    product_list[idx_product].descricao = newProduct.descricao
    product_list[idx_product].valor = newProduct.valor
    product_list[idx_product].marca = newProduct.marca

    return `Produto de ID ${productId} alterado com sucesso !`
}

function deleteById(productId) {
    product_list = product_list.filter((element) => {
        return element.id != productId
    })

    return `Pruduto de ID ${productId} removido com sucesso !`
}

module.exports = {
    getProducts: function() {
        return product_list;
    },
    getProductById: function(productId) {
        return findByID(productId)
    },
    addProduct: function(product) {
        if(alreadyExists(product.id)) {
            return "Este produto já foi cadastrado !"
        }
        product_list.push(product)
        return "Produto cadastrado com sucesso !"
    },
    updateProduct: (productId, newProduct) => {
        if(alreadyExists(productId)) {
            return updateProduct(productId, newProduct);
        }
        return `Produto de ID ${productId} não encontrado`
    },
    deleteProduct: function(productId) {
        if(alreadyExists(productId)) {
            return deleteById(productId);
        }
        return `Produto de ID ${productId} não encontrado`
    }

}