
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useCategoryProduct = ( category ) => {
    let [categoryProducts, setCategoryProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getKidsProduct = async () => {
            setLoading(true);
            try {
                let categoryProducts = await axios.get(`http://localhost:3001/product/category/${category}`);
                if (categoryProducts.data.success) {
                    setCategoryProducts(categoryProducts.data.products);
                }
            }
            catch (e) {
                setError(e);
                console.log(e.message);
            }
            finally {
                setLoading(false);
            }
        }
        getKidsProduct();
    }, [])
    return { categoryProducts, error, loading };
}

export default useCategoryProduct;