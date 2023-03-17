import React from 'react';

import { footerLinks, socialMedia } from '.';

const MainFooter = () => {
  return (
    <section id="footer" className="md:py-[120px] py-14 bg-secondary2">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="flex justify-between sm:flex-row sm:gap-[120px] gap-8 flex-col-reverse">
          <div className="flex flex-col justify-between items-start md:mt-0 mt-10   sm:gap-0 gap-10">
            <div>
              <h4 className="font-lato font-bold text-[18px] leading-[27px] text-white uppercase mb-4">
                Follow Us
              </h4>
              <div className="flex flew-row md:mt-0 mt-6">
                {socialMedia.map((media, index) => {
                  return (
                    <a
                      key={media.id}
                      href={media.link}
                      className={`text-[25px] text-white
                ${index !== media.length - 1 ? 'mr-6' : 'mr-0'}`}
                    >
                      {media.icon}
                    </a>
                  );
                })}
              </div>
            </div>
            <p className="font-lato font-normal text-[18px] leading-[27px] text-white max-w-[250px]">
              Copyright &copy; {new Date().getFullYear()} Trendy,Inc. All Rights
              Reserved.
            </p>
          </div>
          <div className=" w-full flex flex-row justify-between items-start md:mt-0 mt-10  gap-6 ">
            {footerLinks.map((footerLink) => {
              return (
                <div
                  key={footerLink.title}
                  className=" ss:my-0 my-4 flex flex-col justify-center text-white "
                >
                  <h4 className="font-lato text-[18px] leading-[27px] text-whtie font-bold ">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    {footerLink.links.map((link, index) => {
                      return (
                        <li
                          key={link.name}
                          className={`font-lato font-normal text-[16px] text-white leading-[24px] cursor-pointer hover:text-blueColor ${
                            index !== footerLink.links.length - 1
                              ? 'mb-4'
                              : 'mb-0'
                          }`}
                        >
                          <a href="#">{link.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
