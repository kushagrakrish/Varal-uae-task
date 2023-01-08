import Hamburger from "hamburger-react";
import React, { useState } from "react";
import Logo from "../../Assets/Group 114.png";
import menu from "../../Assets/menu.webp";

const Links = ["Home", "Services", "Pricing", "About Us"];
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-between items-center py-8 px-20 '>
        <img className='' src={Logo} alt='company-Logo' />

        <ul className='flex '>
          <div className='flex max-[1024px]:hidden max-[]:'>
            {Links?.map((link, i) => (
              <li className='mr-[0px] lg:mr-[40px] text-[1px] lg:text-[20px] mt-[10px] p-[0px] lg:p-[10px]'>
                {link}
              </li>
            ))}
            <li>
              <button className='text-white bg-[#525DED] rounded-lg mt-[10px] p-[10px] w-[10%] lg:w-[100%] text-[1px] lg:text-[20px] hover:bg-[#2c34a1] hover:transition-all'>
                Start a Company
              </button>
            </li>
          </div>
          {/* Hamburger Menu on Small Screen */}

          <div className='lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} direction='left' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
