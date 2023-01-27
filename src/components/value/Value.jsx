import React from 'react';

const Value = () => {

  return (

    <div className='mb-[4rem] mt-[6rem]'>
        
        <h1 className='text-black text-[25px] py-[2rem] pb-[3rem] font-bold w-full flex items-center justify-center mx-auto my-auto'> The Value That Holds Us True And To Account </h1>

        <div className='grid gap-[10rem] grid-cols-3 items-center'>

            <div className='singleGrid rounded-[10px] hover:bg-[#ffee00] p-[1.5rem]'>

                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>

                        <img src='https://www.svgrepo.com/show/490956/doughnut.svg' alt='' className='w-[70%]'/>

                    </div>

                    <span className='font-semibold text-black text-[10px]'> Simplicity </span>

                </div>

                <p className='text-[11px] text-black opacity-[0.7] py-[1rem] font-semibold'>

                    Things Being Made Beautifully and Simple Are At The Heart Of What We Do

                </p>

            </div>

            <div className='singleGrid rounded-[10px] hover:bg-[#ff0000] p-[1.5rem]'>

                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#b3ff00] h-[40px] w-[40px] flex items-center justify-center'>

                        <img src='https://www.svgrepo.com/show/490900/hot-air-balloon.svg' alt='' className='w-[70%]'/>

                    </div>

                    <span className='font-semibold text-black text-[10px]'> Speed </span>

                </div>

                <p className='text-[11px] text-black opacity-[0.7] py-[1rem] font-semibold'>

                    We Believe In Making Things Better For Everyone, Either A Little Bit Or More Than Expected

                </p>

            </div>

            <div className='singleGrid rounded-[10px] hover:bg-[#2bff00] p-[1.5rem]'>

                <div className='flex items-center gap-3'>

                    <div className='imgDiv p-[4px] rounded-[0.8rem] bg-[#ff7505] h-[40px] w-[40px] flex items-center justify-center'>

                        <img src='https://www.svgrepo.com/show/492010/saw-disk.svg' alt='' className='w-[70%]'/>

                    </div>

                    <span className='font-semibold text-black text-[10px]'> Accuracy </span>

                </div>

                <p className='text-[11px] text-black opacity-[0.7] py-[1rem] font-semibold'>

                    We Work On The Basis Of Creating Trust Which Can Be Nurtured Through Authenticty And Transparency

                </p>

            </div>

        </div>

        <div className='card mt-[2rem] flex justify-center bg-blue-700 p-[5rem] rounded-[10px] gap-[300px]'>

            <div>

                <h1 className='text-blue-700 text-[30px] font-bold'> Ready To Switch Careers? </h1>
                
                <h2 className='text-black text-[25px] font-bold'> Let's Get Started </h2>

            </div>

            <div className='mt-[20px]'>
                
                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blue-700 hover:bg-white border-blue-700'> Get Started </button>

            </div>

        </div>
        
    </div>

  );

};

export default Value;