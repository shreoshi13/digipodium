const {Schema, model} = require('../connection');

const oneSchema = new Schema({
    name : String,
    description : String,
    image : String,
    price : Number,
    review : Number
});

module.exports = model( 'product', oneSchema );