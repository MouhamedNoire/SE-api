// userService.js

const db = require('../db');

// Function to fetch all users from the SQLite database
function getAll() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users';
        db.all(query, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// Function to fetch a user by ID from the SQLite database
function getById(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

// Function to create a new user in the SQLite database
function create(user) {
    return new Promise((resolve, reject) => {
        const { firstname, lastname, email, password } = user;
        const query = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)';
        db.run(query, [firstname, lastname, email, password], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID); // Return the ID of the newly inserted user
            }
        });
    });
}

// Function to update a user in the SQLite database
function update(id, user) {
    return new Promise((resolve, reject) => {
        const { firstname, lastname, email, password } = user;
        const query = 'UPDATE users SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?';
        db.run(query, [firstname, lastname, email, password, id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes); // Return the number of rows affected
            }
        });
    });
}

// Function to delete a user from the SQLite database
function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.run(query, [id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes); // Return the number of rows affected
            }
        });
    });
}

module.exports = { getAll, getById, create, update, deleteUser };
