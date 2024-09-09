'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import f1 from '../Image/f-1.webp'
import f2 from '../Image/f-2.webp'
import f3 from '../Image/f-3.webp'
import f4 from '../Image/f-4.webp'
import f5 from '../Image/f-5.webp'
import f6 from '../Image/f-6.webp'
import f7 from '../Image/f-7.webp'
import f8 from '../Image/f-8.webp'
import f9 from '../Image/f-9.webp'
import user from '../Image/user.webp'
import u1 from '../Image/u-1.webp'
import u2   from '../Image/u-2.webp'
import u3 from '../Image/u-3.webp'
import u4 from '../Image/u-4.webp'





const HomeSectionTwo=()=>{

    return(
        <div>
            <section className="px-[5rem]">
                <div className="pb-20">
                    <div className="pt-20 text-blue-950 font-extrabold text-3xl flex flex-col items-center justify-center gap-1 pb-16"> 
                        <h1>Our amazing features are most usfull</h1>
                        <p>for the users</p>
                    </div>

                    {/* one */}
                    <div className="lg:flex justify-between pb-16 items-center">
                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f1} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500">HTML5 & CSS3</h1>
                                <p className="text-neutral-600 text-[13px] ">Verified HTML5 and CSS3 syntax by <br /> W3C services.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f2} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl pt-5 hover:text-blue-500">Responsive Design</h1>
                                <p className="text-neutral-600 text-[13px]">Mobile first design. Fits many <br /> resolutions, from large desktop to <br /> small mobile devices.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f3} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500">1000+ Icons</h1>
                                <p className="text-neutral-600 text-[13px]">Featuring Font Awesome, Ion Icons, <br /> and Glyphicons.</p>
                            </div>
                        </div>

                    </div>

                    {/* two */}

                    <div className="lg:flex justify-between pb-16 items-center">
                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f4} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500"> 6 skins</h1>
                                <p className="text-neutral-600 text-[13px]">Choose a skin that matches your <br /> branding or edit the LESS variables <br /> to create your own.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f5} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl pt-5 hover:text-blue-500">Enhanced For Printing</h1>
                                <p className="text-neutral-600 text-[13px]">Support for printing any page. The <br /> invoice page makes a perfect <br /> example. </p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f6} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500">Lightweight</h1>
                                <p className="text-neutral-600 text-[13px]">Although AdminLTE is full of <br /> features, it was designed to be fast <br /> and lightweight.</p>
                            </div>
                        </div>

                    </div>

                    {/* three */}
                    <div className="lg:flex justify-between pb-16 items-center">
                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f7} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500"> Browser Compatibility</h1>
                                <p className="text-neutral-600 text-[13px]">Support for most major browsers <br /> including Safari, IE9+, Chrome, FF, <br /> and Opera.</p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f8} width={0} height={0} alt="image" className="revolve-image cursor-pointer" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl pt-5 hover:text-blue-500">Many Plugins</h1>
                                <p className="text-neutral-600 text-[13px]">Over 18 plugins and as additional 3 <br /> custom made plugins just for <br /> AdminLTE. </p>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center">
                            <div className="border border-neutral-600 rounded-full px-4 py-4">
                                <Image src={f9} width={0} height={0} alt="image"  className="revolve-image cursor-pointer"/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h1 className="text-blue-950 font-extrabold text-xl hover:text-blue-500">Active Community</h1>
                                <p className="text-neutral-600 text-[13px]">Have a suggestion or an issue? Visit <br /> our Github repository to get help.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <div className="bg-neutral-100 flex pb-[10rem]">
                <div className="flex gap-5 px-[5rem] pt-40 ">
                    {/* left div */}
                    <div data-aos="fade-right"
                        data-aos-duration="1000">
                        <Image src={user} width={0} height={0} alt="image"/>
                    </div>

                    {/* right div */}
                    <div data-aos="fade-left"
                        data-aos-duration="1000" className="ml-auto">
                        <div>
                            <h1 className="font-extrabold text-4xl text-blue-950 leading-[60px]">Active community of users <br />and developers.</h1>
                            <p className="py-6 text-neutral-600 text-[14px]">Meet the fastest and most popular admin template avaliable.</p>
                        </div>

                        <div className="flex ">
                            {/* 1 */}
                            <div className="flex gap-2 bg-white px-5 py-3 rounded-[12px]" >
                                <div className="revolve-image cursor-pointer">
                                    <Image src={u1} width={0}   height={0} alt="image"/>
                                </div>


                                <div className="flex flex-col justtify-center ">
                                    <h1 className="text-blue-950 font-extrabold text-2xl">250,000+</h1>
                                    <p className="text-neutral-600">Active installation</p>
                                </div>

                            </div> 

                                {/* 2 */}

                            <div className="ml-auto flex gap-2 bg-white px-5 py-3 rounded-[12px]">
                                <div className="revolve-image cursor-pointer">
                                    <Image src={u2} width={0} height={0} alt="image"/>
                                </div>


                                <div className="flex flex-col justtify-center">
                                    <h1 className="text-blue-950 font-extrabold text-2xl">8,575,051</h1>
                                    <p className="text-neutral-600">Download</p>
                                </div>

                            </div> 

                        </div>


                        <div className="flex gap-2 pt-12">
                            {/* 3 */}
                            <div className="flex gap-2 bg-white px-5 py-3 rounded-[12px]">
                                <div className="revolve-image cursor-pointer">
                                    <Image src={u3} width={0}   height={0} alt="image"/>
                                </div>


                                <div className="flex flex-col justtify-center">
                                    <h1 className="text-blue-950 font-extrabold text-2xl">4.8/5</h1>
                                    <p className="text-neutral-600">user reviews</p>
                                </div>

                            </div> 

                                {/* 4 */}

                            <div className="ml-auto flex gap-2 bg-white px-5 py-3 rounded-[12px]">
                                <div className="revolve-image cursor-pointer">
                                    <Image src={u4} width={0} height={0} alt="image"/>
                                </div>


                                <div className="flex flex-col justtify-center">
                                    <h1 className="text-blue-950 font-extrabold text-2xl">98%</h1>
                                    <p className="text-neutral-600">happiness score</p>
                                </div>

                            </div> 

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



};

export default HomeSectionTwo;