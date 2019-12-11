const mongoose = require('mongoose');
const express = require('express');
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();
const path = require('path');
mongoose.connect("mongodb+srv://userMax:userMax@cluster0-famxs.gcp.mongodb.net/test?retryWrites=true&w=majority", { useCreateIndex: true }, function (err) {
    if (err) return console.log(err);
    const port = process.env.PORT || 5000;
    app.listen(port);
});
//const userSchema = new mongoose.Schema({country:String, description: String, variety: String }, { versionKey: false });
const userSchema = new Schema({ name: String, country: String, description: String, designation: String, price: String, province: String, region: String, winery: String}, { versionKey: false });
const User = mongoose.model('users', userSchema);

app.use(express.static(__dirname));

// mongoose.connect("mongodb+srv://userMax:userMax@cluster0-famxs.gcp.mongodb.net/test?retryWrites=true&w=majority", { useCreateIndex: true }, function (err) {
//     if (err) return console.log(err);
//     const port = process.env.PORT || 5000;
//     app.listen(port);
// });

mongoose.set('useFindAndModify', false);
app.post('/api/users', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const userName = req.body.name;
    //console.log(userName);
    User.findOne({name: userName}, function (err, wines) {
        if (err) return console.log(err);
        console.log(wines);
        res.send(wines)
    })
});


