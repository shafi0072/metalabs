import React from 'react';
import Form from './Form';
import SocialMedia from './SocialMedia';


const FooterForm = () => {
     return (
          <div>
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

export default FooterForm;