import Contact from "./Contact";
import Links from "./Links";
import Logo from "./Logo";
import Container from "@/app/layout/Container";

const Navbar = () => {
    return ( 
        <Container>
            <div className="w-full h-[80px] flex justify-center items-center px-3 ContentBox mt-5">
                <div className="w-full h-full lg:flex justify-between items-center hidden">
                    <Logo/>
                    <Links/>
                    <Contact/>
                </div>
                <div className="w-full h-full lg:hidden flex justify-between items-center">
                    <Logo/>
                    <Contact/>
                </div>
            </div>
        </Container>
     );
}
 
export default Navbar;