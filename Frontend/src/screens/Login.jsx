
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            let creation = await axios.post('http://localhost:3001/user/login', data);
            if (creation.data.success) {
                localStorage.setItem('token',creation.data.jwtToken);
                localStorage.setItem('userId',creation.data._id);
                Navigate('/');
                reset();
                 toast.success('Welcome Back!');
            }
            else {
                toast.error(creation.data.message);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div className='flex flex-col lg:flex-row lg:items-between lg:justify-center items-center w-screen my-5'>
            <div className='lg:w-1/2'>
                <img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?t=st=1733931468~exp=1733935068~hmac=5371cddf254cc7299b8613a731280047bccabce83cd0bd4334261287fd7752f5&w=826" alt="" />
            </div>
            <div className='lg:w-1/2 text-center'>
                <h1 className='text-xl xsm:text-2xl lg:text-4xl py-3 text-purple-900 font-semibold'>
                    LOGIN FORM
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center space-y-5 lg:space-y-9 w-screen lg:w-full xsm:text-lg md:text-2xl'>
                    <input type="email" placeholder='Enter Email' className='border-purple-700 w-72 xsm:w-80 xmd:w-96 md:w-[35rem] border h-12 xmd:h-14 md:h-16 lg:w-[27rem] xl:w-[34rem] rounded-sm pl-2 focus:outline-purple-500 bg-white' {...register("email", { required: true, minLength: 4 })} />
                    {errors.email && <span className='text-red-600'>Must be email</span>}
                    <input type="password" placeholder='Enter Password' className='border-purple-700 w-72 xsm:w-80 xmd:w-96 md:w-[35rem] border h-12 xmd:h-14 md:h-16 lg:w-[27rem] xl:w-[34rem] rounded-sm pl-2 focus:outline-purple-500 bg-white' {...register("password", { required: true, minLength: 4 })} />
                    {errors.password && <span className='text-red-600'>Password must be of 4 length</span>}
                    <button className='bg-purple-700 text-white hover:bg-purple-800 duration-300 px-7 xmd:px-10 md:px-14 md:py-5 xmd:py-3 py-2 rounded-md text-lg md:text-xl'>Login</button>
                    <Link className='text-lg text-purple-900 font-semibold' to='/signup'>
                        Create a new Account?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;