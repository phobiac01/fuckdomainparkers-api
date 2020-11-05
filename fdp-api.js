const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fuckdomainparkers', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 4040;


app.use(express.json("type", "application/json"));
app.use(cors());


app.get('*', (req, res) => {
    res.send("Looking good! 👍")
});


// ============================================================================================


app.listen(port, () => {console.log(`]] FDP API listening on port ${port}`)});

process.on('SIGINT', async () => {db.close()});
process.on('SIGUSR2', async () => {db.close()});