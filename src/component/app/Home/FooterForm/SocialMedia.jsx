import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialIcon = () => {
     return (
          <div className='px-8'>
               <p class="text-2xl font-semibold text-blue-500">TAKE THE SILK ROAD TO</p>
               <h2 class="text-4xl  xl:text-5xl mt-4">Digitizing Your Business <br /> Growth</h2>
               <div className='mt-56 flex items-center gap-10'>
                    <h2 className='border-b border-2 border-blue-500 w-24'></h2>
                    <p className='font-semibold text-2xl'>Follow Us</p>
                    <div className='flex items-center gap-3'>
                         <h1 className='cursor-pointer'><LinkedInIcon fontSize='large'/></h1>
                         <h1 className='cursor-pointer'><FacebookIcon fontSize='large'/></h1>
                    </div>
               </div>
          </div>
     );
};

export default SocialIcon;