const mongoose = require('mongoose');
const mongourl = 'mongodb://127.0.0.1:27017/Hotel';

mongoose.connect(mongourl);

const db = mongoose.connection; //mongoose

db.on('connected', () => {
    console.log("mogondb successfully connected");
});
db.on('error', (err) => {
    console.error("Error in MongoDB connection:", err);

})
db.on('disconnected', () => {
    console.error("Error in MongoDB connection:", err);
});

module.exports = db;
//jshkjhaskjdhkajhd
