import React from "react";
import bannerpic from "../../Assets/ILLUSTRATION.png";
import search from "../../Assets/search.png";
import media from "../../Assets/Group 117.png";
import Ellipse16 from "../../Assets/Ellipse 16.png";
import Ellipse19 from "../../Assets/Ellipse 19-1.png";
import Ellipse21 from "../../Assets/Ellipse 21.png";
const Banner = () => {
  return (
    <>
      <div className='px-20 relative pt-[30px] pb-[50px]'>
        <div className='flex items-center justify-start gap-[60rem]'>
          <div>
            <img className='circle-img' src={Ellipse16} alt='loading...' />
          </div>

          <div>
            <img className='circle-img' src={Ellipse19} alt='loading...' />
          </div>
        </div>
        <div className='border-2 rounded justify-start border-[#525DED] lg:w-[20%] p-[6px]  flex absolute top-[40px] right-[80px] '>
          <img className='h-[25px] mx-2' src={search} alt='search' />

          <p className='text-[#525DED] text-xl font-semibold'>
            Search a Term | Topic
          </p>
        </div>

        <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 my-20 '>
          <div>
            <div>
              <img className='ml-[11rem]' src={Ellipse21} alt='loading...' />
            </div>
            <p className='text-[#525DED] text-[21px] mt-[20px] font-medium'>
              Claim a Free Quote
            </p>
            <p className='text-[40px] font-bold mb-4'>
              <span className='border-b-4 border-[#f39c12]'>Get started</span>{" "}
              on fulfilling
              <br />
              your Dubai or UAE
              <br />
              dream.
            </p>
          </div>

          <div className='row-span-2'>
            <img src={bannerpic} alt='bannerimage' />
          </div>
          <div>
            <p className='text-[#525DED] text-[21px] '>
              UAE & Offshore Company
            </p>
            <p className='text-[#7f8c8d] text-[22px] font-bold my-3'>
              We provide you with information about UAE or
              <br />
              Offshore Company Registration & help you
              <br />
              setup your company with a bank account and
              <br />
              visas.
            </p>

            <div>
              <button className='text-white w-[220px] p-[12px] text-[20px] mt-[10px] bg-[#525DED] rounded-l border-2 border-[#525DED]'>
                Start a Company
              </button>
              <button className=' text-[#525DED] w-[220px] p-[12px] text-[20px] mt-[10px] bg-white rounded-r border-2 border-[#525DED] font-semibold'>
                Renew a Company
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className='flex gap-3 items-center mx-auto my-0 text-center justify-center'>
        <div className='text-[#525DED] text-[30px] font-medium'>
          Watch the video about UAE or Offshore Company Registration
        </div>
        <div className='rounded-full border-2 border-[#525DED] p-[4px] items-center'>
          <img className='video-img' src={media} alt='loading...' />
        </div>
      </div>
    </>
  );
};

export default Banner;
