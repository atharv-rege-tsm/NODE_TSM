const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/SM_MONGO');
        console.log("mongo db connected");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;