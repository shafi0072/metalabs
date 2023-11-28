import { servicesdata } from '@/src/constant/services';
import React from 'react';

const Services = () => {
    return (
        <div className=''>
            <div className='bannerBg text-center uppercase text-6xl text-white w-full h-[350px] font-bold flex justify-center items-center'>
                Our Services
            </div>
            <div className='my-[70px] max-w-7xl mx-auto px-20'>
                {
                    servicesdata.map((item, index) => <div key={index} className={`flex-wrap flex sm:gap-x-5 my-5 sm:items-center justify-between gap-y-5`}>
                        <div className={`w-full sm:w-6/12 ${index % 2 === 0 ? 'sm:order-1' : 'sm:order-2'} `}>
                            <img src={item.icon} alt="" />
                            <h3 className='text-2xl font-bold my-5'>
                                {item.title}
                            </h3>
                            <p className='text-[#535457] '>
                                {item.description}
                            </p>
                        </div>
                        <div className={`w-full sm:w-4/12 ${index % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>
                            <img src={item.image} alt="" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;