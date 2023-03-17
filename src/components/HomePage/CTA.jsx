import React from 'react';

const CTA = () => {
  return (
    <section className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <h2 className="font-lato text-primary font-bold sm:text-[30px] text-[20px] ss:leading-[80px] leading-[30px]  mb-4">
          Join our newsletter and get 20% off
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
          <p className="font-lato font-normal sm:text-[20px] text-[16px] ss:leading-[30px] text-left text-secondary3 leading-[25px] mb-4">
            Subscribe to our newsletter to enjoy first dibs on our new arrivals,
            special promotions, online exclusives, and trend-focused articles.
          </p>

          <div className="contact-form  md:justify-self-end">
            <div>
              <input
                className="sm:py-[10px] py-[7px] sm:px-[40px] px-[10px]  text-[16px] rounded-l-[9px]  w-[110%]  outline-none font-lato border-solid border-2 border-secondary  "
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <button
                className=" sm:px-[20px] px-[10px]  sm:py-[10px] py-[7px] text-[16px] 
              rounded-r-[9px] outline-none font-lato  bg-blue-gradient  text-white font-medium cursor-pointer border-solid border-2 border-secondary bg-blueColor "
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
