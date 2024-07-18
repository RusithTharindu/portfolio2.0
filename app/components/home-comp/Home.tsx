import Image from "next/image";
import pfp from "@/public/assets/pfp.png"

const HomeComp = () => {
    return ( 
        <div className="w-full h-auto flex flex-col my-10">
            <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-x-5">
                <div className="w-full ContentBox flex flex-col lg:flex-row lg:items-center">
                    <Image
                        src={pfp}
                        alt="Picture of the author"
                        width={250}
                        height={400}
                        className="rounded-l-xl rounded-b-xl mr-5"
                    />
                    <div className="h-full flex flex-col">
                        <p className="text-[#545454] text-[15px] font-normal mt-5 lg:mt-0">Software Engineer</p>
                        <p className="text-white font-semibold text-[25px]">Rusith Tharindu Thushan</p>
                    </div>
                </div>
                <div className="w-full  ContentBox">
                    
                </div>
            </div>
        </div>
     );
}
 
export default HomeComp;