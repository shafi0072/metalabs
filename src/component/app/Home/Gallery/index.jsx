import Image from "next/image";
import gallery1 from '../../../../../public/gallery1.jpg'
import { gallery } from "@/src/constant/gallery";
import AddLinkIcon from '@mui/icons-material/AddLink';


const Gallery = () => {
  return (
    <div>
      {/* gallery section start */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* data start */}
        {
          gallery.map((data, index) => <div className="relative" key={index}>
            <Image src={gallery1}></Image>
            <div className="absolute bg-black opacity-0 hover:opacity-50 top-0 bottom-0 left-0 right-0 duration-300">
              <div className="relative h-full">
                <div className="absolute transform translate-x-52 translate-y-28 sm:translate-x-40 sm:translate-y-28 md:translate-x-48 md:translate-y-36">
                  <a href="#" className="text-white md:text-2xl"><AddLinkIcon className='text-white w-10 h-10'></AddLinkIcon></a>
                </div>
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white md:text-2xl font-bold">{data.title}</h3>
                  <p className="text-white md:text-lg">{data.date}</p>
                </div>
              </div>
            </div>
          </div>
          )
        }
        {/* data end */}
      </div>
      {/* gallery section end */}
      {/* button section start */}
      <div className="container mx-auto flex justify-center my-5">
        <button className="border-2 border-blue-400 py-2 px-5 text-blue-400 hover:bg-blue-400 hover:text-white">See More</button>
      </div>
      {/* button section end */}
    </div>
  );
};

export default Gallery;