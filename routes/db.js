const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

try {
    const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true};
    let url = "mongodb+srv://supun:supun123@india-mumbai.ptqnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    mongoose.connect(url, connectionOptions); 
} catch (error) {
    console.error('Database not connected')
}
