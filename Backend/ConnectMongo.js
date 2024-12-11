
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGO_URL;

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('successfully Connected to db');
    }
    catch (e) {
        console.log(e.message);
    }
}