const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.kblyp.mongodb.net/gpscoord`, {
    useNewUrlParser: true
})
.then(() => console.log('Connecté à la base de donnée'))
.catch((err) => console.log(err));
