const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "supersecretkey";
const port = 3000;
const connectDB = require("./src/db/db.js");
const usersRouter = require('./src/routes/userRoutes.routes.js');
const dbUserRoutes = require('./src/routes/dbUserRoutes.routes.js');
const dbFileUploadRoute = require("./src/routes/dbFileUpload.routes.js")
const errorHandler = require("./src/middlewares/ErrorHandler.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use("/users", usersRouter);
app.use("/db/users", dbUserRoutes);
app.use("/upload", dbFileUploadRoute);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello');
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});