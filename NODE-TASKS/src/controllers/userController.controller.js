const { users, startId } = require('../utils/users.js');
const { nanoid } = require('nanoid');

exports.getAllUsers = (req, res) => {
    res.json(users);
}

exports.createUser = (req, res) => {
    const data = req.body;
    if (!data.name || !data.email) {
        res.status(400).json({ message: "give all the inputs" });
    }
    data.id = nanoid();
    users.push(data);
    return res.status(200).json({ message: "Data Created Successfully" });
}

exports.deleteUser = (req, res) => {
    try {
        const idx = users.findIndex(u => u.id === req.params.id)
        if (idx == -1) {
            return res.status(401).json({ message: "user not found" });
        }
        const deletedUser = users.splice(idx, 1)[0];
        return res.status(200).json({ message: "User Deleted Successfully", user: deletedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

exports.updateUser = (req, res) => {
    if (!req.body.name) return res.status(400).json({ message: "empty fields" });
    let idx = users.findIndex(u => u.id === req.params.id);
    if (idx === -1) return res.status(401).json({ message: "user not found" });
    users[idx].name = req.body.name;
    users[idx].email = req.body.email;

    return res.status(200).json({ message: "User Updated Successfully" });
}
