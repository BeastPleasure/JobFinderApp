import React from 'react';
import {AiOutlineSearch, AiOutlineCloseCircle} from 'react-icons/ai';
import {BsHouseDoorFill} from 'react-icons/bs';
import {CiLocationOn} from 'react-icons/ci';

const Search = () => {

  return (

    <div className='searchDiv grid gap-10 bg-gray-500 rounded-[10px] p-[3rem]'>
        
        <form action=''>

            <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-pink-700'>

                <div className='flex gap-2 items-center'>

                    <AiOutlineSearch className='text-[25px] icon hover:text-green-700'/>

                    <input 
                        type="text"
                        placeholder='Search Job Here ...'
                        className='bg-transparent focus:outline-none w-[100%] text-yellow-400'
                    />

                    <AiOutlineCloseCircle className='text-[30px] icon text-[#a5a6a6] hover:text-red-700'/>

                </div>

                <div className='flex gap-2 items-center'>

                    <BsHouseDoorFill className='text-[25px] icon hover:text-teal-700'/>

                    <input 
                        type="text"
                        placeholder='Search By Company ...'
                        className='bg-transparent focus:outline-none w-[100%] text-yellow-400'
                    />

                    <AiOutlineCloseCircle className='text-[30px] icon text-[#a5a6a6] hover:text-red-700'/>

                </div>

                <div className='flex gap-2 items-center'>

                    <CiLocationOn className='text-[25px] icon hover:text-purple-700'/>

                    <input 
                        type="text"
                        placeholder='Search By Location ...'
                        className='bg-transparent focus:outline-none w-[100%] text-yellow-400'
                    />

                    <AiOutlineCloseCircle className='text-[30px] icon text-[#a5a6a6] hover:text-red-700'/>

                </div>

                <button className='bg-blue-700 h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-green-700'> Search </button>

            </div>
        
        </form>  

        <div className='secDiv flex items-center gap-10 justify-center'>

            <div className='singleSearch flex items-center gap-2'>

                <label htmlFor='relevance' className='text-[#ffffff] font-semibold'> Sort By: </label>

                <select name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
                
                    <option value=""> Relevance </option>

                    <option value=""> Inclusive </option>

                    <option value=""> Starts With </option>

                    <option value=""> Contains </option>
                
                </select>

            </div>


            <div className='singleSearch flex items-center gap-2'>

                <label htmlFor='type' className='text-[#ffffff] font-semibold'> Type: </label>

                <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
                
                    <option value=""> Full-time </option>

                    <option value=""> Part-time </option>

                    <option value=""> Seasonal </option>

                    <option value=""> Temporary </option>
                
                </select>

            </div>


            <div className='singleSearch flex items-center gap-2'>

                <label htmlFor='level' className='text-[#ffffff] font-semibold'> Level: </label>

                <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
                
                    <option value=""> Senior </option>

                    <option value=""> Advanced </option>

                    <option value=""> Intermediate </option>

                    <option value=""> Beginner </option>
                
                </select>

            </div>  

            <span className='text-yellow-500 icon hover:bg-red-600 hover:text-white'> Clear All </span>  

        </div>
        
    </div>

  );

};

export default Search;