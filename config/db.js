const mongoose = require('mongoose');
const config = require('config')

const URI = config.get('mongoURI');

const mongoConnect = async() => {
    try {
        await mongoose.connect(URI , {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('DB connected')
    } catch (error) {
        console.log('Error');
    }
}

module.exports = mongoConnect;