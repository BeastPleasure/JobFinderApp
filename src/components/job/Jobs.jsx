import React from 'react';
import {BiTimeFive} from 'react-icons/bi';

const Data = [

    {
        id: 1,
        image: 'https://www.svgrepo.com/show/494266/ebay-round.svg',
        title: 'Web Developer',
        time: 'Now',
        location: 'Canada',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Novac Linus Co.',
        status: 'Apply Now',
    },

    {
        id: 2,
        image: 'https://www.svgrepo.com/show/494369/drug.svg',
        title: 'UI/UX Designer',
        time: '14Hrs',
        location: 'USA',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Health Math Inc.',
        status: 'Apply Today',
    },

    {
        id: 3,
        image: 'https://www.svgrepo.com/show/493816/boy.svg',
        title: 'Architect',
        time: '1min ago',
        location: 'Dubai',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Build Today Ltd.',
        status: 'Apply Tomorrow',
    },

    {
        id: 4,
        image: 'https://www.svgrepo.com/show/492688/avatar-boy.svg',
        title: 'Fisherman',
        time: 'Last Year',
        location: 'France',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Fish LLC.',
        status: 'Apply Friday',
    },

    {
        id: 5,
        image: 'https://www.svgrepo.com/show/492498/progress-21.svg',
        title: 'Detective',
        time: 'In The Future',
        location: 'Luxembourg',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Capsule Corp.',
        status: 'Apply Next Year',
    },

    {
        id: 6,
        image: 'https://www.svgrepo.com/show/489874/beer.svg',
        title: 'Candy Man',
        time: 'Next Week',
        location: 'Thailand',
        desc: 'Lorem Ipsum, dolor sit amet, consectetur adipiscing elit. Cum societ labore et justo',
        company: 'Chocolate Fact.',
        status: 'Apply At Noon',
    },

]

const Jobs = () => {

  return (

    <div>
        
        <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

            {
                Data.map(({id, image, title, time, location, desc, company, status}) => {
                    
                    return (

                        <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-700 shadow-lg shadow-gray-400/700 hover:shadow-lg'>

                            <span className='flex justify-between items-center gap-4'>

                                <h1 className='text-[16px] font-semibold text-black group-hover:text-white'> {title} </h1>

                                <span className='flex items-center text-red-700 gap-1'> 
                                    
                                   <BiTimeFive /> {time} 
                                    
                                </span>

                            </span>

                            <h6 className='text-gray-700 hover:text-yellow-500'> {location} </h6>

                            <p className='text-[13px] text-orange-600 pt-[20px] border-t-[2px] mt-[20px] group-hover:text-black'> 
                                
                                {desc}

                            </p>

                            <div className='company flex items-center gap-2  text-green-600'>

                                <img src={image} alt=''  className='w-[10%]' />

                                <span className='text-[14px] py-[1rem] block group-hover:text-white'> {company} </span>

                            </div>

                            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-blue-700 hover:bg-white group-hover/item:text-green-700 group-hover:text-white'> {status} </button>                

                        </div> 

                    );
                })
            }

        </div>
        
    </div>

  );

};

export default Jobs;