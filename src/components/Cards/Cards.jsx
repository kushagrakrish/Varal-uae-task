import React from "react";
import groupPic from "../../Assets/Group.png";
import groupPic1 from "../../Assets/Group-1.png";
import groupPic12 from "../../Assets/ILLUSTRATION 03  1.png";
import groupPic3 from "../../Assets/Group-2.png";
import vector from "../../Assets/Vector.png";

const Cards = () => {
  return (
    <div className='relative '>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-2 my-[20px] py-[80px] '>
        <section>
          <div className='flex justify-start mx-auto items-center flex-col'>
            <p className='text-[20px] font-semibold my-4 text-justify w-[45%]'>
              Learn the ways in which you can benefit from a UAE/Offshore
              Company. Then get started on fulfilling your UAE dream.
              <br />
              <div className='text-[#525DED] text-[21px] my-2'>
                Claim a Free Quote
              </div>
            </p>
          </div>
          <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[50px] text-center lg:text-left mx-auto'>
            <img className='mx-auto' src={groupPic12} alt='grouppic' />
            <p className='text-[22px] font-semibold my-2'>Bank Account Setup</p>
            <p className='text-[#7f8c8d] text-[18px]'>
              There are many banks in the United
              <br />
              Arab Emirates [UAE]. Both locally
              <br />
              owned and branches of
              <br />
              multinational ones. Foreign banks
              <br />
              adjust according to their parent s<br />
              strategies and have changed local
              <br />
              requirements overnight in the past.
              <br />
              But we are here to help you.
            </p>
            <div className='flex items-center my-4'>
              <p className='text-[#525DED] text-[21px] '>Learn more</p>
              <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
            </div>
          </div>

          <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[150px] text-center lg:text-left mx-auto'>
            <img className='mx-auto' src={groupPic3} alt='grouppic' />
            <p className='text-[22px] font-semibold my-2'>UAE Company Visas</p>
            <p className='text-[#7f8c8d] text-[18px]'>
              Your application for visas is critical
              <br />
              especially if you intend to move to
              <br />
              Dubai. This becomes even more
              <br />
              urgent if your family will also move
              <br />
              with you. All the paperwork is done
              <br />
              on your behalf smoothly so that you
              <br />
              may only focus on doing what
              <br />
              matters most to you.
            </p>
            <div className='flex items-center my-4'>
              <p className='text-[#525DED] text-[21px] '>Learn more</p>
              <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
            </div>
          </div>
        </section>
        <section>
          <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] text-center lg:text-left mx-auto mt-[130px] lg:mt-[1px]'>
            <img className='mx-auto' src={groupPic} alt='grouppic' />
            <p className='text-[22px] font-semibold my-2'>Advice & Guidance</p>
            <p className='text-[#7f8c8d] text-[18px]'>
              All activities in the UAE are licensed.
              <br />
              Whether manufacturing, finance,
              <br />
              trading, marketing, consultancy or
              <br />
              restaurants. In some countries only
              <br />
              manufacturing is licensed. In others
              <br />
              there is a threshold below which
              <br />
              business are encouraged. Get our
              <br />
              insightfull guidance today.
            </p>
            <div className='flex items-center my-4'>
              <p className='text-[#525DED] text-[21px] '>Learn more</p>
              <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
            </div>
          </div>

          <div className='border-[1px] border-[#7f8c8d] rounded p-12 w-[420px] mt-[150px] text-center lg:text-left mx-auto'>
            <img className='mx-auto' src={groupPic1} alt='grouppic1' />
            <p className='text-[22px] font-semibold my-4'>
              Registration Document Perparation
            </p>
            <p className='text-[#7f8c8d] text-[18px]'>
              Several documents must be
              <br />
              prepared to start the process of
              <br />
              registering a new company in the
              <br />
              United Arab Emirates. Be it a Dubai
              <br />
              local company, a free zone one or an
              <br />
              offshore entity. Your registered
              <br />
              agent is dedicated to get this done
              <br />
              for you for a seamless process.
            </p>
            <div className='flex items-center'>
              <p className='text-[#525DED] text-[21px] my-4'>Learn more</p>
              <img className='h-[20px] ml-2 ' src={vector} alt='Vimage' />
            </div>
          </div>
          <div className='flex flex-col items-center justify-start'>
            <p className='w-[45%] text-[20px] font-semibold my-4 mt-[50px] lg:text-left'>
              We have gathered a team of professionals to craft adequate
              services you can rely on for a friction free setup in UAE.
              <br />
              <div className='flex items-center gap-4 text-[#525DED] text-[21px] my-2'>
                More about our services
                <img className='h-[20px]  ' src={vector} alt='Vimage' />
              </div>
            </p>
            {/* <div className='flex items-center my-4'>
              <p className='text-[#525DED] text-[21px] mx-auto'>
                More about our services
              </p> */}
            {/* </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cards;
