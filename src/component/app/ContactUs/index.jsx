import React from 'react';
import Form from './Form';
import SocialMedia from './SocialMedia';

const ContactUs = () => {
     return (
          <div>
               <div className='bannerBg uppercase text-6xl text-white w-full h-[350px] font-bold flex justify-center items-center'>
                    Contact Us
               </div>
               <div className='max-w-screen-4xl xl:px-12 grid md:grid-cols-2 my-20 grid-cols-1'>
                    <div>
                         <SocialMedia />
                    </div>
                    <div>
                         <Form />
                    </div>
               </div>
          </div>
     );
};

export default ContactUs;