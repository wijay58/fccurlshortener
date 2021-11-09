const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

try {
    const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true};
    let url = "mongodb://localhost/app"
    mongoose.connect(url, connectionOptions); 
} catch (error) {
    console.error('Database not connected')
}
