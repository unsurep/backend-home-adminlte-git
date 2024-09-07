'use client'

import HomeSectionFour from "@/Components/HomeSection.jsx/HomeSectionFour";
import HomeSectionOne from "@/Components/HomeSection.jsx/HomeSectionOne";
import HomeSectionThree from "@/Components/HomeSection.jsx/HomeSectionThree";
import HomeSectionTwo from "@/Components/HomeSection.jsx/HomeSectionTwo";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react'
import Navbar from "@/Components/Navbar";





const Home = () => {

  // always useEffect on api

  useEffect(()=>{
    const getData=async()=>{

      try{

        // send the api a message now
        const response=await fetch('http://localhost:3001/api/login')

        // here we are waiting for response from api and also converting the response to json response to object
        const data=await response.json()

        console.log(data)
      }


      catch(e){
        console.log('ERROR ERROR ERROR')
      }

    }

    getData()

  },[])





  return (
    <div className="">
      <Navbar/>
      <HomeSectionOne/>
      {/* <HomeSectionTwo/> */}
      {/* <HomeSectionThree/> */}
      {/* <HomeSectionFour/> */}
      
    </div>
  )
}

export default Home
