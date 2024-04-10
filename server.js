require('dotenv').config();
const express = require('express');
require('./config.js');
const cors = require("cors");
const cookieParser = require('cookie-parser')
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require("socket.io");
const port = 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

const webServer = app.listen(port, () => console.log('Serveur ouvert sur le port : ' + port));
const io = socket(webServer, {
    cors: {
        origin:"http://localhost:3000",
        credentials:true,
    }
})

app.use((req, res, next) => {
    req.io = io;
    next();
});

const tripRoutes = require('./routes/tripRoutes');

app.use('/', tripRoutes);


