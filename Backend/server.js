
import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './ConnectMongo.js';
import cors from 'cors';
import ProductRoute from './Routes/ProductRoute.js';
import UserRoute from './Routes/UserRoute.js'
import OrderRoute from './Routes/OrderRoute.js'
import path from 'path';
// app creation and configuration of the dotenv 
const app = express();
dotenv.config();

// Basic middlewares to get access to the req body and other data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const _dirname = path.resolve();

// Cross origin allow
app.use(cors());

const port = process.env.PORT || 3000;

// Making connection to mongodb
connectMongoDB();

// default connection indicators
app.listen(port, () => {
    console.log("Listening on the port " + port);
});

// Routes 
// ---------->>>> PRODUCT ROUTE -----------------------<<<< //
app.use('/product', ProductRoute);

// ---------->>>> USER ROUTE --------------------------<<<<< //
app.use('/user',UserRoute);

// ---------->>>> ORDER ROUTE --------------------------<<<<< //
app.use('/order',OrderRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")));

app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})
