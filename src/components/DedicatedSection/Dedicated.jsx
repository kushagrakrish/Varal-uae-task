import React from "react";
import dungeon from "../../Assets/dungeon.png";
import Vector2 from "../../Assets/Vector-2.png";
import Vector1 from "../../Assets/Vector-1.png";
import Ellipse19 from "../../Assets/Ellipse 19-1.png";
import Ellipse24 from "../../Assets/Ellipse 24.png";

const Items = [
  {
    src: dungeon,
    heading: "UAE Free Zone Company",
    paragraph:
      "Your registration agent, will answer all of your questions and help you to reacha conclusion that meets your objectivesof investing in the UAE.",
  },
  {
    src: Vector2,
    heading: "Dubai Local Companies",
    paragraph:
      "The Dubai LLC formation documentsare actually articles of organization or acertificate of organization. You can get yours today.",
  },
  {
    src: Vector1,
    heading: "Offshore Companies",
    paragraph:
      "You can register an offshore company and open its bank account in Dubai.Your agent will help you along all the process",
  },
];

const Dedicated = () => {
  return (
    <div className='mx-auto'>
      <div>
        <div>
          <img src={Ellipse19} alt='' />{" "}
        </div>
        <p className='text-[30px] font-bold text-center mb-6'>
          <span className='border-b-4 border-[#f39c12]'>Dedicated</span>
          <br />
          to our mission we are
        </p>

        <p className='text-center font-medium text-[#7f8c8d] text-2xl'>
          Our services include Company Formation & Renewals,
          <br />
          Trust & Fiduciary, Tax Residency Setup With Family, Bank
          <br />
          Accounts, Remote Management, Stock Trading
          <br />
          Platforms, Ownership Solutions
        </p>
      </div>
      <section className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-20 px-[15%]'>
        {Items?.map((item, i) => (
          <div className='mx-auto lg:mx-[1px]'>
            <div>
              {console.log(item.src, "Heelo ji")}
              <img
                className='my-5 h-[45px] mx-auto lg:mx-[1px]'
                src={item.src}
              />
            </div>
            <p className='text-[22px] font-semibold my-2'>{item.heading}</p>
            <p className='text-[#7f8c8d] text-[18px] w-[320px]'>
              {item.paragraph}
            </p>
            <p className='my-4 text-[21px] text-[#f39c12]'>Get Started</p>
          </div>
        ))}
      </section>
      <div className='flex justify-start my-0 mx-auto w-[50%] gap-[25rem] items-baseline mt-10'>
        <div className='w-[1.5rem]'>
          <img src={Ellipse19} alt='' />
        </div>

        <div className='ml-7'>
          <img src={Ellipse24} alt='laoding' />
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
