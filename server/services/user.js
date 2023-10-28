const db = require('./db');
const config = require('../db/config');

function getMultiple(page = 1, email, passcode) {
    console.log('yay!', email, passcode)
    const offset = (page - 1) * config.listPerPage;
    const data = db.query(`SELECT * FROM user WHERE email='`+email+ `' AND passcode='`+passcode+`' LIMIT ?,?`, [offset, config.listPerPage]);
    const meta = { page };

    return {
        data,
        meta
    }
}

module.exports = {
    getMultiple
}