const mongoose = require('mongoose');

const url = "mongodb+srv://shreoshi63:Shreoshi@cluster0.8wmjrz3.mongodb.net/mydatabase?retryWrites=true&w=majority";

//asynchronous function returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;
