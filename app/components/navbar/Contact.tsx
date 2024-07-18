"use client"

import { useState } from "react";
import Links from "./Links";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Contact = () => {

    const [visible, setVisible] = useState(false)
    const [icon, setIcon] = useState(<MdOutlineClose size={40} color="white"/>)

    const handleVisible = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const iconset = () => {
        setIcon(<MdOutlineClose size={40} color="white"/>)
    }

    return ( 
        <>
            <div className="relative">
                <button className="w-[130px] text-white border p-2 rounded-xl lg:block hidden"  >
                    Let&apos;s Talk 👋
                </button>
                <button 
                    className="block lg:hidden" 
                    onClick={visible ? handleClose : handleVisible}
                >
                    {
                        visible ? icon : <IoMenuSharp size={40} color="white"/>
                    }
                </button>
                <div className={` ${visible ? "flex" : "hidden"} flex-col py-5 rounded-xl w-[200px] text-center bg-black z-30 absolute right-0`}>
                    <Links/>
                </div>
            </div>
        </>
     );
}
 
export default Contact;