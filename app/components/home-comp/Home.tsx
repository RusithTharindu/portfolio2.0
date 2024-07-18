import Image from "next/image";
import pfp from "@/public/assets/pfp.png"
import img1 from "@/public/assets/logo.png"
import { IoArrowForwardCircle } from "react-icons/io5";

const HomeComp = () => {
    return ( 
        <div className="w-full h-auto flex flex-col my-10">
            <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5">
                <div className="w-full ContentBox flex flex-col md:flex-row md:items-center md:justify-normal items-center text-center md:text-left">
                    <Image
                        src={pfp}
                        alt="Picture of the author"
                        width={250}
                        height={400}
                        className="rounded-l-xl rounded-b-xl mr-5 "
                    />
                    <div className=" h-full flex flex-col md:justify-center">
                        <p className="text-[#545454] text-[15px] font-normal mt-5 lg:mt-0 underline underline-offset-8">Software Engineer</p>
                        <p className="text-white font-semibold text-[25px] my-2">Rusith Tharindu Thushan</p>
                        <p className="text-[#545454] text-[15px] font-normal lg:mt-0">I am a Software Engineer <br /> based on Sri Lanka</p>
                    </div>
                </div>
                <div className="w-full my-5 lg:my-0 flex flex-col justify-between">
                    <div className="ContentBox text-[#545454] text-center font-normal">
                        I&apos;M <span className="text-white">AVAILABLE FOR WORK</span>
                    </div>
                    <div className="grid grid-cols-2 my-5 lg:my-0">
                        <div className="ContentBox mr-2 flex flex-col items-center group hover:cursor-pointer">
                            <Image
                                src={img1}
                                alt="Image"
                                width={100}
                                height={100}
                                className="mb-10 opacity-30"
                            />
                            <div className="w-full flex flex-col md:flex-row justify-between md:items-end group transition-all ease-in-out duration-300 ">
                                <div>
                                    <p className="text-[#545454]">More about me</p>
                                    <p className="text-white font-semibold text-[20px] sm:text-[25px]">Credentials</p>
                                </div>
                                <button className="md:mt-0 mt-3">
                                    <IoArrowForwardCircle color="white" size={40} className="opacity-80 transition-transform group-hover:translate-x-2 duration-300 ease-in-out "/>
                                </button>
                            </div>
                        </div>
                        <div className="ContentBox ml-2"></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeComp;