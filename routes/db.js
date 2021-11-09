const mongoose = require('mongoose');

try {
    const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true};
    let url = "mongodb+srv://supun:supun123@india-mumbai.ptqnl.mongodb.net/app?retryWrites=true&w=majority"
    mongoose.connect(url, connectionOptions); 
} catch (error) {
    console.error('Database not connected')
}
