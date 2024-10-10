'use client'


import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from '../Components/Image/logo.webp'



const Footer=()=>{

    return(
        <div>
            <footer className="bg-gradient-to-r from-sky-950 to-gray-900 px-[5rem]">
                {/* div a */}
                <div className="grid grid-cols-4 pt-20 text-white">
                    {/* a1 */}
                    <div>
                        <Image src={logo} width={0} height={0} alt="logo"/>
                    </div>

                    <div>
                        <p>Quick Access</p>
                    </div>

                    <div>
                        <p>Help</p>
                    </div>

                    <div>
                        <p>Popular Posts</p>
                    </div>
                </div>
                
                <div className="pb-40 pt-8 text-white">
                    <div className="grid grid-cols-4 ">
                        {/* a2 */}
                        <div>
                            <p>Building an admin dashboard has br never been easier thanks to <br /> AdminLTE</p>
                        </div>

                        <div>
                            <p>Blogs</p>
                        </div>

                        <div>
                            <p>Knowledge Base <br />
                            Get Support</p>
                        </div>

                        <div>
                            <p>Please subscribe for the latest <br /> news on AdminLTE development</p>
                        </div>
                    </div>

                </div>

                <hr />


                <div className="py-12 flex text-white">
                    <div>
                        <p>Copyright © 2014-2024 AdminLTE. All rights reserved. Privacy Policy</p>
                    </div>


                    <div className="ml-auto flex items-center gap-5"> 
                        <p>Terms & Conditions</p>
                        <p> Privacy Policy</p>
                    </div>

                </div>











            </footer>
        </div>
    )



}

export default Footer;