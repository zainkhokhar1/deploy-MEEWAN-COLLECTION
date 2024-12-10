import express from "express";
import Product from "../Models/ProductModel.js";

export const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const {
            title,
            description,
            originalPrice,
            salePrice,
            ageRange,
            category,
            images,
            sizes
        } = req.body;
        const creation = await Product.create({
            title,
            description,
            originalPrice,
            salePrice,
            ageRange,
            category,
            images,
            sizes
        });
        if (creation) {
            res.status(200).json({ success: true });
        }
    }
    catch (e) {
        res.status(400).json('error');
        console.log(e.message);
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products);
        if (products) {
            res.status(200).json({ products, success: true });
        }
    }
    catch (e) {
        res.status(400).json('error')
        console.log(e.message);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        let deletion = await Product.findByIdAndDelete({ _id: req.body.id });
        if (deletion) {
            return res.status(200).json({ success: true });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ success: false });
    }
};

export const getSingleProduct = async (req, res) => {
    let { id } = req.params;
    console.log(id)
    try {
        let product = await Product.find({ _id: id });
        if (product) {
            return res.status(200).json({ success: true, product });
        }
    }
    catch (e) {
        console.log(e.message);
        res.status(400).json({ success: false });
    }
};

export const getSpecificCategory = async (req, res) => {
    try {
        let { category } = req.params;
        console.log(category);
        let products = await Product.find({ category });
        if (products) {
            return res.status(200).json({ products, success: true });
        }
    }
    catch (e) {
        return res.status(400).json({ success: false });
        console.log(e.message);
    }
}