

import React, { useEffect, useState } from 'react'
import products from '../dummydata'
import { json, useParams } from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaPlus, FaYoutube } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useAddCart, useWishlist } from './ContextApi';
import toast from 'react-hot-toast';
import { IoMdAdd } from "react-icons/io";
import SingleProduct from './SingleProduct.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
const PreviewItem = () => {

    const [wishList, dispatch] = useWishlist();
    const [cart, dispatchCart] = useAddCart();
    const [size, setSize] = useState(0);
    const { id } = useParams();
    const [qty, setQty] = useState(1);
    const [like, setLike] = useState(false);
    const [product, setProduct] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [recenltyViewed, setRecentlyViewed] = useState(localStorage.getItem('recentlyViewed') ? JSON.parse(localStorage.getItem('recentlyViewed')) : []);
    const [recentlyViewedProducts, setRecentlyViewedProdcts] = useState([]);
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 3000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        lazyLoad: true,
        speed: 300,
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: '50px'
    };
    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
        lazyLoad: true,
        speed: 300,
        accessibility: false,
        arrows: false,
    };
    const arrOfInfo = [
        {
            name: 'Description',
            description: "Buy one and never regret.Give us a chance to serve you the best we have for you."
        },
        {
            name: 'Additional Information',
            AdditionalInformation: "1-2y, 2-3y, 3-4y, 5-6y, 6–7y, 7-8y, 4-5y, 9-10y, 13/14y, 11/12y"
        },
        {
            name: 'Reviews',
            reviews: []
        },
    ]


    const handleLike = (product) => {
        console.log(product)
        const alreadyInWishlist = wishList.some(item => item._id === product._id);
        if (alreadyInWishlist) {
            wishList.filter((single) => single._id !== product._id);
            dispatch({
                type: 'delete',
                payload: product
            });
            toast.success("Removed item from the wishList");
        }
        else {
            dispatch({
                type: 'add',
                payload: product
            });
            toast.success("Added item to the wishList");
        }
    }
    // Calling backend for a single product item
    const getSingleProduct = async () => {
        try {
            let product = await axios.get(`http://localhost:3001/product/${id}`);
            if (product.data.success) {
                setProduct(product.data.product);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    console.log(product)
    useEffect(() => {
        getSingleProduct();
        console.log(recentlyViewedProducts)
            // const newPreviewsFetch = recenltyViewed.map((one) => {
            //     console.log(products)
            //     return Object.assign({}, ...products.filter((single) => {
            //         console.log(single._id)
            //         return single._id.toString() === one
            //     }))
            // })
            // setRecentlyViewedProdcts(newPreviewsFetch);
    }, [id]);
    // useEffect(() => {
    //     if (wishList.length > 0 && product.length > 0) {
    //         const checking = wishList.some(singleItem => singleItem._id == product[0]._id);
    //         setLike(checking);
    //     }
    // }, [wishList, product]);

    // useEffect(() => {
    //     if (product && product.length > 0) {
    //         const filtered = products.filter((single) => {
    //             return single.id !== product[0].id
    //         });
    //         setNewProducts(filtered);
    //     }
    // }, [product]);

    // useEffect(() => {
    //     if (product.length > 0 && localStorage.getItem('recentlyViewed')) {
    //         let oldData = JSON.parse(localStorage.getItem('recentlyViewed'));
    //         let id = product[0]._id.toString();
    //         let Checking = oldData.some((one) => one === id);
    //         if (!Checking) {
    //             let newRecents = [...oldData, product[0]._id.toString()];
    //             localStorage.setItem('recentlyViewed', JSON.stringify(newRecents));
    //             setRecentlyViewed(newRecents);
    //         }
    //     }
    //     else {
    //         if (product && product.length > 0) {
    //             let newRecents = [product[0]._id.toString()]
    //             localStorage.setItem('recentlyViewed', JSON.stringify(newRecents));
    //             setRecentlyViewed(newRecents);
    //         }
    //     }
    // }, [product]);

    const addToCart = (product) => {
        let addedProduct = { ...product, qty };
        let condition = cart.some((singleItem) => {
            return addedProduct._id === singleItem._id
        });
        if (condition) {
            let item = cart.filter((singleEntity) => addedProduct._id === singleEntity._id);
            let newItem = { ...product, qty: addedProduct.qty + item[0].qty };
            let cartItems = cart.filter((oneItem) => oneItem._id !== product._id);
            cartItems.push(newItem);
            dispatchCart({
                type: 'update',
                payload: cartItems,
            });
            toast.success('Item removed to Cart');
        }
        else {
            dispatchCart({
                type: 'add', payload: addedProduct
            });
            toast.success('Item added to Cart');
        }
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    if (product === undefined || product.length === 0) {
        return;
    }

    return (
        <>
            <div className='p-3 xl:ml-3 pt-12'>
                <div className='flex flex-col'>
                    <div className='flex flex-col md:grid md:grid-cols-8'>
                        <div className='w-full h-96 lg:min-h-[38rem] xl:min-h-[32rem] md:min-h-[30rem] relative md:col-span-4 lg:col-span-3'>
                            <img className='w-full h-full object-cover pr-1 sm:pr-0' src={product[0].images[0]} alt="ProductImage" />
                            <div className='px-[9px] py-[10px] text-xs rounded-full bg-[#ff4e00] text-white absolute top-4 right-2'>
                            {Math.round((((product[0].originalPrice-product[0].salePrice)/product[0].originalPrice)*100))}%
                            </div>
                            <div className='absolute bg-slate-100 rounded-full px-3 py-3 bottom-3 right-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 448 512" width="14"><path d="M416 176V86.63L246.6 256L416 425.4V336c0-8.844 7.156-16 16-16s16 7.156 16 16v128c0 8.844-7.156 16-16 16h-128c-8.844 0-16-7.156-16-16s7.156-16 16-16h89.38L224 278.6L54.63 448H144C152.8 448 160 455.2 160 464S152.8 480 144 480h-128C7.156 480 0 472.8 0 464v-128C0 327.2 7.156 320 16 320S32 327.2 32 336v89.38L201.4 256L32 86.63V176C32 184.8 24.84 192 16 192S0 184.8 0 176v-128C0 39.16 7.156 32 16 32h128C152.8 32 160 39.16 160 48S152.8 64 144 64H54.63L224 233.4L393.4 64H304C295.2 64 288 56.84 288 48S295.2 32 304 32h128C440.8 32 448 39.16 448 48v128C448 184.8 440.8 192 432 192S416 184.8 416 176z"></path></svg>
                            </div>
                        </div>
                        {/* old styling of the next div includes pl-2 pr-3 */}
                        <div className='py-4 md:px-8 md:col-span-3 xl:pl-12 md:space-y-2'>
                            <h3 className='font-bold text-lg lg:text-2xl'>
                                {
                                    product[0].title
                                }
                            </h3>
                            <div className='flex gap-6'>
                                <h3 className='line-through text-slate-500 text-2xl'>
                                    Rs.{
                                        product[0].originalPrice
                                    }
                                </h3>
                                <h3 className='text-red-600 text-2xl'>
                                    Rs.{
                                        product[0].salePrice
                                    }
                                </h3>
                            </div>
                            <div className=''>
                                <span className='font-bold block'>SIZE : {
                                        product[0]?.sizes.join(',')
                                    }</span>
                               {
                                    product[0].sizes.map((sizes)=>{
                                        return  <button onClick={() => setSize(sizes)} className={`border ${sizes === size ? "bg-slate-800 text-white" : "border-red-600"}  rounded-full px-[6px] py-[2px] text-slate-500 mr-2 my-3`}>{sizes}</button>
                                    })
                               }
                                {/* <button onClick={() => setSize(2)} className={`border ${size === 2 ? "bg-slate-800 text-white" : "border-red-600"}  rounded-full px-[6px] py-[2px] text-slate-500 mr-2 my-3`}>XX Large</button> */}
                            </div>
                            <div>
                                <div className='flex w-full py-4 gap-6'>
                                    <div className='flex w-28 px-2 cursor-pointer h-fit py-1 items-center border rounded-full border-black'>
                                        <div className='flex w-1/3 items-center justify-center' onClick={() => qty === 1 ? "" : setQty(qty - 1)}>
                                            <FaMinus />
                                        </div>
                                        <div className='text-lg font-semibold w-1/3 flex items-center justify-center'>
                                            {
                                                qty
                                            }
                                        </div>
                                        <div className='flex w-1/3 items-center justify-center' onClick={() => setQty(qty + 1)}>
                                            <FaPlus />
                                        </div>
                                    </div>
                                    <div onClick={() => handleLike(product[0])} className={`px-2 py-2 border ${like ? "border-red-800" : "border-slate-800 fill-transparent"} cursor-pointer rounded-full`}>
                                        <FiHeart className={`text-xl duration-100 ${like ? "text-red-600 scale-105 fill-red-600" : "text-slate-600 fill-transparent"} `} />
                                    </div>
                                </div>
                                <div onClick={() => addToCart(product[0])} className='text-white cursor-pointer bg-[#56cfe1] flex items-center justify-center rounded-full py-2 font-bold'>
                                    ADD TO CART
                                </div>
                                <div className='py-3'>
                                    <span className='font-bold text-slate-900'>
                                        Ask a Question
                                    </span>
                                </div>
                                <div>
                                    <span className='text-slate-500'>
                                        Availiability : &nbsp;
                                    </span>
                                    <span className='font-semibold text-slate-900 text-sm'>
                                        In Stock
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 my-6 px-3'>
                        {
                            arrOfInfo.map((option) => {
                                return <div key={option.name} tabIndex={0} className="border-b-slate-200 w-full border-b collapse rounded-none duration-300">
                                    <input type="checkbox" className="peer absolute" />
                                    <div className='flex items-center collapse-title p-0 text-base justify-between w-full bg-[#F6F6F6]'>
                                        <div className='pl-3 font-semibold text-sm text-nowrap'>{option.name}</div>
                                        <div className='flex items-center w-12 justify-center bg-[#222222] px-3 py-3 rounded-sm'>
                                            <IoMdAdd className='text-white' />
                                        </div>
                                    </div>
                                    <div className="collapse-content h-fit">
                                        <div className="flex flex-col">
                                            {
                                                option.name === "Description" ? <div className='py-3 text-sm font-semibold text-slate-800 rounded-md'>
                                                    {
                                                        option.description.length > 0 ? product[0].description : ""
                                                    }
                                                </div> : option.name === "Additional Information" ? <div className='border border-slate-200 px-2 py-1 items-center flex my-4'>
                                                    <div className='text-sm  font-semibold w-3/12'>
                                                        Size
                                                    </div>
                                                    <div className='w-9/12 border-l-slate-300 h-full border-[1px] border-transparent pl-2 text-slate-500'>
                                                        {
                                                            product[0]?.sizes.join(',')
                                                        }
                                                    </div>
                                                </div> : <div>
                                                    {
                                                        option.reviews && option.reviews.length > 0 ? <div className='py-3'>

                                                        </div> : <div className='text-base font-semibold text-slate-700 py-3 px-3'>No reviews Yet</div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <div className='text-center'>
                            <span className='font-bold text-lg'>
                                You may also like
                            </span>
                            {/* <Slider {...settings1} className='w-full flex items-center my-10'>
                                {
                                    newProducts.length > 0 ? newProducts.map((product) => {
                                        return <SingleProduct key={product.id} singleProduct={product} preview={true} />
                                    }) : ""
                                }
                            </Slider> */}
                        </div>
                        <div className='text-center'>
                            <div>
                                <span className='font-bold text-lg'>
                                    Recently Review Product
                                </span>
                                {/* <Slider {...settings2} className='w-full flex items-center my-10'>
                                    {
                                        recentlyViewedProducts.length > 0 ? recentlyViewedProducts.map((recent) => {
                                            return <SingleProduct key={recent.id} singleProduct={recent} preview={true} />
                                        }) : <><div className='text-xl text-center font-semibold'>
                                            No items to show
                                        </div></>
                                    }
                                </Slider> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#e6e6e6] rounded-none duration-300 mb-7">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-bold">Get in touch</div>
                <div className="collapse-content">
                    <div className="flex gap-3 opacity-60">
                        <FaFacebookF className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaYoutube className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="text-sm px-10 text-center text-slate-500 line-clamp-2 pb-2">
                Copyright © 2024 <span className="text-sky-500">Meewan</span> all rights Reserved.
            </div>
        </>
    )
}

export default PreviewItem;
