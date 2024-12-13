
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    orders: [
        {
            type: Schema.Types.ObjectId, ref: 'Product',
            date: Date.now(),
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    }
}, {
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

export default User;