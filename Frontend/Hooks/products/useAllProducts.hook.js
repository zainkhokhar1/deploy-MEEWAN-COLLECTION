import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalProducts, setTotalProducts] = useState(0);
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const token = localStorage.getItem("token") || "";

            try {
                const response = await axios.post(
                    `http://localhost:3001/product/all`,
                    { token }
                );

                if (response.data.success) {
                    setProducts(response.data.products);
                    setTotalProducts(response.data.totalCount);
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
    }, []);

    return { products, loading, error,totalProducts };
};

export default useProducts;
