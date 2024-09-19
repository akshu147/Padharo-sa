"use client"
import React, { useEffect, useRef, useState } from 'react'
import Head from './Componant/Head'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'


const page = () => {
  const nav = useRouter()
  const [mtop, setmtop] = useState(0)
  const elementref = useRef(0);
  const getdistance = () => {
    const distance = elementref.current;
    if(distance){
      setmtop(distance.getBoundingClientRect().top)
    }
  }
  useEffect(() => {
    getdistance();
    window.addEventListener("scroll", getdistance)

  }, [])
  const offsetTop = mtop >= 0 ? mtop : 0;


     const iflogin = ()=> {
        const ifcokies = Cookies.get("userlogindetail")
        if(!ifcokies) {
          nav.push("/pages/login")

        }
    }
    useEffect(()=> {iflogin()},[])


  return (
    <>
      <section className="relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_teal.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_yellow.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_orange.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon' src="https://s.poply.com/static/images/landing/balloon_orange.svg?v=17fd1caa81cf79" alt="" />
        <img className='balloon w-[30px] sm:w-[40px] md:-[50%]' src="https://s.poply.com/static/images/landing/balloon_yellow.svg?v=17fd1caa81cf79" alt="" />
        <img src="d:\downloads\stock-footage-colorful-paper-confetti-center-explosion-animation-with-alpha-channel.webm" alt="" />
        <Head />
        <div className="_hero  flex flex-col flex-col-reverse  md:flex-row justify-between gap-[30px] p-[20px_20px] sm:p-[30px_50px] md:p-[60px_100px] text-white items-center ">
          <div className='w-[100%] md:w-[443px] xl:w-[500px] sm:p-[10px_20px] p-[10px_10px]'>
            <h1 className='text-[30px] lg:text-[40px] xl:text-[55px] font-bold'>a new way to experience online invitations </h1>
            <p className='text-[18px] p-[10px_0px] xl:p-[20px_0px]'>Plan in-person or <span className='underline'><Link href="http://www.google.com">vertual event</Link></span> for your next occasion with our stylish designer templates — ad free!</p>
            <button className='rounded-[8px] w-[100%] sm:w-[auto] block border-[2px] border-white p-[17px_40px] m-[10px_0px] lg:m-[20px_0px] xl:m-[30px_0px] relative'>CREATE AN INVITATION <img className='bikeimg w-[10%] sm:w-[20%]' src="https://img.pikbest.com/origin/09/21/78/25mpIkbEsTG4q.png!bw700" alt="" /></button>
          </div>
          <div className='border relative w-[90%] sm:w-[89%] md:w-[60%] rounded-[20px] translate-x-[-20px]'>
            <img className='rounded-[10px]' width="100%" src="https://s.poply.com/static/images/landing/hero_desktop_image@1x.avif?v=17fd1caa81cf79%201x,%20https://s.poply.com/static/images/landing/hero_desktop_image@2x.avif?v=17fd1caa81cf79%202x" alt="poster" />
            <img className='absolute top-0 ' width="100%" src="https://s.poply.com/static/images/landing/hero_desktop_frame.svg" alt="" />
            <img className='rounded-[10%] absolute bottom-[-20px] right-[-50px] h-[80%] bg-[url(https://s.poply.com/static/images/landing/hero_mobile_image@1x.avif?v=17fd1caa81cf79)] bg-[length:97%_100%] bg-no-repeat overflow-hidden' src="https://s.poply.com/static/images/landing/hero_mobile_frame.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="_b bg-[#F4F4F4] pt-[35px] relative">
        <h2 className='text-center text-[25px] tracking-wide font-bold'>FRESH SEASONAL COLORS + YOUR PERSONAL PHOTOS =</h2>
        <h1 className='text-[30px] sm:text-[35px] text-center font-bold leading-2'>the perfect online invitation</h1>
        <button className='block tracking-wider border p-[10px_20px] border-black rounded-[8px] m-[30px_auto]'>CREATE AN INVITATION</button>
        <div className="h-[15vh] sm:h-[30vh] md:h-[35vh] lg:h-[45vh] books flex justify-center sm:px-[40px] md:px-[50px] pt-[20px] sm:pt-[40px] lg:pt-[60px]  overflow-hidden gap-[10px]">
          <div className='w-[20%] rotate-[-25deg] me-[-22px] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_1_thumbnail@1x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_5_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_7_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_9_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] me-[-22px] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_17_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
          <div className='w-[20%] rotate-[-25deg] shadow-[2px_3px_20px_black]'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_6_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <section className="_c">
        <h1 className='text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold'>Take your event to the next level</h1>
        <p className='text-center text-[30px] leading-7'>Elevate your invite with our powerful features</p>

      </section>
      <section className="_d h-[100%] md:h-[80vh] overflow-hidden bg-[#1F222C] flex flex-col md:flex-row justify-between" ref={elementref}>

        <div className='grid grid-cols-4 gap-[20px] w-[100%] md:w-[62%] rotate-[20deg] mt-[-170px] md:ms-[-120px]'>


          <div className={`flex flex-col gap-[20px]`} style={{ marginTop: `${offsetTop * 0.5}px`}}>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/96/71/8f/96718fd26a9c632a49c6b3342fde668d.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/templates/v2/dinner_party_04/thumbnail_small.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_17_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/32/31/25/3231250cd69366d02d910e75352a8647.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_17_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>

          </div>

          <div className={`flex flex-col gap-[20px]`} style={{ marginTop: `${-offsetTop * 0.5}px`}}>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/images/landing/spring_2024/theme_17_thumbnail@2x.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/93/bf/49/93bf49ad438bfbc031d06fe60dcd8395.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/templates/v2/birthday_kid_01/thumbnail_small.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/templates/v2/dinner_party_02/thumbnail_small.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/4d/43/af/4d43af691c4fba3e1a33935d0b0c4174.jpg" alt="" /></div>

          </div>

          <div className={`flex flex-col gap-[20px]`} style={{ marginTop: `${offsetTop * 0.5}px`}}>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/templates/v2/just_because_04/thumbnail_small.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/30/77/eb/3077eb63efc61040dff72d24c0038ca8.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/59/04/b8/5904b824f9eaf661a87953240e31bc94.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://s.poply.com/static/templates/v2/nightlife_04/thumbnail_small.avif?v=17fd1caa81cf79" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/9e/13/69/9e1369d442d8c9d85cae306f78eee2eb.jpg" alt="" /></div>

          </div>

          <div className={`flex flex-col gap-[20px]`} style={{ marginTop: `${-offsetTop * 0.5}px` }}>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/07/3e/e4/073ee46320be53d7cb5c745d615ee59e.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/44/fb/68/44fb68a0ef670d3e1e0cdc2fc89adf8e.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/474x/c0/e9/e2/c0e9e2b976f0e1bde93e9a76edf0efc5.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/21/88/58/2188587d56b246264fbbf89f23cee6c6.jpg" alt="" /></div>
            <div className='rounded-[10px] overflow-hidden'><img width="100%" src="https://i.pinimg.com/236x/ee/32/d7/ee32d713aa645736a8a017c34b4db3f5.jpg" alt="" /></div>

          </div>
        </div>
        <div className=' w-[100%] md:w-[38%] text-white h-[100%] grid place-items-center mt-[30px] sm:mt-[90px] md:m-[0px]'>
          <div>
          <h1 className='text-center text-[50px] font-bold leading-10'>Invitation templates for every event</h1>
          <p className='text-center text-[25px] px-[30px] py-[20px]'>We’ve got you covered with our stylish collection of designs for any occasion.</p>
          <button className='rounded-[8px] block border-[2px] border-white p-[17px_40px] m-[10px_auto] lg:m-[20px_auto] xl:m-[30px_auto]'>BROWSER TEMPLATE</button>

          
          </div>
       
        </div>

        
       
        


      </section>
      <section className="_e">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, esse nemo repudiandae voluptatum rem eius repellat dolores nesciunt perspiciatis at unde ipsum odio et quis, accusamus ex omnis dolore. Dignissimos repellendus odio ducimus nisi, aut eos nam est mollitia reprehenderit error quidem voluptatibus ipsum maiores magnam eius dolores eligendi beatae, provident quos quod exercitationem reiciendis fugiat facilis doloremque. Dolorem modi molestias ipsam vitae eveniet, qui recusandae nemo accusamus, distinctio nesciunt, optio reprehenderit illo libero sapiente reiciendis eius ipsa nobis fuga perspiciatis. Consectetur explicabo quam sit porro, voluptatem molestias, dolores sint quo facere dolore nesciunt ipsam ut ratione similique laboriosam deleniti, repellat temporibus non quaerat rerum cupiditate esse. Expedita tenetur maiores, corrupti libero unde id voluptatibus quis est, delectus maxime possimus commodi aliquam. Sequi omnis, eius facere eos nostrum ut maxime voluptatem! Vero doloribus debitis, soluta eos deleniti laborum provident, voluptatibus nihil neque facilis expedita enim consectetur, amet optio animi aliquid dolor repellat maxime adipisci eaque commodi ex necessitatibus nemo atque. Aliquam est labore quibusdam quam cumque architecto fugit nobis, accusamus dolore pariatur cum iure aliquid asperiores doloribus soluta! Aperiam beatae recusandae repudiandae, possimus tenetur eligendi quod deserunt, dolores id libero, vero minima animi optio cumque odio. Dicta praesentium incidunt placeat repudiandae similique aperiam hic! Aut dolore, nesciunt esse explicabo incidunt commodi, rerum eum omnis, quod pariatur ad? Reiciendis magnam adipisci odit? Pariatur molestias tempora voluptatum veritatis voluptatem numquam repellendus impedit non minima sequi quo amet ipsum ad temporibus, totam, corrupti nihil illo excepturi. Corrupti sit ut odit aliquam porro odio illum laborum maiores voluptas dolorem, error quidem ad harum cupiditate possimus culpa magnam earum ullam eligendi obcaecati! Excepturi consequatur hic doloremque quasi facere! Facere id dolore velit neque. Id corporis sint nam sed, ab obcaecati minima molestiae. Esse nobis maxime ut nostrum, nisi obcaecati accusamus natus perspiciatis quod sint earum excepturi est repellendus blanditiis at recusandae voluptatibus. Illum molestiae sit dolore excepturi dolores asperiores vitae, numquam quos neque consequuntur quis temporibus aspernatur cum ipsam hic optio aliquid dolor, doloremque debitis sed iusto iste perferendis voluptatem eaque. Accusantium quia consectetur numquam sit facilis qui cumque, laborum amet quas mollitia cupiditate corrupti ipsum minus nesciunt deleniti exercitationem et quod quos ullam. Enim voluptatibus nesciunt aspernatur laboriosam aut a possimus repudiandae magni cumque vel recusandae ratione debitis expedita illum officia sapiente quibusdam, adipisci labore culpa velit perferendis eveniet repellat excepturi laborum. Eaque, magni consequatur iure molestias fuga et velit dignissimos assumenda. Voluptatibus expedita quos eligendi ut fuga earum beatae illum eaque quae libero repudiandae, magnam ratione quo reprehenderit possimus autem natus cumque cupiditate repellendus fugiat, facere necessitatibus. Illum quos magnam voluptas eligendi amet soluta quaerat, non repudiandae nulla. Harum a, minima ea adipisci sint voluptas deserunt. Quia blanditiis, ipsa hic repellat veniam, earum tenetur, laborum provident recusandae ut incidunt ratione tempora autem ducimus nulla. Suscipit perspiciatis tempore nisi excepturi ipsum quis eum fugit veritatis quia blanditiis cumque non, corporis consequuntur atque tempora, placeat temporibus possimus. Dolore suscipit quam earum quae fugit tenetur voluptatem dolorum. Ipsa quibusdam ut accusamus nam corporis ipsum, architecto amet!</p>

      </section>






    </>
  )
}

export default page
