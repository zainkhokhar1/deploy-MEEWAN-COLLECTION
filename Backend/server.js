
import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './ConnectMongo.js';
import cors from 'cors';
import ProductRoute from './Routes/ProductRoute.js';
const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

// Making connection to mongodb
connectMongoDB();

// default connection indicators
app.listen(port, () => {
    console.log("Listening on the port " + port);
});
app.get('/', (req, res) => {
    res.send("Listening on /");
})

// Routes 
// ---------->>>> PRODUCT ROUTE -----------------------<<<< //
app.use('/product', ProductRoute);