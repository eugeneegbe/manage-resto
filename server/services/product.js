const db = require('./db');
const config = require('../db/config');

function getMultiple(page = 1) {
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`SELECT * FROM product  LIMIT ?,?`, [offset, config.listPerPage]);
    const meta = { page };

    return {
        data,
        meta
    }
}

function insertProduct(product_object){
    const {name, price, stock} = product_object;
    const feed = db.run('INSERT INTO product(name, stock, price) VALUES(@name, @stock, @price)',
                        {name, stock, price});
    let res = {}
    if (feed.changes) {
        res.status = 'success';
        res.message = 'Product added successfully'
    }
    return res;
}

function removeProduct(id){
    const feed = db.run('DELETE FROM product WHERE product.id='+ id);
    let res = {}
    if (feed.changes == 1) {
        res.status = 'success';
        res.message = 'Product added successfully'
    }else{
        res.status = 'failed';
    }
    return res;
}

module.exports = {
    getMultiple,
    insertProduct,
    removeProduct
}