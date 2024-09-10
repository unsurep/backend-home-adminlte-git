'use client'




import Footer from "@/components/Footer";
import HomeSectionFour from "@/components/HomeSection/HomeSectionFour";
import HomeSectionOne from "@/components/HomeSection/HomeSectionOne";
import HomeSectionThree from "@/components/HomeSection/HomeSectionThree";
import HomeSectionTwo from "@/components/HomeSection/HomeSectionTwo";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react'







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
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <Footer/>
      
    </div>
  )
}

export default Home
