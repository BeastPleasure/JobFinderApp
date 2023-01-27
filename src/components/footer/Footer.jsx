import React from 'react';
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai';

const Footer = () => {

  return (

    <div className='footer p-[5rem] mb-4 bg-blue-700 rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center'>
        
        <div>
        
            <div className='logoDiv'>

                <h1 className='logo text-[25px] text-white pb-[1.5rem]'> <strong>Job</strong>Finder </h1>

            </div>

            <p className='text-white pb-[13px] opacity-70 leading-7'>

                We Always Make Our Seekers And Companies Find The Best Jobs 
                And Employers Find The Best Candidates

            </p>
        
        </div>  

        <div className='grid'>
            
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Company </span>

            <div className='grid gap-3'>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> About Us </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Features </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> News </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> FAQ </li>

            </div>

        </div>  


        <div className='grid'>
            
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Resources </span>

            <div className='grid gap-3'>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Account </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Support Center </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Feedback </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Contact Us </li>

            </div>

        </div>  


        <div className='grid'>
            
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Support </span>

            <div className='grid gap-3'>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Events </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Promo </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Req Demo </li>

                <li className='text-white opacity-[0.7] hover:opacity-[1]'> Careers </li>

            </div>

        </div>  

        <div className='grid'>
            
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'> Contact Info </span>

            <div>

                <small className='text-[14px] text-white'> jobfinder@example.net </small>

                <div className='icons flex gap-4 py-[1rem]'>

                    <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-red-700'/>

                    <AiFillFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-yellow-300'/>

                    <AiFillTwitterCircle className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-green-700'/>

                </div>

            </div>

        </div> 
        
    </div>

  );

};

export default Footer;