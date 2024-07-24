"use client"

import { useState } from "react";
import Links from "./Links";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Contact = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(true);
    };

    const toggleClose = () => {
        setIsOpen(false);
    }

    return ( 
        <>
            <div className="">
                <button className="w-[130px] text-white border p-2 rounded-xl lg:block hidden"  >
                    Let&apos;s Talk 👋
                </button>
                <button className="lg:hidden block" onClick={toggleOpen}>
                    <IoMenuSharp size={40} color="white"/>
                </button>
                <div className={`fixed w-full md:w-1/2 h-screen bg-black z-30 top-0 ${isOpen ? "opacity-100 transform translate-x-0 right-0" : "opacity-0 transform translate-x-full" } transition-all duration-500 ease-in-out pt-10 px-10 rounded-l-[50px]`}>
                    <button onClick={toggleClose} className="text-white flex flex-col w-full text-right items-end">
                        <MdOutlineClose size={40} color="white"/>
                    </button>
                    <Links/>
                </div>
            </div>
        </>
     );
}
 
export default Contact;