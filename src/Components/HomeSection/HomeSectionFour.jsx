'use client'


import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import s1 from '../Image/s1.webp'
import s2 from '../Image/s2.webp'
import s3 from '../Image/s3.webp'
import s4 from '../Image/s4.webp'
import s5 from '../Image/s5.webp'
import s6 from '../Image/s6.webp'
import s7 from '../Image/s7.webp'
import s8 from '../Image/s8.webp'
import { BsDashLg } from "react-icons/bs";
import l3 from '../Image/l3.webp'
import dash1 from '../Image/dash1.jpg'
import dash3 from '../Image/dash3.jpg'


const HomeSectionFour=()=>{

    return(
        <div>
            <section className="">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-blue-950 font-extrabold text-3xl">As Seen On</h1>
                </div>

                <div className="px-[1rem] md:px-[1rem] lg:px-[5rem] grid grid-cols-2 lg:grid lg:grid-cols-4 py-10 gap-8 lg:gap-20 ">
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom "><Image src={s1} height={0} width={0} alt="image" /></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom "><Image src={s2} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom "><Image src={s3} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer  wobble-hor-bottom"><Image src={s4} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom"><Image src={s5} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom"><Image src={s6} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom "><Image src={s7} height={0} width={0} alt="image"/></div>
                    <div className="bg-neutral-100 p-8 cursor-pointer wobble-hor-bottom"><Image src={s8} height={0} width={0} alt="image"/></div>
                </div>

                <div className="py-12 text-blue-950 font-extrabold text-lg lg:text-3xl flex flex-col items-center justify-center gap-4">
                    <h1 className="">Here is recent news from </h1>
                    <p>our blog site</p>
                </div>



                {/* another section */}
                <div className="md:flex px-[1rem] lg:px-[5rem]  justify-center gap-5 pb-16">
                    {/* one */}
                    <div className="mt-8" >
                        <div className="flex flex-col items-center mt-12">
                            <Image src={l3} width={0} height={0} alt="image" className="w-60"/>
                        </div>

                        <div className="bg-sky-50 px-[28px] py-[18px] rounded-[16px] ">
                            <h1 className="text-neutral-600 text-[12px]"><i>14 July, 2024</i></h1>
                            <p className="text-blue-950 font-bold pt-3 cursor-pointer">19 Best React UI Frameworks</p>
                            <p className="text-blue-950 font-bold cursor-pointer">2024</p>
                            <p className="items-center gap-3 flex text-neutral-600 text-[12px] pt-8"><span className="flex items-center"><BsDashLg /><BsDashLg /></span>By Aigars Silkalns</p>
                        </div>
                    </div>


                    {/* two */}
                    <div className="mt-20">
                        <div>
                            <Image src={dash1} width={0} height={0} alt="image" className="w-96"/>
                        </div>

                        <div className="bg-sky-50 px-[28px] py-[18px] rounded-[16px]">
                            <h1 className="text-neutral-600 text-[12px]">14 July, 2024</h1>
                            <p className="text-blue-950 font-bold pt-3 cursor-pointer">19 Best React UI Frameworks</p>
                            <p className="text-blue-950 font-bold cursor-pointer">2024</p>
                            <p className="items-center gap-3 flex text-neutral-600 text-[12px] pt-8"><span className="flex items-center"><BsDashLg /><BsDashLg /></span>By Aigars Silkalns</p>
                        </div>
                    </div>


                    {/* three */}
                    <div className="mt-20">
                        <div>
                            <Image src={dash3} width={0} height={0} alt="image" className="w-96"/>
                        </div>

                        <div className="bg-sky-50 px-[28px] py-[18px] rounded-[16px] ">
                            <h1 className="text-neutral-600 text-[12px]">14 July, 2024</h1>
                            <p className="text-blue-950 font-bold pt-3 cursor-pointer">19 Best React UI Frameworks</p>
                            <p className="text-blue-950 font-bold cursor-pointer">2024</p>
                            <p className="items-center gap-3 flex text-neutral-600 text-[12px] pt-8"><span className="flex items-center"><BsDashLg /><BsDashLg /></span>By Aigars Silkalns</p>
                        </div>
                    </div>

                </div>


                {/* button */}
                <div className="flex items-center pt-12 justify-center pb-20">
                    <button className="text-blue px-16 py-5 rounded-full border border-sky-700 element">view all</button>
                </div>
            </section>
        </div>
    )




};

export default HomeSectionFour;