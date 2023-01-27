import React from 'react';

const Navbar = () => {

  return (

    <div className='navBar flex align-center justify-between p-[3rem]'>
        
        <div className='logoDiv cursor-pointer'>

            <h1 className='logo text-[25px] text-blue-700'> <strong>Job</strong>Finder </h1>

        </div>

        <div className='optionDiv text-gray-600 flex gap-8 mt-[6px]'>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> Jobs </li>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> Categories </li>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> About </li>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> Contact </li>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> Login </li>

            <li className='menuList text-[#6f6f6f] hover:text-blueColor'> Register </li>

        </div>
        
    </div>

  );

};

export default Navbar;