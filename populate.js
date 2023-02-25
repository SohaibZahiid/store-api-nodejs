require('dotenv').config()

const connectDB = require('./db/Connect')
const Product = require('./models/Product.model')

const jsonProducts = require('./products.json')


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!')
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()