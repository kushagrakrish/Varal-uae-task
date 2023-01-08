import React from "react";
import vector4 from "../../Assets/Vector-4.png";
import vector3 from "../../Assets/Vector-3.png";
import vector5 from "../../Assets/Vector-5.png";
import vector6 from "../../Assets/Vector-6.png";
import vector7 from "../../Assets/Vector-7.png";
import vector8 from "../../Assets/Vector-8.png";
import Group34 from "../../Assets/Group 34.png";
const Footer = () => {
  return (
    <div>
      <section className='flex items-center justify-between my-16 mx-auto w-[80%] sm:flex-col lg:flex-row max-[640px]:flex-col'>
        <div>
          <div className='flex items-center justify-center'>
            <p className='text-[23px] font-bold border-l-4 border-indigo-500 my-[30px] pl-4'>
              Read about our blogs for more <br />
              information on our processes{" "}
            </p>
          </div>

          <div className='flex justify-center  my-8'>
            <img
              className='p-[15px] border border-indigo-600 rounded w-[90px] h-[90px] mr-6 '
              src={vector4}
              alt='vector'
            />
            <div>
              <p className='text-[21px] font-semibold my-'>
                How to start a company
                <br />
                formation in Dubai
              </p>
              <p className='text-[#525DED] text-[20px] font-semibold '>
                5 Minutes
              </p>
            </div>
          </div>

          <div className='flex justify-center  my-8'>
            <img
              className='p-[15px] border border-indigo-600 rounded w-[90px] h-[90px] mr-6 '
              src={vector4}
              alt='vector'
            />
            <div>
              <p className='text-[21px] font-semibold '>
                How to start a company
                <br />
                formation in Dubai
              </p>
              <p className='text-[#525DED] text-[20px] font-semibold '>
                5 Minutes
              </p>
            </div>
          </div>

          <div className='flex hidden lg:flex justify-center mx-auto w-[90%]  my-8 bg-[#525DED] text-white py-5  rounded'>
            <img
              className='s border border-white rounded w-[90px] h-[90px] bg-white mr-6 '
              src={vector4}
              alt='vector'
            />
            <div>
              <p className='text-[21px] font-semibold my-'>
                SEO Dubai: Who benefits
                <br />
                the most?
              </p>
              <p className=' text-[20px] font-semibold '>5 Minutes</p>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <p className='text-[23px] font-bold border-l-4 border-indigo-500 my-[30px] pl-4'>
              Satisfied We are When Our <br />
              customer is happy
            </p>
          </div>

          <div className='flex justify-center  my-8'>
            <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
              <img
                className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] '
                src={vector3}
                alt='vector'
              />
            </div>
            <div className=''>
              <p className='text-[#7f8c8d] text-[21px] font-semibold my-'>
                <strong className='text-black'>"</strong>I am very happy with
                them. I’ll <br />
                continue to use their services in
                <br />
                future & highly recommend them
                <br />
                to anyone,<strong className='text-black'>"</strong>
              </p>
              <p className=' text-[19px] font-semibold my-3'>Muhib Abrar</p>
            </div>
          </div>

          <div className='flex justify-center  my-8'>
            <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
              <img
                className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] '
                src={vector3}
                alt='vector'
              />
            </div>
            <div className=''>
              <p className='text-[#7f8c8d] text-[21px] font-semibold my-'>
                <strong className='text-black'>"</strong>Rama has a high level
                of integrity,
                <br />
                intellect, knowledge of his
                <br />
                business, resourcefulness and
                <br />
                humanity,<strong className='text-black'>"</strong>
              </p>
              <p className=' text-[19px] font-semibold my-3'>Colin Saldahna</p>
            </div>
          </div>

          <div className='flex hidden lg:flex justify-center  my-8'>
            <div className='border-b-4 border-indigo-500 mb-[20px] mr-6 '>
              <img
                className='p-[8px] border border-indigo-600 rounded-full w-[60px] h-[60px] '
                src={vector3}
                alt='vector'
              />
            </div>
            <div className=''>
              <p className='text-[#7f8c8d] text-[21px] font-semibold my-'>
                <strong className='text-black'>"</strong>Your advise was so
                complete that I<br />
                actually realized how beneficial
                <br />
                this would be to my clients and my
                <br />
                business.<strong className='text-black'>"</strong>
              </p>
              <p className=' text-[19px] font-semibold my-3'>Mark Swann</p>
            </div>
          </div>
        </div>

        <div className='flex items-start justify-center flex-col'>
          <div className='flex items-center justify-center '>
            <p className='text-[23px] font-bold border-l-4 border-indigo-500 my-[30px] pl-4 sm:hidden md:hidden'>
              Get to know the whole us and <br />
              more of our services
            </p>
          </div>

          <div className='flex items-start justify-between  mx-auto w-[80%] flex-col sm:flex sm:mt-10'>
            <div className='sm:flex-row md:flex lg:flex-col md:flex sm:flex lg:flex-col md:justify-between  lg:gap-0 max-[640px]:flex'>
              <div>
                <p className='text-[23px] font-bold'>Services</p>

                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Products
                </p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Solutions
                </p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Assurance
                </p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>FAQ</p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Working at Varal-Singhania
                </p>
              </div>

              <div>
                <p className='text-[23px] font-bold mt-1 lg:mt-12'>Policy</p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  {" "}
                  Privacy Policy
                </p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className='md:flex sm:flex lg:flex-col md:justify-between  md:gap-[12rem] lg:gap-0 sm:gap-[12rem] max-[640px]:flex max-[640px]:gap-24 max-[640px]:mb-8'>
              <div className=''>
                <p className='text-[23px] font-bold mt-4 lg:mt-12'>About</p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  About Us
                </p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  Contact Us
                </p>
              </div>
              <div className=''>
                <p className='text-[23px] font-bold mt-4 lg:mt-12'>Address</p>
                <p className='text-[#7f8c8d] text-[19px] font-semibold'>
                  608 One Lake Plaza, Cluster T,
                  <br />
                  Al Sarayat Street, Jumeirah
                  <br />
                  Lake Towers
                  <br />
                  Dubai
                  <br />
                  United Arab Emirates
                  <br />
                </p>
                <p className='hidden lg:flex text-[#7f8c8d] text-[19px] font-semibold mt-12'>
                  Office Hours: Sunday to
                  <br />
                  Thursday 8:30 AM to 6:30 PM
                  <br />
                  [GMT+4]
                  <br />
                  M: +971 55 794 2016
                  <br />
                  O: +971 4 447 2061
                  <br />
                </p>
              </div>{" "}
            </div>

            <div className='md:flex md:items-center lg:flex-col md:gap-8 sm:flex sm:items-center max-[640px]:flex max-[640px]:gap-8'>
              <div>
                <p className='text-[23px] font-bold lg:mt-8 md:mt-0 '>
                  Subscribe Now
                </p>
                <p className='hidden lg:flex text-[#7f8c8d] text-[19px] font-semibold mb-6'>
                  Subscribe now to receive our
                  <br />
                  Newsletters about amazing
                  <br />
                  opportunities in Dubai
                  <br />
                </p>
                <div className='flex justify-evenly items-center mx-auto my-10 md:my-0'>
                  <p className='text-[#b6c3c4] text-[18px] font-medium bg-slate-100 py-2 lg:px-8 max-[640px]:px-2 max-[640px]:text-[14px] '>
                    Enter email address
                  </p>
                  <img src={Group34} alt='vector5' />
                </div>
              </div>
              <div className='flex justify-start gap-4 items-center mx-auto my-10 md:my-0'>
                <img src={vector5} alt='vector5' />
                <img src={vector6} alt='vector6' />
                <img src={vector7} alt='vector7' />
                <img src={vector8} alt='vector8' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className='text-[20px] text-center text-[#7f8c8d] font-semibold my-16'>
        Varaluae 2021 © All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
