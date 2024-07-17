import Contact from "./Contact";
import Links from "./Links";
import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <div className="w-full h-[80px] flex justify-between items-center container px-3 ContentBox mt-5">
            <Logo/>
            <Links/>
            <Contact/>
        </div>
     );
}
 
export default Navbar;