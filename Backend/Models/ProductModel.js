
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type : String,
        required : true,
        minlength : 4,
        unique : true
    },
    sizes : [
        {
            type : String,
            required : true,
            default : "Medium"
        }
    ],
    description: {
        type : String,
        required : true,
        minlength : 4,
    },
    originalPrice : {
        type : Number,
        required : true,
    },
    salePrice : {
        type : Number,
        required : true,
    },
    ageRange: {
        type : String,
        default : "Any age"
    },
    category  :{
        type : String,
        required : true,
        enum : ["Mens","Womens","Kids","summerCollection","winterCollection"]
    },
    images : [
        {
            type : String,
            required : true,
        }
    ],
    reviews : {
        type : Array,
        default : []
    }
},
{
    timestamps : true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;