
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            let creation = await axios.post('http://localhost:3001/user/create', data);
            if (creation.data.success) {
                localStorage.setItem('token',creation.data.jwtToken);
                reset();
                Navigate('/');
                 toast.success('Welcome to MEEWAN COLLECITON!');
            }
            else {
                toast.error(creation.data.message);
            }
        }
        catch (e) {
            toast.error('user already exsists')
            console.log(e.message);
        }
    }
    return (
        <div className='flex flex-col lg:flex-row lg:items-between lg:justify-center items-center w-screen my-8'>
            <div className='lg:w-1/2 md:w-96'>
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?t=st=1733931468~exp=1733935068~hmac=5371cddf254cc7299b8613a731280047bccabce83cd0bd4334261287fd7752f5&w=826" alt="" />
            </div>
            <div className='lg:w-1/2 text-center'>
                <h1 className='text-xl xsm:text-2xl lg:text-4xl py-3 text-purple-900 font-semibold'>
                    SIGNUP FORM
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-5 lg:space-y-9 w-screen lg:w-full xsm:text-lg md:text-2xl'>
                    <input type="text" placeholder='Enter Name' className='border-purple-700 w-72 xsm:w-80 xmd:w-96 md:w-[30rem] border h-12 xmd:h-14 md:h-12 lg:h-16 lg:w-[27rem] xl:w-[34rem] rounded-sm pl-2 focus:outline-purple-500 bg-white' {...register("name", { required: true, minLength: 3 })} />
                    {errors.name && <span className='text-red-600'>Name must be of 3 length</span>}
                    <input type="email" placeholder='Enter Email' className='border-purple-700 w-72 xsm:w-80 xmd:w-96 md:w-[30rem] border h-12 xmd:h-14 md:h-12 lg:h-16 lg:w-[27rem] xl:w-[34rem] rounded-sm pl-2 focus:outline-purple-500 bg-white' {...register("email", { required: true, minLength: 4 })} />
                    {errors.email && <span className='text-red-600'>Must be email</span>}
                    <input type="password" placeholder='Enter Password' className='border-purple-700 w-72 xsm:w-80 xmd:w-96 md:w-[30rem] border h-12 xmd:h-14 md:h-12 lg:h-16 lg:w-[27rem] xl:w-[34rem] rounded-sm pl-2 focus:outline-purple-500 bg-white' {...register("password", { required: true, minLength: 4 })} />
                    {errors.password && <span className='text-red-600'>Password must be of 4 digits</span>}
                    <button className='bg-purple-700 text-white hover:bg-purple-800 duration-300 px-7 xmd:px-10 md:px-12 md:py-3 xmd:py-3 py-2 rounded-md text-lg md:text-xl'>Signup</button>
                    <Link className='text-lg text-purple-900 font-semibold' to='/login'>
                        Already have an Account?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;