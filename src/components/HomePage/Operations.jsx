import React from 'react';
import { operations } from '..';

const Operations = () => {
  return (
    <section id="operations" className=" md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="mb-10">
          <h2 className="font-lato text-primary font-bold sm:text-[44px] text-[34px] ss:leading-[80px] text-center leading-[40px] mb-2  sm:mb-0 ">
            High-impact Services
          </h2>
          <div className="w-[100px]  h-1 bg-blueColor mx-auto my-0"></div>
        </div>
        <div className="grid md:grid-cols-4 items-start  sm:grid-cols-2 grid-cols-1 md:gap-6  gap-8 ">
          {operations.map((operation) => {
            return (
              <div
                key={operation.id}
                className="flex flex-col gap-5 max-w-[350px]"
              >
                <div
                  className={`w-[50px] h-[50px] rounded-full flex justify-center items-center bg-blueColor1`}
                >
                  <span className="text-[30px] text-secondary ">
                    {' '}
                    {operation.icon}
                  </span>
                </div>
                <h3 className="font-lato text-primary font-semibold text-[20px] leading-[23.4px] ">
                  {operation.title}
                </h3>
                <p className="font-lato text-[16px] leading-[28px]">
                  {operation.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Operations;
