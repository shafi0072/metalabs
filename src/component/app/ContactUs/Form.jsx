import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MessageIcon from '@mui/icons-material/Message';

const Form = () => {


     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const companyName = form.companyName.value;
          const email = form.email.value;
          const number = form.number.value;
          const message = form.message.value;
          console.log(name, companyName, email, number, message);
          
     }


     return (
          <div className='w-full px-8 text-end'>
               <h2 class="text-4xl text-start font-semibold">Start a conversation with us</h2>
               <div className='mt-12'>
                    <form onSubmit={handleSubmit} className='space-y-6'>
                         <div className='w-full relative flex'>
                              <input type="text" name="name" id="" className='border-b-2 border-black ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Name*' />
                              <h1 className='absolute left-0'><PersonIcon/></h1>
                         </div>
                         <div className='w-full relative flex'>
                              <input type="text" name="companyName" id="" className='border-b-2 border-black ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Company Name*' />
                              <h1 className='absolute left-0'><HomeIcon/></h1>
                         </div>
                         <div className='w-full relative flex'>
                              <input type="email" name="email" id="" className='border-b-2 border-black ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Email*' />
                              <h1 className='absolute left-0'><EmailIcon/></h1>
                         </div>
                         <div className='w-full relative flex'>
                              <input type="number" name="number" id="" className='border-b-2 border-black ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Number*' />
                              <h1 className='absolute left-0'><AddIcCallIcon/></h1>
                         </div>
                         <div className='w-full relative flex'>
                              <textarea name="message" id="" className='border-b-2 border-black ps-8 pb-3 bg-transparent w-full outline-none' cols="30" rows="6" placeholder='Your Message'></textarea>
                              <h1 className='absolute left-0'><MessageIcon/></h1>
                         </div>
                         <button className='px-4 py-2 border border-black rounded-md font-bold'>Send</button>
                    </form>
               </div>
          </div>
     );
};

export default Form;