
import express from 'express';

import { jwtCheck } from "../Middlewares/jwtConfirm.js";
import { createOrder } from '../Controllers/Order.js';

const router = express.Router();

router.post('/create',jwtCheck,createOrder);

export default router;