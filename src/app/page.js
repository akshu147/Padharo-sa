import React from 'react'
import Head from './Componant/Head'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_teal.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_yellow.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_orange.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_orange.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_yellow.svg?v=17fd1caa81cf79" alt="" />
        <img src="d:\downloads\stock-footage-colorful-paper-confetti-center-explosion-animation-with-alpha-channel.webm" alt="" />
        <Head />
        <div className="_hero  flex flex-col flex-col-reverse  md:flex-row justify-between gap-[30px] p-[20px_20px] sm:p-[30px_50px] md:p-[60px_100px] text-white items-center ">
          <div className='w-[100%] md:w-[443px] xl:w-[500px] sm:p-[10px_20px] p-[10px_10px]'>
            <h1 className='text-[30px] lg:text-[40px] xl:text-[45px] font-bold'>a new way to experience online invitations </h1>
            <p className='text-[18px] p-[10px_0px] xl:p-[20px_0px]'>Plan in-person or <span className='underline'><Link href="http://www.google.com">vertual event</Link></span> for your next occasion with our stylish designer templates — ad free!</p>
            <button className='rounded-[8px] w-[100%] sm:w-[auto] block border-[2px] border-white p-[17px_40px] m-[10px_0px] lg:m-[20px_0px] xl:m-[30px_0px]'>CREATE A INVIVITATION</button>
          </div>
          <div className='border relative w-[90%] sm:w-[89%] md:w-[60%] rounded-[20px] translate-x-[-20px]'>
            <img className='rounded-[10px]' width="100%" src="https://s.poply.com/static/images/landing/hero_desktop_image@1x.avif?v=17fd1caa81cf79%201x,%20https://s.poply.com/static/images/landing/hero_desktop_image@2x.avif?v=17fd1caa81cf79%202x" alt="poster" />
            <img className='absolute top-0 ' width="100%" src="https://s.poply.com/static/images/landing/hero_desktop_frame.svg" alt="" />
            <img className='rounded-[10%] absolute bottom-[-20px] right-[-50px] h-[80%] bg-[url(https://s.poply.com/static/images/landing/hero_mobile_image@1x.avif?v=17fd1caa81cf79)] bg-[length:97%_100%] bg-no-repeat overflow-hidden' src="https://s.poply.com/static/images/landing/hero_mobile_frame.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="_b bg-[#F4F4F4] pt-[35px]">
        <h2 className='text-center text-[25px] tracking-wide font-bold'>FRESH SEASONAL COLORS + YOUR PERSONAL PHOTOS =</h2>
        <h1 className='text-[30px] sm:text-[35px] text-center font-bold leading-2'>the perfect online invitation</h1>
        <button className='block tracking-wider border p-[10px_20px] border-black rounded-[8px] m-[30px_auto]'>CREATE AN INVITATION</button>
        <div className="h-[20vh] sm:h-[30vh] md:h-[35vh] books flex justify-center sm:px-[40px] md:px-[50px] pt-[20px] sm:pt-[40px] lg:pt-[60px] border-[3px] border-red-500 overflow-hidden gap-[10px]">
          <div className='w-[20%] rotate-[-25deg] me-[-22px]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_1_thumbnail@1x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_5_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_7_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_9_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_17_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_6_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
        </div>
      </section>
      <section className="_c">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia exercitationem eaque ut quaerat, ducimus quas necessitatibus dolorem debitis. Facilis, dolorem!

      </section>
     



    </>
  )
}

export default page
