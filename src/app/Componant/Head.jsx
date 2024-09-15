import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Head = () => {
    const str = "sunil ajngid is the noram of"
     return (
        <>
            <header className='flex justify-between items-center py-[7px] px-[14px] sm:px-[20px]'>
                <figure className='w-[80px] sm:w-[100px]'>
                    <img className='z-10' width="100%" src="https://blog.poply.com/content/images/2021/10/logo.png" alt="logo" />
                </figure>
                <div className='flex items-center gap-[25px] text-[10px] sm:text-[15px] text-white font-semibold'>
                    <div className='hidden sm:block cursor-pointer'>LOGIN</div>
                    <div  className='hidden sm:block cursor-pointer'>SIGN-UP</div>
                    <div><GiHamburgerMenu className='text-[35px] cursor-pointer' /></div>
                </div>
            </header>
        </>
    )
}

export default Head
