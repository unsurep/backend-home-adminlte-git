'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { IoMdEyeOff } from "react-icons/io";
import { BiSolidFaceMask } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const SignUpPage=()=>{

    return(
        <>

            <section className="  flex flex-col items-center pt-10 sky md:h-[110vh] sky">

               
                
              

                <div className="bg-white w-fit flex flex-col items-center  px-10 py-10  gap-6 relative bg-opacity-10" >

                    <Link href={'/'}>
                     <p className="absolute top-4 right-4 text-[30px] hover:bg-neutral-400 cursor-pointer rounded-full
                     hover:text-red-700"><IoClose />
                        </p>
                    </Link>

                    

                    <div className="">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 via-emerald-500 to-cyan-600 bg-clip-text text-transparent">*Registration Form*</h1>
                    </div>



                    <form action="" className="flex flex-col gap-3">
                        <div>
                            <input type="text" 
                            placeholder="Name"
                            required
                            className="border border-solid border-cyan-500 px-4 outline-none py-1"/>
                        </div>

                        <div>
                            <input type="email"
                            placeholder="Email address" 
                            required
                            className="border border-solid border-cyan-500 px-4 outline-none py-1"/>
                        </div>

                        <div>
                            <input type="text"
                            placeholder="Country" 
                            required
                            className="border border-solid border-cyan-500 px-4 outline-none py-1"/>
                        </div>

                        <div>
                            <input type="tel"
                            placeholder="Phone" 
                            required
                            className="border border-solid border-cyan-500 px-4 outline-none py-1"/>
                        </div>

                        <div className="relative">
                            <input type="password"
                            placeholder="Password" 
                            required
                            className="border border-solid border-cyan-500 px-4 outline-none py-1"/>
                            <div className="absolute top-2 right-5 text-[20px]"><IoMdEyeOff /></div>
                        </div>

                        <div className="flex gap-1 items-center">
                            <input type="checkbox" />
                            <p className="text-[8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aliquam, ipsa.</p>
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-gradient-to-r from-blue-700 via-sky-400 to-sky-300 text-white text-[12px] px-12 py-3">CREATE ACCOUNT</button>
                        </div>

                        <div className="text-[12px] flex flex-col items-center">
                            <p className="">Already have an account? <span className="cursor-pointer text-white font-bold ">Sign in</span></p>
                        </div>

                        
                    </form>


                </div>


                <div className="mt-6 text-white">
                    <h1 className="flex">designed by <span className="font-semibold flex items-center gap-1 ">1_sureplayer <span className="text-black text-[24px]"><BiSolidFaceMask /></span></span></h1>
                </div>


                

            </section>
        </>
    )



};

export default SignUpPage;
