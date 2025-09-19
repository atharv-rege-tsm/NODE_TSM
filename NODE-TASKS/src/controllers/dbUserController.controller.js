const userModel = require("../db/userModel.model");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "supersecretkey";

exports.getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

exports.createUser = async (req, res) => {
    const data = req.body;
    if (!data.name || !data.email) {
        res.status(400).json({ message: "give all the inputs" });
    }
    const existingUser = await userModel.findOne({ email: data.email });
    if (existingUser)
        return res.status(400).json({ message: "User already exists" });

    const user = await userModel.create(data);

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ message: "Data Created Successfully", user, token });
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(401).json({ message: "user not found" });
        }
        return res.status(200).json({ message: "User Deleted Successfully", user });
    } catch (error) {
        next(error);
    }
}

exports.updateUser = async (req, res) => {
    if (!req.body.name) return res.status(400).json({ message: "empty fields" });
    let user = await userModel.findById(req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    await user.save();
    return res.status(200).json({ message: "User Updated Successfully", user });
}
