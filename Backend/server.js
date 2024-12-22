
import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './ConnectMongo.js';
import cors from 'cors';
import ProductRoute from './Routes/ProductRoute.js';
import UserRoute from './Routes/UserRoute.js'
import OrderRoute from './Routes/OrderRoute.js'
// app creation and configuration of the dotenv 
const app = express();
dotenv.config();

// Basic middlewares to get access to the req body and other data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cross origin allow
app.use(cors());

const port = process.env.PORT || 3000;

// Making connection to mongodb
connectMongoDB();

// default connection indicators
app.listen(port, () => {
    console.log("Listening on the port " + port);
});
// basic entry route for checking
app.get('/', (req, res) => {
    res.send("Listening on /");
})

// Routes 
// ---------->>>> PRODUCT ROUTE -----------------------<<<< //
app.use('/product', ProductRoute);

// ---------->>>> USER ROUTE --------------------------<<<<< //
app.use('/user',UserRoute);

// ---------->>>> ORDER ROUTE --------------------------<<<<< //
app.use('/order',OrderRoute);