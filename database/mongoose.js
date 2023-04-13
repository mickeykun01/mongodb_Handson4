const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/Human_Resources";

const connect = async () =>{
    try {
        console.log("connecting to mongodb ..");
        await mongoose.connect(url);
        console.log("connected yay!!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;
