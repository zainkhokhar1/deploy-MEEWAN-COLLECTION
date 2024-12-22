
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    products: [
        {
            type: Object,
            required: true
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    totalProducts: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["PENDING", "COMPLETED", "SHIPPED"],
        default: "PENDING"
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);