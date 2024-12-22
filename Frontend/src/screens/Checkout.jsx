
import React, { useEffect, useState } from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAddCart } from '../components/ContextApi.jsx';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const Checkout = () => {
    const [cart, dispatchCart] = useAddCart();
    const [terms, setTerms] = useState(false);
    const [show, setShow] = useState(false);
    const Navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const totalPrice = cart.reduce((acc, current) => {
        return acc + current.salePrice * current.qty;
    }, 0);

    const onSubmit = async (data) => {
        try {
            let token = localStorage.getItem('token');
            let creationOrder = await axios.post('http://localhost:3001/order/create', { token, products: [...cart], ...data, owner: localStorage.getItem('userId'), totalProducts: cart.length, totalPrice });
            if (creationOrder.data.success) {
                toast.success('Order Created Successfully');
                localStorage.removeItem('cart');
                dispatchCart({
                    type : "clear"
                });
                return Navigate('/');
            }
            if (creationOrder.data.success == false) {
                console.log('Failed to create the order');
            }
        }
        catch (e) {
            toast.error('Login First to create an Order');
            Navigate('/login');
            console.log(e.message);
        }
    };


    const shipping = 300;

    // Formatting the price in pkr
    const getFormatted = (total, shipping) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PKR',
        }).format(total + shipping);

    }
    return (
        <div className='mb-8 min-h-screen '>
            {/* Navbar Section */}
            <div className='h-14 bg-slate-50 flex justify-between px-4 items-center xsm:px-14'>
                <h1 className='text-2xl font-medium'>
                    Checkout
                </h1>
                <IoBagCheckOutline className='text-slate-800 text-xl' />
            </div>
            <div className='lg:grid lg:grid-cols-6 lg:border-t-slate-200 lg:border  lg:border-transparent lg:relative'>
                {/* ORDER SUMMMARY DIV */}
                <div className="bg-slate-100 collapse rounded-none text-black lg:hidden">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-sm flex justify-between xsm:px-14 items-center px-3 border-[1px] border-t-slate-200 border-b-slate-200 border-transparent">
                        <div className='text-blue-600 flex items-center gap-1'>
                            <h3>
                                Order Summary
                            </h3>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className='text-lg font-medium'>
                            {getFormatted(totalPrice, shipping)}
                        </div>
                    </div>
                    <div className="collapse-content px-4">
                        {/* here map function to map through each of the item in the cart */}
                        <div>
                            {
                                cart.map((singleItem) => {
                                    return <div className='h-24 w-full flex items-start justify-between pt-5'>
                                        <div className='h-20 w-20 border border-slate-300 rounded-md bg-slate-200 relative z-20'>
                                            <img className='w-full h-full object-cover' src={singleItem.images[0]} alt="" />
                                            <span className='absolute -top-2 -right-2 text-sm bg-slate-600 text-white rounded-full px-2'>
                                                {singleItem.qty}
                                            </span>
                                        </div>
                                        <h2 className='w-32 pt-1 line-clamp-3 text-sm tracking-wide overflow-hidden text-wrap'>
                                            {
                                                singleItem.title
                                            }
                                            <p className='pt-1 w-12 text-sm'>
                                                {
                                                    singleItem.ageRange
                                                }
                                            </p>
                                        </h2>
                                        <h4 className='pt-2 text-sm pr-2'>
                                            Rs.{
                                                singleItem.salePrice * singleItem.qty
                                            }
                                        </h4>
                                    </div>
                                })
                            }
                            <div className='flex items-center justify-between mt-5 text-sm'>
                                <div>
                                    Subtotal - {cart.length} items
                                </div>
                                <div>
                                    {getFormatted(totalPrice, 0)}
                                </div>
                            </div>
                            <div className='flex items-center justify-between text-sm mt-3'>
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    Rs {shipping}.00
                                </div>
                            </div>
                            <div className='flex items-center mt-4 justify-between'>
                                <div className='font-semibold text-lg'>
                                    Total
                                </div>
                                <div className='flex items-baseline'>
                                    <div className='pr-1 text-sm text-slate-500'></div>
                                    <span className='font-normal text-lg'> {getFormatted(totalPrice, shipping)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form will be here */}
                <div className='px-5 py-4 xmd:mx-12 lg:col-span-3'>
                    <div className='flex items-center justify-between'>
                        <div className='text-xl tracking-wide'>
                            Contact
                        </div>
                        <div className={`text-blue-600 underline cursor-pointer ${localStorage.getItem('token') ? "hidden" : "block"}`}>
                            Login
                        </div>
                    </div>
                    <form className='mt-4 space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder='Enter Email' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("email", { required: true })} />
                        {errors.email && <span className='text-red-600 text-sm'>Email is required</span>}
                        <h3 className='text-xl tracking-wide'>
                            Delivery
                        </h3>
                        <input type="text" placeholder='Enter Country Region' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("country", { required: true })} />
                        {errors.country && <span className='text-red-600 text-sm'>country is required</span>}
                        <input type="text" placeholder='First name' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("firstName", { required: true })} />
                        {errors.firstName && <span className='text-red-600 text-sm'>First Name is required</span>}
                        <input type="text" placeholder='Last name' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("lastName", { required: true })} />
                        {errors.lastName && <span className='text-red-600 text-sm'>Last Name is required</span>}
                        <input type="text" placeholder='Address' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("address", { required: true })} />
                        {errors.address && <span className='text-red-600 text-sm'>Address is required</span>}
                        <input type="text" placeholder='City' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("city", { required: true })} />
                        {errors.city && <span className='text-red-600 text-sm'>City is required</span>}
                        <input type="text" placeholder='Postal code(option)' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("postCode")} />
                        <input type="text" placeholder='Phone Number' className='text-sm tracking-wide w-full border h-12 px-2 rounded-md focus:outline-none' {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span className='text-red-600 text-sm'>Phone Number is required</span>}
                        <h2 className='text-lg'>
                            Shipping method
                        </h2>
                        <div className='flex items-center text-sm justify-between px-3 py-[11px] bg-blue-50 rounded-md border border-blue-500'>
                            Standard
                            <div className='text-base font-semibold'>
                                Rs.{shipping}.00
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg pb-1'>
                                Payment
                            </h3>
                            <p className='text-sm text-slate-500'>
                                All transactions are secure and encrypted.
                            </p>
                        </div>
                        <div className='px-3 py-[14px] text-sm bg-blue-50 rounded-md border border-blue-500'>
                            Cash on Delivery (COD)
                        </div>
                        <div className="collapse rounded-none text-black" >
                            <input type="checkbox" className="peer lg:hidden" onClick={() => setShow(!show)}/>
                            <div className="collapse-title text-sm flex justify-between items-center lg:hidden">
                                <h3 className='text-lg'>
                                    Order Summary
                                </h3>
                                <div className='flex text-blue-500'>
                                    {
                                        show ? "Hide" : "Show"
                                    }
                                    <MdKeyboardArrowDown className='text-xl' />
                                </div>
                            </div>
                            <div className="collapse-content px-4 border lg:hidden">
                                {/* here map function to map through each of the item in the cart */}
                                <div>
                                    {
                                        cart.map((singleItem) => {
                                            return <div className='h-24 w-full flex items-start justify-between pt-5'>
                                                <div className='h-16 w-16 border border-slate-300 rounded-md bg-slate-200 relative z-20'>
                                                    <img className='w-full h-full object-cover' src={singleItem.images[0]} alt="" />
                                                    <span className='absolute -top-2 -right-2 text-sm bg-slate-600 text-white rounded-full px-2'>
                                                        {singleItem.qty}
                                                    </span>
                                                </div>
                                                <h2 className='w-28 pt-1 pl-3 line-clamp-3 text-sm tracking-wide overflow-hidden text-wrap'>
                                                    {
                                                        singleItem.title
                                                    }
                                                </h2>
                                                <h4 className='pt-2 text-sm pr-2'>
                                                    Rs.{
                                                        singleItem.salePrice * singleItem.qty
                                                    }
                                                </h4>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            <div className='flex items-center justify-between mt-5 text-sm lg:hidden'>
                                <div>
                                    Subtotal - {cart.length} items
                                </div>
                                <div>
                                    {getFormatted(totalPrice, 0)}
                                </div>
                            </div>
                            <div className='flex items-center justify-between text-sm mt-3 lg:hidden'>
                                <div>
                                    Shipping
                                </div>
                                <div>
                                    Rs {shipping}
                                </div>
                            </div>
                            <div className='flex items-center mt-4 justify-between lg:hidden'>
                                <div className='font-semibold text-lg'>
                                    Total
                                </div>
                                <div className='flex items-baseline lg:hidden'>
                                    <div className=' text-sm text-slate-500'></div>
                                    <span className='font-normal text-lg'> {getFormatted(totalPrice, shipping)}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center lg:hidden'>
                                <input type="checkbox" id="terms" onClick={() => setTerms(!terms)} />
                                <label htmlFor="terms" className='text-sm pl-2 text-slate-700'>Agree to the terms and conditions</label>
                            </div>
                            <button className={`bg-blue-600 hover:bg-blue-700 duration-200 mt-6 text-white tracking-wide text-lg py-3 rounded-lg ${terms ? "cursor-pointer" : "cursor-not-allowed"}`}>
                                Complete order
                            </button>
                        </div>
                    </form>
                </div>
                <div className={`lg:col-span-3 hidden border border-transparent lg:block lg:border-l-slate-200`}>
                    <div>
                        {
                            cart.map((singleItem) => {
                                return <div className='h-24 w-full flex items-start justify-evenly pt-5'>
                                    <div className='h-20 w-20 border border-slate-300 rounded-md bg-slate-200 relative z-20'>
                                        <img className='w-full h-full object-cover' src={singleItem.images[0]} alt="" />
                                        <span className='absolute -top-2 -right-2 text-sm bg-slate-600 text-white rounded-full px-2'>
                                            {singleItem.qty}
                                        </span>
                                    </div>
                                    <h2 className='w-32 pt-1 line-clamp-3 text-sm tracking-wide overflow-hidden text-wrap'>
                                        {
                                            singleItem.title
                                        }
                                        <p className='pt-1 w-12 text-sm'>
                                            {
                                                singleItem.ageRange
                                            }
                                        </p>
                                    </h2>
                                    <h4 className='pt-2 text-sm pr-2'>
                                        Rs.{
                                            singleItem.salePrice * singleItem.qty
                                        }
                                    </h4>
                                </div>
                            })
                        }
                        <div className='flex items-center justify-between mt-5 text-sm px-16 lg:mt-12'>
                            <div>
                                Subtotal - {cart.length} items
                            </div>
                            <div>
                                {getFormatted(totalPrice, 0)}
                            </div>
                        </div>
                        <div className='flex items-center justify-between text-sm mt-3 px-16'>
                            <div>
                                Shipping
                            </div>
                            <div>
                                Rs {shipping}.00
                            </div>
                        </div>
                        <div className='flex items-center mt-4 justify-between px-16'>
                            <div className='font-semibold text-lg'>
                                Total
                            </div>
                            <div className='flex items-baseline'>
                                <div className='pr-1 text-sm text-slate-500'></div>
                                <span className='font-normal text-lg'> {getFormatted(totalPrice, shipping)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[35rem] ml-8 w-full bg-slate-200 h-px '></div>
                <div className='lg:flex lg:flex-row flex flex-col items-center justify-center gap-2 lg:gap-5 my-4'>
                    <div className='text-blue-700 text-sm underline cursor-pointer text-nowrap'>Refund policy</div>
                    <div className='text-blue-700 text-sm underline cursor-pointer text-nowrap'>Privacy policy</div>
                    <div className='text-blue-700 text-sm underline cursor-pointer text-nowrap'>Terms of service</div>
                    <div className='text-blue-700 text-sm underline cursor-pointer text-nowrap'>Contact Information</div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;