import React from 'react';
import clients1 from '../../../../../public/clients/clients1.png'
import clients2 from '../../../../../public/clients/clients2.png'
import clients3 from '../../../../../public/clients/clients3.png'
import clients4 from '../../../../../public/clients/clients4.png'
import clients5 from '../../../../../public/clients/clients5.png'
import clients6 from '../../../../../public/clients/clients6.png'
import clients7 from '../../../../../public/clients/clients7.png'
import clients8 from '../../../../../public/clients/clients8.png'
import Image from 'next/image';
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="my-10">
      {/* clients section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div className='text-center'>
          <h2 className='text-xl sm:text-3xl md:text-5xl font-bold'>Our Clients</h2>
        </div>
        {/* title section end */}
        {/* clients section start */}
        <Marquee speed={100} className='grid grid-cols-1 my-10'>
        <div>
            <Image src={clients1}></Image>
          </div>
          <div>
            <Image src={clients2}></Image>
          </div>
          <div>
            <Image src={clients3}></Image>
          </div>
          <div>
            <Image src={clients4}></Image>
          </div>
          <div>
            <Image src={clients5}></Image>
          </div>
          <div>
            <Image src={clients6}></Image>
          </div>
          <div>
            <Image src={clients7}></Image>
          </div>
          <div>
            <Image src={clients8}></Image>
          </div>
        </Marquee>
        {/* clients section end */}
        {/* button section start */}
        {/* <div className="flex justify-center">
          <button className='border-2 border-blue-400 py-2 px-5 text-blue-400 hover:bg-blue-400 hover:text-white'>More Clients</button>
        </div> */}
        {/* button section end */}
      </div>
      {/* clients section end */}
    </div>
  );
};

export default Clients;