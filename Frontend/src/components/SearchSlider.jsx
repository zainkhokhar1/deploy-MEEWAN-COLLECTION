
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useSearch } from './ContextApi';
import axios from 'axios';
import SearchProducts from './SearchProducts';
const SearchSlider = () => {
    const [searchBy, setSearchBy] = useState(null);
    const [openSearch, setOpenSearch] = useSearch();
    const [allProducts, setAllProducts] = useState([]);
    const [searchedProducts, setsearchedProducts] = useState([]);

    const getProducts = async () => {
        try {
            let token = localStorage.getItem('token');
            let products = await axios.post('http://localhost:3001/product/all', { token });
            if (products.data.success) {
                setAllProducts(products.data.products);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    // Getting all the products from the backend
    useEffect(() => {
        getProducts();
    }, []);

    // searching the products meeting the required needs
    useEffect(() => {
        let filtered = allProducts.filter((single) => {
            return single.title.toLowerCase().includes(searchBy) || single.category.toLowerCase().includes(searchBy) || single.description.toLowerCase().includes(searchBy);
        });
        setsearchedProducts(filtered);
    }, [searchBy])

    openSearch ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    return (
        <>
            <div className={`fixed top-0 md:w-5/12 lg:w-4/12 z-[999] overflow-hidden xl:w-3/12 shadow-xl bg-white h-screen duration-1000 ${openSearch ? "right-0" : "-right-[2600px]"} w-11/12`}>
                <div>
                    <div className='py-4 px-3 flex justify-between items-center border border-transparent border-b-slate-300'>
                        <span className='font-semibold text-base'>
                            SEARCH OUR SITE
                        </span>
                        <RxCross2 onClick={() => { setOpenSearch(false); localStorage.removeItem("Search"); }} className='text-2xl text-slate-600 hover:rotate-180 duration-500 cursor-pointer' />
                    </div>
                    <div className='px-4 py-10 space-y-5'>
                        <select defaultValue={"All Categories"} className='ml-4 pl-3 selection:outline-none focus:outline-none flex items-center justify-evenly w-11/12 border border-slate-300 px-3 py-2 rounded-full text-sm font-semibold'>
                            <option >All Categories</option>
                            <option value="Home">Home</option>
                        </select>
                        <div className='flex items-center justify-evenly border w-11/12 ml-4 px-3 py-2 rounded-full text-lg font-serif'>
                            <input value={searchBy} onChange={(e) => {
                                e.preventDefault();
                                setSearchBy(e.target.value);
                            }} className='selection:outline-none focus:outline-none text-black' type="text" placeholder='Search' />
                            <svg className=" t4s-btn-op0" viewBox="0 0 18 19" width="16"><path fillRule="evenodd" clipRule="evenodd" d="M11.03 11.68A5.784 5.784 0 112.85 3.5a5.784 5.784 0 018.18 8.18zm.26 1.12a6.78 6.78 0 11.72-.7l5.4 5.4a.5.5 0 11-.71.7l-5.41-5.4z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                </div>
                {/* div showing the search products */}
                <div className={`h-full ${searchBy !== null ? "block" : "hidden"}`}>
                    <div className='h-10 border text-lg text-start shadow-lg flex items-center justify-center border-t-slate-100 border-b-slate-200 border-transparent'>
                        Search Results
                    </div>
                    <div className='overflow-y-auto h-[23.3rem] overflow-x-hidden'>
                        {
                            searchedProducts.map((oneProduct) => {
                                return <SearchProducts singleProduct={oneProduct} />
                            })
                        }
                    </div>
                </div>
            </div>
            {
                openSearch && <div className='fixed inset-0 min-h-screen min-w-screen z-[700] bg-black opacity-50' onClick={() => { setOpenSearch(false); localStorage.removeItem("Search"); }}></div>
            }
        </>
    )
}

export default SearchSlider;