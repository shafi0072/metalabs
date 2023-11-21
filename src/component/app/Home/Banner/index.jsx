import Image from 'next/image';
import logo from '../../../../../public/logo.png'


const Banner = () => {
  return (
    <div className='bannerBg text-white'>
      <div className='container mx-auto h-[650px] md:h-[620px] w-full'>
      {/* banner section start */}
      <div className='block  md:flex justify-around items-center h-full w-full '>
        {/* left item start */}
        <div className='pl-20 md:pl-0 mt-5 md:mt-0'>
          <h2 className='text-base md:text-3xl font-bold'>The Creative Multiverse of<br></br>Transforming Brands<br></br>since 2008</h2>
          <p className='text-xs md:text-sm my-2'>
          From pioneering digital universe 15 years back, Analyzen<br></br>has evolvedinto the Creative Multiverse of Transforming<br></br>Brands, where the best of creativity and innovation<br></br>converge. Encompassing all media from offline to digital,<br></br>we reanalyze creativity’s core by seamlessly weaving<br></br>science into the very fabric of communication and<br></br>infusing technological advancement into the art of<br></br>communication.
          </p>
          <p className='text-xs md:text-sm my-2'>
          A league of versatile superheroes at the Analyzenverse<br></br>shapes a broad spectrum of solutions. This<br></br>encompasses 360-degree creative communication,<br></br>strategic brand architecture, portfolio optimization,<br></br>immersive events & activations, content creation,<br></br>influencer outreach, data-driven insights, astute media<br></br>procurement, software innovation, apps and games<br></br> craftsmanship, web experiences, and more.
          </p>
        </div>
        {/* left item end */}
        {/* left item start */}
        <div className='mt-5 md:mt-0'>
          <Image src={logo} className='md:w-[500px] w-64 mx-auto'></Image>
        </div>
        {/* right item end */}
      </div>
      {/* banner section end */}
    </div>
    </div>
  );
};

export default Banner;