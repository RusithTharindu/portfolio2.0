import Image from "next/image";
import pfp from "@/public/assets/pfp.png"

const HomeComp = () => {
    return ( 
        <div className="w-full h-auto flex flex-col my-10">
            <div className="w-full h-auto flex lg:flex-row lg:justify-center flex-col">
                <div className="w-full lg:w-1/2 ContentBox grid grid-cols-2 gap-6">
                    <Image
                        src={pfp}
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="w-full rounded-l-xl rounded-b-xl"
                    />
                    <div className="w-1/2 flex flex-col">
                        <p className="text-white font-semibold text-[25px]">Rusith Tharindu Thushan</p>
                        <p className="text-white text-[20px]">Software Engineer</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ContentBox">

                </div>
            </div>
        </div>
     );
}
 
export default HomeComp;