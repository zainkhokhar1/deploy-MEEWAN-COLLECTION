
import User from "../Models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// JWT secret key
const secret = process.env.SECRET;
// CREATING A NEW USER IN THE DATABASE
export const createUser = async (req, res) => {
    try {
        let { name, email, password } = req.body;
        let salt = await bcrypt.genSalt(10)
        let newPass = await bcrypt.hash(password, salt);
        let creation = await User.create({
            name,
            email,
            password: newPass
        });
        await creation.save();
        if (creation) {
            let user = await User.find({ email });
            let token = jwt.sign({
                data: user[0]._id,
            }, secret);
            res.status(200).json({ success: true, message: "Created user Successfully", jwtToken: token, _id: user[0]._id });
        }
    }
    catch (e) {
        res.status(400).json({ success: false, message: "Error from the Backend" });
        console.log(e.message);
    }
};

// LOGIN THE ALREADY EXSISTING USER
export const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let exsistanceCheck = await User.find({ email });
        if (exsistanceCheck.length === 0) {
            return res.status(200).json({ success: false, message: "user does not exists" });
        }
        else {
            let checking = await bcrypt.compare(password, exsistanceCheck[0].password);
            if (checking) {
                let token = jwt.sign({
                    data: exsistanceCheck[0]?._id
                }, secret);
                return res.status(200).json({ success: true, message: "Welcome to MEEWAN Collection", jwtToken: token, _id: exsistanceCheck[0]._id });
            }
            else {
                return res.status(200).json({ success: false, message: "Incorrect Password" });
            }
        }
    }
    catch (e) {
        console.log(e.message);
        return res.status(400).json({ success: false, message: "Error from the backend" });
    }
}
