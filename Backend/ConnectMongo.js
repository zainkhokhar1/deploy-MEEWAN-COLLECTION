
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGO_URL;

export const connectMongoDB=()=>{
    mongoose.connect(url).then(()=>{
        console.log('successfully Connected to db');
    });
}