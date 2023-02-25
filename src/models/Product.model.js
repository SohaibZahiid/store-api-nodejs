const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    image: {
        type: String,
        required: [true, "Product image is required"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported",
        },
        // enum:['Ikea', 'Liddy', 'Caressa', 'Marcos']
    },
    category: {
        type: String,
        required: [true, "Product category is required"]
    }
});

module.exports = mongoose.model("Product", productSchema);
