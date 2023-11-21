import React from 'react';
import Image from 'next/image';
import award from '../../../../../public/award/award.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { awardData } from '@/src/constant/awardData';

const CustomPrevArrow = (props) => (
  <div
    {...props}
    style={{ ...props.style, left: '20px', zIndex: 1}}
  >
    <button className="custom-arrow text-green-50">Previous</button>
  </div>
  
  
);

const CustomNextArrow = (props) => (

  <div
    {...props}
    style={{ ...props.style, right: '20px', zIndex: 1}}
  >
    <button className="custom-arrow text-green-50">Next</button>
  </div>
  
);






const Award = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };
  


  return (
    <div className='bg-black py-10'>
      {/* award section start */}
      <div className='container mx-auto'>
      
        <Slider {...settings}>
          {
            awardData.map((data, index) => (
              <div className="mx-auto text-center" key={index}>
            <Image src={award} className='mx-auto'></Image>
            <div className="text-center mt-2">
              <h5 className="text-blue-600 sm:text-base md:text-xl font-bold">{data.title}</h5>
              <p className='text-white sm:text-sm md:text-lg'>{data.description1}</p>
              <p className='text-white sm:text-sm md:text-lg'>{data.description2}</p>
            </div>
        </div>
            ))
          }
        

        </Slider>
      </div>
      {/* award section end */}
    </div>
  );
};

export default Award;