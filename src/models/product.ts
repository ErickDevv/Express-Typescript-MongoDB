import { Schema, model } from 'mongoose'

interface ProductInterface {
    name: string;
    category: string;
}

const ProductSchema = new Schema<ProductInterface>({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
}, { collection: 'categories' });

const Product = model('Product', ProductSchema, 'categories');

module.exports = Product;