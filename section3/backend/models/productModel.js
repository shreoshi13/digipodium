const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name : String,
    description : String,
    image : String,
    price : Number,
    review : Number
});

module.exports = model( 'users', mySchema );