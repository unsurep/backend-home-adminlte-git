'use client'


import { useState,useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import l1 from '../Image/l1.webp'
import l2 from '../Image/l2.webp'
import l3 from '../Image/l3.webp'
import l4 from '../Image/l4.webp'
import l5 from '../Image/l5.webp'






const HomeSectionThree=()=>{

    return(
        <div>
            {/* 1 */}
            <section className="bg-white pt-20 px-[1rem] lg:px-[5rem] pb-20 ">
                <h1 className="flex items-center justify-center text-blue-950 text-base md:text-2xl lg:text-4xl font-extrabold">Works Great With</h1>
                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:flex gap-5 items-center justify-between pt-20">
                    <div>
                        <Image src={l1} width={0} height={0} alt="image" className="w-60 md:w-80"/>
                    </div>

                    <div>
                        <Image src={l2} width={0} height={0} alt="image" className="w-60 md:w-80"/>
                    </div>

                    <div>
                        <Image src={l3} width={0} height={0} alt="image" className="w-60 md:w-80"/>
                    </div>


                    <div>
                        <Image src={l4} width={0} height={0} alt="image" className="w-60 md:w-80"/>
                    </div>


                    <div>
                        <Image src={l5} width={0} height={0} alt="image" className="w-60 md:w-80"/>
                    </div>
                </div>


                <div className="bg-blue-500 mt-20 md:flex px-[1rem] lg:px-[5rem] rounded-xl gap-5  sky  py-10 ">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-white text-4xl font-bold leading-[3rem]">Issues and support <br /> for clients</h1>
                        <p className="text-white leading-[2rem]">For AdminLTE support, please visit our Github <br /> repository and post your issue, suggestion, or <br /> contribution.</p>
                    </div>

                    <div className="ml-auto flex flex-col gap-10 mt-8">
                        <p className="text-white leading-[2rem]"> We try our best to provide support to the users of AdminLTE. <br /> Thanks to many of our users, AdminLTE has a great <br /> community support. We will try to respond to your issue as <br /> soon as possible. For a faster response, please include <br /> as much information about your issue as possible.</p>

                        <button className="text-white border border-white w-fit px-12 py-7 rounded-full element">Contact Us via Github</button>
                    </div>

                </div>
            </section>

           






        </div>
    )




};

export default HomeSectionThree;

