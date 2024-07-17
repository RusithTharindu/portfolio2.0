import Image from "next/image";
import logoImage from "@/public/assets/logo.png"

const Logo = () => {
    return ( 
        <Image
            src={logoImage}
            alt="logo"
            width={80}
            height={50}
        />
     );
}
 
export default Logo;