
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

export const jwtCheck = async (req, res, next) => {
    try {
        let { token } = req.body;
        if (!token) {
            return res.status(401).json({ success: false, message: 'No token provided' });
        };

        jwt.verify(token, process.env.SECRET);
        next();
    }
    catch (e) {
        return res.status(401).json({ success: false, message: 'Invalid jwt Token' });
        console.log('JWT verfication failed' + e.message);
    }
};