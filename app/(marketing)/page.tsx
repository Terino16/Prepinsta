"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";   

export default function Hero() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center relative bg-[#f5f5f5]">

            <header className="max-w-5xl mx-auto w-full flex items-center justify-center absolute top-4    p-4 z-10">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                    <Link href="/" className="bg-gradient-to-b from-black via-zinc-700 to-zinc-500 text-transparent bg-clip-text" >
                       <p className="text-2xl font-bold ">Prepinsta</p>
                    </Link>
                    </div>
                    

                    <div className=" hidden md:flex items-center gap-12">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                        <Link href="/">
                            <p>About</p>
                        </Link>
                        <Link href="/">
                            <p>Why Us?</p>
                        </Link>
                        <Link href="/">
                            <p>Contact</p>
                        </Link>
                      
                    </div>

                        <Link href="/dashboard">
                            <Button className=" text-white px-4 py-2 rounded-md">Get Started</Button>
                        </Link>

                        

                </div>
            </header>


            <div className="  md:w-1/4 md:h-[100px] bg-blue-400 absolute top-0 right-0  blur-[70px] transition-all duration-3000 animate-pulse "/>
            <div className="  md:w-[100px] md:h-1/2 bg-blue-400 absolute top-0 right-0  blur-[70px] transition-all duration-3000 animate-pulse "/>

            <div className="  md:w-1/4 md:h-[100px] bg-green-300 absolute bottom-0 left-0  blur-[70px]  transition-all duration-3000 animate-pulse "/>
            <div className="  md:w-[100px] md:h-1/2 bg-green-300 absolute bottom-0 left-0  blur-[70px]  transition-all duration-2000 animate-pulse "/>

            <div className="max-w-6xl flex flex-col gap-4">
                <span className="bg-gradient-to-b from-black via-zinc-700 to-zinc-500 text-transparent bg-clip-text">
                <h1 className="text-5xl font-semibold text-center md:text-5xl lg:text-7xl font-sans">Ace Exams with Confidence</h1>
                </span>
                
                <p className="text-center text-sm md:text-lg lg:text-lg  max-w-4xl mx-auto">Master the IB curriculum with expertly designed lessons, exam-focused strategies, and interactive resources that make complex topics easy. </p>
            </div>
        </div>
    )
}
