const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('myspace.db')
db.serialize(()=>{
    db.run(`create table if not exists
        users(
            id integer PRIMARY KEY AUTOINCREMENT,
            firstname TEXT,
            lastname TEXT,
            email TEXT,
            password TEXT
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `)
})

module.exports = db;