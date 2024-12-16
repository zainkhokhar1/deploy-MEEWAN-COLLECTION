
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useSingleProduct = (id) => {
    const [product, setProduct] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [isError, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const token = localStorage.getItem("token") || "";

            try {
                const response = await axios.get(
                    `http://localhost:3001/product/${id}`
                );

                if (response.data.success) {
                    setProduct(response.data.product);
                } else {
                    setError("Failed to fetch products");
                }
            } catch (e) {
                setError("Login first to visit this page");
                localStorage.removeItem("token");
                toast.error("Login first to visit this page");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [id]);

    return { product, isloading, isError };
};

export default useSingleProduct;
