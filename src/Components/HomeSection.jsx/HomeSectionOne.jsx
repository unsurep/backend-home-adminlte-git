'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import hero from '../Image/hero.webp'
import dash1 from '../Image/dash1.jpg'
import dash2 from '../Image/dash2.jpg'
import dash3 from '../Image/dash3.jpg'
import { TfiShoppingCart } from "react-icons/tfi";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const HomeSectionOne=()=>{

    return(
        <div className=" ">
            {/* sec one */}
            <section className="pt-20 text-white flex flex-col items-center bg-gradient-to-r from-sky-800 to-gray-900 lg:h-screen">
                <h1 data-aos="flip-right"
                    data-aos-duration="2000" className="text-4xl font-extrabold ">AdminLTE Bootstrap Admin Dashboard Template</h1>
                <p className="pt-3 text-[14px]">Best open source admin dashboard & control panel theme. Built on top of Bootstrap, AdminLTE provides a</p>
                <p className="pt-1 text-[14px]">range of responsive, reusable, and commonly used components.</p>

                <div className="pt-10 flex gap-8 text-white sm:flexbox">
                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-blue-500 element">Download</button>
                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-blue-500 element">Live Preview</button>
                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-blue-500 element">Go Pro</button>
                    <button className="border border-white px-6 py-3 rounded-lg hover:bg-blue-500 element">Docs</button>
                </div>

                <div className="pt-10 px-[5rem]">
                    <Image src={hero} width={0} height={0} alt="image"/>
                </div>
            </section>

            {/* sec two */}
            <div className="pt-32 bg-neutral-200">
                <div className="flex flex-col items-center justify-center text-blue-950 font-bold text-3xl">
                    <p>Let's take a look at our premium</p>
                    <p>admin dashboard templates</p>
                </div>

                <div className="md:flex items-center justify-center gap-3 px-[5rem] pt-32 pb-24 ">
                    <div className="bg-white p-2 rounded-[12px]">
                        <div>
                            <Image src={dash1} height={0} width={0} alt="image"/>
                        </div>

                        <div className="pt-6 items-center flex flex-col">
                            <h1 className="text-blue-950 font-bold text-xl">ArchitectUI Dashboard HTML <br /> PRO</h1>
                            <p className="text-neutral-600 pt-4 pb-6 text-[14px]">When looking for a simple (in coding) yet <br /> highly practical (in use) admin dashboard, <br /> look no further than ArchitectUI.</p>
                        </div>

                        <hr />

                        <div className="pt-6 flex pb-8">
                            <p className="md:pl-4 font-extrabold text-blue-950">$69</p>
                            <div className="md:flex items-center gap-3 pt-[-20px] pl-3 md:pl-[10rem]">
                                <button className="text-white bg-blue-700 px-4 py-2 rounded-[8px] element hover:shadow-[0_10px_20px_rgba(0,_0,_255,_0.7)]">Preview</button>
                                <button className="border border-blue-800 bg-white px-3 py-2 rounded-[8px] element"><span className="text-blue-950"><TfiShoppingCart /></span></button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-[12px]">
                        <div>
                            <Image src={dash2} height={0} width={0} alt="image"/>
                        </div>

                        <div className="pt-6 items-center flex flex-col">
                            <h1 className="text-blue-950 font-bold text-xl">ArchitectUI Dashboard HTML <br /> PRO</h1>
                            <p className="text-neutral-600 pt-4 pb-6 text-[14px]">When looking for a simple (in coding) yet <br /> highly practical (in use) admin dashboard, <br /> look no further than ArchitectUI.</p>
                        </div>

                        <hr />

                        <div className="pt-6 flex pb-8">
                            <p className="pl-4 font-extrabold text-blue-950">$69</p>
                            <div className="flex items-center gap-3 pl-[10rem]">
                                <button className="text-white bg-blue-700 px-4 py-2 rounded-[8px] element hover:shadow-[0_10px_20px_rgba(0,_0,_255,_0.7)]">Preview</button>
                                <button className="border border-blue-800 bg-white px-3 py-2 rounded-[8px] element"><span className="text-blue-950"><TfiShoppingCart /></span></button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-2 rounded-[12px]">
                        <div>
                            <Image src={dash3} height={0} width={0} alt="image"/>
                        </div>

                        <div className="pt-6 items-center flex flex-col">
                            <h1 className="text-blue-950 font-bold text-xl">ArchitectUI Dashboard HTML <br /> PRO</h1>
                            <p className="text-neutral-600 pt-4 pb-6 text-[14px]">When looking for a simple (in coding) yet <br /> highly practical (in use) admin dashboard, <br /> look no further than ArchitectUI.</p>
                        </div>

                        <hr />

                        <div className="pt-6 flex pb-8">
                            <p className="pl-4 font-extrabold text-blue-950">$69</p>
                            <div className="flex items-center gap-3 pl-[10rem]">
                                <button className="text-white bg-blue-700 px-4 py-2 rounded-[8px] element hover:shadow-[0_10px_20px_rgba(0,_0,_255,_0.7)]">Preview</button>
                                <button className="border border-blue-800 bg-white px-3 py-2 rounded-[8px] element"><span className="text-blue-950"><TfiShoppingCart /></span></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center pb-20">
                    <button className="text-blue px-16 py-5 rounded-full border border-sky-700 element">view all</button>
                </div>
            </div>


           







        </div>
    )



};

export default HomeSectionOne;