const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: [true, 'Product Name is required'],
        minlength: [5, 'Product Name should be at least 5 characters long'],
        maxlength: [50, 'Product Name should not exceed 50 characters'],
        unique: true,
        trim: true,
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
        minlength: [5, 'Description should be at least 10 characters long'],
        maxlength: [50, 'Description should not exceed 500 characters'],
        
    },
    productImage:{
        type: String,
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
    },
    category:{
        type: String,
        enum: ['veg', 'non-veg', 'drinks', 'sides'], 
        default:VTTRegion, // predefined category list.

    },
    inStock:{
        type: Boolean, 
        required: [true, 'In Stock is required'],
        default: true
    }

}, {
    timestamps:true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;