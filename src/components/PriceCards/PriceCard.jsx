import React from "react";
import CheakMark from "../../Assets/Group 35.png";
import "./PriceCard.css";
const PriceCard = () => {
  return (
    <>
      <div className='my-8'>
        <div className='items-center w-[30%] mx-auto my-0'>
          <p className='text-center text-3xl font-bold  text-center'>
            Most
            <span className='border-b-4 border-[#f39c12] mx-4'>
              popular affordable pricing
            </span>
            per jurisdictions are brought to you to kick off your adventure.
          </p>
        </div>
        {/* Pricing Card Mapping */}
        <div className='flex items-center justify-evenly mt-20 '>
          <section className='Pricing-SEC1 p-12 border-2 lg:border-0 border-[#7f8c8d] w-[25rem]'>
            <p className='heading'>AJMAN OFFSHORE</p>
            <p>
              <strong className='text-3xl font-black'>$2,997</strong>{" "}
              <span className='text-[#7f8c8d]'>One Time Payment</span>
            </p>
            <p className='text-xl my-4'>
              Ajman Offshore New Company <br /> formation includes
            </p>

            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Attestation Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Agent</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Office</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Varal Administrative</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Preparing Statutory File</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Liasing with Registration</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Due Diligence Appraisal</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Keeping The Register</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Seal Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Certificate of Good Standing</p>
            </div>
            <button className='button '>Continue</button>
          </section>
          <section className='Pricing-SEC2 p-12 w-[25rem]  '>
            <p className='text-3xl pb-4 font-extrabold'>RAK ICC</p>
            <p>
              <strong className='text-3xl font-black'>$2,997</strong>{" "}
              <span>One Time Payment</span>
            </p>
            <p className='text-xl my-4'>
              Rak Icc New Company <br /> formation includes
            </p>

            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Attestation Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Agent</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Office</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Varal Administrative</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Preparing Statutory File</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Liasing with Registration </p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Due Diligence Appraisal</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Keeping The Register</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Seal Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] mr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Certificate of Good Standing</p>
            </div>
            <button className='button font-black '>Continue</button>
          </section>
          <section className='Pricing-SEC3  w-[25rem] p-12 border-2 lg:border-0 border-[#7f8c8d]'>
            <p className='text-[22px] pb-4 font-extrabold'>
              SHARJAH MEDIA CITY
            </p>
            <p>
              <strong className='text-3xl font-black'>$4,124</strong>{" "}
              <span className='text-[#7f8c8d]'>One Time Payment</span>
            </p>
            <p className='text-xl my-4'>
              Sharjah Media City New Company <br /> formation includes
            </p>

            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Attestation Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Agent</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Registered Office</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Varal Administrative</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Preparing Statutory File</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Liasing with Registration</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Due Diligence Appraisal</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Keeping The Register</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Seal Charges</p>
            </div>
            <div className='flex items-center  py-1'>
              <img
                className='h-[20px] w-[0] pr-1'
                src={CheakMark}
                alt='cheakMark'
              />
              <p>Certificate of Good Standing</p>
            </div>
            <button className='button'>Continue</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default PriceCard;
