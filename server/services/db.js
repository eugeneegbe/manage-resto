const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve(__dirname, "../db", "restaurant.db"), {fileMustExist: true});

function query(sql, params) {
  return db.prepare(sql).all(params)
}

function run(sql) {
    return db.prepare(sql).run();
}

module.exports = {
  query,
  run
}