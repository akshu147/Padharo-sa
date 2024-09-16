"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { GiCrossMark } from "react-icons/gi";


const Head = () => {
    const [currentstyle, setcurrentstyle] = useState({
        width: "-100%"
    })
    const changecanvaswidth = () => {
        if (currentstyle.width = "-100%") {
            setcurrentstyle({ width: "0" })
        }

    }
    const str = "sunil ajngid is the noram of"
    return (
        <>
            <header className='flex justify-between items-center py-[7px] px-[14px] sm:px-[20px]'>
                <figure className='w-[80px] sm:w-[100px]'>
                    <img className='z-10' width="100%" src="https://blog.poply.com/content/images/2021/10/logo.png" alt="logo" />
                </figure>
                <div className='flex items-center gap-[25px] text-[10px] sm:text-[15px] text-white font-semibold'>
                    <div className='hidden sm:block cursor-pointer'>LOGIN</div>
                    <div className='hidden sm:block cursor-pointer'>SIGN-UP</div>
                    <div className='hidden md:block'><GiHamburgerMenu className='text-[35px] cursor-pointer' /></div>
                    <div onClick={changecanvaswidth} className='block md:hidden relative'><IoMenuOutline className='text-[35px] cursor-pointer' /></div>
                </div>
            </header>
            <div className={`logincanvas p-[10px_20px]`} style={{ right: currentstyle.width }}>
                <div className='flex justify-between items-center '>
                    <figure className='w-[80px] sm:w-[100px]'>
                        <img className='z-10' width="100%" src="https://blog.poply.com/content/images/2021/10/logo.png" alt="logo" />
                    </figure>
                    <span onClick={() => { setcurrentstyle({ width: "-100%" }) }} className='text-white text-[25px] z-50'><GiCrossMark className="shadow-[2px_3px_20px_orange]" /></span>
                </div>
                <button className='cursor-pointer w-[150px] block m-[40px_auto] text-white rounded-[8px] border-[2px] border-white p-[10px_30px]'>LOGIN</button>
                <button className='cursor-pointer w-[150px] block m-[40px_auto] text-white rounded-[8px] border-[2px] border-white p-[10px_30px]'>SIGN-UP</button>
                <p className='text-white font-bold opacity-[0.5] underline tracking-wider'>CREATE</p>
                <h2 className='text-white text-[30px] underline pb-[3px]'>Create an invitation</h2>
                <h2 className='text-white text-[30px] underline'>Explore Event's Type</h2>
                <p className='text-white font-bold opacity-[0.5] underline tracking-wider pt-[20px]'>CREATE</p>
                <h2 className='text-white text-[30px] underline'>How to host a vertual party</h2>
            </div>

        </>
    )
}

export default Head
