
import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, getSpecificCategory } from "../Controllers/Product.js";
import { jwtCheck } from "../Middlewares/jwtConfirm.js";

const router = express.Router();

// Create a product
router.post('/all', jwtCheck, getAllProducts);
router.delete('/delete', deleteProduct);
router.post('/create', createProduct);
router.get('/:id', getSingleProduct);
router.get('/category/:category', getSpecificCategory);
export default router;