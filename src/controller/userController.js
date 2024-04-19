// userController.js

const userService = require('../service/userService');

exports.getUsers = (req, res) => {
    userService.getAll(req, res)
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.getUser = (req, res) => {
    const id = req.params.id;
    userService.getById(id, req, res)
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.createUser = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    userService.create({ firstname, lastname, email, password }, req, res)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    userService.update(id, user, req, res)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id, req, res)
        .then(() => res.sendStatus(204))
        .catch(err => res.status(500).json({ error: err.message }));
};
