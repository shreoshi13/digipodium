//title:string,
//description:string,
//image:string,
//content:string
const {Schema, model} = require('../connection');

const mySchema = new Schema({
    title : String,
    description : String,
    image : String,
    content : String
});

module.exports = model( 'users', mySchema );