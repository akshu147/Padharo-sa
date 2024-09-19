"use client";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter()

    const userLogin = async(e) => {
        e.preventDefault(); // Prevent form from reloading the page

        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        try{
            const responce = await axios.post("http://localhost:1000/api/login", formData)
            console.log(responce.data.data)
            if(responce.status == 200) {
                Cookies.set("userlogindetail", JSON.stringify(responce.data.data) )
                router.push("/")
                setTimeout(() => {
                    alert("log-in successfully")
                    
                }, 1000);
            }
        }
        catch(err) {
            if(err) console.log(err)
                console.log("success")
        }
    }
 

    console.log("i love you")



    return (
        <section className="login-bg">
            <header className="p-[10px] border">
                <figure className="w-[80px] sm:w-[100px]">
                    <img
                        className="z-10"
                        width="100%"
                        src="https://blog.poply.com/content/images/2021/10/logo.png"
                        alt="logo"
                    />
                </figure>
            </header>
            <form onSubmit={userLogin}>
                <h1 className="text-center font-bold text-[50px] text-[#90A3AC]">LOG IN</h1>

                <div className="border-[2px] border-black p-[10px_20px] cursor-pointer rounded-[8px] w-[90%] sm:w-[40%] md:w-[30%] m-[0px_auto] text-center relative">
                    <i className="absolute top-[50%] left-[2%] translate-y-[-50%] text-[35px]">
                        <FcGoogle />
                    </i>
                    <span className="text-[27px]">Sign in with Google</span>
                </div>

                <div className="border-[2px] border-black p-[10px_20px] cursor-pointer rounded-[8px] w-[90%] sm:w-[40%] md:w-[30%] m-[0px_auto] text-center relative my-[20px]">
                    <i className="absolute top-[50%] left-[2%] translate-y-[-50%] text-[35px]">
                        <FaApple />
                    </i>
                    <span className="text-[27px]">Sign in with Apple</span>
                </div>

                <p className="text-white text-center text-[24px]">OR log in using an email address:</p>

                <input
                    type="email"
                    className="border-b-[3px] block m-[10px_auto] p-[4px_10px] w-[90%] sm:w-[40%] rounded-[10px] text-[27px] bg-transparent"
                    placeholder="Email"
                    name="email"
                />

                <input
                    type="password"
                    className="border-b-[3px] block m-[10px_auto] p-[4px_10px] w-[90%] sm:w-[40%] rounded-[10px] text-[27px] bg-transparent"
                    placeholder="Password"
                    name="password"
                />
                <button type="submit" className="block m-[0px_auto] p-[10px_20px] rounded-[8px] text-[27px] border-[2px] border-black ">Sign in with email</button>

                <p className="text-center">
                    Forgot password?{" "}
                    <Link href="http://www.google.com" className="text-blue-500">
                        Click here
                    </Link>
                </p>

                <p className="text-center">
                    No account?{" "}
                    <Link href="http://www.google.com" className="text-blue-500">
                        Create new account
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Page;
