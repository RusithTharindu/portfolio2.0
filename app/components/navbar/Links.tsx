const Links = () => {
    return ( 
        <div className="text-white ">
            <ul className="flex space-y-3 lg:space-y-0 lg:space-x-8 flex-col lg:flex-row lg:justify-center">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
                <button className=" text-white border rounded-xl lg:hidden block"  >
                    Let&apos;s Talk 👋
                </button>
            </ul>
        </div>
     );
}
 
export default Links;