import React from 'react';
import one from '../../../../../public/services/one.svg';
import two from '../../../../../public/services/two.svg';
import three from '../../../../../public/services/three.svg';
import four from '../../../../../public/services/four.svg';
import five from '../../../../../public/services/five.svg';
import six from '../../../../../public/services/six.svg';
import seven from '../../../../../public/services/seven.svg';
import eight from '../../../../../public/services/eight.svg';
import Image from 'next/image';

const Services = () => {
  return (
    <div className='my-10'>
      {/* services section start */}
      <div className='container mx-auto'>
        {/* title section start */}
        <div className='flex justify-center'>
          <div className='text-center'>
            <h2 className='text-xl sm:text-3xl md:text-5xl font-bold'>Our Services</h2>
            <p className='text-sm sm:text-xl md:text-2xl text-gray-500 mt-1'>We take digital experience to the next level</p>
          </div>
        </div>
        {/* title section end */}
        {/* item section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-4 gap-5 ml-10 md:ml-0 mt-8 mb-20'>
          {/* item1 start */}
          <div>
            <Image src={one}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-orange-500'>Digital-first 360 Strategy</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>Digitization is fundamentally altering the<br></br> nature of competition and in this<br></br>competitive...</p>
            </div>
          </div>
          {/* item1 end */}
          {/* item2 start */}
          <div>
            <Image src={two}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-blue-500'>Cross-media Content<br></br>Development</h4>
              <p className='text-gray-500 mt-4 md:mt-6 md:text-base text-sm'>Seeing is believing. So, contents are<br></br>the most important catalysts that create a<br></br>strong brand...</p>
            </div>
          </div>
          {/* item2 end */}
          {/* item3 start */}
          <div>
            <Image src={three}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-pink-500'>Web Experience</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>Analyzen don't just design website also<br></br>gives it life. We have a vast experience<br></br>of creating...</p>
            </div>
          </div>
          {/* item3 end */}
          {/* item4 start */}
          <div>
            <Image src={four}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-orange-500'>Apps & Games Development</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>With the meteoric rise of mobile devices,<br></br>the prevalence and importance of apps<br></br>and games...</p>
            </div>
          </div>
          {/* item4 end */}
          {/* item5 start */}
          <div>
            <Image src={five}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-pink-500'>Enterprise Software</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>Analyzen is a highly capable provider of<br></br>Enterprise Software Development<br></br>services...</p>
            </div>
          </div>
          {/* item5 end */}
          {/* item6 start */}
          <div>
            <Image src={six}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-yellow-500'>Data Analytics</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>Data is the oil of the digital economy,<br></br>the more you mine the more you can fuel<br></br>your brand...</p>
            </div>
          </div>
          {/* item6 end */}
          {/* item1 start */}
          <div>
            <Image src={seven}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-blue-500'>Community Management</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>In the high-touch digital environment it is<br></br>imperative to satisfy audience’s query...</p>
            </div>
          </div>
          {/* item1 end */}
          {/* item1 start */}
          <div>
            <Image src={eight}></Image>
            <div className='mt-2'>
              <h4 className='text-base md:text-xl text-orange-500'>Digital Buying</h4>
              <p className='text-gray-500 mt-4 md:mt-12 md:text-base text-sm'>If you are looking for a better return on<br></br>your ad spend then Analyzen is the<br></br>place to go...</p>
            </div>
          </div>
          {/* item1 end */}
        </div>
        {/* item section end */}
      </div>
      {/* services section end */}
    </div>
  );
};

export default Services;