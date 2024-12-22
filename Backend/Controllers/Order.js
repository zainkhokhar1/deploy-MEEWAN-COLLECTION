
import express from "express";
import { Order } from "../Models/OrderModel.js";

export const createOrder = async (req, res) => {
    try {
        let { products, totalPrice, owner, totalProducts, phoneNumber, email, firstName, lastName, address } = req.body;
        console.log(products, totalPrice, owner, totalProducts);

        let creation = await Order.create({ products, totalPrice, owner, totalProducts, phoneNumber, email, firstName, lastName, address });
        if (creation) {
            return res.status(200).json({ success: true, message: "Create Order successfully" });
        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(400).json({ success: false, message: "Failed to create the order Please Try Again" });
    }
}