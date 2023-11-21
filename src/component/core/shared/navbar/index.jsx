import { navbar } from "@/src/constant/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [show, setShow] = useState(false)

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
    <div>
      <div className={`${isScrolled ? "navbar" : 'nav'} md:flex justify-between items-center hidden`}>
      <span className="md:text-xl pt-3 lg:text-2xl font-bold">
        <img src="/mlogo.png" width='100px' height='50px' alt="" />
      </span>
      <div className="flex md:gap-x-2 lg:gap-x-4">
        {navbar.map((item, index) => <Link className="md:text-sm lg:text-base" key={index} href={item?.link}>{item?.label}</Link>)}</div>
      </div>
      {/* mobile responsive */}
      <div className={`${isScrolled ? "navbarMb" : 'navMb'} md:hidden`}>
        {/* title section start */}
        <div className="flex h-12 items-center justify-between relative px-5">
          <div>
          <h1 className="md:text-xl lg:text-2xl font-bold"><i>Metalabs-Digital</i></h1>
          </div>
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><p className='text-black w-6 h-6'><CloseIcon></CloseIcon></p></button> : <button onClick={() => {setShow(true)}}><p className='text-black w-6 h-6'><DehazeIcon></DehazeIcon></p></button>
            }
          </div>
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute  ${show ? 'top-12': '-top-96'} z-10 bg-white w-full duration-700`}>
          {/* link section start */}
            <div className=' gap-5 text-center'>
            {navbar.map((item, index) => <p className="flex mb-2 justify-center"><Link key={index} href={item?.link}>{item?.label}</Link></p>)}
            </div>

        </div>
        {/* navItem section end */}
      </div>
      {/* mobile responsive */}
    </div>
    );
};

export default Navbar;