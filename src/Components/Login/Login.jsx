'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import login from '../Image/login.jpg'
import { RxDividerHorizontal } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { BiSolidFaceMask } from "react-icons/bi";


const Login=()=>{
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const submitHandler=async (e) => {
        // prevent default
        e.preventDefault()

        const response=await fetch ('http://localhost:3000/api.login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email, password})

        })

        
    }




    
    return(
        <>                  
            <section className=" md:py-8 md:px-8 loginBg  h-screen">
                
                <div className="flex items-center justify-center md:gap-28 h-[90vh] bg-white  bg-opacity-70 relative ">
                    <Link href={'/'}>
                        <p className="absolute top-4 right-12 text-xl bg-black hover:bg-red-500 rounded-full cursor-pointer p-1 text-white "><MdClose /></p>
                    </Link>
                    
                    {/* form div */}
                    <div className="bg-slate-50 opacity-85 px-[2rem] md:p-10 rounded-lg ring ring-purple-500 ">
                        <form onSubmit={submitHandler} className="" action="">
                            <h1 className="text-black text-2xl font-bold">Login</h1>
                            <p className="text-sm text-neutral-500">Do not have an account yet? <u className="text-sm text-purple-500 cursor-pointer font-semibold">Sign Up</u></p>

                            <div className="pt-4 grid grid-col-1">
                                <label className="font-semibold text-base" htmlFor="">Email Address</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email"
                                placeholder="you@example.com"
                                className="py-2 px-16 text-sm outline-none border border-neutral-500 rounded-md" />

                            </div>

                            <div className="pt-6">
                                <div className="flex text-base">
                                    <label className="font-semibold " htmlFor="">Password</label>
                                    <u className="ml-auto text-purple-500 cursor-pointer font-semibold ">Forget Password?</u>
                                </div>

                                <div>
                                    <input onChange={(e)=>setPassword(e.target.value)} type="password" 
                                    placeholder="Enter 6 character or more"
                                    className="py-2 px-16 text-sm outline-none border border-neutral-500 rounded-md"/>
                                </div>
                            </div>

                           

                            <div className="flex items-center gap-1 pt-4 text-sm">
                                <input type="checkbox" />
                                <p className="text-neutral-500">Remember me</p>
                            </div>

                            <div className="pt-4 flex items-center justify-center">
                                <button className="px-20 py-1 bg-purple-700 hover:bg-purple-500 text-white text-sm rounded-md">LOGIN</button>
                            </div>

                            <div className="flex items-center pl-8 pt-1 justify-center">
                                <p className="text-2xl"><RxDividerHorizontal /></p>
                                <p>or login with</p>
                                <p className="text-2xl"><RxDividerHorizontal /></p>
                            </div>

                            <div className="pt-4 flex items-center justify-center gap-5">
                                <button className="text-red-600 border border-red-700 flex gap-2 items-center px-6 py-1 rounded-md"> <FcGoogle />Google</button>
                                <button className="text-blue-600 border border-blue-700 flex items-center gap-2 px-6 py-1 rounded-md"><FaFacebookF />Facebook</button>
                            </div>
                        </form>
                    </div>





                    {/* picturn div */}
                    <div className="hidden md:hidden lg:block">
                        <Image src={login} width={400} height={400} alt="loginImage" className=""/>

                    </div>  
                </div>
                <div className="flex items-center justify-center text-white bg-white px-1 rounded-[4px] w-fit m-auto mt-1 ">
                    <h1 className="flex text-purple-500">designed by <span className="font-semibold flex items-center gap-1 ">1_sureplayer <span className="text-black text-[24px]"><BiSolidFaceMask /></span></span></h1>
                </div>
            </section>
        </>
    )



};

export default Login;