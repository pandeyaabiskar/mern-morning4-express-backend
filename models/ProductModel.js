const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [10, "The title length should be at least 10 characters"],
        maxlength: [250, "The length of title cannot be greater than 250 characters"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price should be at least Rs 1"]
    },
    category: String,
    image: String,
    rating: {
        rate: String,
        count: Number
    }
});

const ProductModel = mongoose.model('product', productSchema);
module.exports = ProductModel;