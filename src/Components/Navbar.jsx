'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import logo from './Image/logo.webp'
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";






const Navbar=()=>{

    const[showIcon, setShowIcon]=useState(false);
    const [showMenu, setShowMenu]= useState(false);

    const toggleMenu=()=>{
        setShowMenu(!showMenu)
    }

    const toggleIcon=()=>{
      setShowIcon (!showIcon)
    }


    return(
        <div className="">
            <nav className="flex lg:px-[5rem] px-4 py-6  items-center justify-between relative  bg-red-400    md:bg-yellow-600 lg:bg-green-600 ">
                {/* left div */}


                    <Link href={'/'}>
                        <div className="">
                            <Image src={logo} width={0} height={0} alt="image" className=""/>
                            {/* <h2 className='text-white text-2xl '>AdminLTE</h2> */}
                        </div>
                    </Link>

                    {/* toggle drop down for smaller screen 320 - tablet */}
                    <div  onClick={toggleMenu} className=" lg:hidden     ">
                        {showMenu===true ? <div  className="text-4xl"><IoMdClose />
                        <div className="absolute  top-[6rem] right-[1rem] p-8 bg-white h-[80vh] w-[100vw]" >
                            <ul className="text-lg flex flex-col gap-5">

                               <Link href={'/'}>
                                    <li className="text-blue-400 cursor-pointer" >Home</li>
                               </Link>

                              <Link href={'/'}>
                                    <li className="cursor-pointer" >Documents</li>
                              </Link>

                                <Link href={'/'}>
                                    <li className="cursor-pointer" >Premium Template</li>
                                </Link>

                                <Link href={'/'}>
                                    <li  >Our Blog</li>
                                </Link> 
                            </ul>

                            <Link href={'/'}>
                                <button className="mt-8 text-xl border border-black px-6 py-3 rounded-full" >Subscribe</button>
                            </Link>
                        </div>
                        </div>:<div className="text-4xl"><IoMenu /></div> }
                    </div>

                
                
                
                {/* right div */}
                <ul className=" hidden md:hidden  lg:flex gap-10 justify-center items-center    ">

                  <Link href={'/'}>
                    <li className="text-zinc-300 hover:text-white cursor-pointer hover:font-bold">Home</li>
                  </Link>

                    <li className="text-zinc-300 hover:text-white cursor-pointer hover:font-bold">Documents</li>
                    <li className="text-zinc-300 hover:text-white cursor-pointer hover:font-bold">Templates</li>
                    <li className="text-zinc-300 hover:text-white cursor-pointer hover:font-bold">Blog</li>

                    <li onClick={toggleIcon} className='text-2xl cursor-pointer text-white'><FaUser /> </li>

                    {showIcon===true && (<ul className='absolute roll-in-left top-24 right-[10rem] text-white hover:font-bold  pt-6 pb-12 flex  gap-3 rounded-[12px] font-semibold bg-gradient-to-r from-sky-800 to-gray-900 h-[10vh] px-[5rem] shadow-lg shadow-red-500   '>
           
                        <Link href={'/signup'}>
                            <li className='cursor-pointer hover:text-green-400 hover:font-bold ' >Sign up </li> 
                        </Link>

                            <p className="text-xl"><FiMoreVertical /></p>

                        <li className='cursor-pointer hover:text-green-400 hover:font-bold '>Login here</li>
                    </ul>)}  
                </ul>

                <div className="hidden md:hidden lg:block">
                    <button className=" text-white  cursor-pointer border border-white rounded-full py-2 px-4 element hover:font-bold">Subscribe</button>
                </div>
            </nav>
        </div>
    )




};

export default Navbar;