const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        console.log("database connected")
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectdb